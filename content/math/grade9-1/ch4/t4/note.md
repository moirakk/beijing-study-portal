---
title: 24.4 弧长和扇形面积
date: 2026-08-06
---

# 24.4 弧长和扇形面积

## 弧长公式

半径为 $R$ 的圆中，$n^\circ$ 的圆心角所对的弧长：
$$l=\frac{n\pi R}{180}$$

推导：圆周长为 $2\pi R$，$n^\circ$ 圆心角所对弧长占整个圆周的 $\dfrac{n}{360}$，即 $l=\dfrac{n}{360}\times 2\pi R=\dfrac{n\pi R}{180}$。

<svg viewBox="0 0 400 300" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <!-- 圆（虚线，完整圆） -->
  <circle cx="200" cy="160" r="110" fill="none" stroke="#e1bee7" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- 扇形填充 -->
  <!-- 圆心角约120°，从0°到120°（即从右水平到左上60°） -->
  <!-- 起点(310,160)，终点(200-55,160-95.26)=(145,65) -->
  <path d="M 200,160 L 310,160 A 110,110 0 0,0 145,65 Z"
    fill="#e1bee7" fill-opacity="0.7" stroke="#7b1fa2" stroke-width="2.5"/>
  <!-- 圆心O -->
  <circle cx="200" cy="160" r="4" fill="#7b1fa2"/>
  <text x="206" y="165" font-size="13" font-weight="bold" fill="#7b1fa2">O</text>
  <!-- 半径R标注 -->
  <text x="252" y="152" font-size="12" fill="#7b1fa2">R（母线/半径）</text>
  <!-- 弧长l标注 -->
  <path d="M 310,160 A 110,110 0 0,0 145,65" fill="none" stroke="#9c27b0" stroke-width="3"/>
  <text x="295" y="90" font-size="12" fill="#9c27b0">弧长 l</text>
  <!-- 圆心角n°标注 -->
  <path d="M 240,160 A 40,40 0 0,0 220,125" fill="none" stroke="#e91e63" stroke-width="1.8"/>
  <text x="244" y="140" font-size="12" fill="#e91e63">n°</text>
  <!-- 公式框 -->
  <rect x="20" y="220" width="360" height="60" rx="8" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="200" y="242" text-anchor="middle" font-size="13" font-weight="bold" fill="#7b1fa2">弧长：l = nπR/180</text>
  <text x="200" y="262" text-anchor="middle" font-size="13" font-weight="bold" fill="#9c27b0">扇形面积：S = nπR²/360 = lR/2</text>
  <text x="200" y="278" text-anchor="middle" font-size="11" fill="#555">（n为圆心角度数，R为半径）</text>
</svg>

## 扇形面积公式

半径为 $R$、圆心角为 $n^\circ$ 的扇形面积：
$$S=\frac{n\pi R^2}{360}$$

用弧长表示（类比三角形面积公式）：
$$S=\frac{1}{2}lR$$

## 圆锥的侧面积与全面积

圆锥的侧面展开图是一个**扇形**：
- 扇形的半径 = 圆锥的**母线长** $l$；
- 扇形的弧长 = 圆锥**底面圆的周长** $2\pi r$。

由此得：
$$S_{\text{侧}}=\frac{1}{2}\times 2\pi r\times l=\pi rl$$
$$S_{\text{全}}=\pi rl+\pi r^2$$

母线、底面半径、高满足勾股定理：$l^2=r^2+h^2$。

侧面展开扇形的圆心角 $n$ 满足：$\dfrac{n\pi l}{180}=2\pi r$，即 $n=\dfrac{360r}{l}$。

## 例题解析

**例 1**：半径为 $6$、圆心角为 $60^\circ$ 的弧长和扇形面积。

$$l=\frac{60\pi\times 6}{180}=2\pi,\qquad S=\frac{60\pi\times 36}{360}=6\pi$$

**例 2**：一个扇形弧长为 $4\pi$，半径为 $6$，求扇形面积。

$$S=\frac{1}{2}lR=\frac{1}{2}\times 4\pi\times 6=12\pi$$

**例 3**：圆锥底面半径为 $3$，母线长为 $5$，求侧面积、全面积及侧面展开图的圆心角。

$S_{\text{侧}}=\pi\times 3\times 5=15\pi$；$S_{\text{全}}=15\pi+9\pi=24\pi$；
圆心角 $n=\dfrac{360\times 3}{5}=216^\circ$。

**例 4**（阴影面积）：正方形边长为 $2$，以一个顶点为圆心、边长为半径在正方形内作弧，求正方形内弧外的面积。

阴影面积 = 正方形面积 - 四分之一圆面积 $=4-\dfrac{90\pi\times 4}{360}=4-\pi$。

## 常用方法：不规则图形面积

- **和差法**：整体减部分；
- **割补法**：分割后重新拼接；
- **等积变形**：平移、旋转、对称转化为规则图形。

## 易错点

- 公式中的 $n$ 表示角的**度数**（不带单位参与计算），如 $60^\circ$ 时代入 $n=60$。
- 混淆弧长公式（分母 $180$）与扇形面积公式（分母 $360$）。
- 圆锥问题中区分**底面半径 $r$** 与**母线 $l$**：展开扇形的半径是母线，不是底面半径。
- 求"全面积"时漏加底面圆面积。

## 自测题

1. 半径为 $9$、圆心角为 $120^\circ$ 的弧长为____。
2. 弧长为 $3\pi$、半径为 $9$ 的扇形面积为____。
3. 圆锥底面半径为 $4$，高为 $3$，则母线长为____，侧面积为____。
4. 扇形面积为 $12\pi$，半径为 $6$，则圆心角为____度。
5. 圆锥侧面展开图是半圆，则母线长与底面半径的比为____。

圆的基本概念见 [[24.1 圆的有关性质]]，切线相关知识见 [[24.2 点和圆、直线和圆的位置关系]]，正多边形与圆的计算见 [[24.3 正多边形和圆]]。
