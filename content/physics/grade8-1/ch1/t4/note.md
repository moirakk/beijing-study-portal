---
title: 速度的测量
date: 2026-08-06
---

# 速度的测量

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 平均速度 | 总路程除以总时间 | $\bar{v}=s/t$ |
| 瞬时速度 | 某时刻的速度 | 实验中难直接测 |
| 斜面小车实验 | 测小车在不同段平均速度 | 用刻度尺和停表 |

## 知识梳理

测量平均速度的原理是 $v=s/t$。用刻度尺测路程，用停表测时间，即可求出平均速度。斜面坡度要小一些，便于计时。

实验中常把斜面分成上、下两段，分别测出小车通过每段的时间和路程，计算每段的平均速度。下半段平均速度通常大于上半段，说明小车在加速。

## 公式汇总

$$
v=\frac{s}{t}
$$

$$
\bar{v}_{\text{上半段}}=\frac{s_1}{t_1},\quad \bar{v}_{\text{下半段}}=\frac{s_2}{t_2}
$$

<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="240" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">斜面小车测平均速度实验</text>
  <!-- 斜面 -->
  <polygon points="60,185 380,185 380,90" fill="#c8dff0" stroke="#1a6faf" stroke-width="2"/>
  <!-- 斜面表面线 -->
  <line x1="60" y1="185" x2="380" y2="90" stroke="#1a6faf" stroke-width="2.5"/>
  <!-- 地面 -->
  <line x1="40" y1="185" x2="440" y2="185" stroke="#888" stroke-width="2"/>
  <!-- 小车（在斜面上）-->
  <rect x="130" y="140" width="36" height="20" rx="3" fill="#4a9fd4" stroke="#1a6faf" stroke-width="1.5" transform="rotate(-15,148,150)"/>
  <text x="148" y="154" text-anchor="middle" fill="white" font-size="9" transform="rotate(-15,148,154)">小车</text>
  <!-- 金属片（底部挡板） -->
  <rect x="374" y="180" width="8" height="20" fill="#e63946" rx="2"/>
  <text x="400" y="190" fill="#e63946" font-size="10">金属片</text>
  <!-- 路程标注 -->
  <line x1="60" y1="195" x2="380" y2="195" stroke="#333" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="220" y="210" text-anchor="middle" fill="#333" font-size="11">全程 s（时间 t，速度 v̄=s/t）</text>
  <!-- 上半段 -->
  <line x1="60" y1="200" x2="220" y2="200" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="140" y="218" text-anchor="middle" fill="#4a9fd4" font-size="10">上半段 s₁（较慢）</text>
  <!-- 下半段 -->
  <line x1="220" y1="200" x2="380" y2="200" stroke="#e63946" stroke-width="1.5"/>
  <text x="300" y="218" text-anchor="middle" fill="#e63946" font-size="10">下半段 s₂（较快）</text>
  <!-- 刻度尺和停表 -->
  <text x="80" y="125" fill="#1a6faf" font-size="10">📏 刻度尺（测路程）</text>
  <text x="80" y="140" fill="#1a6faf" font-size="10">⏱ 停表（测时间）</text>
  <!-- 工具原理 -->
  <text x="240" y="232" text-anchor="middle" fill="#1a6faf" font-size="11">v̄ = s/t，下半段速度 &gt; 上半段速度（加速运动）</text>
</svg>

## 实验要点

1. 斜面坡度要小，减小时间测量误差。
2. 金属片可让小车在固定位置停下，便于计时。
3. 测量上半段和全程，用减法得下半段路程和时间。
4. 多次测量取平均值。

## 对比分析

| 路段 | 路程 | 时间 | 平均速度 |
|---|---|---|---|
| 上半段 | 短 | 长 | 较小 |
| 下半段 | 短 | 短 | 较大 |

## 背记要点

- 原理：$v=s/t$。
- 工具：刻度尺、停表。
- 斜面坡度小，计时更准确。
- 下半段平均速度一般大于上半段。

## 自测题

1. 斜面长 1 m，小车从顶端滑到底端用时 4 s，平均速度是多少？
2. 上半段 0.5 m 用时 2.5 s，求下半段平均速度。

## 相关知识点

[[长度和时间的测量]] [[运动的快慢]] [[运动的描述]]
