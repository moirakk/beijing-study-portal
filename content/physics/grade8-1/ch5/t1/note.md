---
title: 透镜
date: 2026-08-06
---

# 透镜

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 凸透镜 | 中间厚、边缘薄的透镜 | 会聚光线 |
| 凹透镜 | 中间薄、边缘厚的透镜 | 发散光线 |
| 主光轴 | 通过两个球面球心的直线 | — |
| 光心 | 透镜中心，光线通过方向不变 | — |
| 焦点 | 平行于主光轴的光线会聚点 | 凸透镜有实焦点 |

## 知识梳理

凸透镜对光有会聚作用，能使平行于主光轴的光线会聚于焦点；凹透镜对光有发散作用，使平行于主光轴的光线发散，其反向延长线交于虚焦点。

焦距 $f$ 是光心到焦点的距离。凸透镜有两个实焦点，凹透镜有两个虚焦点。透镜越厚，焦距越短，会聚能力越强。

## 公式汇总

透镜焦距定义：

$$
f = \text{光心到焦点的距离}
$$

<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="240" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">凸透镜（会聚）与凹透镜（发散）</text>
  <defs>
    <marker id="tlarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
    <marker id="tlarr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <!-- 左：凸透镜 -->
  <text x="110" y="45" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">凸透镜（中间厚）</text>
  <path d="M90,65 Q115,120 90,175" fill="none" stroke="#1a6faf" stroke-width="2.5"/>
  <path d="M130,65 Q105,120 130,175" fill="none" stroke="#1a6faf" stroke-width="2.5"/>
  <rect x="90" y="65" width="40" height="110" fill="#c8dff0" opacity="0.5"/>
  <text x="110" y="195" text-anchor="middle" fill="#1a6faf" font-size="10">凸透镜</text>
  <!-- 主光轴 -->
  <line x1="20" y1="120" x2="215" y2="120" stroke="#333" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- 入射平行光 -->
  <line x1="20" y1="85" x2="92" y2="85" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <line x1="20" y1="100" x2="92" y2="100" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <line x1="20" y1="120" x2="92" y2="120" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <line x1="20" y1="140" x2="92" y2="140" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <line x1="20" y1="155" x2="92" y2="155" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <!-- 会聚到焦点 -->
  <line x1="128" y1="85" x2="175" y2="120" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <line x1="128" y1="100" x2="175" y2="120" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <line x1="128" y1="120" x2="175" y2="120" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <line x1="128" y1="140" x2="175" y2="120" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <line x1="128" y1="155" x2="175" y2="120" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <!-- 焦点F -->
  <circle cx="175" cy="120" r="5" fill="#e63946"/>
  <text x="183" y="116" fill="#e63946" font-size="11">F（实焦点）</text>
  <!-- 右：凹透镜 -->
  <text x="370" y="45" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">凹透镜（中间薄）</text>
  <path d="M340,65 Q315,120 340,175" fill="none" stroke="#1a6faf" stroke-width="2.5"/>
  <path d="M400,65 Q425,120 400,175" fill="none" stroke="#1a6faf" stroke-width="2.5"/>
  <line x1="250" y1="120" x2="470" y2="120" stroke="#333" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- 入射平行光 -->
  <line x1="250" y1="85" x2="340" y2="85" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <line x1="250" y1="100" x2="340" y2="100" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <line x1="250" y1="120" x2="340" y2="120" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <line x1="250" y1="140" x2="340" y2="140" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <line x1="250" y1="155" x2="340" y2="155" stroke="#4a9fd4" stroke-width="2" marker-end="url(#tlarr2)"/>
  <!-- 发散折射光（向外散开）-->
  <line x1="400" y1="85" x2="460" y2="70" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <line x1="400" y1="100" x2="460" y2="88" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <line x1="400" y1="120" x2="460" y2="120" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <line x1="400" y1="140" x2="460" y2="152" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <line x1="400" y1="155" x2="460" y2="170" stroke="#e63946" stroke-width="2" marker-end="url(#tlarr)"/>
  <!-- 虚焦点（反向延长线交于F'） -->
  <line x1="400" y1="85" x2="295" y2="120" stroke="#888" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="400" y1="155" x2="295" y2="120" stroke="#888" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="295" cy="120" r="5" fill="#888"/>
  <text x="270" y="115" fill="#888" font-size="11">F'（虚焦点）</text>
</svg>

## 实验要点

- 让平行光沿主光轴射向透镜，找到最小最亮光斑，测焦距。
- 凸透镜光斑在透镜另一侧，凹透镜需用光屏承接反向延长线。
- 测量光心到光斑距离即为焦距。

## 对比分析

| 透镜类型 | 形状 | 对光作用 | 焦点 |
|---|---|---|---|
| 凸透镜 | 中间厚边缘薄 | 会聚 | 实焦点 |
| 凹透镜 | 中间薄边缘厚 | 发散 | 虚焦点 |

## 背记要点

1. 凸透镜会聚光，凹透镜发散光。
2. 焦点分实焦点和虚焦点。
3. 焦距越短，透镜会聚或发散能力越强。
4. 过光心的光线传播方向不变。

## 自测题

1. 凸透镜对光线有什么作用？
2. 把凹透镜正对太阳光，能不能在纸上得到最小光斑？

## 相关知识点

[[生活中的透镜]] [[凸透镜成像的规律]] [[眼睛和眼镜]]