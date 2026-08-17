---
title: 流体压强与流速的关系
date: 2026-08-06
---

# 流体压强与流速的关系

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 流体 | 具有流动性的气体和液体 | 空气、水都是流体 |
| 流速与压强关系 | 流速越大的位置，压强越小 | 伯努利原理的定性表述 |
| 升力 | 机翼上下表面压强差产生的向上的力 | 飞机起飞的原因 |

## 知识梳理

气体和液体统称流体。在流体中，流速越大的位置，压强越小；流速越小的位置，压强越大。

机翼升力的产生：机翼上表面凸起，下表面较平。相同时间内，上方气流通过的路程长、流速大、压强小；下方流速小、压强大。上下表面的压强差使机翼获得向上的升力。

生活中的现象：向两张纸中间吹气，两纸靠拢；火车站台设置安全线，因为火车驶过时车体附近空气流速大、压强小，人易被"推"向火车；两船并排行驶容易相撞；刮风时屋顶易被"掀"起（屋顶上方流速大压强小，屋内压强大）。

## 定性关系

$$
v\ \text{大} \Rightarrow p\ \text{小} \qquad v\ \text{小} \Rightarrow p\ \text{大}
$$

## 实验要点

<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="240" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">流体压强与流速（伯努利原理）</text>
  <defs>
    <marker id="flarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
    <marker id="flarr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
  </defs>
  <!-- 机翼截面 -->
  <path d="M80,130 Q160,95 300,120 Q360,130 400,130 Q360,145 300,140 Q160,145 80,130 Z" fill="#c8dff0" stroke="#1a6faf" stroke-width="2"/>
  <text x="240" y="130" text-anchor="middle" fill="#1a6faf" font-size="11">机翼截面</text>
  <!-- 上方（弯曲路径，流速快） -->
  <path d="M30,100 Q80,95 150,88 Q220,82 300,90 Q350,95 430,100" fill="none" stroke="#4a9fd4" stroke-width="2" stroke-dasharray="none"/>
  <path d="M30,95 Q80,90 150,83 Q220,77 300,85 Q350,90 430,95" fill="none" stroke="#4a9fd4" stroke-width="1.5" opacity="0.7"/>
  <path d="M30,90 Q80,85 150,78 Q220,72 300,80 Q350,85 430,90" fill="none" stroke="#4a9fd4" stroke-width="1" opacity="0.5"/>
  <text x="240" y="70" text-anchor="middle" fill="#4a9fd4" font-size="11">上方：流速快→压强小（p低）</text>
  <!-- 箭头（上方） -->
  <line x1="30" y1="95" x2="80" y2="90" stroke="#4a9fd4" stroke-width="2" marker-end="url(#flarr)"/>
  <line x1="200" y1="82" x2="260" y2="79" stroke="#4a9fd4" stroke-width="2" marker-end="url(#flarr)"/>
  <line x1="350" y1="90" x2="410" y2="94" stroke="#4a9fd4" stroke-width="2" marker-end="url(#flarr)"/>
  <!-- 下方（近直路径，流速慢） -->
  <path d="M30,145 Q100,148 200,145 Q300,143 430,145" fill="none" stroke="#4a9fd4" stroke-width="2"/>
  <path d="M30,155 Q100,158 200,155 Q300,153 430,155" fill="none" stroke="#4a9fd4" stroke-width="1.5" opacity="0.7"/>
  <text x="240" y="175" text-anchor="middle" fill="#4a9fd4" font-size="11">下方：流速慢→压强大（p高）</text>
  <line x1="30" y1="149" x2="80" y2="149" stroke="#4a9fd4" stroke-width="2" marker-end="url(#flarr)"/>
  <line x1="200" y1="148" x2="260" y2="148" stroke="#4a9fd4" stroke-width="2" marker-end="url(#flarr)"/>
  <!-- 升力箭头 -->
  <line x1="240" y1="138" x2="240" y2="110" stroke="#e63946" stroke-width="3" marker-end="url(#flarr2)"/>
  <text x="255" y="126" fill="#e63946" font-size="12">升力↑</text>
  <!-- 原理总结 -->
  <rect x="30" y="193" width="420" height="40" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="210" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">伯努利原理：流速大→压强小，流速小→压强大</text>
  <text x="240" y="227" text-anchor="middle" fill="#333" font-size="10">应用：机翼升力、喷雾器、汽车扰流板</text>
</svg>

- 向两张自然下垂的纸中间吹气：纸向中间靠拢，说明中间流速大压强小。
- 硬币跳栏杆：在硬币上方吹气，上方压强减小，硬币被下方大气压托起。
- 漏斗吹乒乓球：向下吹气球不掉落，球上方流速大压强小。
- 分析步骤：找流速差异→判断压强差异→确定压强差方向→解释现象。

## 对比分析

| 位置 | 流速 | 压强 |
|---|---|---|
| 机翼上表面 | 大 | 小 |
| 机翼下表面 | 小 | 大 |
| 结果 | 压强差产生向上升力 | — |

## 背记要点

1. 流体中流速越大的位置，压强越小。
2. 飞机升力来源于机翼上下表面的压强差。
3. 站台安全线、并排行船相撞都用此原理解释。
4. 分析此类题先比流速，再比压强，最后看压强差指向。

## 自测题

1. 为什么乘客必须站在站台安全线以外候车？
2. 用该原理解释足球中"香蕉球"的弧线轨迹。
3. 风沿窗外吹过时，窗帘向内飘还是向外飘？为什么？

## 相关知识点

[[压强]] [[大气压强]] [[液体的压强]] [[浮力]]
