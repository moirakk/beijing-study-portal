---
title: 2.1 直线的倾斜角与斜率
date: 2026-08-07
---

# 2.1 直线的倾斜角与斜率

## 概念定义

**倾斜角** $\alpha$：$x$ 轴正方向与直线**向上方向**所成的角；规定与 $x$ 轴平行或重合时 $\alpha=0$。取值范围 $\alpha\in[0,\pi)$。
**斜率** $k$：$k=\tan\alpha$（$\alpha\ne\dfrac{\pi}{2}$）；倾斜角为 $\dfrac{\pi}{2}$ 时斜率**不存在**。
**两点斜率公式**：$P_1(x_1,y_1)$，$P_2(x_2,y_2)$（$x_1\ne x_2$）时
$$k=\dfrac{y_2-y_1}{x_2-x_1}$$

## 知识梳理

| 项目 | 内容 | 备注 |
| --- | --- | --- |
| 倾斜角范围 | $[0,\pi)$ | 不含 $\pi$ |
| $k$ 与 $\alpha$ | $\alpha\in[0,\frac{\pi}{2})$ 时 $k\ge0$ 递增；$\alpha\in(\frac{\pi}{2},\pi)$ 时 $k<0$ 递增 | $\alpha=\frac{\pi}{2}$ 时 $k$ 不存在 |
| 平行 | $l_1\parallel l_2\Leftrightarrow k_1=k_2$（斜率均存在且不重合） | 或都无斜率 |
| 垂直 | $l_1\perp l_2\Leftrightarrow k_1k_2=-1$ | 或一条 $k=0$、另一条无斜率 |
| 三点共线 | $k_{AB}=k_{AC}$ | 前提横坐标不全相等 |
| 斜率的几何意义 | $k=\dfrac{\Delta y}{\Delta x}$，直线的"倾斜程度" | 与两点选取顺序无关 |

**注意**：$k$ 随 $\alpha$ 在 $[0,\pi)$ 上**不单调**，$\alpha$ 越大 $k$ 不一定越大（在 $\frac{\pi}{2}$ 处断开）。

## 图示：倾斜角与斜率

<svg viewBox="0 0 340 200" width="340" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax21" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <line x1="20" y1="150" x2="320" y2="150" stroke="#334155" stroke-width="1.5" marker-end="url(#ax21)"/>
  <line x1="60" y1="190" x2="60" y2="20" stroke="#334155" stroke-width="1.5" marker-end="url(#ax21)"/>
  <text x="322" y="166" font-size="13" fill="#334155">x</text>
  <text x="46" y="24" font-size="13" fill="#334155">y</text>
  <line x1="90" y1="185" x2="270" y2="45" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M 205 150 A 32 32 0 0 0 180 115" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="212" y="132" font-size="13" fill="#2563eb">α</text>
  <text x="272" y="42" font-size="12" fill="#dc2626">k=tanα＞0</text>
  <line x1="120" y1="45" x2="300" y2="185" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="116" y="38" font-size="12" fill="#16a34a">钝角倾斜角 k＜0</text>
  <text x="46" y="166" font-size="12" fill="#64748b">O</text>
</svg>

## 典型例题

**例 1**：直线过 $A(1,2)$，$B(3,2+2\sqrt3)$，求其斜率与倾斜角。

**解**：$k=\dfrac{2+2\sqrt3-2}{3-1}=\sqrt3$，故 $\tan\alpha=\sqrt3$，又 $\alpha\in[0,\pi)$，得 $\alpha=\dfrac{\pi}{3}$。

**例 2**：直线 $l$ 过点 $P(0,1)$，且与连接 $A(1,-2)$、$B(-2,2)$ 两点的线段相交，求 $l$ 的斜率范围。

**解**：$k_{PA}=\dfrac{-2-1}{1-0}=-3$，$k_{PB}=\dfrac{2-1}{-2-0}=-\dfrac12$。
直线绕 $P$ 从 $PA$ 旋转到 $PB$ 须经过竖直位置（$A,B$ 在 $y$ 轴两侧），
故 $k\le-3$ 或 $k\ge-\dfrac12$，即 $k\in(-\infty,-3]\cup[-\dfrac12,+\infty)$。

## 易错点

- 倾斜角范围 $[0,\pi)$，写成 $[0,\pi]$ 或 $(0,\pi)$ 均错。
- 斜率不存在 $\ne$ 斜率为 0：竖直线无斜率，水平线 $k=0$。
- 用 $k_1k_2=-1$ 判垂直会漏掉"一横一竖"的情形；讨论平行垂直先分"斜率是否存在"。
- 线段相交型求 $k$ 范围，若直线须扫过竖直位置，答案是**两个区间的并**，不是中间一段。

## 背记要点

1. $\alpha\in[0,\pi)$；$k=\tan\alpha$（$\alpha\ne\frac{\pi}{2}$）。
2. 两点斜率公式 $k=\dfrac{y_2-y_1}{x_2-x_1}$（$x_1\ne x_2$）。
3. 平行：$k_1=k_2$；垂直：$k_1k_2=-1$（均需先确认斜率存在）。
4. $\alpha$ 从 $0$ 增到 $\frac{\pi}{2}$，$k$ 从 0 增到 $+\infty$；$\alpha$ 过 $\frac{\pi}{2}$ 后 $k$ 从 $-\infty$ 增到 0。
5. 高考视角：斜率是解析几何的"入口"，直线与线段相交的斜率范围、斜率与倾斜角互化是常考小题。

## 自测题

1. 倾斜角为 $135°$ 的直线斜率为____。
2. 过 $(2,3)$、$(2,-1)$ 的直线的倾斜角为____。
3. 直线 $l_1$ 斜率为 $\dfrac12$，$l_2\perp l_1$，则 $l_2$ 的斜率为____。
4. 判断：倾斜角越大，斜率越大。（　）

## 相关知识点

由斜率写方程见 [[2.2 直线的方程]]；交点与距离计算见 [[2.3 直线的交点坐标与距离公式]]；直线与圆的关系见 [[2.5 直线与圆、圆与圆的位置关系]]。
