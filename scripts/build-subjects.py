#!/usr/bin/env python3
"""脚本B：toc-digest.json + 旧 subjects.json → 新 subjects.json。只打印统计与校验，不打印标题文本。"""
import json
import os
import re
import sys

sys.path.insert(0, os.path.expanduser('~/Library/Python/3.9/lib/python/site-packages'))
from pypinyin import lazy_pinyin

DIGEST = 'docs/toc-digest.json'
SUBJECTS = 'content/subjects.json'

digest = json.load(open(DIGEST, encoding='utf-8'))['subjects']
data = json.load(open(SUBJECTS, encoding='utf-8'))

# ---------- slug ----------

def slugify(title, maxlen=28):
    t = re.sub(r'第[一二三四五六七八九十]+(章|单元|课)', '', title)
    t = re.sub(r'[《》【】（）()「」“”"\'.,，。：:；;！!？?·——\-—\s／/｜|＋+]+', ' ', t).strip()
    if not t:
        t = title
    if re.fullmatch(r'[A-Za-z0-9 ]+', t):
        s = '-'.join(t.lower().split())
    else:
        s = ''.join(lazy_pinyin(t.replace(' ', '')))
        s = re.sub(r'[^a-z0-9]', '', s.lower())
    return s[:maxlen] or 'item'

