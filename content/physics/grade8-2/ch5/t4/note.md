---
title: 机械能及其转化
date: 2026-08-06
---

# 机械能及其转化

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 机械能 | 动能与势能的统称 | $E_{\text{机}}=E_{\text{动}}+E_{\text{势}}$ |
| 机械能守恒 | 只有动能和势能相互转化时机械能总量不变 | 条件：不计摩擦阻力 |
| 能量转化 | 动能与势能可以互相转化 | 滚摆、单摆、蹦床 |

## 知识梳理

动能和势能统称机械能，一个物体既可以有动能也可以有势能。

动能与势能可以相互转化：滚摆下降时，重力势能转化为动能；上升时动能转化为重力势能。荡秋千、单摆摆动过程同理。皮球落地压扁的瞬间，动能转化为弹性势能；恢复形状弹起时，弹性势能又转化为动能。

如果只有动能和势能相互转化，机械能的总和保持不变，即机械能守恒。实际中因摩擦和空气阻力，一部分机械能会转化为内能，机械能总量逐渐减小，如秋千摆动幅度越来越小。

人造卫星沿椭圆轨道运行是机械能守恒的典型：从远地点向近地点运行时，势能转化为动能，速度变大；反之速度变小。

## 公式表达

机械能守恒（忽略阻力）：

$$
E_{\text{动}} + E_{\text{势}} = \text{恒量}
$$

## 实验要点

<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="250" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">单摆：机械能守恒（Ep ⇌ Ek）</text>
  <defs>
    <marker id="mearr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
    <marker id="mearr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <!-- 悬点 -->
  <circle cx="240" cy="45" r="6" fill="#888"/>
  <!-- 三个位置摆绳 -->
  <!-- 左侧最高点 -->
  <line x1="240" y1="45" x2="120" y2="170" stroke="#888" stroke-width="2"/>
  <circle cx="120" cy="175" r="16" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2"/>
  <text x="120" y="180" text-anchor="middle" fill="white" font-size="9">A</text>
  <!-- 摆线（中间最低点） -->
  <line x1="240" y1="45" x2="240" y2="170" stroke="#888" stroke-width="2"/>
  <circle cx="240" cy="175" r="18" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2.5"/>
  <text x="240" y="180" text-anchor="middle" fill="white" font-size="10">O</text>
  <!-- 右侧最高点 -->
  <line x1="240" y1="45" x2="360" y2="170" stroke="#888" stroke-width="2"/>
  <circle cx="360" cy="175" r="16" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2"/>
  <text x="360" y="180" text-anchor="middle" fill="white" font-size="9">B</text>
  <!-- 能量标注 -->
  <text x="95" y="150" text-anchor="middle" fill="#1a6faf" font-size="10">Ep最大</text>
  <text x="95" y="162" text-anchor="middle" fill="#1a6faf" font-size="10">Ek=0</text>
  <text x="240" y="205" text-anchor="middle" fill="#e63946" font-size="11">Ep=0，Ek最大</text>
  <text x="390" y="150" text-anchor="middle" fill="#1a6faf" font-size="10">Ep最大</text>
  <text x="390" y="162" text-anchor="middle" fill="#1a6faf" font-size="10">Ek=0</text>
  <!-- 转化箭头 -->
  <path d="M140,168 Q190,145 225,168" fill="none" stroke="#e63946" stroke-width="2" marker-end="url(#mearr)"/>
  <text x="183" y="142" fill="#e63946" font-size="10">Ep→Ek</text>
  <path d="M255,168 Q290,145 345,168" fill="none" stroke="#4a9fd4" stroke-width="2" marker-end="url(#mearr2)"/>
  <text x="300" y="142" fill="#4a9fd4" font-size="10">Ek→Ep</text>
  <!-- 守恒说明 -->
  <rect x="60" y="215" width="360" height="30" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="230" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">不计空气阻力：Ek + Ep = 机械能 = 常数</text>
  <text x="240" y="244" text-anchor="middle" fill="#333" font-size="10">有摩擦→机械能减少（转化为内能）</text>
</svg>

- 滚摆实验：观察上下运动中高度与转速的变化，分析动能与重力势能的转化。
- 单摆实验：最高点速度为零（动能最小、势能最大），最低点速度最大（动能最大、势能最小）。
- 每次摆动高度略降，说明有机械能转化为内能。

## 对比分析

| 过程 | 能量转化 |
|---|---|
| 物体下落加速 | 重力势能 → 动能 |
| 上抛物体上升 | 动能 → 重力势能 |
| 皮球接触地面被压扁 | 动能 → 弹性势能 |
| 弹簧把球弹出 | 弹性势能 → 动能 |

## 背记要点

1. 机械能 = 动能 + 势能。
2. 机械能守恒的条件：只有动能和势能相互转化（不计阻力）。
3. 分析转化：先判断动能、势能各自的增减，再定转化方向。
4. 卫星近地点速度最大、动能最大；远地点势能最大。

## 自测题

1. 荡秋千时，从最高点荡到最低点，能量如何转化？
2. 蹦极运动员下落到弹性绳绷直后继续下降的过程中，有哪些能量转化？
3. 为什么滚摆每次上升的高度会逐渐降低？

## 相关知识点

[[动能和势能]] [[功]] [[功率]] [[重力]] [[摩擦力]]
