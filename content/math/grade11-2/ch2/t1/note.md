---
title: 5.1 导数的概念及其意义
date: 2026-08-10
---

# 5.1 导数的概念及其意义

## 概念定义

**平均变化率**：函数 $y=f(x)$ 从 $x_0$ 到 $x_0+\Delta x$ 的平均变化率为 $\dfrac{\Delta y}{\Delta x}=\dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$。
**导数（瞬时变化率）**：$f'(x_0)=\lim\limits_{\Delta x\to0}\dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$，即平均变化率当 $\Delta x\to0$ 时的极限。
**导函数**：$f'(x)=\lim\limits_{\Delta x\to0}\dfrac{f(x+\Delta x)-f(x)}{\Delta x}$，$f'(x_0)$ 是 $f'(x)$ 在 $x_0$ 处的函数值。
**几何意义**：$f'(x_0)$ 是曲线 $y=f(x)$ 在点 $(x_0,f(x_0))$ 处**切线的斜率**；切线是割线当 $\Delta x\to0$ 时的极限位置。

## 知识梳理

| 项目 | 内容 | 备注 |
| --- | --- | --- |
| 物理意义 | 位移对时间的导数是瞬时速度，速度的导数是加速度 | $v(t)=s'(t)$，$a(t)=v'(t)$ |
| 切线方程 | $y-f(x_0)=f'(x_0)(x-x_0)$ | 切点在曲线上且在切线上 |
| "在"某点切线 | 切点已知为 $(x_0,f(x_0))$ | 直接代公式 |
| "过"某点切线 | 该点未必是切点，需设切点 $(t,f(t))$ | 列方程求 $t$，可能多解 |
| 割线与切线 | 割线斜率 $\dfrac{\Delta y}{\Delta x}$ 的极限是切线斜率 | 逼近思想 |
| 可导与图象 | 尖点、断点处不可导 | 如 $y=|x|$ 在 $x=0$ 处 |

割线逼近切线示意（曲线 $y=x^2$ 在点 $P$ 处）：

<svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="180" x2="310" y2="180" stroke="black" stroke-width="1"/>
  <line x1="40" y1="195" x2="40" y2="10" stroke="black" stroke-width="1"/>
  <text x="300" y="195" font-size="12">x</text>
  <text x="25" y="20" font-size="12">y</text>
  <path d="M 50 175 Q 150 165 260 25" stroke="blue" fill="none" stroke-width="1.5"/>
  <line x1="80" y1="178" x2="290" y2="52" stroke="red" stroke-width="1.5"/>
  <line x1="110" y1="185" x2="280" y2="20" stroke="green" stroke-dasharray="5 3"/>
  <circle cx="170" cy="126" r="4" fill="black"/>
  <text x="160" y="145" font-size="12">P(x0,f(x0))</text>
  <circle cx="245" cy="55" r="3" fill="red"/>
  <text x="248" y="48" font-size="11" fill="red">Q→P 割线</text>
  <text x="115" y="35" font-size="11" fill="green">切线 斜率 f'(x0)</text>
</svg>

## 典型例题

**例 1**：用定义求 $f(x)=x^2$ 在 $x=1$ 处的导数。

**解**：$\dfrac{\Delta y}{\Delta x}=\dfrac{(1+\Delta x)^2-1}{\Delta x}=\dfrac{2\Delta x+(\Delta x)^2}{\Delta x}=2+\Delta x$。
当 $\Delta x\to0$ 时，$\dfrac{\Delta y}{\Delta x}\to2$，故 $f'(1)=2$。

**例 2**：求过点 $A(1,0)$ 且与曲线 $y=x^2$ 相切的直线方程。

**解**：$A$ 不在曲线上，设切点 $(t,t^2)$，$y'=2x$，切线：$y-t^2=2t(x-t)$。
代入 $(1,0)$：$-t^2=2t(1-t)$，即 $t^2-2t=0$，$t=0$ 或 $t=2$。
故切线为 $y=0$ 或 $y=4x-4$。

## 易错点

- 混淆"在点 $P$ 处的切线"（$P$ 为切点）与"过点 $P$ 的切线"（$P$ 未必是切点），后者须设切点。
- $f'(x_0)$ 是一个**常数**，不是函数；先求导函数再代入 $x_0$，不能先代值再求导。
- 切线与曲线可以有多个公共点，"只有一个公共点"不是切线的定义。
- $\Delta x$ 可正可负但不为 0；平均变化率与瞬时变化率不能混用。

## 背记要点

1. 定义式：$f'(x_0)=\lim\limits_{\Delta x\to0}\dfrac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$，本质是瞬时变化率。
2. 几何意义：导数值＝切点处切线斜率；切线方程 $y-f(x_0)=f'(x_0)(x-x_0)$。
3. "过某点"求切线三步：设切点 $t$ → 写切线 → 代已知点解 $t$。
4. 切点双属性：既在曲线上又在切线上，这是列方程的依据。
5. 高考视角：北京卷导数大题第一问常是"求某点处切线方程"，是必得分点，务必稳、准。

## 自测题

1. $f(x)=2x^2$ 从 $x=1$ 到 $x=1.5$ 的平均变化率为____。
2. 曲线 $y=x^3$ 在点 $(1,1)$ 处的切线方程为____。
3. 若 $f'(x_0)=-2$，则 $\lim\limits_{\Delta x\to0}\dfrac{f(x_0+2\Delta x)-f(x_0)}{\Delta x}=$____。
4. 物体运动方程 $s=t^2+3$（单位：m,s），$t=2$ 时的瞬时速度为____。

## 相关知识点

求导公式与法则见 [[5.2 导数的运算]]；导数符号与增减关系见 [[5.3.1 函数的单调性]]；进一步应用见 [[5.3.2 函数的极值与最大（小）值]]。
