---
title: 第5节 串、并联电路中电流的规律
date: 2026-08-06
---

# 第5节 串、并联电路中电流的规律

## 核心概念表

| 规律 | 内容 | 表达式 |
|---|---|---|
| 串联电流规律 | 电流处处相等 | $I=I_1=I_2$ |
| 并联电流规律 | 干路电流等于各支路电流之和 | $I=I_1+I_2$ |

## 知识梳理

**串联电路**：电流只有一条路径，处处相等：$I=I_1=I_2=\cdots=I_n$，与用电器规格无关。

**并联电路**：干路电流在分支处分流，等于各支路电流之和：$I=I_1+I_2+\cdots+I_n$。电阻小的支路电流大。

## 电路图

**串联电流处处相等 / 并联干路电流等于支路之和**：

<svg viewBox="0 0 640 240" width="640" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ar5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <g>
    <path d="M30 40 h250 v150 h-250 z" fill="none" stroke="#334155" stroke-width="2"/>
    <line x1="140" y1="28" x2="140" y2="52" stroke="#334155" stroke-width="2.5"/>
    <line x1="156" y1="34" x2="156" y2="46" stroke="#334155" stroke-width="5"/>
    <circle cx="90" cy="190" r="14" fill="#fff" stroke="#334155" stroke-width="2"/>
    <line x1="80" y1="180" x2="100" y2="200" stroke="#334155" stroke-width="1.8"/>
    <line x1="100" y1="180" x2="80" y2="200" stroke="#334155" stroke-width="1.8"/>
    <text x="90" y="222" text-anchor="middle" font-size="11">L₁</text>
    <circle cx="200" cy="190" r="14" fill="#fff" stroke="#334155" stroke-width="2"/>
    <line x1="190" y1="180" x2="210" y2="200" stroke="#334155" stroke-width="1.8"/>
    <line x1="210" y1="180" x2="190" y2="200" stroke="#334155" stroke-width="1.8"/>
    <text x="200" y="222" text-anchor="middle" font-size="11">L₂</text>
    <text x="45" y="130" font-size="11" fill="#dc2626">A点</text>
    <text x="140" y="182" font-size="11" fill="#dc2626">B点</text>
    <text x="255" y="130" font-size="11" fill="#dc2626">C点</text>
    <text x="155" y="235" text-anchor="middle" font-size="12" fill="#334155">Iₐ = I_B = I_C</text>
  </g>
  <g>
    <path d="M370 40 h240 v150 h-240 z" fill="none" stroke="#334155" stroke-width="2"/>
    <line x1="475" y1="28" x2="475" y2="52" stroke="#334155" stroke-width="2.5"/>
    <line x1="491" y1="34" x2="491" y2="46" stroke="#334155" stroke-width="5"/>
    <line x1="430" y1="90" x2="550" y2="90" stroke="#334155" stroke-width="2"/>
    <line x1="430" y1="90" x2="430" y2="190" stroke="#334155" stroke-width="0"/>
    <line x1="430" y1="90" x2="430" y2="140" stroke="#334155" stroke-width="2"/>
    <line x1="550" y1="90" x2="550" y2="140" stroke="#334155" stroke-width="2"/>
    <line x1="430" y1="140" x2="550" y2="140" stroke="#334155" stroke-width="2"/>
    <circle cx="490" cy="90" r="13" fill="#fff" stroke="#334155" stroke-width="2"/>
    <line x1="481" y1="81" x2="499" y2="99" stroke="#334155" stroke-width="1.7"/>
    <line x1="499" y1="81" x2="481" y2="99" stroke="#334155" stroke-width="1.7"/>
    <text x="515" y="80" font-size="11">L₁ (I₁)</text>
    <circle cx="490" cy="140" r="13" fill="#fff" stroke="#334155" stroke-width="2"/>
    <line x1="481" y1="131" x2="499" y2="149" stroke="#334155" stroke-width="1.7"/>
    <line x1="499" y1="131" x2="481" y2="149" stroke="#334155" stroke-width="1.7"/>
    <text x="515" y="130" font-size="11">L₂ (I₂)</text>
    <path d="M395 40 h24" stroke="#dc2626" stroke-width="2.2" marker-end="url(#ar5)"/>
    <text x="405" y="30" font-size="11" fill="#dc2626">干路 I</text>
    <text x="490" y="225" text-anchor="middle" font-size="12" fill="#334155">I = I₁ + I₂</text>
  </g>
</svg>

## 实验要点

- 用电流表测量串联电路 A/B/C 三点或并联电路干路、各支路电流。
- 换用不同规格灯泡多次实验，使结论具有普遍性。
- 电流表串联接入，“+”进“−”出；测量前开关断开。

## 对比分析

| 比较项 | 串联电路 | 并联电路 |
|---|---|---|
| 电流关系 | $I=I_1=I_2$ | $I=I_1+I_2$ |
| 电流路径 | 一条 | 多条 |
| 相同规格用电器 | 电流相等 | 各支路电流相等且为干路一半 |

## 背记要点

1. 串联：$I=I_1=I_2$，电流处处相等，与用电器规格无关。
2. 并联：$I=I_1+I_2$，干路电流最大。
3. 换用不同规格灯泡多次实验是为了让结论具有普遍性。
4. 干路电流一定大于任何一条支路电流。

## 自测题

1. 并联电路干路电流 0.8 A，一条支路电流 0.3 A，另一条支路电流多大？
2. 探究电流规律实验中，为什么要换不同规格的灯泡多次测量？

## 相关知识点

[[第3节 串联和并联]] [[第4节 电流的测量]] [[第2节 串、并联电路中电压的规律]] [[第4节 欧姆定律在串、并联电路中的应用]]
