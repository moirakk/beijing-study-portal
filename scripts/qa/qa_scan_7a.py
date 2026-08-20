#!/usr/bin/env python3
"""7a 内容质检扫描：content/**/grade7-1/**/note.md（跳过 biology）"""
import json, re, sys
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).resolve().parent.parent.parent
CONTENT = ROOT / "content"

# ---------- 收集知识点标题集合 ----------
subjects = json.loads((CONTENT / "subjects.json").read_text(encoding="utf-8"))
all_titles = set()
for subj in subjects["subjects"]:
    for grade in subj.get("grades", []):
        for ch in grade.get("chapters", []):
            for t in ch.get("topics", []):
                all_titles.add(t["title"])

# ---------- 收集文件 ----------
files = sorted(CONTENT.glob("*/grade7-1/**/note.md"))
files = [f for f in files if "biology" not in f.parts]

issues = defaultdict(list)  # type -> list of (path, lineno, detail)

CJK = r"\u4e00-\u9fff"
# 合理的英文/单位/术语白名单（中文夹英场景下允许）
LATIN_WHITELIST = {
    "km", "m", "cm", "mm", "dm", "kg", "g", "mg", "t", "L", "mL", "ml", "h", "min", "s",
    "a", "b", "c", "x", "y", "z", "n", "A", "B", "C", "N", "S", "E", "W", "P", "Q", "O",
    "GIS", "GPS", "GNSS", "BDS", "AI", "N", "S", "vs", "VS",
    "am", "pm", "OK",
}

def is_english_subject(path: Path) -> bool:
    return "english" in path.parts

def strip_code(lines):
    """返回 (lineno, text)，剔除围栏代码块与 $$...$$ 数学块内的行；行内代码替换为空。"""
    out, in_fence, in_math = [], False, False
    for i, ln in enumerate(lines, 1):
        if re.match(r"^\s*```", ln):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        if re.match(r"^\s*\$\$\s*$", ln):
            if not in_math:
                # 数学块折叠为占位行，避免"空分区"误报
                out.append((i, "（数学公式块）"))
            in_math = not in_math
            continue
        if in_math:
            continue
        out.append((i, re.sub(r"`[^`]*`", "", ln)))
    return out

