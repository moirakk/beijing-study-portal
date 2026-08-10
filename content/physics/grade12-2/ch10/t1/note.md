---
title: 专题十 恒定电流
date: 2026-08-10
---

# 专题十 恒定电流

## 概念定义

**电流**：$I = \dfrac{q}{t}$，方向为正电荷定向移动方向。

**欧姆定律**：$I = \dfrac{U}{R}$，电阻 $R = \dfrac{U}{I}$。

**电阻定律**：$R = \rho\dfrac{l}{S}$，其中 $\rho$ 为电阻率，与材料、温度有关。

**电功与电功率**：$W = UIt$，$P = UI$。纯电阻电路 $P = I^2R = \dfrac{U^2}{R}$。

**闭合电路欧姆定律**：$I = \dfrac{E}{R+r}$，路端电压 $U = E - Ir$。

## 知识梳理

| 项目 | 要点 |
| --- | --- |
| 电流 | $I = \frac{q}{t}$ |
| 欧姆定律 | $I = \frac{U}{R}$ |
| 电阻定律 | $R = \rho\frac{l}{S}$ |
| 电功率 | $P = UI$，纯电阻 $P = I^2R$ |
| 闭合电路 | $I = \frac{E}{R+r}$，$U = E - Ir$ |
| 电源功率 | 总功率 $P = EI$，内阻消耗 $P = I^2r$ |
| 串并联 | 串联分压，并联分流 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <rect x="60" y="60" width="240" height="120" rx="8" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="120" x2="120" y2="120" stroke="#2563eb" stroke-width="2"/>
  <line x1="120" y1="120" x2="120" y2="60" stroke="#2563eb" stroke-width="2"/>
  <line x1="120" y1="60" x2="240" y2="60" stroke="#2563eb" stroke-width="2"/>
  <line x1="240" y1="60" x2="240" y2="120" stroke="#2563eb" stroke-width="2"/>
  <line x1="240" y1="120" x2="300" y2="120" stroke="#2563eb" stroke-width="2"/>
  <line x1="300" y1="120" x2="300" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="300" y1="180" x2="60" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="60" y1="180" x2="60" y2="120" stroke="#2563eb" stroke-width="2"/>
  <rect x="120" y="100" width="120" height="40" rx="4" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="180" y="125" text-anchor="middle" font-size="12" fill="#2563eb">R（外电阻）</text>
  <text x="180" y="45" text-anchor="middle" font-size="12" fill="#dc2626">E, r（电源）</text>
  <text x="180" y="215" text-anchor="middle" font-size="12" fill="#64748b">I = E/(R+r)，U = E - Ir</text>
</svg>

## 典型例题

**例 1**：电源电动势 $E = 12\ \text{V}$，内阻 $r = 1\ \Omega$，外接电阻 $R = 5\ \Omega$，求电流和路端电压。

**解**：$I = \dfrac{E}{R+r} = \dfrac{12}{5+1} = 2\ \text{A}$；$U = E - Ir = 12 - 2\times1 = 10\ \text{V}$。

**例 2**：电阻 $R = 10\ \Omega$，两端电压 $20\ \text{V}$，求电流和电功率。

**解**：$I = \dfrac{U}{R} = \dfrac{20}{10} = 2\ \text{A}$；$P = UI = 20\times2 = 40\ \text{W}$。

**例 3**：两根同种材料导线，长度相同，横截面积之比 $S_1:S_2 = 1:2$，求电阻之比。

**解**：$R = \rho\dfrac{l}{S}$，$R_1:R_2 = S_2:S_1 = 2:1$。

## 易错点

- 欧姆定律 $I = \frac{U}{R}$ 适用于**纯电阻**电路。
- 电功率 $P = UI$ 对任何电路成立，$P = I^2R$ 仅适用于纯电阻。
- 闭合电路欧姆定律中 $r$ 是**内阻**，不能忽略。
- 路端电压随外电阻增大而**增大**。
- 电阻定律中 $\rho$ 是电阻率，与长度、横截面积无关。

## 背记要点

1. 电流：$I = \frac{q}{t}$。
2. 欧姆定律：$I = \frac{U}{R}$。
3. 电阻定律：$R = \rho\frac{l}{S}$。
4. 电功率：$P = UI$。
5. 闭合电路：$I = \frac{E}{R+r}$，$U = E - Ir$。

## 自测题

1. 闭合电路欧姆定律的表达式是____。
2. 外电阻增大时，路端电压____。
3. 判断：$P = I^2R$ 适用于所有电路。（　）
4. 电阻率与温度有关，金属的电阻率随温度升高而____。

## 相关知识点

电流与电场结合见 [[专题九 电场]]；电学实验见 [[专题十七 实验专题]]；与磁场综合见 [[专题十四 电磁综合计算]]。
