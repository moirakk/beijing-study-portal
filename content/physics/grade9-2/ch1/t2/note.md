---
title: 第2节 电功率
date: 2026-08-07
---

# 第2节 电功率

## 核心概念表

| 项目 | 内容 |
|---|---|
| 定义 | 电流在单位时间内做的功，表示电流做功的**快慢** |
| 定义式 | $P=\dfrac{W}{t}$ |
| 常用式 | $P=UI$ |
| 单位 | 瓦特（W）、千瓦（kW），$1\ \text{kW}=10^3\ \text{W}$ |
| 额定电压/额定功率 | 用电器正常工作时的电压/该电压下的功率 |

## 知识梳理

1. **电功率**是表示电流做功快慢的物理量，功率大→做功快，不等于做功多。
2. **额定值与实际值**："220V 40W"表示额定电压 220 V、额定功率 40 W。实际电压等于额定电压时，实际功率才等于额定功率；$U_{实}<U_{额}$ 时 $P_{实}<P_{额}$。
3. $1\ \text{kW·h}$ 的物理意义：功率为 1 kW 的用电器工作 1 h 消耗的电能。
4. 由铭牌求电阻：$R=\dfrac{U_{额}^2}{P_{额}}$（视电阻不变可估算其他电压下的实际功率）。

## 公式汇总

$$
P=\frac{W}{t}=UI
$$

纯电阻电路的变形式：

$$
P=I^2R=\frac{U^2}{R}
$$

单位：$P$——W，$W$——J，$t$——s；$1\ \text{W}=1\ \text{J/s}=1\ \text{V·A}$。

## 图示：同一灯泡在不同电压下的亮度

<svg viewBox="0 0 380 150" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <circle cx="90" cy="60" r="22" fill="#fef08a" stroke="#334155" stroke-width="2"/>
  <line x1="75" y1="45" x2="105" y2="75" stroke="#334155" stroke-width="1.5"/>
  <line x1="105" y1="45" x2="75" y2="75" stroke="#334155" stroke-width="1.5"/>
  <text x="90" y="110" text-anchor="middle" font-size="12">U=220V 正常发光</text>
  <text x="90" y="128" text-anchor="middle" font-size="12" fill="#16a34a">P实=P额=40W</text>
  <circle cx="280" cy="60" r="22" fill="#fefce8" stroke="#94a3b8" stroke-width="2"/>
  <line x1="265" y1="45" x2="295" y2="75" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="295" y1="45" x2="265" y2="75" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="280" y="110" text-anchor="middle" font-size="12">U=110V 变暗</text>
  <text x="280" y="128" text-anchor="middle" font-size="12" fill="#dc2626">P实=U²/R=10W（R视为不变）</text>
</svg>

## 易错点

- 功率大不代表消耗电能多，还要看时间：$W=Pt$。
- 电压减半（电阻不变）时，实际功率变为原来的 $\dfrac{1}{4}$（由 $P=\dfrac{U^2}{R}$）。
- 灯泡亮度由**实际功率**决定，不由额定功率决定。
- "kW·h"是能量单位，"kW"是功率单位，不可混淆。

## 背记要点

1. $P=\dfrac{W}{t}=UI$；纯电阻电路 $P=I^2R=\dfrac{U^2}{R}$。
2. 只有在额定电压下，实际功率才等于额定功率；亮度看实际功率。
3. 串联电路中 $P\propto R$（电流相同），并联电路中 $P\propto\dfrac{1}{R}$（电压相同）。

## 自测题

1. "220V 100W"的灯正常工作 5 h 消耗电能多少 kW·h？合多少焦？
2. 该灯接在 110 V 电路中（电阻不变），实际功率多大？

## 相关知识点

[[第1节 电能 电功]] [[第3节 测量小灯泡的电功率]] [[第4节 焦耳定律]] [[第2节 欧姆定律]]
