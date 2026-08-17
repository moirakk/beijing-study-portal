#!/usr/bin/env python3
"""
Remove template charts appended by add-geo-charts.cjs, add-other-charts.cjs,
and add-remaining-charts.cjs from all note.md files.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_DIR = os.path.join(ROOT, 'content')

# ──────────────────────────────────────────────
# Exact template signatures (from the scripts)
# Each entry is (marker_string, description)
# We'll find the LAST occurrence of the marker in the file
# and strip from that point onward.
# ──────────────────────────────────────────────

# Math template (add-remaining-charts.cjs)
MATH_MARKER = '\n\n### 数学几何与函数分析\n'

# Politics template (add-remaining-charts.cjs)
POLITICS_MARKER = '\n\n### 政治理论与逻辑框架\n'

# Chinese template (add-remaining-charts.cjs)
CHINESE_MARKER = '\n\n### 语文阅读与写作结构\n'

# English template (add-remaining-charts.cjs)
ENGLISH_MARKER = '\n\n### 英语语法树与词汇图\n'

# Physics template (add-other-charts.cjs)
PHYSICS_MARKER = '\n\n### 物理电路示意图\n'

# Biology template (add-other-charts.cjs)
BIOLOGY_MARKER = '\n\n### 生物过程与层级图\n'

# History template (add-other-charts.cjs)
HISTORY_MARKER = '\n\n### 历史时间轴\n'

# Geography templates (add-geo-charts.cjs)
GEO_MARKERS = [
    '\n\n### 地理示意图：地球运动\n',
    '\n\n### 气候类型分布与特征\n',
    '\n\n### 五种基本地形特征对比\n',
    '\n\n### 人口分布影响因素\n',
    '\n\n### 自然资源分类体系\n',
    '\n\n### 陆地与海洋分布比例\n',
    '\n\n### 区域经济发展要素\n',
    '\n\n### 地理要素相互作用示意图\n',
]

# Map subject directory prefix → markers to check
SUBJECT_MARKERS = {
    'math': [MATH_MARKER],
    'politics': [POLITICS_MARKER],
    'chinese': [CHINESE_MARKER],
    'english': [ENGLISH_MARKER],
    'physics': [PHYSICS_MARKER],
    'biology': [BIOLOGY_MARKER],
    'history': [HISTORY_MARKER],
    'geography': GEO_MARKERS,
}

def get_subject(filepath):
    rel = os.path.relpath(filepath, CONTENT_DIR)
    parts = rel.split(os.sep)
    if parts:
        return parts[0]
    return None

def clean_file(filepath, markers):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    changed = False

    for marker in markers:
        idx = content.rfind(marker)
        if idx == -1:
            continue

        # Verify this marker is near the end (within last 3000 chars)
        # to avoid removing legitimate mid-content sections
        if idx < len(content) - 3000:
            # Marker found but not near end - might be legitimate content
            # Do a safety check: is there significant non-template content after it?
            after = content[idx + len(marker):]
            # Count non-whitespace chars after marker
            non_ws_after = len(after.strip())
            if non_ws_after > 200:
                # There's substantial content after - skip this one
                print(f"  SKIP (not at end, {non_ws_after} chars after): {marker.strip()[:40]}")
                continue

        # Strip from the marker position onward
        content = content[:idx].rstrip() + '\n'
        changed = True
        print(f"  REMOVED: {marker.strip()[:50]}")

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    total_files = 0
    cleaned_files = 0
    skipped = 0

    for subject, markers in SUBJECT_MARKERS.items():
        subject_dir = os.path.join(CONTENT_DIR, subject)
        if not os.path.isdir(subject_dir):
            print(f"WARNING: {subject_dir} not found")
            continue

        subject_count = 0
        for dirpath, dirnames, filenames in os.walk(subject_dir):
            for fname in filenames:
                if not fname.endswith('.md'):
                    continue
                filepath = os.path.join(dirpath, fname)
                total_files += 1

                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Quick check: does this file have any marker?
                has_any = any(marker in content for marker in markers)
                if not has_any:
                    continue

                print(f"\n[{subject}] {os.path.relpath(filepath, ROOT)}")
                if clean_file(filepath, markers):
                    cleaned_files += 1
                    subject_count += 1
                else:
                    skipped += 1

        print(f"\n>>> {subject}: cleaned {subject_count} files")

    print(f"\n{'='*60}")
    print(f"Total note.md scanned: {total_files}")
    print(f"Files cleaned:         {cleaned_files}")
    print(f"Files skipped:         {skipped}")

if __name__ == '__main__':
    main()
