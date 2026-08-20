# Scripts

这些脚本用于维护内容库和做站点检查。默认从项目根目录运行。

## 内容结构

- `gen-subjects.mjs`：生成或重建 `content/subjects.json` 的早期脚本。
- `build-subjects.py`：根据 `docs/toc-digest.json` 和旧版 `subjects.json` 生成新版知识树。
- `parse-toc.py`：解析课程目录资料，生成结构化目录摘要。
- `rename-content-slugs.py`：整理内容目录 slug。

## 内容生成与修复

- `scaffold_8b.py`、`scaffold_9a.py`、`scaffold_9b.py`、`scaffold_10a.py`、`scaffold_10b.py`、`scaffold_11a.py`、`scaffold_11b.py`、`scaffold_12a.py`、`scaffold_12b.py`：按年级/学期补齐内容骨架。
- `recover_chinese_and_scaffold.py`：恢复语文内容并补齐骨架。
- `fix_frontmatter.py`：修复 Markdown frontmatter。
- `fix_links.py`：修复内容中的链接。
- `cleanup-template-charts.py`：清理模板化图表内容。
- `add-geo-charts.cjs`、`add-other-charts.cjs`、`add-remaining-charts.cjs`、`add_english_charts.cjs`：为部分学科补充图表内容。

## 审计与质量检查

- `audit_content.py`：检查内容完整度。
- `inventory_stats.py`：统计内容库存。
- `qa_scan_7a.py`：初一上内容专项检查。
- `generate-knowledge-links.py`：生成 `content/knowledge-links.json`。

## 截图与体验走查

- `shots.mjs`：对当前站点生成视觉检查截图。
- `shots-draft.mjs`：针对草稿态页面生成截图。
- `journey.mjs`：从学生视角走查主要路径。

如果某个脚本只用于一次性迁移，完成后应删除，避免根目录或脚本目录再次堆积临时补丁。
