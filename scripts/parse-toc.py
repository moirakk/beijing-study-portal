#!/usr/bin/env python3
"""脚本A：解析 docs/textbook-research.md → docs/toc-digest.json。只打印计数，不打印标题文本。"""
import json
import re

SRC = 'docs/textbook-research.md'
OUT = 'docs/toc-digest.json'

lines = open(SRC, encoding='utf-8').read().splitlines()

SUBJ_MAP = [
    ('chinese', r'语文'),
    ('math', r'数学'),
    ('english', r'英语'),
    ('history', r'历史'),
    ('politics', r'道德与法治|政治'),
    ('biology', r'生物'),
    ('geography', r'地理'),
]


def strip_md(s):
    return s.replace('**', '').strip()


def clean_title(s):
    s = strip_md(s)
    s = re.sub(r'\s*【[^】]*】\s*', '', s)
    return s.strip()


def expand_piece(piece):
    """一个节条目：若尾部为「（a／b／c）」形式的子点列表，展开为多个知识点标题。"""
    piece = clean_title(piece)
    m = re.match(r'^(.*?)（([^（）]*)）\s*$', piece)
    if m and '／' in m.group(2):
        subs = [clean_title(x) for x in m.group(2).split('／') if clean_title(x)]
        if len(subs) >= 2:
            return subs
    return [piece] if piece else []


subjects = {}
cur_subj = None
cur_sem = None

for ln in lines:
    s = ln.strip()
    m3 = re.match(r'^###\s+(.*)$', s)
    m4 = re.match(r'^####\s+(.*)$', s)
    if m3:
        cur_subj = None
        cur_sem = None
        t = m3.group(1)
        for sid, pat in SUBJ_MAP:
            if re.search(pat, t):
                cur_subj = sid
                break
        if cur_subj:
            subjects.setdefault(cur_subj, {'grades': {}})
        continue
    if m4 and cur_subj:
        t = m4.group(1)
        if re.search(r'上册|上学期', t):
            cur_sem = '7a'
        elif re.search(r'下册|下学期', t):
            cur_sem = '7b'
        else:
            cur_sem = None
        if cur_sem:
            subjects[cur_subj]['grades'][cur_sem] = []
        continue
    if re.match(r'^##\s', s):
        cur_subj = None
        cur_sem = None
        continue
    mb = re.match(r'^(\s*)[-*]\s+(.*)$', ln)
    if not (mb and cur_subj and cur_sem):
        continue
    indent = len(mb.group(1))
    raw = mb.group(2).rstrip()
    chapters = subjects[cur_subj]['grades'][cur_sem]
    txt = strip_md(raw)

    if cur_subj == 'biology':
        # 生物：单元(ind=0) 下的「第X章 …：节｜节」(ind=2) 才是章
        if indent == 0:
            continue  # 单元行跳过（章号在教材中按单元内编号，直接用章行）
        parts = re.split(r'[：:]', txt, 1)
        head = clean_title(parts[0])
        secs = []
        if len(parts) > 1 and parts[1].strip():
            for piece in parts[1].split('｜'):
                secs.extend(expand_piece(piece))
        if re.search(r'第[一二三四五六七八九十]+章', head):
            chapters.append({'title': head, 'sections': secs})
        else:
            # 非章条目（如综合实践）：并入前一章的节
            if chapters:
                chapters[-1]['sections'].extend(expand_piece(txt))
        continue

    if indent == 0:
        parts = re.split(r'[：:]', txt, 1)
        head = clean_title(parts[0])
        secs = []
        if len(parts) > 1 and parts[1].strip():
            for piece in parts[1].split('｜'):
                secs.extend(expand_piece(piece))
        chapters.append({'title': head, 'sections': secs})
    else:
        if not chapters:
            continue
        # 缩进条目：可能是「前缀：a｜b」课时列表，或单个节/课
        parts = re.split(r'[：:]', txt, 1)
        if len(parts) > 1 and len(parts[0]) <= 8 and '｜' in parts[1]:
            body = parts[1]
        else:
            body = txt
        if '｜' in body:
            for piece in body.split('｜'):
                chapters[-1]['sections'].extend(expand_piece(piece))
        else:
            chapters[-1]['sections'].extend(expand_piece(txt))

with open(OUT, 'w', encoding='utf-8') as f:
    json.dump({'subjects': subjects}, f, ensure_ascii=False, indent=2)

print('=== toc-digest 统计 ===')
total_ch = total_sec = 0
for sid, sub in subjects.items():
    for gid in ('7a', '7b'):
        chs = sub['grades'].get(gid, [])
        per = [len(c['sections']) for c in chs]
        total_ch += len(chs)
        total_sec += sum(per)
        print(f'{sid} {gid}: chapters={len(chs)} sections={sum(per)} per-ch={per}')
print(f'TOTAL chapters={total_ch} sections={total_sec}')
print('OK ->', OUT)
