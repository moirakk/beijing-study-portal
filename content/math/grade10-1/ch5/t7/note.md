---
title: 5.7 三角函数的应用
date: 2026-08-07
---

# 5.7 三角函数的应用

## 概念定义

现实中的**周期现象**（简谐运动、潮汐、交变电流、摩天轮）都可以用
$$y=A\sin(\omega x+\varphi)+b$$
建模。$A$ 为振幅，$b$ 为平衡位置（中线），$T=\dfrac{2\pi}{\omega}$ 为周期，$\varphi$ 为初相。

物理背景：简谐运动中 $f=\dfrac1T$ 叫频率，$A$ 是最大位移。

## 知识梳理

潮汐水深模型 $y=A\sin(\omega t)+b$ 示意（中线 $y=b$）：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="200" x2="345" y2="200" stroke="#64748b" stroke-width="1.5"/>
  <line x1="35" y1="20" x2="35" y2="215" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="345,200 336,196 336,204" fill="#64748b"/>
  <line x1="35" y1="120" x2="340" y2="120" stroke="#64748b" stroke-width="1.2" stroke-dasharray="6 4"/>
  <path d="M 35 120 C 65 45 105 45 135 120 C 165 195 205 195 235 120 C 265 45 305 45 335 120" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="35" y1="55" x2="340" y2="55" stroke="#dc2626" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="290" y="48" font-size="12" fill="#dc2626">高潮 b+A</text>
  <text x="42" y="112" font-size="12" fill="#64748b">中线 y=b</text>
  <text x="120" y="228" font-size="12" fill="#64748b">t（时间）</text>
  <text x="12" y="30" font-size="12" fill="#64748b">y</text>
  <text x="180" y="170" font-size="12" fill="#2563eb">水深随时间周期变化</text>
</svg>

**建模要素提取**：

| 数据特征 | 对应参数 |
| --- | --- |
| 最大值 $M$、最小值 $m$ | $A=\dfrac{M-m}{2}$，$b=\dfrac{M+m}{2}$ |
| 相邻最高点时间差（周期） | $\omega=\dfrac{2\pi}{T}$ |
| 某时刻的值（如初始位置） | 代入求 $\varphi$ |

## 典型例题

**例 1**：某地一天水深最大 $7$ m（$t=3$ 时），最小 $3$ m，周期 $12$ h。求水深 $y$ 关于时间 $t$ 的函数。

**解**：$A=\dfrac{7-3}{2}=2$，$b=\dfrac{7+3}{2}=5$，$\omega=\dfrac{2\pi}{12}=\dfrac\pi6$。
设 $y=2\sin\left(\dfrac\pi6 t+\varphi\right)+5$，$t=3$ 时取最大：$\dfrac\pi2+\varphi=\dfrac\pi2$，得 $\varphi=0$。
故 $y=2\sin\dfrac{\pi t}{6}+5$（$0\le t\le 24$）。

**例 2**：摩天轮半径 $40$ m，中心离地 $50$ m，转一圈 $6$ min，游客从最低点出发，求离地高度 $h$（m）与时间 $t$（min）的关系。

**解**：$A=40$，$b=50$，$T=6$，$\omega=\dfrac{2\pi}{6}=\dfrac\pi3$。$t=0$ 时在最低点，
用余弦更简：$h=50-40\cos\dfrac{\pi t}{3}$。验证 $t=0$ 时 $h=10$（最低），$t=3$ 时 $h=90$（最高），正确。

## 易错点

- 中线 $b$ 是**最大最小值的平均**，不是最小值；$A$ 是半距不是全距。
- 起始位置在最低点时选 $-\cos$ 型最简，硬设 $\sin$ 型再解 $\varphi$ 易出错。
- 实际问题的定义域是**时间范围**（如 $[0,24]$），别写 $\mathbb{R}$。
- 求"水深不低于某值的时段"要解三角不等式，结果需**回到实际时间区间**逐段列出。

## 背记要点

1. 模型 $y=A\sin(\omega t+\varphi)+b$：$A=\dfrac{M-m}2$，$b=\dfrac{M+m}2$，$\omega=\dfrac{2\pi}T$。
2. 特殊初始位置的快捷选型：最高点用 $+\cos$，最低点用 $-\cos$，中线上升用 $+\sin$。
3. 解模流程：读数据 → 定四参 → 写解析式 → 检验特殊点 → 答问题。
4. 周期现象判断依据：数据是否等间隔重复。

## 自测题

1. 简谐运动 $y=4\sin\left(2t+\dfrac\pi6\right)$ 的振幅为____，周期为____，频率为____。
2. 某量最大 $10$、最小 $2$，则模型中 $A=$____，$b=$____。
3. 摩天轮模型 $h=50-40\cos\dfrac{\pi t}{3}$ 中，游客首次到达最高点的时刻 $t=$____。
4. 交流电 $i=5\sin(100\pi t)$ 的周期为____秒。

## 相关知识点

参数意义与图象变换见 [[5.6 函数 y=Asin(wx+phi)]]；性质求解工具见 [[5.4 三角函数的图象与性质]]；函数建模通法见 [[3.4 函数的应用（一）]]。
