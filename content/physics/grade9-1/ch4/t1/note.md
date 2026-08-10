---
title: 第1节 电压
date: 2026-08-06
---

# 第1节 电压

## 核心概念表

| 概念 | 含义 | 单位 |
|---|---|---|
| 电压 | 使电路中形成电流的原因 | 伏特（V） |
| 电源 | 提供电压的装置 | — |
| 电压表 | 测量电压的仪表 | 符号 V（圆圈内） |

## 知识梳理

电压（符号 $U$）是使自由电荷定向移动形成电流的原因；电源是提供电压的装置。电路有持续电流的条件：有电源且电路为通路。单位伏特（V），换算：$1\ \text{kV}=10^{3}\ \text{V}$，$1\ \text{V}=10^{3}\ \text{mV}$。

**常见电压值**：一节干电池 **1.5 V**；一节蓄电池 2 V；家庭电路 **220 V**；安全电压**不高于 36 V**；手机锂电池约 3.7 V。

**电压表使用**：必须**并联**在被测元件两端；电流"+"进"−"出；不超量程；**可直接接电源两极**测电源电压（内阻极大，相当于断路，不会烧表）。读数：0~3 V 量程分度值 0.1 V，0~15 V 量程分度值 0.5 V，同一指针位置两量程读数相差 5 倍。

## 对比分析

| 比较项 | 电流表 | 电压表 |
|---|---|---|
| 连接方式 | 串联 | 并联 |
| 能否直接接电源 | 不能 | 能 |
| 内阻特点 | 极小（视为导线） | 极大（视为断路） |

**电压表的接法**（并联在被测元件两端）：

<svg viewBox="0 0 440 200" width="440" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="arv" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <path d="M60 40 h320 v100 h-320 z" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="205" y1="28" x2="205" y2="52" stroke="#334155" stroke-width="2.5"/>
  <line x1="222" y1="34" x2="222" y2="46" stroke="#334155" stroke-width="5"/>
  <text x="196" y="20" font-size="11">+</text><text x="224" y="20" font-size="11">−</text>
  <circle cx="150" cy="140" r="15" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="140" y1="130" x2="160" y2="150" stroke="#334155" stroke-width="1.8"/>
  <line x1="160" y1="130" x2="140" y2="150" stroke="#334155" stroke-width="1.8"/>
  <text x="150" y="170" text-anchor="middle" font-size="11">L</text>
  <circle cx="300" cy="140" r="3.5" fill="#334155"/>
  <line x1="300" y1="140" x2="320" y2="124" stroke="#334155" stroke-width="2.2"/>
  <text x="330" y="135" font-size="11">S</text>
  <line x1="115" y1="140" x2="115" y2="185" stroke="#334155" stroke-width="2"/>
  <line x1="185" y1="140" x2="185" y2="185" stroke="#334155" stroke-width="2"/>
  <line x1="115" y1="185" x2="135" y2="185" stroke="#334155" stroke-width="2"/>
  <line x1="165" y1="185" x2="185" y2="185" stroke="#334155" stroke-width="2"/>
  <circle cx="150" cy="185" r="15" fill="#fff" stroke="#2563eb" stroke-width="2"/>
  <text x="150" y="190" text-anchor="middle" font-size="13" fill="#2563eb">V</text>
  <text x="123" y="178" font-size="9" fill="#dc2626">+</text><text x="172" y="178" font-size="9" fill="#2563eb">−</text>
  <path d="M90 40 h26" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arv)"/>
  <text x="255" y="185" font-size="11" fill="#64748b">电压表与 L 并联，测 L 两端电压</text>
</svg>

**电压表表盘读数**（双量程，指针示 2.6 V / 13 V）：

<svg viewBox="0 0 360 190" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <path d="M40 150 A140 140 0 0 1 320 150" fill="none" stroke="#334155" stroke-width="2"/>
  <g stroke="#334155">
    <line x1="40" y1="150" x2="55" y2="150"/>
    <line x1="110" y1="52" x2="118" y2="65"/>
    <line x1="180" y1="38" x2="180" y2="53"/>
    <line x1="250" y1="52" x2="242" y2="65"/>
    <line x1="320" y1="150" x2="305" y2="150"/>
  </g>
  <text x="34" y="170" font-size="10" fill="#334155">0</text>
  <text x="106" y="45" font-size="10" fill="#334155">1</text>
  <text x="177" y="30" font-size="10" fill="#334155">1.5</text>
  <text x="246" y="45" font-size="10" fill="#334155">2</text>
  <text x="313" y="170" font-size="10" fill="#334155">3</text>
  <text x="34" y="185" font-size="10" fill="#64748b">0</text>
  <text x="176" y="70" font-size="10" fill="#64748b">7.5</text>
  <text x="310" y="185" font-size="10" fill="#64748b">15</text>
  <line x1="180" y1="150" x2="273" y2="82" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="180" cy="150" r="6" fill="#334155"/>
  <text x="180" y="178" text-anchor="middle" font-size="12" fill="#2563eb">V</text>
  <text x="180" y="196" text-anchor="middle" font-size="11" fill="#dc2626">读数：小量程 2.6 V ／ 大量程 13 V</text>
</svg>

## 实验与背记要点

- 先试触选量程：超量程换大、偏转过小换小；指针反偏说明接线柱接反。
- 电压使电荷定向移动，电源提供电压；干电池 1.5 V，家庭电路 220 V，安全电压不高于 36 V。
- 电压表并联使用、可直接接电源；量程 0~3 V（0.1 V）、0~15 V（0.5 V）；持续电流条件：有电源且为通路。

## 自测题

1. 电压表为什么可以直接接在电源两极上而电流表不能？用 0~15 V 量程测量指针指 10 V，若误看成 0~3 V 量程会读成多少？

## 相关知识点

[[第4节 电流的测量]] [[第2节 串、并联电路中电压的规律]] [[第1节 电流与电压和电阻的关系]]
