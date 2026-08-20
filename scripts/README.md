# Scripts

这些脚本用于维护内容库和做站点检查。默认从项目根目录运行。

## content/

内容结构生成与目录迁移工具。

- `parse-toc.py`：解析 `docs/textbook-research.md`，生成 `docs/toc-digest.json`。
- `build-subjects.py`：根据 `docs/toc-digest.json` 和现有 `content/subjects.json` 生成新版知识树。
- `gen-subjects.mjs`：早期的 `content/subjects.json` 生成脚本，保留作历史参考。
- `rename-content-slugs.py`：把内容目录迁移为 `chN/tN` 结构，并同步 `contentPath`。

## maintenance/

内容修复、补齐与派生数据工具。

- `fix_frontmatter.py`：为缺少 frontmatter 的 `note.md` 补充标题和日期。
- `fix_links.py`：修复 Markdown wikilink 断链。
- `generate-knowledge-links.py`：生成 `content/knowledge-links.json`。
- `cleanup-template-charts.py`：清理旧模板图表内容。
- `scaffold_*.py`：按年级/学期补齐内容骨架。

## qa/

内容质量检查工具。

- `audit_content.py`：检查全站内容完整度，输出 `docs/audit-report.md`。
- `qa_scan_7a.py`：初一上内容专项检查。

## visual/

本地页面截图与体验走查工具。运行前需要先启动预览服务。

- `shots.mjs`：生成当前版本视觉检查截图。
- `shots-draft.mjs`：生成草稿态页面截图。
- `journey.mjs`：从学生视角走查主要路径并截图。

如果某个脚本只用于一次性迁移，完成后应删除，避免脚本目录再次堆积临时补丁。
