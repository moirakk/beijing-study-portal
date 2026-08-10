---
title: 第2节 串、并联电路中电压的规律
date: 2026-08-06
---

# 第2节 串、并联电路中电压的规律

## 核心概念表

| 规律 | 内容 | 表达式 |
|---|---|---|
| 串联电压规律 | 总电压等于各部分电压之和 | $U=U_1+U_2$ |
| 并联电压规律 | 各支路两端电压相等 | $U=U_1=U_2$ |

## 知识梳理

**串联电路**：总电压等于各部分电压之和：$U=U_1+U_2+\cdots+U_n$。电压按电阻大小分配，电阻越大分得电压越大。

**并联电路**：各支路两端电压相等，且等于电源电压：$U=U_1=U_2=\cdots=U_n$。

**串联电池组**：总电压等于各节电池电压之和。两节干电池串联为 3 V。

## 电路图

**串联分压与并联等压**：

<svg viewBox="0 0 640 250" width="640" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <g>
    <path d="M30 40 h260 v130 h-260 z" fill="none" stroke="#334155" stroke-width="2"/>
    <line x1="145" y1="28" x2="145" y2="52" stroke="#334155" stroke-width="2.5"/>
    <line x1="161" y1="34" x2="161" y2="46" stroke="#334155" stroke-width="5"/>
    <text x="120" y="20" font-size="11" fill="#334155">U（总）</text>
    <rect x="70" y="160" width="50" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
    <text x="95" y="152" text-anchor="middle" font-size="11">R₁</text>
    <rect x="190" y="160" width="50" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
    <text x="215" y="152" text-anchor="middle" font-size="11">R₂</text>
    <line x1="70" y1="180" x2="70" y2="212" stroke="#2563eb" stroke-width="1.6"/>
    <line x1="120" y1="180" x2="120" y2="212" stroke="#2563eb" stroke-width="1.6"/>
    <circle cx="95" cy="212" r="13" fill="#fff" stroke="#2563eb" stroke-width="2"/>
    <text x="95" y="217" text-anchor="middle" font-size="11" fill="#2563eb">V₁</text>
    <line x1="190" y1="180" x2="190" y2="212" stroke="#2563eb" stroke-width="1.6"/>
    <line x1="240" y1="180" x2="240" y2="212" stroke="#2563eb" stroke-width="1.6"/>
    <circle cx="215" cy="212" r="13" fill="#fff" stroke="#2563eb" stroke-width="2"/>
    <text x="215" y="217" text-anchor="middle" font-size="11" fill="#2563eb">V₂</text>
    <text x="160" y="245" text-anchor="middle" font-size="12" fill="#334155">U = U₁ + U₂（串联分压）</text>
  </g>
  <g>
    <path d="M380 40 h230 v130 h-230 z" fill="none" stroke="#334155" stroke-width="2"/>
    <line x1="480" y1="28" x2="480" y2="52" stroke="#334155" stroke-width="2.5"/>
    <line x1="496" y1="34" x2="496" y2="46" stroke="#334155" stroke-width="5"/>
    <text x="455" y="20" font-size="11" fill="#334155">U（电源）</text>
    <line x1="430" y1="100" x2="560" y2="100" stroke="#334155" stroke-width="2"/>
    <line x1="430" y1="100" x2="430" y2="170" stroke="#334155" stroke-width="0"/>
    <rect x="470" y="90" width="50" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
    <text x="495" y="84" text-anchor="middle" font-size="11">R₁</text>
    <rect x="470" y="160" width="50" height="20" fill="#fff" stroke="#334155" stroke-width="2" transform="translate(0,-10)"/>
    <text x="495" y="144" text-anchor="middle" font-size="11">R₂</text>
    <line x1="430" y1="100" x2="430" y2="160" stroke="#334155" stroke-width="2"/>
    <line x1="560" y1="100" x2="560" y2="160" stroke="#334155" stroke-width="2"/>
    <line x1="430" y1="160" x2="470" y2="160" stroke="#334155" stroke-width="2"/>
    <line x1="520" y1="160" x2="560" y2="160" stroke="#334155" stroke-width="2"/>
    <text x="495" y="243" text-anchor="middle" font-size="12" fill="#334155">U = U₁ = U₂（并联等压）</text>
  </g>
</svg>

## 实验要点

- 电压表并联在被测部分两端，“+”进“−”出，量程先选 0~3 V。
- 换用不同规格灯泡多次实验，使结论具有普遍性。
- 结论：串联分压（$U=U_1+U_2$）；并联等压（$U=U_1=U_2$）。

## 对比分析

| 比较项 | 串联电路 | 并联电路 |
|---|---|---|
| 电压关系 | $U=U_1+U_2$ | $U=U_1=U_2$ |
| 电流关系 | $I=I_1=I_2$ | $I=I_1+I_2$ |
| 分配特点 | 电阻大分压多 | 电阻大分流少 |
| 记忆口诀 | 串联分压 | 并联分流、等压 |

## 背记要点

1. 串联：总电压等于各部分电压之和，$U=U_1+U_2$。
2. 并联：各支路电压相等，都等于电源电压。
3. 串联分压：电阻越大分压越多；并联分流：电阻越大电流越小。
4. 两节干电池串联电压 3 V，并联仍为 1.5 V。

## 自测题

1. 电源电压 6 V，两灯串联，$L_1$ 两端电压 2.5 V，$L_2$ 两端电压多大？
2. 并联电路中电源电压 4.5 V，各支路两端电压是多少？

## 相关知识点

[[第1节 电压]] [[第5节 串、并联电路中电流的规律]] [[第3节 串联和并联]] [[第4节 欧姆定律在串、并联电路中的应用]]
