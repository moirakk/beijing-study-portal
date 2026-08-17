---
title: 杠杆
date: 2026-08-06
---

# 杠杆

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 杠杆 | 在力的作用下能绕固定点转动的硬棒 | 可直可弯 |
| 支点 | 杠杆绕着转动的点 | 符号 $O$ |
| 动力/阻力 | 使杠杆转动的力 / 阻碍转动的力 | $F_1$ / $F_2$ |
| 力臂 | 支点到力的作用线的距离 | 动力臂 $l_1$、阻力臂 $l_2$ |

## 知识梳理

在力的作用下能绕固定点转动的硬棒叫杠杆。杠杆五要素：支点、动力、阻力、动力臂、阻力臂。力臂是支点到力的作用线的垂直距离，不是支点到作用点的距离。

杠杆平衡条件（杠杆原理）：动力×动力臂 = 阻力×阻力臂，即 $F_1 l_1 = F_2 l_2$。

杠杆分类：省力杠杆（$l_1>l_2$，省力费距离，如撬棒、瓶起子、老虎钳）；费力杠杆（$l_1<l_2$，费力省距离，如镊子、钓鱼竿、筷子）；等臂杠杆（$l_1=l_2$，不省力不省距离，如天平）。

画力臂三步：找支点、画力的作用线（可延长）、从支点向作用线作垂线段。

## 公式汇总

杠杆平衡条件：

$$
F_1 l_1 = F_2 l_2
$$

变形式：

$$
\frac{F_1}{F_2} = \frac{l_2}{l_1}
$$

## 实验要点

<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="260" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">杠杆五要素：F₁L₁ = F₂L₂</text>
  <defs>
    <marker id="lvarr" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#e63946"/>
    </marker>
    <marker id="lvarr2" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#2d6a2d"/>
    </marker>
  </defs>
  <!-- 杠杆（水平棒） -->
  <rect x="60" y="120" width="360" height="14" fill="#1a6faf" rx="3"/>
  <!-- 支点（三角形）-->
  <polygon points="220,134 260,134 240,160" fill="#888" stroke="#555" stroke-width="1.5"/>
  <text x="240" y="177" text-anchor="middle" fill="#555" font-size="11">支点O</text>
  <!-- 动力F1（向下，左侧） -->
  <line x1="120" y1="80" x2="120" y2="120" stroke="#e63946" stroke-width="3" marker-end="url(#lvarr)"/>
  <text x="100" y="100" fill="#e63946" font-size="12">F₁</text>
  <!-- 阻力F2（向上，右侧） -->
  <line x1="360" y1="155" x2="360" y2="120" stroke="#2d6a2d" stroke-width="3" marker-end="url(#lvarr2)"/>
  <text x="370" y="148" fill="#2d6a2d" font-size="12">F₂</text>
  <!-- 动力臂L1（支点到F1作用线的垂直距离）-->
  <line x1="120" y1="140" x2="240" y2="140" stroke="#e63946" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="180" y="155" text-anchor="middle" fill="#e63946" font-size="11">L₁（动力臂）</text>
  <!-- 阻力臂L2 -->
  <line x1="240" y1="140" x2="360" y2="140" stroke="#2d6a2d" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="300" y="155" text-anchor="middle" fill="#2d6a2d" font-size="11">L₂（阻力臂）</text>
  <!-- 作用点标注 -->
  <circle cx="120" cy="120" r="5" fill="#e63946"/>
  <circle cx="360" cy="120" r="5" fill="#2d6a2d"/>
  <!-- 三类杠杆 -->
  <rect x="30" y="195" width="420" height="58" fill="white" rx="6" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="213" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">三类杠杆</text>
  <text x="90" y="230" text-anchor="middle" fill="#e63946" font-size="10">省力杠杆：L₁&gt;L₂</text>
  <text x="90" y="244" text-anchor="middle" fill="#e63946" font-size="10">费距离（如撬棒）</text>
  <text x="240" y="230" text-anchor="middle" fill="#555" font-size="10">等臂杠杆：L₁=L₂</text>
  <text x="240" y="244" text-anchor="middle" fill="#555" font-size="10">（如天平）</text>
  <text x="390" y="230" text-anchor="middle" fill="#2d6a2d" font-size="10">费力杠杆：L₁&lt;L₂</text>
  <text x="390" y="244" text-anchor="middle" fill="#2d6a2d" font-size="10">省距离（如镊子）</text>
</svg>

探究杠杆的平衡条件：

- 实验前调节两端平衡螺母，使杠杆在水平位置平衡（消除杠杆自重影响，且便于直接读力臂）。
- 实验中只能移动钩码，不能再动平衡螺母。
- 挂钩码使杠杆水平平衡，记录 $F_1$、$l_1$、$F_2$、$l_2$，多次实验找规律。
- 多次实验目的：结论具有普遍性。

## 对比分析

| 省力杠杆 | 费力杠杆 | 等臂杠杆 |
|---|---|---|
| $l_1>l_2$，$F_1<F_2$ | $l_1<l_2$，$F_1>F_2$ | $l_1=l_2$，$F_1=F_2$ |
| 省力费距离 | 费力省距离 | 都不省 |
| 撬棒、开瓶器 | 镊子、钓鱼竿 | 天平、定滑轮 |

## 背记要点

1. 力臂是支点到力的作用线的垂直距离。
2. 平衡条件：$F_1 l_1 = F_2 l_2$。
3. 省力必费距离，任何杠杆都不能既省力又省距离。
4. 实验先调水平平衡，为的是消除自重影响、方便测力臂。

## 自测题

1. 动力臂 40 cm、阻力臂 10 cm，阻力为 80 N，杠杆平衡时动力多大？
2. 用筷子夹菜，筷子是省力杠杆还是费力杠杆？有什么好处？
3. 探究实验中为什么要使杠杆在水平位置平衡？

## 相关知识点

[[力]] [[滑轮]] [[机械效率]] [[跨学科实践：制作简易杆秤]] [[功]]
