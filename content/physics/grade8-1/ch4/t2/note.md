---
title: 光的反射
date: 2026-08-06
---

# 光的反射

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 光的反射 | 光遇到障碍物返回原介质 | 镜面反射、漫反射 |
| 入射角 | 入射光线与法线夹角 | — |
| 反射角 | 反射光线与法线夹角 | — |
| 法线 | 过入射点垂直于反射面的直线 | 辅助线 |

## 知识梳理

光射到物体表面时，有一部分光会被反射回来，这种现象叫光的反射。反射定律：反射光线、入射光线和法线在同一平面内；反射光线和入射光线分居法线两侧；反射角等于入射角。

反射分为镜面反射和漫反射。镜面反射平行光入射后反射光仍平行；漫反射平行光入射后反射光射向各个方向。两者都遵守反射定律。

## 公式汇总

反射定律：

$$
\angle r = \angle i
$$

其中 $i$ 为入射角，$r$ 为反射角。

<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="270" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">光的反射定律示意图</text>
  <!-- 镜面 -->
  <rect x="40" y="145" width="400" height="12" fill="#888" rx="2"/>
  <text x="240" y="170" text-anchor="middle" fill="#555" font-size="11">反射面（镜面）</text>
  <!-- 法线（虚线）-->
  <line x1="240" y1="50" x2="240" y2="145" stroke="#333" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="252" y="70" fill="#333" font-size="11">法线（N）</text>
  <!-- 入射光线 -->
  <defs>
    <marker id="rarr3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
    <marker id="rarr4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
  </defs>
  <line x1="100" y1="60" x2="240" y2="145" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#rarr3)"/>
  <text x="130" y="88" fill="#4a9fd4" font-size="11">入射光线</text>
  <!-- 反射光线 -->
  <line x1="240" y1="145" x2="380" y2="60" stroke="#e63946" stroke-width="2.5" marker-end="url(#rarr4)"/>
  <text x="330" y="88" fill="#e63946" font-size="11">反射光线</text>
  <!-- 入射角标注 -->
  <path d="M240,145 A40,40 0 0,0 207,108" fill="none" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="202" y="130" fill="#4a9fd4" font-size="11">∠i</text>
  <!-- 反射角标注 -->
  <path d="M273,108 A40,40 0 0,0 240,145" fill="none" stroke="#e63946" stroke-width="1.5"/>
  <text x="265" y="130" fill="#e63946" font-size="11">∠r</text>
  <!-- 定律文字 -->
  <rect x="60" y="190" width="360" height="60" fill="white" rx="6" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="210" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">反射定律</text>
  <text x="240" y="228" text-anchor="middle" fill="#333" font-size="11">① 三线共面（入射光线、反射光线、法线）</text>
  <text x="240" y="244" text-anchor="middle" fill="#333" font-size="11">② 两线分居法线两侧；③ 反射角 = 入射角（∠r = ∠i）</text>
</svg>

## 实验要点

- 纸板要垂直平面镜，便于观察三线共面。
- 让光线贴着纸板射向镜面，记录入射光线和反射光线。
- 沿法线折叠纸板，反射光线消失，验证三线共面。
- 多次改变入射角，验证反射角等于入射角。

## 对比分析

| 反射类型 | 反射面 | 光线特点 | 例子 |
|---|---|---|---|
| 镜面反射 | 光滑 | 平行入射、平行反射 | 镜子、水面 |
| 漫反射 | 粗糙 | 平行入射、射向各方 | 书本、墙壁 |

## 背记要点

1. 反射定律：三线共面、两线分居、两角相等。
2. 反射角等于入射角，不能颠倒。
3. 镜面反射和漫反射都遵守反射定律。
4. 光路可逆。

## 自测题

1. 入射光线与镜面夹角为 30°，入射角和反射角分别是多少？
2. 黑板“反光”看不清字，属于哪种反射？

## 相关知识点

[[光的直线传播]] [[平面镜成像]] [[光的折射]]