---
title: 2 全反射
date: 2026-08-07
---

# 2 全反射

## 概念定义

**全反射**：光从**光密介质射向光疏介质**，当入射角增大到某一角度时，折射光完全消失，光**全部反射回原介质**的现象。

**临界角 $C$**：折射角恰好等于 $90^\circ$ 时的入射角。光从介质射向真空（空气）时：
$$\sin C=\dfrac{1}{n}$$

**全反射的条件**：① 光从光密介质射向光疏介质；② 入射角**大于或等于**临界角（$\theta\ge C$）。两条缺一不可。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 临界角公式 | $\sin C=\dfrac{1}{n}$（介质对真空）；$n$ 越大 $C$ 越小 |
| 发生条件 | 光密 → 光疏 且 $\theta\ge C$ |
| 能量特点 | 全反射时光能全部返回，无折射损失 |
| 应用 | 光导纤维（内芯 $n$ 大、外套 $n$ 小）、全反射棱镜、钻石的璀璨 |
| 自然现象 | 沙漠/柏油路面的蜃景（海市蜃楼）、水中气泡明亮 |

**光纤通信**：光在内芯与外套界面上不断发生全反射向前传播，容量大、损耗低、抗干扰。

## 全反射光路图

<svg viewBox="0 0 400 210" width="400" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="g2a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="g2b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <rect x="20" y="20" width="360" height="85" fill="#dbeafe"/>
  <line x1="20" y1="105" x2="380" y2="105" stroke="#334155" stroke-width="2"/>
  <text x="26" y="38" font-size="12" fill="#2563eb">水（光密，n）</text>
  <text x="26" y="130" font-size="12" fill="#64748b">空气（光疏）</text>
  <line x1="200" y1="30" x2="200" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 3"/>
  <line x1="80" y1="40" x2="196" y2="102" stroke="#f59e0b" stroke-width="2"/>
  <line x1="200" y1="105" x2="376" y2="98" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 3"/>
  <text x="300" y="88" font-size="11" fill="#b45309">θ=C 时折射角 90°（贴界面）</text>
  <line x1="60" y1="70" x2="196" y2="103" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="200" y1="105" x2="336" y2="72" stroke="#dc2626" stroke-width="2.5" marker-end="url(#g2a)"/>
  <text x="52" y="64" font-size="12" fill="#dc2626">θ&gt;C 入射</text>
  <text x="300" y="60" font-size="12" fill="#dc2626">全反射光</text>
  <text x="150" y="200" font-size="12" fill="#334155">θ ≥ C 时无折射光，光全部返回水中</text>
</svg>

## 典型例题

**例 1**：某介质折射率 $n=\sqrt2$。求光从该介质射向空气的临界角。

**解**：$\sin C=\dfrac{1}{n}=\dfrac{1}{\sqrt2}=\dfrac{\sqrt2}{2}$，故 $C=45^\circ$。入射角 $\ge45^\circ$ 时发生全反射。

**例 2**：水的折射率 $n=\dfrac{4}{3}$。水底点光源发出的光只能从水面一个圆形区域射出，水深 $h=3\ \text{m}$，求圆的半径。

**解**：$\sin C=\dfrac{3}{4}$，则 $\tan C=\dfrac{3}{\sqrt{4^2-3^2}}=\dfrac{3}{\sqrt7}$。
圆半径 $r=h\tan C=3\times\dfrac{3}{\sqrt7}=\dfrac{9}{\sqrt7}\approx3.4\ \text{m}$。圆外光线因 $\theta>C$ 全反射回水中。

## 易错点

- 光从**光疏射向光密**永不发生全反射（折射角小于入射角，达不到 $90^\circ$）。
- $\theta=C$ 时折射光**恰好消失**（沿界面），通常也归入全反射临界状态。
- $\sin C=\dfrac{1}{n}$ 仅适用于介质—真空（空气）界面；两介质间用 $\sin C=\dfrac{n_2}{n_1}$（$n_1>n_2$）。
- 未达临界角时反射与折射**同时存在**，只是折射占比随入射角增大而减小。

## 背记要点

1. 全反射条件：光密 → 光疏，且 $\theta\ge C$。
2. $\sin C=\dfrac{1}{n}$；$n$ 越大，临界角越小，越容易全反射。
3. 应用：光纤、全反射棱镜（45°-45°-90°）、钻石；现象：蜃景。
4. 高考视角："水下光源出射圆""光纤传播时间"是几何光学计算高频模型。

## 自测题

1. 发生全反射的两个条件：____、____。
2. $n=2$ 的介质，临界角 $C=$____。
3. 判断：光从空气射入玻璃时可能发生全反射。（　）
4. 光导纤维利用了____原理，内芯折射率____（大于/小于）外套。

## 相关知识点

折射定律与折射率见 [[1 光的折射]]；光的波动性证据见 [[3 光的干涉]] 与 [[5 光的衍射]]；激光在光纤通信中的应用见 [[6 光的偏振 激光]]。
