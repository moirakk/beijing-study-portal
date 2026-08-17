---
title: 11.3 一元一次不等式组
date: 2026-08-05
---

# 一元一次不等式组

标签：#中考必考 #重点

## 一、概念

把几个含**同一个未知数**的一元一次不等式合在一起，组成一个**一元一次不等式组**，如

$$\begin{cases} x + 1 > 0 \\ 2x - 4 \leq 0 \end{cases}$$

**不等式组的解集**：组成不等式组的各不等式解集的**公共部分**。求解集的过程叫做解不等式组。

<svg viewBox="0 0 360 200" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <text x="50" y="18" font-size="13" fill="#7b1fa2" font-weight="bold">例：解不等式组 { x&gt;-1 且 x≤2 }</text>
  <!-- 数轴1：x>-1 -->
  <line x1="30" y1="50" x2="330" y2="50" stroke="#7b1fa2" stroke-width="1.5"/>
  <polygon points="325,45 335,50 325,55" fill="#7b1fa2"/>
  <line x1="130" y1="45" x2="130" y2="55" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="122" y="68" font-size="12" fill="#333">-1</text>
  <line x1="250" y1="45" x2="250" y2="55" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="246" y="68" font-size="12" fill="#333">2</text>
  <circle cx="130" cy="50" r="5" fill="white" stroke="#e91e63" stroke-width="2"/>
  <line x1="133" y1="50" x2="330" y2="50" stroke="#e91e63" stroke-width="3"/>
  <text x="30" y="45" font-size="11" fill="#e91e63">①x&gt;-1</text>
  <!-- 数轴2：x≤2 -->
  <line x1="30" y1="100" x2="330" y2="100" stroke="#7b1fa2" stroke-width="1.5"/>
  <polygon points="325,95 335,100 325,105" fill="#7b1fa2"/>
  <line x1="130" y1="95" x2="130" y2="105" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="122" y="118" font-size="12" fill="#333">-1</text>
  <line x1="250" y1="95" x2="250" y2="105" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="246" y="118" font-size="12" fill="#333">2</text>
  <circle cx="250" cy="100" r="5" fill="#9c27b0" stroke="#9c27b0" stroke-width="2"/>
  <line x1="30" y1="100" x2="250" y2="100" stroke="#9c27b0" stroke-width="3"/>
  <text x="30" y="95" font-size="11" fill="#9c27b0">②x≤2</text>
  <!-- 数轴3：公共部分 -1<x≤2 -->
  <line x1="30" y1="150" x2="330" y2="150" stroke="#7b1fa2" stroke-width="1.5"/>
  <polygon points="325,145 335,150 325,155" fill="#7b1fa2"/>
  <line x1="130" y1="145" x2="130" y2="155" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="122" y="168" font-size="12" fill="#333">-1</text>
  <line x1="250" y1="145" x2="250" y2="155" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="246" y="168" font-size="12" fill="#333">2</text>
  <circle cx="130" cy="150" r="5" fill="white" stroke="#7b1fa2" stroke-width="2"/>
  <circle cx="250" cy="150" r="5" fill="#7b1fa2" stroke="#7b1fa2" stroke-width="2"/>
  <line x1="133" y1="150" x2="250" y2="150" stroke="#7b1fa2" stroke-width="4"/>
  <text x="30" y="145" font-size="11" fill="#7b1fa2">解集：-1&lt;x≤2（取交集）</text>
  <text x="30" y="190" font-size="11" fill="#555">口诀：同大取大，同小取小，大小小大取中间，大大小小无解</text>
</svg>

## 二、解法步骤

1. 分别解出每个不等式的解集；
2. 在**同一条数轴**上表示各解集；
3. 取**公共部分**作为不等式组的解集（无公共部分则**无解**）。

## 三、四种基本类型（设 $a < b$）

| 不等式组 | 解集 | 口诀 |
|---|---|---|
| $x > a,\ x > b$ | $x > b$ | 同大取大 |
| $x < a,\ x < b$ | $x < a$ | 同小取小 |
| $x > a,\ x < b$ | $a < x < b$ | 大小小大中间找 |
| $x < a,\ x > b$ | 无解 | 大大小小找不到 |

## 四、例题解析

**例 1**：解不等式组 $\begin{cases} 2x + 1 > x - 1 \\ x + 8 \geq 4x - 1 \end{cases}$

**解**：第一个：$x > -2$；第二个：$-3x \geq -9$，即 $x \leq 3$。
公共部分：$-2 < x \leq 3$。

**例 2**：求不等式组 $\begin{cases} 3x - 6 < 0 \\ x + 2 \geq 1 \end{cases}$ 的整数解。

**解**：$x < 2$ 且 $x \geq -1$，解集 $-1 \leq x < 2$。
整数解：$-1,\ 0,\ 1$。

**例 3（应用）**：用若干辆载重 8 吨的卡车运 100 吨货物，若每辆装满，需要多少辆车？（写出不等式组思路）

**解**：设需 $x$ 辆，$8x \geq 100$ 且 $8(x-1) < 100$，得 $12.5 \leq x$ 且 $x < 13.5$，取整数 $x = 13$。答：需 13 辆。

## 五、易错点

1. 解集是**公共部分**，不是把两个解集"并"起来；借助数轴最直观。
2. 端点是否取到（空心/实心）要看**每个**不等式中的等号，如 $-2 < x \leq 3$ 左开右闭。
3. "大大小小找不到"时结论是**无解**，不要硬凑区间。
4. 求整数解时注意端点：$-1 \leq x < 2$ 含 $-1$ 不含 $2$。
5. 每个不等式单独解时仍要注意"除以负数变向"。

## 六、自测题

1. 解不等式组 $\begin{cases} x - 3 > 0 \\ x + 1 > 0 \end{cases}$。
2. 解不等式组 $\begin{cases} x > 5 \\ x < 2 \end{cases}$。
3. 不等式组 $\begin{cases} x \geq 0 \\ x < 4 \end{cases}$ 的整数解有哪些？

<details>
<summary>参考答案</summary>

1. $x > 3$ 且 $x > -1$，同大取大：$x > 3$。
2. 大大小小找不到：无解。
3. $0,\ 1,\ 2,\ 3$。

</details>

## 七、知识联系

- 单个不等式的解法见 [[11.2 一元一次不等式]]；
- 解集及其数轴表示见 [[解集]]；变形依据见 [[性质]]；
- "取公共部分"的思想与方程组"同时满足"的思想（见 [[概念]]）一脉相承。
