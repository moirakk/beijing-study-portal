#!/usr/bin/env python3
"""统计盘点：subjects.json vs content/ 下 md 文件覆盖情况（只输出数字，不输出正文）"""
import json, os
from collections import defaultdict

ROOT = "/Users/a1234/.verdent/verdent-projects/beijing-study-portal"
CONTENT = os.path.join(ROOT, "content")

with open(os.path.join(CONTENT, "subjects.json"), encoding="utf-8") as f:
    data = json.load(f)

subs = data["subjects"] if isinstance(data, dict) and "subjects" in data else data
if isinstance(subs, dict):
    subs = list(subs.values())

rows = []  # (subject, semester, chapter, topic, contentPath)
for su in subs:
    sid = su.get("id", "?")
    for se in su.get("grades", []):
        semid = se.get("id", "?")
        if "7" not in str(semid):
            continue
        for c in se.get("chapters", []):
            for t in c.get("topics", []):
                rows.append((sid, semid, c.get("id", "?"), t.get("id", "?"), t.get("contentPath")))

# ---- 1 ----
chap_set = defaultdict(set)
topic_count = defaultdict(int)
for sid, semid, chid, tpid, _ in rows:
    chap_set[(sid, semid)].add(chid)
    topic_count[(sid, semid)] += 1

print("=" * 72)
print("[1] subjects.json 初一(7a/7b)结构统计")
print(f"{'科目':<10}{'学期':<6}{'章数':>6}{'知识点数':>10}")
for key in sorted(chap_set):
    print(f"{key[0]:<10}{key[1]:<6}{len(chap_set[key]):>6}{topic_count[key]:>10}")
t_ch = sum(len(v) for v in chap_set.values())
t_tp = sum(topic_count.values())
print(f"{'合计':<10}{'':<6}{t_ch:>6}{t_tp:>10}")

# ---- 2 ----
md_files = []
for dirpath, _, files in os.walk(CONTENT):
    for fn in files:
        if fn.endswith(".md"):
            md_files.append(os.path.join(dirpath, fn))

md_by = defaultdict(int)
topic_dirs = defaultdict(set)
for p in md_files:
    rel = os.path.relpath(p, CONTENT).split(os.sep)
    if len(rel) >= 5:
        md_by[(rel[0], rel[1])] += 1
        topic_dirs[(rel[0], rel[1])].add((rel[2], rel[3]))
    else:
        md_by[("(其他)", "/".join(rel[:-1]) or ".")] += 1

print()
print("[2] content/ 实际 md 文件统计（按目录）")
print(f"{'科目目录':<10}{'学期目录':<12}{'md文件数':>8}{'知识点目录数':>14}")
for key in sorted(md_by):
    print(f"{key[0]:<10}{key[1]:<12}{md_by[key]:>8}{len(topic_dirs.get(key, set())):>14}")
print(f"md 文件总数: {len(md_files)}")

# ---- 3 交叉比对（依据 subjects.json 的 contentPath 字段）----
print()
print("[3] 交叉比对：知识点覆盖率（contentPath 已挂接且目录含 md 才算已有内容）")
print(f"{'科目':<10}{'学期':<6}{'知识点':>8}{'已有内容':>10}{'覆盖率':>9}{'缺失':>6}")
cover = defaultdict(lambda: [0, 0])
orphan_dirs = dict(topic_dirs)  # 反向：目录存在但 JSON 未挂接
linked_dirs = set()
for sid, semid, chid, tpid, cp in rows:
    key = (sid, semid)
    cover[key][0] += 1
    ok = False
    if cp:
        d = os.path.join(CONTENT, cp)
        if os.path.isdir(d) and any(f.endswith(".md") for f in os.listdir(d)):
            ok = True
            parts = cp.split("/")
            if len(parts) >= 4:
                linked_dirs.add((parts[0], parts[1], parts[2], parts[3]))
    if ok:
        cover[key][1] += 1

tot_all, have_all = 0, 0
for key in sorted(cover):
    total, have = cover[key]
    tot_all += total; have_all += have
    pct = 100.0 * have / total if total else 0.0
    print(f"{key[0]:<10}{key[1]:<6}{total:>8}{have:>10}{pct:>8.1f}%{total-have:>6}")
pct_all = 100.0 * have_all / tot_all if tot_all else 0.0
print(f"{'合计':<10}{'':<6}{tot_all:>8}{have_all:>10}{pct_all:>8.1f}%{tot_all-have_all:>6}")

# 反向孤儿目录：有 md 但 JSON 未挂接 contentPath
orphans = []
for (sd, sm), tps in topic_dirs.items():
    for (ch, tp) in tps:
        if (sd, sm, ch, tp) not in linked_dirs:
            orphans.append(f"{sd}/{sm}/{ch}/{tp}")
print(f"孤儿知识点目录（有md但JSON未挂接contentPath）: {len(orphans)}")

# ---- 4 ----
print()
print("[4] md 文件行数统计（详实度）")
by_type = defaultdict(list)
all_lines = []
for p in md_files:
    with open(p, encoding="utf-8", errors="replace") as f:
        n = sum(1 for _ in f)
    all_lines.append(n)
    by_type[os.path.basename(p)].append(n)
if all_lines:
    print(f"总行数 {sum(all_lines)}  平均 {sum(all_lines)/len(all_lines):.1f} 行  min {min(all_lines)}  max {max(all_lines)}")
for name in sorted(by_type):
    ls = by_type[name]
    print(f"  {name:<14} 文件数 {len(ls):>4}  平均 {sum(ls)/len(ls):>7.1f} 行  min {min(ls):>4}  max {max(ls):>4}")
print("=" * 72)
