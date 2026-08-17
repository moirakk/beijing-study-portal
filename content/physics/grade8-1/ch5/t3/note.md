---
title: 凸透镜成像的规律
date: 2026-08-06
---

# 凸透镜成像的规律

## 核心概念表

| 概念 | 含义 | 符号 |
|---|---|---|
| 物距 | 物体到凸透镜光心的距离 | $u$ |
| 像距 | 像到凸透镜光心的距离 | $v$ |
| 焦距 | 焦点到光心的距离 | $f$ |
| 实像 | 实际光线会聚 | 可呈现在光屏 |
| 虚像 | 光线反向延长线相交 | 不可呈现在光屏 |

## 知识梳理

凸透镜成像规律与物距有关。当 $u>2f$ 时，成倒立、缩小的实像，像距 $f<v<2f$；当 $u=2f$ 时，成倒立、等大的实像，$v=2f$；当 $f<u<2f$ 时，成倒立、放大的实像，$v>2f$；当 $u=f$ 时，不成像；当 $u<f$ 时，成正立、放大的虚像。

成实像时，物距减小，像距增大，像变大；成虚像时，物距减小，像距减小，像变小。

## 公式汇总

透镜成像公式（初中不要求计算）：

$$
\frac{1}{u}+\frac{1}{v}=\frac{1}{f}
$$

<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="260" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">凸透镜成像光路（u&gt;2f：倒立缩小实像）</text>
  <defs>
    <marker id="cxarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
    <marker id="cxarr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <!-- 主光轴 -->
  <line x1="20" y1="145" x2="460" y2="145" stroke="#333" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- 凸透镜 -->
  <path d="M225,65 Q250,145 225,225" fill="none" stroke="#1a6faf" stroke-width="3"/>
  <path d="M255,65 Q230,145 255,225" fill="none" stroke="#1a6faf" stroke-width="3"/>
  <text x="240" y="248" text-anchor="middle" fill="#1a6faf" font-size="10">凸透镜</text>
  <!-- 焦点 F1（左）和 F2（右） -->
  <circle cx="165" cy="145" r="4" fill="#e63946"/>
  <text x="165" y="138" text-anchor="middle" fill="#e63946" font-size="10">F₁</text>
  <circle cx="315" cy="145" r="4" fill="#e63946"/>
  <text x="315" y="138" text-anchor="middle" fill="#e63946" font-size="10">F₂</text>
  <!-- 物体（蜡烛）u>2f，放在透镜左侧 -->
  <line x1="70" y1="90" x2="70" y2="145" stroke="#f4a500" stroke-width="4"/>
  <ellipse cx="70" cy="86" rx="6" ry="5" fill="#f4a500"/>
  <text x="70" y="158" text-anchor="middle" fill="#f4a500" font-size="10">物体</text>
  <!-- 三条特殊光线 -->
  <!-- 1. 平行主光轴→通过F2 -->
  <line x1="70" y1="90" x2="240" y2="90" stroke="#4a9fd4" stroke-width="1.8" marker-end="url(#cxarr2)"/>
  <line x1="240" y1="90" x2="360" y2="145" stroke="#4a9fd4" stroke-width="1.8" marker-end="url(#cxarr2)"/>
  <!-- 2. 过光心，方向不变 -->
  <line x1="70" y1="90" x2="360" y2="168" stroke="#e63946" stroke-width="1.8" marker-end="url(#cxarr)"/>
  <!-- 3. 过F1，折射后平行 -->
  <line x1="70" y1="90" x2="165" y2="145" stroke="#2d6a2d" stroke-width="1.5" stroke-dasharray="none"/>
  <line x1="165" y1="90" x2="240" y2="90" stroke="#2d6a2d" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="240" y1="90" x2="360" y2="90" stroke="#2d6a2d" stroke-width="1.5" marker-end="url(#cxarr2)"/>
  <!-- 像（倒立缩小，在F2~2F2之间）-->
  <line x1="360" y1="145" x2="360" y2="168" stroke="#e63946" stroke-width="3"/>
  <ellipse cx="360" cy="172" rx="6" ry="5" fill="#e63946"/>
  <text x="360" y="182" text-anchor="middle" fill="#e63946" font-size="10">像（倒立缩小实像）</text>
  <!-- 物距像距标注 -->
  <line x1="70" y1="233" x2="240" y2="233" stroke="#f4a500" stroke-width="1.5"/>
  <text x="155" y="228" text-anchor="middle" fill="#f4a500" font-size="10">u（物距）&gt;2f</text>
  <line x1="240" y1="233" x2="360" y2="233" stroke="#e63946" stroke-width="1.5"/>
  <text x="300" y="228" text-anchor="middle" fill="#e63946" font-size="10">v（像距）f~2f</text>
</svg>

## 实验要点

1. 调节烛焰中心、透镜光心、光屏中心在同一高度。
2. 从远处逐渐靠近透镜，观察像的变化。
3. 实像能在光屏上呈现，虚像需透过透镜观察。
4. 用纸遮住透镜一半，像变暗但仍完整。

## 对比分析

| 物距范围 | 像的性质 | 像距范围 | 应用 |
|---|---|---|---|
| $u>2f$ | 倒立、缩小、实像 | $f<v<2f$ | 照相机 |
| $u=2f$ | 倒立、等大、实像 | $v=2f$ | 测焦距 |
| $f<u<2f$ | 倒立、放大、实像 | $v>2f$ | 投影仪 |
| $u=f$ | 不成像 | — | 探照灯 |
| $u<f$ | 正立、放大、虚像 | $|v|>u$ | 放大镜 |

## 背记要点

1. 一倍焦距分虚实，二倍焦距分大小。
2. 实像倒立，虚像正立。
3. 成实像时，物近像远像变大。
4. 成虚像时，物近像近像变小。

## 自测题

1. 物体放在凸透镜前 15 cm 处，焦距 10 cm，成什么像？
2. 要在光屏上得到放大实像，物距应满足什么条件？

## 相关知识点

[[透镜]] [[生活中的透镜]] [[眼睛和眼镜]]