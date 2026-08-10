#!/usr/bin/env python3
"""
为缺少 frontmatter 的 note.md 补充 frontmatter（title + date）。

title 取自 subjects.json 中按 contentPath 匹配的 topic.title；
date 按年级分配（与同年级已有 frontmatter 的日期风格一致）。
"""
import glob
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_DIR = os.path.join(ROOT, "content")
SUBJECTS_JSON = os.path.join(CONTENT_DIR, "subjects.json")

# 年级 -> 日期（依据 git 提交历史与同年级已有 frontmatter 风格）
GRADE_DATE = {
    "grade7-1": "2026-08-05",
    "grade7-2": "2026-08-05",
    "grade8-1": "2026-08-06",
    "grade8-2": "2026-08-06",
    "grade9-1": "2026-08-06",
}


def load_topic_titles():
    """contentPath -> topic.title"""
    with open(SUBJECTS_JSON, encoding="utf-8") as f:
        data = json.load(f)
    mapping = {}
    for s in data["subjects"]:
        for g in s["grades"]:
            for c in g["chapters"]:
                for t in c["topics"]:
                    if t.get("contentPath"):
                        mapping[t["contentPath"]] = t["title"]
    return mapping


def main():
    title_map = load_topic_titles()
    files = sorted(glob.glob(os.path.join(CONTENT_DIR, "**", "note.md"), recursive=True))
    added = 0
    normalized = 0
    for f in files:
        text = open(f, encoding="utf-8").read()
        rel = os.path.relpath(f, CONTENT_DIR)
        content_path = os.path.dirname(rel).replace(os.sep, "/")
        title = title_map.get(content_path)
        if not title:
            print(f"WARN: 未找到 topic.title for {content_path}")
            continue
        grade = [p for p in content_path.split("/") if p.startswith("grade")][0]
        date = GRADE_DATE.get(grade, "2026-08-06")

        if not text.startswith("---"):
            fm = f"---\ntitle: {title}\ndate: {date}\n---\n\n"
            with open(f, "w", encoding="utf-8") as fh:
                fh.write(fm + text)
            added += 1
            continue

        # 已有 frontmatter：规范化 title（与 subjects.json 一致），缺失 date 则补
        m = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.S)
        if not m:
            continue
        fm_text = m.group(1)
        body = text[m.end():]
        new_lines = []
        changed = False
        has_date = False
        for line in fm_text.splitlines():
            if line.startswith("title:"):
                new_lines.append(f"title: {title}")
                if line.strip() != f"title: {title}":
                    changed = True
            elif line.startswith("date:"):
                has_date = True
                new_lines.append(line)
            else:
                new_lines.append(line)
        if not has_date:
            new_lines.append(f"date: {date}")
            changed = True
        if changed:
            new_fm = "---\n" + "\n".join(new_lines) + "\n---\n\n"
            with open(f, "w", encoding="utf-8") as fh:
                fh.write(new_fm + body)
            normalized += 1
    print(f"补充 frontmatter：{added} 个文件；规范化 title/date：{normalized} 个文件")


if __name__ == "__main__":
    main()
