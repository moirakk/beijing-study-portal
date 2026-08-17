---
title: 滑轮
date: 2026-08-06
---

# 滑轮

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 定滑轮 | 轴固定不动的滑轮 | 实质是等臂杠杆 |
| 动滑轮 | 轴随物体一起移动的滑轮 | 实质是 $l_1=2l_2$ 的省力杠杆 |
| 滑轮组 | 定滑轮与动滑轮的组合 | 既省力又能改变方向 |
| 轮轴、斜面 | 其他简单机械 | 斜面也是省力机械 |

## 知识梳理

定滑轮工作时轴固定不动，实质是等臂杠杆：不省力，但能改变力的方向。旗杆顶端的滑轮就是定滑轮。

动滑轮工作时轴随物体移动，实质是动力臂为阻力臂二倍的杠杆：能省一半力（不计摩擦和滑轮重时 $F=G/2$），但不能改变方向，且费距离（绳端移动距离是物体的 2 倍）。

滑轮组由定滑轮和动滑轮组合而成，既能省力又能改变力的方向。若吊起动滑轮的绳子有 $n$ 段，不计摩擦与滑轮重时 $F=G/n$；考虑动滑轮重时 $F=(G+G_{\text{动}})/n$；绳端移动距离 $s=nh$。

## 公式汇总

滑轮组（$n$ 为承担物重的绳子段数）：

$$
F = \frac{G + G_{\text{动}}}{n} \qquad s = nh \qquad v_{\text{绳}} = n v_{\text{物}}
$$

不计动滑轮重与摩擦：

$$
F = \frac{G}{n}
$$

## 实验要点

<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="270" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">定滑轮、动滑轮、滑轮组</text>
  <defs>
    <marker id="slarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <!-- 左：定滑轮 -->
  <text x="75" y="44" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">定滑轮</text>
  <!-- 天花板 -->
  <rect x="30" y="50" width="90" height="8" fill="#888"/>
  <!-- 轴 -->
  <line x1="75" y1="58" x2="75" y2="70" stroke="#555" stroke-width="2"/>
  <!-- 轮 -->
  <circle cx="75" cy="85" r="18" fill="#c8dff0" stroke="#1a6faf" stroke-width="2"/>
  <!-- 绳 -->
  <line x1="63" y1="85" x2="63" y2="140" stroke="#888" stroke-width="2"/>
  <line x1="87" y1="85" x2="87" y2="140" stroke="#888" stroke-width="2"/>
  <!-- 重物 -->
  <rect x="55" y="140" width="35" height="25" fill="#888" rx="2" stroke="#555" stroke-width="1.5"/>
  <text x="72" y="156" text-anchor="middle" fill="white" font-size="9">G</text>
  <!-- 拉力 -->
  <line x1="87" y1="140" x2="87" y2="170" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#slarr)"/>
  <text x="102" y="165" fill="#4a9fd4" font-size="10">F=G</text>
  <text x="75" y="200" text-anchor="middle" fill="#555" font-size="10">改变力方向</text>
  <text x="75" y="213" text-anchor="middle" fill="#555" font-size="10">不省力</text>
  <!-- 中：动滑轮 -->
  <text x="240" y="44" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">动滑轮</text>
  <rect x="195" y="50" width="90" height="8" fill="#888"/>
  <!-- 固定绳 -->
  <line x1="215" y1="58" x2="215" y2="100" stroke="#888" stroke-width="2"/>
  <!-- 轮（随重物移动） -->
  <circle cx="240" cy="110" r="18" fill="#c8dff0" stroke="#1a6faf" stroke-width="2"/>
  <!-- 绳（拉力从轮轴右侧上行）-->
  <line x1="258" y1="110" x2="258" y2="55" stroke="#888" stroke-width="2"/>
  <rect x="224" y="128" width="35" height="25" fill="#888" rx="2" stroke="#555" stroke-width="1.5"/>
  <text x="241" y="144" text-anchor="middle" fill="white" font-size="9">G</text>
  <line x1="258" y1="55" x2="258" y2="40" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#slarr)"/>
  <text x="272" y="50" fill="#4a9fd4" font-size="10">F=G/2</text>
  <text x="240" y="200" text-anchor="middle" fill="#555" font-size="10">省力一半</text>
  <text x="240" y="213" text-anchor="middle" fill="#555" font-size="10">费距离（绳移2s）</text>
  <!-- 右：滑轮组 -->
  <text x="400" y="44" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">滑轮组（n=3）</text>
  <rect x="355" y="50" width="90" height="8" fill="#888"/>
  <!-- 定滑轮 -->
  <circle cx="400" cy="75" r="14" fill="#c8dff0" stroke="#1a6faf" stroke-width="2"/>
  <line x1="400" y1="58" x2="400" y2="61" stroke="#555" stroke-width="2"/>
  <!-- 动滑轮 -->
  <circle cx="400" cy="130" r="14" fill="#c8dff0" stroke="#1a6faf" stroke-width="2"/>
  <!-- 三段绳 -->
  <line x1="386" y1="75" x2="386" y2="130" stroke="#888" stroke-width="1.5"/>
  <line x1="400" y1="89" x2="400" y2="116" stroke="#888" stroke-width="1.5"/>
  <line x1="414" y1="75" x2="414" y2="130" stroke="#888" stroke-width="1.5"/>
  <line x1="414" y1="58" x2="414" y2="40" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#slarr)"/>
  <text x="430" y="50" fill="#4a9fd4" font-size="10">F=G/3</text>
  <rect x="386" y="144" width="35" height="22" fill="#888" rx="2" stroke="#555" stroke-width="1.5"/>
  <text x="403" y="158" text-anchor="middle" fill="white" font-size="9">G</text>
  <text x="400" y="200" text-anchor="middle" fill="#555" font-size="10">n段绳：F=G/n</text>
  <text x="400" y="213" text-anchor="middle" fill="#555" font-size="10">绳移动 n 倍距离</text>
  <!-- 公式 -->
  <text x="240" y="245" text-anchor="middle" fill="#1a6faf" font-size="11">滑轮组：F = G/(n)，s绳 = n × h（不计摩擦和滑轮重）</text>
</svg>

- 用弹簧测力计分别通过定滑轮、动滑轮匀速提升钩码，比较拉力与物重。
- 定滑轮：拉力约等于物重，改变方向不省力。
- 动滑轮：拉力约为物重一半，但测力计移动距离是钩码的 2 倍。
- 确定 $n$ 的方法：数与动滑轮相连的绳子段数。

## 对比分析

| 定滑轮 | 动滑轮 | 滑轮组 |
|---|---|---|
| 等臂杠杆 | 省力杠杆 | 组合机械 |
| 不省力，改变方向 | 省一半力，不改变方向 | 省力且可改变方向 |
| $s=h$ | $s=2h$ | $s=nh$ |

## 背记要点

1. 定滑轮实质是等臂杠杆，动滑轮实质是动力臂为阻力臂 2 倍的杠杆。
2. 滑轮组 $F=(G+G_{\text{动}})/n$，$s=nh$。
3. $n$ 是承担动滑轮和物重的绳子段数，从动滑轮上数。
4. 省力的机械必定费距离。

## 自测题

1. 用一个动滑轮匀速提起 100 N 的重物（不计滑轮重和摩擦），需要多大拉力？
2. 滑轮组用 3 段绳吊起重物，物体升高 2 m，绳端要拉多长？
3. 定滑轮为什么不能省力？

## 相关知识点

[[杠杆]] [[机械效率]] [[功]] [[力]]
