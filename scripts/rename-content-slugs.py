#!/usr/bin/env python3
"""content/ 目录重构：章目录 → ch1..chN，知识点目录 → t1..tN（按 subjects.json 顺序）。

用 git mv 迁移目录，同步更新 subjects.json 中所有 contentPath。
输出只打印数量统计，不打印任何目录名或路径。
"""
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")
SUBJECTS_JSON = os.path.join(CONTENT, "subjects.json")

MATERIAL_FILES = {
    "note": "note.md",
    "formula": "formulas.md",
    "example": "examples.md",
    "exam": "exams.md",
    "mindmap": "mindmap.md",
}


def git_mv(src: str, dst: str) -> None:
    subprocess.run(["git", "mv", src, dst], cwd=ROOT, check=True,
                   capture_output=True)


def main() -> int:
    with open(SUBJECTS_JSON, encoding="utf-8") as f:
        data = json.load(f)

    # 迁移前基线
    before_paths = []
    for s in data["subjects"]:
        for g in s["grades"]:
            for c in g["chapters"]:
                for t in c["topics"]:
                    before_paths.append(t["contentPath"])
    before_count = len(before_paths)

    moved_dirs = 0
    updated_paths = 0

    for s in data["subjects"]:
        for g in s["grades"]:
            for ci, c in enumerate(g["chapters"], start=1):
                new_ch = f"ch{ci}"
                # 章目录（由该章第一个 topic 的 contentPath 推出）
                old_ch_rel = None
                for t in c["topics"]:
                    parts = t["contentPath"].split("/")
                    if old_ch_rel is None:
                        old_ch_rel = "/".join(parts[:3])
                    elif old_ch_rel != "/".join(parts[:3]):
                        print("ERROR: chapter dir inconsistent")
                        return 1
                if old_ch_rel is None:
                    continue
                grade_rel = "/".join(old_ch_rel.split("/")[:2])
                new_ch_rel = f"{grade_rel}/{new_ch}"
                if old_ch_rel != new_ch_rel:
                    git_mv(os.path.join(CONTENT, *old_ch_rel.split("/")),
                           os.path.join(CONTENT, *new_ch_rel.split("/")))
                    moved_dirs += 1
                for ti, t in enumerate(c["topics"], start=1):
                    old_topic = t["contentPath"].split("/")[3]
                    new_topic = f"t{ti}"
                    if old_topic != new_topic:
                        git_mv(os.path.join(CONTENT, *new_ch_rel.split("/"), old_topic),
                               os.path.join(CONTENT, *new_ch_rel.split("/"), new_topic))
                        moved_dirs += 1
                    new_cp = f"{new_ch_rel}/{new_topic}"
                    if t["contentPath"] != new_cp:
                        t["contentPath"] = new_cp
                        updated_paths += 1

    with open(SUBJECTS_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    # ---- 校验 ----
    ok = True
    with open(SUBJECTS_JSON, encoding="utf-8") as f:
        data2 = json.load(f)  # JSON 合法性

    after_paths = []
    missing_files = 0
    for s in data2["subjects"]:
        for g in s["grades"]:
            for c in g["chapters"]:
                for t in c["topics"]:
                    cp = t["contentPath"]
                    after_paths.append(cp)
                    for m in t["materials"]:
                        fp = os.path.join(CONTENT, *cp.split("/"),
                                          MATERIAL_FILES[m])
                        if not os.path.isfile(fp):
                            missing_files += 1

    dup = len(after_paths) - len(set(after_paths))
    if len(after_paths) != before_count or dup or missing_files:
        ok = False

    print(f"moved dirs: {moved_dirs}")
    print(f"updated contentPath: {updated_paths}")
    print(f"topics before: {before_count}, after: {len(after_paths)}")
    print(f"duplicates: {dup}, missing files: {missing_files}")
    print(f"verify: {'PASS' if ok else 'FAIL'}")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