for f in files:
    rel = str(f.relative_to(ROOT))
    text = f.read_text(encoding="utf-8")
    lines = text.split("\n")
    clean = strip_code(lines)

    # 5. frontmatter
    if lines and lines[0].strip() == "---":
        issues["frontmatter"].append((rel, 1, "文件以 --- 开头"))

    # 7. 标题结构
    h1s = [i for i, ln in clean if re.match(r"^# [^#]", ln)]
    if not h1s:
        issues["heading"].append((rel, 1, "无一级标题"))
    elif len(h1s) > 1:
        issues["heading"].append((rel, h1s[1], f"多个一级标题（共{len(h1s)}个，行:{h1s}）"))

    # 4. 占位残留
    for i, ln in clean:
        for pat in ["待补充", "待完善", "TODO", "TBD", "FIXME", "占位", "此处省略", "此处填写", "此处补充", "内容待"]:
            if pat in ln:
                issues["placeholder"].append((rel, i, f"'{pat}': {ln.strip()[:60]}"))

    # 1. 中英混排（跳过英语学科）
    if not is_english_subject(f):
        for i, ln in clean:
            # 跳过表格中的读音列等？逐个匹配：中文紧邻拉丁词紧邻中文
            for mm in re.finditer(rf"(?<=[{CJK}])\s*([A-Za-z][A-Za-z'’\- ]*[A-Za-z]|[A-Za-z])\s*(?=[{CJK}])", ln):
                w = mm.group(1).strip()
                if w in LATIN_WHITELIST:
                    continue
                # 语文等文科课文中作为引文出现的英文单词（如《再塑生命的人》的 mug/water）
                if "chinese" in f.parts and re.fullmatch(r"[a-z]+", w):
                    continue
                # 拼音（含声调字母的行会带 unicode，不匹配；纯字母拼音难分辨，先报出人工判断）
                issues["mixed"].append((rel, i, f"'{w}': {ln.strip()[:80]}"))

    # 2. 表格语法
    idx = 0
    n = len(clean)
    while idx < n:
        i, ln = clean[idx]
        if ln.strip().startswith("|") and "|" in ln.strip()[1:]:
            # 表格块开始
            block = []
            while idx < n and clean[idx][1].strip().startswith("|"):
                block.append(clean[idx])
                idx += 1
            def ncols(s):
                s = s.strip()
                if s.startswith("|"): s = s[1:]
                if s.endswith("|"): s = s[:-1]
                # 忽略转义 \|
                return len(re.split(r"(?<!\\)\|", s))
            header = block[0]
            if len(block) < 2 or not re.match(r"^\s*\|?[\s:\-|]+\|?\s*$", block[1][1]) or "-" not in block[1][1]:
                issues["table"].append((rel, header[0], "缺少分隔行"))
                continue
            hc = ncols(header[1])
            sc = ncols(block[1][1])
            if hc != sc:
                issues["table"].append((rel, block[1][0], f"分隔行列数{sc}≠表头{hc}"))
            for li, lt in block[2:]:
                c = ncols(lt)
                if c != hc:
                    issues["table"].append((rel, li, f"行列数{c}≠表头{hc}"))
        else:
            idx += 1

    # 3. 空分区
    for j, (i, ln) in enumerate(clean):
        mh = re.match(r"^(#{2,3}) ", ln)
        if not mh:
            continue
        level = len(mh.group(1))
        has_content = False
        for k in range(j + 1, len(clean)):
            _, nxt = clean[k]
            mh2 = re.match(r"^(#{1,6}) ", nxt)
            if mh2 and len(mh2.group(1)) <= level:
                break
            if nxt.strip():
                has_content = True
                break
        if not has_content:
            issues["empty_section"].append((rel, i, ln.strip()[:50]))

    # 6. 双向链接死链
    for i, ln in clean:
        for mm in re.finditer(r"\[\[([^\[\]|]+)(?:\|[^\[\]]*)?\]\]", ln):
            target = mm.group(1).strip()
            if target not in all_titles:
                issues["deadlink"].append((rel, i, f"[[{target}]]"))

    # 8. 重复段落
    paras = defaultdict(list)
    cur, start = [], None
    for i, ln in clean:
        if ln.strip():
            if start is None:
                start = i
            cur.append(ln.strip())
        else:
            if cur:
                p = "\n".join(cur)
                if len(p) >= 40 and not p.startswith("|"):
                    paras[p].append(start)
            cur, start = [], None
    if cur:
        p = "\n".join(cur)
        if len(p) >= 40 and not p.startswith("|"):
            paras[p].append(start)
    for p, locs in paras.items():
        if len(locs) > 1:
            issues["duplicate"].append((rel, locs[0], f"重复{len(locs)}次(行{locs}): {p[:50]}"))

# ---------- 输出 ----------
NAMES = {
    "mixed": "1.中英混排", "table": "2.表格语法错乱", "empty_section": "3.空分区",
    "placeholder": "4.占位残留", "frontmatter": "5.frontmatter残留",
    "deadlink": "6.双向链接死链", "heading": "7.标题结构异常", "duplicate": "8.重复段落",
}
print(f"扫描文件数: {len(files)}")
total = 0
for key in ["mixed", "table", "empty_section", "placeholder", "frontmatter", "deadlink", "heading", "duplicate"]:
    items = issues[key]
    total += len(items)
    print(f"\n=== {NAMES[key]}: {len(items)} ===")
    for rel, lineno, detail in items:
        print(f"  {rel}:{lineno}  {detail}")
print(f"\n总计: {total}")
sys.exit(0 if total == 0 else 1)
