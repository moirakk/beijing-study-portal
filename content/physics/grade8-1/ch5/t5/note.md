---
title: 跨学科实践：制作望远镜
date: 2026-08-06
---

# 跨学科实践：制作望远镜

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 望远镜 | 观察远处物体的光学仪器 | 由物镜和目镜组成 |
| 物镜 | 靠近被观测物体的透镜 | 成倒立缩小实像 |
| 目镜 | 靠近眼睛的透镜 | 把实像放大 |
| 开普勒望远镜 | 物镜和目镜都是凸透镜 | 倒立像 |

## 知识梳理

开普勒望远镜由两组凸透镜组成。物镜焦距较长，使远处物体成倒立、缩小的实像；目镜焦距较短，把物镜成的像作为物体，成正立、放大的虚像。最终看到的像相对于物体是倒立的。

制作简易望远镜时，要选择合适焦距的凸透镜，调整两透镜间距约为两焦距之和，通过移动镜筒使像清晰。

## 公式汇总

望远镜镜筒长度近似：

$$
L\approx f_{\text{物}}+f_{\text{目}}
$$

<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="220" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">开普勒望远镜光路示意图</text>
  <defs>
    <marker id="taarr" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto">
      <path d="M0,0 L7,3 L0,6 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <!-- 主光轴 -->
  <line x1="20" y1="115" x2="460" y2="115" stroke="#333" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- 远处物体（极左）-->
  <line x1="22" y1="80" x2="22" y2="115" stroke="#f4a500" stroke-width="3"/>
  <ellipse cx="22" cy="77" rx="5" ry="4" fill="#f4a500"/>
  <text x="22" y="145" text-anchor="middle" fill="#f4a500" font-size="9">远处物体</text>
  <!-- 物镜（长焦距，左边） -->
  <path d="M130,65 Q150,115 130,165" fill="none" stroke="#1a6faf" stroke-width="3"/>
  <path d="M160,65 Q140,115 160,165" fill="none" stroke="#1a6faf" stroke-width="3"/>
  <text x="145" y="182" text-anchor="middle" fill="#1a6faf" font-size="10">物镜（长焦距f₁）</text>
  <!-- 目镜（短焦距，右边） -->
  <path d="M330,75 Q348,115 330,155" fill="none" stroke="#1a6faf" stroke-width="3"/>
  <path d="M352,75 Q334,115 352,155" fill="none" stroke="#1a6faf" stroke-width="3"/>
  <text x="341" y="172" text-anchor="middle" fill="#1a6faf" font-size="10">目镜（短焦距f₂）</text>
  <!-- 物镜焦点（中间实像） -->
  <line x1="248" y1="115" x2="248" y2="133" stroke="#e63946" stroke-width="2.5"/>
  <ellipse cx="248" cy="136" rx="5" ry="4" fill="#e63946"/>
  <text x="248" y="150" text-anchor="middle" fill="#e63946" font-size="9">中间像（倒立缩小实像）</text>
  <!-- 平行光线经物镜会聚，再经目镜成虚像 -->
  <line x1="22" y1="85" x2="133" y2="90" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#taarr)"/>
  <line x1="22" y1="115" x2="133" y2="115" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#taarr)"/>
  <line x1="22" y1="130" x2="133" y2="128" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#taarr)"/>
  <!-- 物镜→中间像 -->
  <line x1="158" y1="90" x2="248" y2="115" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#taarr)"/>
  <line x1="158" y1="115" x2="248" y2="115" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#taarr)"/>
  <line x1="158" y1="128" x2="248" y2="115" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#taarr)"/>
  <!-- 中间像→目镜→眼睛 -->
  <line x1="248" y1="115" x2="333" y2="100" stroke="#e63946" stroke-width="1.5" marker-end="url(#taarr)"/>
  <line x1="248" y1="115" x2="333" y2="115" stroke="#e63946" stroke-width="1.5" marker-end="url(#taarr)"/>
  <line x1="248" y1="115" x2="333" y2="130" stroke="#e63946" stroke-width="1.5" marker-end="url(#taarr)"/>
  <!-- 目镜后平行射出（虚像） -->
  <line x1="350" y1="95" x2="440" y2="80" stroke="#e63946" stroke-width="1.5" stroke-dasharray="none" marker-end="url(#taarr)"/>
  <line x1="350" y1="115" x2="440" y2="115" stroke="#e63946" stroke-width="1.5" marker-end="url(#taarr)"/>
  <line x1="350" y1="132" x2="440" y2="148" stroke="#e63946" stroke-width="1.5" marker-end="url(#taarr)"/>
  <!-- 眼睛 -->
  <circle cx="455" cy="115" r="10" fill="#c8dff0" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="455" y="119" text-anchor="middle" fill="#1a6faf" font-size="9">眼</text>
  <!-- 公式 -->
  <text x="240" y="205" text-anchor="middle" fill="#1a6faf" font-size="11">L ≈ f₁ + f₂（镜筒长度）；物镜长焦距，目镜短焦距</text>
</svg>

## 实验要点

1. 准备两个焦距不同的凸透镜，一个较长、一个较短。
2. 将两透镜同轴放置，间距约等于焦距之和。
3. 对准远处物体，移动目镜使像清晰。
4. 用纸筒固定两透镜，做成可调焦望远镜。

## 对比分析

| 透镜 | 作用 | 成像 |
|---|---|---|
| 物镜（长焦距） | 收集远处光线 | 倒立缩小实像 |
| 目镜（短焦距） | 放大中间像 | 正立放大虚像 |

## 背记要点

- 望远镜由物镜和目镜组成。
- 物镜成倒立缩小实像，目镜再放大。
- 镜筒长度约等于两透镜焦距之和。
- 制作时要保证两透镜主光轴重合。

## 自测题

1. 开普勒望远镜的物镜和目镜各是什么透镜？
2. 为什么望远镜能看清远处物体？

## 相关知识点

[[透镜]] [[凸透镜成像的规律]] [[生活中的透镜]]