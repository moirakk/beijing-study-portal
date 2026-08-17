---
title: 13.3 三角形的内角与外角
date: 2026-08-06
---

# 13.3 三角形的内角与外角

## 概念定义

- **内角**：三角形两边组成的角，三角形有三个内角。
- **外角**：三角形的一边与另一边的延长线组成的角，叫做三角形的外角。

<svg width="360" height="180" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 360 180">
  <!-- 三角形 ABC -->
  <polygon points="60,150 200,150 130,30" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 延长 BC 到 D -->
  <line x1="200" y1="150" x2="300" y2="150" stroke="#9c27b0" stroke-width="2"/>
  <!-- 顶点标注 -->
  <text x="125" y="24" font-size="15" fill="#7b1fa2" font-weight="bold" text-anchor="middle">A</text>
  <text x="44" y="165" font-size="15" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="200" y="165" font-size="15" fill="#7b1fa2" font-weight="bold">C</text>
  <text x="305" y="165" font-size="15" fill="#9c27b0" font-weight="bold">D</text>
  <!-- 内角弧 -->
  <path d="M130,30 Q118,48 112,46" fill="none" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="108" y="60" font-size="12" fill="#424242">∠A</text>
  <path d="M60,150 Q78,138 80,128" fill="none" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="82" y="140" font-size="12" fill="#424242">∠B</text>
  <path d="M200,150 Q186,138 184,128" fill="none" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="162" y="140" font-size="12" fill="#424242">∠C</text>
  <!-- 外角弧 -->
  <path d="M200,150 Q218,138 222,128" fill="none" stroke="#9c27b0" stroke-width="2"/>
  <text x="224" y="140" font-size="12" fill="#9c27b0" font-weight="bold">∠ACD</text>
  <!-- 公式说明 -->
  <text x="180" y="175" font-size="12" fill="#424242" text-anchor="middle">∠ACD = ∠A + ∠B（外角 = 不相邻两内角之和）</text>
</svg>

## 内角和定理

三角形三个内角的和等于 $180^{\circ}$。

在 $\triangle ABC$ 中：
$$\angle A+\angle B+\angle C=180^{\circ}$$

**推论**：直角三角形的两个锐角互余。

## 外角性质

1. 三角形的一个外角等于与它不相邻的两个内角的和。
2. 三角形的一个外角大于任何一个与它不相邻的内角。
3. 三角形的外角和等于 $360^{\circ}$。

如图，$\angle ACD$ 是 $\triangle ABC$ 的外角，则：
$$\angle ACD=\angle A+\angle B$$
$$\angle ACD>\angle A,\quad \angle ACD>\angle B$$

## 例题解析

**例**：在 $\triangle ABC$ 中，$\angle A=50^{\circ}$，$\angle B=60^{\circ}$，求与 $\angle C$ 相邻的外角的度数。

由三角形内角和定理：
$$\angle C=180^{\circ}-50^{\circ}-60^{\circ}=70^{\circ}$$
与 $\angle C$ 相邻的外角为：
$$180^{\circ}-70^{\circ}=110^{\circ}$$
也可直接用外角性质：$50^{\circ}+60^{\circ}=110^{\circ}$。

## 易错点

- 外角是与内角相邻且互补的角，不要与对顶角混淆。
- "外角等于不相邻两内角之和"，注意"不相邻"三个字。
- 三角形外角和是 $360^{\circ}$，不是 $180^{\circ}$。

## 自测题

1. 三角形三个内角的和等于____。
2. 三角形的一个外角等于与它____的两个内角的和。
3. 在 $\triangle ABC$ 中，$\angle A=40^{\circ}$，$\angle B=70^{\circ}$，则 $\angle C=$____。
4. 若三角形的一个外角为 $120^{\circ}$，与它相邻的内角为____。
5. 一个三角形三个内角的度数比为 $1:2:3$，则这个三角形是____三角形。

相关知识点：[[13.1 三角形的概念]]、[[13.2 与三角形有关的线段]]、[[14.2 三角形全等的判定]]
