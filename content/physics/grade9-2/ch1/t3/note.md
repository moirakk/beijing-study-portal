---
title: 第3节 测量小灯泡的电功率
date: 2026-08-07
---

# 第3节 测量小灯泡的电功率

## 核心概念表

| 项目 | 内容 |
|---|---|
| 实验原理 | $P=UI$ |
| 测量方法 | 伏安法：电压表测 $U$，电流表测 $I$ |
| 主要器材 | 电源、开关、小灯泡、电流表、电压表、滑动变阻器、导线 |
| 滑动变阻器作用 | 保护电路；改变灯泡两端电压，多次测量 |

## 实验电路图

<svg viewBox="0 0 420 200" width="420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <rect x="30" y="30" width="360" height="140" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="150" y1="30" x2="165" y2="18" stroke="#334155" stroke-width="2"/>
  <circle cx="148" cy="30" r="3" fill="#334155"/><circle cx="180" cy="30" r="3" fill="#334155"/>
  <text x="163" y="12" text-anchor="middle" font-size="12">S</text>
  <line x1="55" y1="96" x2="55" y2="104" stroke="#334155" stroke-width="4"/>
  <line x1="45" y1="90" x2="45" y2="110" stroke="#334155" stroke-width="2"/>
  <rect x="28" y="94" width="4" height="12" fill="#fff"/><text x="18" y="104" font-size="12">电源</text>
  <circle cx="270" cy="30" r="16" fill="#fff" stroke="#2563eb" stroke-width="2"/><text x="270" y="35" text-anchor="middle" font-size="12" fill="#2563eb">A</text>
  <circle cx="340" cy="100" r="14" fill="#fef9c3" stroke="#334155" stroke-width="2"/>
  <line x1="330" y1="90" x2="350" y2="110" stroke="#334155" stroke-width="1.5"/><line x1="350" y1="90" x2="330" y2="110" stroke="#334155" stroke-width="1.5"/>
  <circle cx="340" cy="150" r="16" fill="#fff" stroke="#dc2626" stroke-width="2"/><text x="340" y="155" text-anchor="middle" font-size="12" fill="#dc2626">V</text>
  <line x1="340" y1="114" x2="340" y2="134" stroke="#dc2626" stroke-width="1.5"/>
  <rect x="150" y="160" width="80" height="18" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="160" y1="150" x2="190" y2="150" stroke="#334155" stroke-width="2"/><line x1="190" y1="150" x2="190" y2="160" stroke="#334155" stroke-width="2"/>
  <text x="190" y="196" text-anchor="middle" font-size="12">滑动变阻器 R</text>
</svg>

（电流表与灯串联，电压表与灯并联，滑动变阻器串联在干路中。）

## 实验步骤

1. 按电路图连接电路，连接时**开关断开**，滑动变阻器滑片移到**阻值最大处**。
2. 闭合开关，移动滑片，使电压表示数等于灯的额定电压，读出 $I$，算出**额定功率** $P=U_{额}I$。
3. 再调节滑片，使电压略高于、略低于额定电压，分别测出实际功率，观察亮度变化。

## 数据记录表（示例）

| 次数 | $U/\text{V}$ | $I/\text{A}$ | $P/\text{W}$ | 亮度 |
|---|---|---|---|---|
| 1 | 2.5（额定） | 0.3 | 0.75 | 正常 |
| 2 | 3.0 | 0.32 | 0.96 | 更亮 |
| 3 | 2.0 | 0.26 | 0.52 | 较暗 |

## 易错点

- 本实验多次测量的目的是**测不同电压下的实际功率**，不是求平均值（不同状态下功率不同，无平均意义）。
- 灯丝电阻随温度升高而增大，故各次算出的电阻不相等，这是正常现象。
- 电压表量程应大于灯的额定电压；电流表选合适量程，试触选择。
- 灯不亮但电压表有明显示数→灯泡断路（开路）。

## 背记要点

1. 原理 $P=UI$；伏安法测功率。
2. 滑动变阻器：保护电路 + 改变灯两端电压。
3. 额定功率只有一个，实际功率有多个；不能求平均功率。

## 自测题

1. 实验中电压表示数为 2.5 V、电流表示数为 0.3 A，小灯泡额定功率多大？
2. 为什么本实验不把三次功率取平均值？

## 相关知识点

[[第2节 电功率]] [[第1节 电能 电功]] [[第4节 焦耳定律]] [[第2节 欧姆定律]]
