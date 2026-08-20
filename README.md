# dby赶紧学习！

一个给孩子长期使用的学习门户。当前阶段优先服务七年级学习，后续年级内容作为知识库保留入口，但不在首页强行展开。

**访问地址：[https://dbystudy.cn](https://dbystudy.cn)**

## 当前整理原则

- 首页先呈现当前学习内容：七年级上、七年级下。
- 后续学期单独放在完整学期导航里，可以直接进入，但不打扰日常学习。
- 学期页默认不展开全部科目，先选择科目，再看章节与知识点。
- 搜索默认聚焦当前年级，需要时再切换到初中或全部内容。
- 页面文案尽量少，只保留能帮助孩子行动和定位的信息。

## 项目结构

```text
src/                前端应用源码
content/            学科、年级、章节、知识点与 Markdown 内容
docs/               课程研究、设计记录与目录摘要
scripts/content/    内容结构生成与目录迁移工具
scripts/maintenance/内容修复、补齐与派生数据工具
scripts/qa/         内容质量检查工具
scripts/visual/     本地截图与体验走查工具
public/             GitHub Pages 自定义域名等静态文件
```

## 技术栈

- React + TypeScript + Vite
- Tailwind CSS + Framer Motion
- react-markdown + KaTeX + Mermaid

## 本地开发

```bash
npm install
npm run dev
```

常用检查：

```bash
npm run typecheck
npm run build
```

## 构建部署

```bash
npm run build
```

通过 GitHub Actions 自动部署至 GitHub Pages，自定义域名 `dbystudy.cn`。

## 维护说明

- 新增或调整知识点内容时，优先修改 `content/` 与 `content/subjects.json`。
- 内容结构生成、关联关系生成、审计统计等工具放在 `scripts/`，具体用途见 `scripts/README.md`。
- 课程研究、目录摘要和设计记录等长期参考资料放在 `docs/`。
- 根目录只保留运行、构建、部署所需的核心文件。

## Obsidian 接入方向

`content/` 可以作为后续 Obsidian 知识库的基础。建议保持一个来源规则：

- 课本目录、知识点层级、站点导航继续由 `content/subjects.json` 统一管理。
- 每个知识点的正文、笔记、例题和复习提示放在对应 Markdown 文件中。
- 站点负责展示、搜索、错题与复习；Obsidian 负责日常写作、补充和沉淀。
