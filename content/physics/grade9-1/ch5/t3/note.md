---
title: 第3节 电阻的测量
date: 2026-08-06
---

# 第3节 电阻的测量

## 核心概念表

| 项目 | 内容 |
|---|---|
| 实验名称 | 伏安法测电阻 |
| 实验原理 | $R=\dfrac{U}{I}$ |
| 主要器材 | 电源、电压表、电流表、滑动变阻器、待测电阻、开关、导线 |

## 知识梳理

**伏安法**：电压表测 $R_x$ 两端电压（并联），电流表测电流（串联），由 $R=\dfrac{U}{I}$ 计算；滑动变阻器串联接入，作用：①保护电路；②改变电压电流实现多次测量。

**测定值电阻**：多次测量取平均值以减小误差。**测小灯泡电阻**：灯丝电阻随温度升高而增大，不同电压下阻值不同，不能取平均值。

## 实验电路图

**伏安法测电阻电路**：

<svg viewBox="0 0 460 210" width="460" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <path d="M50 40 h360 v110 h-360 z" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="215" y1="28" x2="215" y2="52" stroke="#334155" stroke-width="2.5"/>
  <line x1="231" y1="34" x2="231" y2="46" stroke="#334155" stroke-width="5"/>
  <circle cx="90" cy="40" r="3.5" fill="#334155"/>
  <line x1="90" y1="40" x2="112" y2="24" stroke="#334155" stroke-width="2.2"/>
  <text x="100" y="14" font-size="11">S</text>
  <circle cx="120" cy="150" r="15" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="120" y="155" text-anchor="middle" font-size="12">A</text>
  <rect x="200" y="140" width="55" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="227" y="132" text-anchor="middle" font-size="11">Rx（待测）</text>
  <rect x="310" y="140" width="60" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="316" y1="132" x2="340" y2="132" stroke="#334155" stroke-width="2"/>
  <path d="M340 132 l-6 -4 m6 4 l-6 4" stroke="#334155" stroke-width="1.5" fill="none"/>
  <text x="342" y="122" text-anchor="middle" font-size="11">滑动变阻器 R'</text>
  <line x1="200" y1="160" x2="200" y2="188" stroke="#2563eb" stroke-width="1.6"/>
  <line x1="255" y1="160" x2="255" y2="188" stroke="#2563eb" stroke-width="1.6"/>
  <line x1="200" y1="188" x2="212" y2="188" stroke="#2563eb" stroke-width="1.6"/>
  <line x1="243" y1="188" x2="255" y2="188" stroke="#2563eb" stroke-width="1.6"/>
  <circle cx="227" cy="188" r="13" fill="#fff" stroke="#2563eb" stroke-width="2"/>
  <text x="227" y="193" text-anchor="middle" font-size="11" fill="#2563eb">V</text>
  <text x="335" y="200" font-size="11" fill="#64748b">R = U/I，多次测量</text>
</svg>

**故障判断流程**：

```mermaid
flowchart TD
  A[闭合开关观察两表] --> B{电流表有示数?}
  B -- 有 --> C{电压表有示数?}
  C -- 无 --> D[Rx 被短路]
  C -- 有 --> E[电路正常]
  B -- 无 --> F{电压表有示数且接近电源电压?}
  F -- 是 --> G[Rx 断路]
  F -- 否 --> H[干路其他位置断路]
```

## 实验要点

- 连接电路时开关断开，滑片置于阻值最大处；两表量程合适，"+"进"−"出；记录多组 $U$、$I$ 数据。
- 电流表有示数、电压表无示数→$R_x$ 短路；电压表接近电源电压、电流表无示数→$R_x$ 断路。

## 特殊方法测电阻（拓展）

| 方法 | 缺少的表 | 核心思路 |
|---|---|---|
| 安阻法 | 缺电压表 | 用已知 $R_0$ 和电流求电压 |
| 伏阻法 | 缺电流表 | 用已知 $R_0$ 和电压求电流 |
| 等效替代法 | — | 电阻箱替代 $R_x$ 使电流相同 |

## 对比与背记要点

- 测定值电阻：电阻基本不变，多次测量**取平均值**减小误差；测小灯泡：电阻随温度升高而增大，多次测量是研究电阻随温度变化，**不能取平均值**。
- 伏安法原理 $R=U/I$；电压表并联、电流表串联；变阻器保护电路＋实现多次测量；闭合开关前滑片在最大阻值处。

## 自测题

1. 测小灯泡电阻时三次测得 8 Ω、9.5 Ω、11 Ω，为什么差别较大？能取平均值吗？

## 相关知识点

[[第2节 欧姆定律]] [[第4节 变阻器]] [[第3节 电阻]] [[第1节 电流与电压和电阻的关系]]
