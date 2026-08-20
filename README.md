# dby赶紧学习！

一个面向学生的在线学习笔记网站，涵盖语文、数学、英语、物理、化学、生物、历史、地理、政治等科目。

**访问地址：[https://dbystudy.cn](https://dbystudy.cn)**

## 项目结构

```text
src/        前端应用源码
content/    学科、年级、章节、知识点与 Markdown 内容
scripts/    内容生成、审计、修复、截图等维护脚本
docs/       课程研究与设计文档
public/     GitHub Pages 自定义域名等静态文件
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
