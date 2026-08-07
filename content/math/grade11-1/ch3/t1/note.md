---
title: 3.1 椭圆
date: 2026-08-07
---

# 3.1 椭圆

## 概念定义

**椭圆**：平面内到两定点 $F_1,F_2$ 距离之**和**等于常数 $2a$（$2a>|F_1F_2|=2c$）的点的轨迹。
$$|PF_1|+|PF_2|=2a\quad(a>c>0)$$
若 $2a=2c$ 轨迹为线段 $F_1F_2$；若 $2a<2c$ 无轨迹。基本量关系：$b^2=a^2-c^2$。

## 知识梳理

| 项目 | 焦点在 $x$ 轴 | 焦点在 $y$ 轴 |
| --- | --- | --- |
| 标准方程 | $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$（$a>b>0$） | $\dfrac{y^2}{a^2}+\dfrac{x^2}{b^2}=1$（$a>b>0$） |
| 焦点 | $(\pm c,0)$ | $(0,\pm c)$ |
| 顶点 | $(\pm a,0)$，$(0,\pm b)$ | $(0,\pm a)$，$(\pm b,0)$ |
| 长轴 / 短轴 | $2a$ / $2b$ | 同左 |
| 离心率 | $e=\dfrac{c}{a}\in(0,1)$ | $e$ 越大越扁，越小越圆 |
| 焦距范围 | 椭圆上点到焦点距离 $\in[a-c,a+c]$ | 通径长 $\dfrac{2b^2}{a}$ |

**焦点三角形**：$\triangle PF_1F_2$ 中周长为 $2a+2c$；结合余弦定理与 $|PF_1|+|PF_2|=2a$ 可求面积 $S=b^2\tan\dfrac{\theta}{2}$（$\theta=\angle F_1PF_2$）。
**点差法**：$AB$ 为椭圆的弦，中点 $(x_0,y_0)$，两式相减得 $k_{AB}=-\dfrac{b^2x_0}{a^2y_0}$（中点弦斜率公式）。

## 图示：椭圆及其焦点

<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax31" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <line x1="15" y1="110" x2="345" y2="110" stroke="#334155" stroke-width="1.5" marker-end="url(#ax31)"/>
  <line x1="180" y1="205" x2="180" y2="15" stroke="#334155" stroke-width="1.5" marker-end="url(#ax31)"/>
  <text x="347" y="126" font-size="13" fill="#334155">x</text>
  <text x="186" y="20" font-size="13" fill="#334155">y</text>
  <ellipse cx="180" cy="110" rx="130" ry="70" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="290" cy="110" r="4" fill="#2563eb"/>
  <circle cx="70" cy="110" r="4" fill="#2563eb"/>
  <text x="296" y="128" font-size="12" fill="#2563eb">F₂(c,0)</text>
  <text x="20" y="128" font-size="12" fill="#2563eb">F₁(−c,0)</text>
  <circle cx="240" cy="53" r="4" fill="#16a34a"/>
  <text x="248" y="48" font-size="12" fill="#16a34a">P</text>
  <line x1="70" y1="110" x2="240" y2="53" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5 3"/>
  <line x1="290" y1="110" x2="240" y2="53" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5 3"/>
  <text x="120" y="72" font-size="12" fill="#16a34a">|PF₁|+|PF₂|=2a</text>
  <text x="168" y="126" font-size="12" fill="#64748b">O</text>
  <text x="312" y="102" font-size="12" fill="#64748b">a</text>
  <text x="186" y="44" font-size="12" fill="#64748b">b</text>
</svg>

## 典型例题

**例 1**：椭圆 $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ 上一点 $P$ 满足 $|PF_1|=4$，求 $|PF_2|$，并求离心率。

**解**：$a=5$，$b=3$，$c=\sqrt{25-9}=4$。
由定义 $|PF_1|+|PF_2|=2a=10$，得 $|PF_2|=6$。离心率 $e=\dfrac{c}{a}=\dfrac45$。

**例 2**：椭圆 $\dfrac{x^2}{4}+\dfrac{y^2}{2}=1$ 的弦 $AB$ 以 $M(1,1)$ 为中点，求直线 $AB$ 的方程。

**解**（点差法）：设 $A(x_1,y_1)$，$B(x_2,y_2)$，代入椭圆方程相减：
$\dfrac{(x_1+x_2)(x_1-x_2)}{4}+\dfrac{(y_1+y_2)(y_1-y_2)}{2}=0$。
中点条件 $x_1+x_2=2$，$y_1+y_2=2$，得 $k=\dfrac{y_1-y_2}{x_1-x_2}=-\dfrac{2\times2}{4\times2}=-\dfrac12$。
故 $AB:y-1=-\dfrac12(x-1)$，即 $x+2y-3=0$（$M$ 在椭圆内，弦存在，检验通过）。

## 易错点

- 定义中必须 $2a>2c$；等于时是线段，小于时无轨迹。
- 判断焦点位置看**分母大小**：$x^2$ 项分母大则焦点在 $x$ 轴；含参时需分类讨论。
- 椭圆中 $b^2=a^2-c^2$，与双曲线的 $b^2=c^2-a^2$ 不要混淆。
- 点差法求出直线后须**检验中点在椭圆内**（保证弦存在，即 $\Delta>0$）。

## 背记要点

1. 定义：距离**和**为 $2a$（$2a>2c$）；$b^2=a^2-c^2$。
2. $e=\dfrac{c}{a}\in(0,1)$；焦半径范围 $[a-c,a+c]$；通径 $\dfrac{2b^2}{a}$。
3. 焦点三角形周长 $2a+2c$；面积 $b^2\tan\dfrac{\theta}{2}$。
4. 中点弦：$k_{AB}\cdot k_{OM}=-\dfrac{b^2}{a^2}$（$O$ 为原点，$M$ 为弦中点）。
5. 高考视角：北京卷解析几何大题多以椭圆为载体，"联立—韦达—弦长/定点定值"是标准流程，定义转化与点差法是提速利器。

## 自测题

1. 椭圆 $\dfrac{x^2}{16}+\dfrac{y^2}{7}=1$ 的焦距为____，离心率为____。
2. 到 $F_1(-2,0)$、$F_2(2,0)$ 距离之和为 6 的点的轨迹方程为____。
3. 椭圆 $\dfrac{x^2}{9}+\dfrac{y^2}{4}=1$ 的通径长为____。
4. 判断：$e$ 越接近 1，椭圆越接近圆。（　）

## 相关知识点

距离和改为距离差即得 [[3.2 双曲线]]；到定点与定直线距离相等的轨迹见 [[3.3 抛物线]]；弦长与联立技巧的基础见 [[2.5 直线与圆、圆与圆的位置关系]]。