CN_NUM = {'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9,'十':10,'十一':11,'十二':12}

def title_ordinal(title):
    m = re.search(r'第([一二三四五六七八九十]+)(章|单元)', title)
    return CN_NUM.get(m.group(1)) if m else None

# ---------- 主标题短化（用于补齐派生知识点） ----------

def short_chapter(title):
    t = re.sub(r'^第[一二三四五六七八九十]+(章|单元)\s*', '', title).strip()
    return t or title

# ---------- 构建 topics ----------

def mk_topic(tid, title):
    return {
        'id': tid, 'title': title, 'difficulty': 2, 'importance': '中考高频',
        'tags': ['#基础'], 'prerequisites': [], 'related': [], 'materials': [],
    }

def build_topics(subj, gid, chnum, sections, ch_title, used_ids):
    secs = list(sections)
    # 3-8 约束
    if len(secs) > 8:
        merged = '／'.join(secs[7:])
        secs = secs[:7] + [merged[:60]]
    pad_i = 0
    pads = ['重点梳理', '综合练习', '易错点小结']
    while len(secs) < 3:
        secs.append(f'{short_chapter(ch_title)}·{pads[pad_i % 3]}')
        pad_i += 1
    topics = []
    for sec in secs:
        base = f'{subj}-{gid}-{chnum}-{slugify(sec)}'
        tid = base
        n = 2
        while tid in used_ids:
            tid = f'{base}-{n}'
            n += 1
        used_ids.add(tid)
        topics.append(mk_topic(tid, sec))
    return topics

# ---------- 旧数学知识点保留映射 ----------
# 磁盘实际目录（叶目录名固定）：
#   content/math/grade7-1/chapter1/rational-numbers
#   content/math/grade7-1/chapter2/rational-add-subtract
#   content/math/grade7-1/chapter2/rational-multiply-divide
# 旧 id → (节标题匹配正则, 叶目录名, 现磁盘章目录)。匹配顺序：先运算再概念，避免误配。
MATH_KEEP = [
    ('math-7a-1-3', r'加.*减|加减', 'rational-add-subtract', 'chapter2'),
    ('math-7a-1-4', r'乘.*除|乘除', 'rational-multiply-divide', 'chapter2'),
    ('math-7a-1-2', r'有理数', 'rational-numbers', 'chapter1'),
]

old_math_topics = {}
for s in data['subjects']:
    if s['id'] == 'math':
        for g in s['grades']:
            for c in g['chapters']:
                for t in c['topics']:
                    old_math_topics[t['id']] = t

TEXTBOOK_OVERRIDE = {'english': '外研版', 'geography': '中图版（北京版）'}

used_ids = set()
stats = []
keep_report = {}

for s in data['subjects']:
    sid = s['id']
    if sid == 'biology':
        s['name'] = '生物学'
    if sid not in digest:
        continue
    for g in s['grades']:
        gid = g['id']
        if gid not in ('7a', '7b'):
            continue
        chapters_src = digest[sid]['grades'].get(gid, [])
        if not chapters_src:
            continue
        if sid in TEXTBOOK_OVERRIDE:
            g['textbook'] = TEXTBOOK_OVERRIDE[sid]
        new_chapters = []
        ordinals = [title_ordinal(c['title']) for c in chapters_src]
        use_ordinal = all(o is not None for o in ordinals) and len(set(ordinals)) == len(ordinals)
        for i, ch in enumerate(chapters_src):
            chnum = ordinals[i] if use_ordinal else i + 1
            ch_slug = slugify(ch['title'])
            ch_id = f'ch{chnum}-{ch_slug}'
            topics = build_topics(sid, gid, chnum, ch['sections'], ch['title'], used_ids)
            new_chapters.append({'id': ch_id, 'title': ch['title'], 'topics': topics})
        # 数学 7a：把保留的旧知识点替换到新结构中标题匹配的节位置
        if sid == 'math' and gid == '7a':
            kept_ids = {x[0] for x in MATH_KEEP}
            git_mvs = []
            for old_id, pat, leaf, cur_chdir in MATH_KEEP:
                old_t = old_math_topics.get(old_id)
                placed = None
                if old_t:
                    for ci, ch in enumerate(new_chapters):
                        for j, t in enumerate(ch['topics']):
                            if t['id'] in kept_ids or 'contentPath' in t:
                                continue
                            if re.search(pat, t['title']):
                                placed = (ci, j)
                                break
                        if placed:
                            break
                    if placed is None and new_chapters:
                        # 兜底：放进第一章末尾
                        new_chapters[0]['topics'].append(None)
                        placed = (0, len(new_chapters[0]['topics']) - 1)
                    if placed is not None:
                        ci, j = placed
                        new_chnum = title_ordinal(new_chapters[ci]['title']) or (ci + 1)
                        new_chdir = f'chapter{new_chnum}'
                        new_cpath = f'math/grade7-1/{new_chdir}/{leaf}'
                        kept = dict(old_t)
                        kept['contentPath'] = new_cpath
                        new_chapters[ci]['topics'][j] = kept
                        used_ids.add(old_id)
                        if new_chdir != cur_chdir:
                            git_mvs.append((f'content/math/grade7-1/{cur_chdir}/{leaf}',
                                            f'content/math/grade7-1/{new_chdir}/{leaf}'))
                keep_report[old_id] = placed is not None
            # 直接执行 git mv
            import subprocess
            for a, b in git_mvs:
                os.makedirs(os.path.dirname(b), exist_ok=True)
                subprocess.run(['git', 'mv', a, b], check=True)
            print(f'git-mv executed: {len(git_mvs)}')
        g['chapters'] = new_chapters

# 清理悬空 prerequisites/related
all_ids = set()
for s in data['subjects']:
    for g in s['grades']:
        for c in g['chapters']:
            for t in c['topics']:
                all_ids.add(t['id'])
dropped_refs = 0
for s in data['subjects']:
    for g in s['grades']:
        for c in g['chapters']:
            for t in c['topics']:
                for key in ('prerequisites', 'related'):
                    before = len(t.get(key, []))
                    t[key] = [x for x in t.get(key, []) if x in all_ids]
                    dropped_refs += before - len(t[key])

# contentPath 与磁盘校验
cp_ok = True
for s in data['subjects']:
    for g in s['grades']:
        for c in g['chapters']:
            for t in c['topics']:
                cp = t.get('contentPath')
                if cp and not os.path.isdir(os.path.join('content', cp)):
                    cp_ok = False
                    print('MISSING DIR:', cp)

# 字段齐全校验
REQ = {'id', 'title', 'difficulty', 'importance', 'tags', 'prerequisites', 'related', 'materials'}
fields_ok = True
dup = len(all_ids) != sum(len(c['topics']) for s in data['subjects'] for g in s['grades'] for c in g['chapters'])
for s in data['subjects']:
    for g in s['grades']:
        for c in g['chapters']:
            for t in c['topics']:
                if not REQ.issubset(t.keys()):
                    fields_ok = False

with open(SUBJECTS, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write('\n')

print('=== subjects.json 统计（7a/7b） ===')
for s in data['subjects']:
    for g in s['grades']:
        if g['id'] in ('7a', '7b') and g['chapters']:
            per = [len(c['topics']) for c in g['chapters']]
            print(f"{s['id']} {g['id']}: chapters={len(g['chapters'])} topics={sum(per)} per-ch={per}")
print('=== 校验 ===')
print('old-id keep:', keep_report)
print('all old ids kept:', all(keep_report.get(k[0]) for k in MATH_KEEP))
print('topic ids unique:', not dup)
print('required fields ok:', fields_ok)
print('contentPath dirs ok:', cp_ok)
print('dangling refs dropped:', dropped_refs)
print('per-chapter 3-8 ok:', all(3 <= len(c['topics']) <= 8 for s in data['subjects'] for g in s['grades'] if g['id'] in ('7a','7b') for c in g['chapters']))
