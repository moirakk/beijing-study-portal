---
title: 比较与运算
date: 2026-08-05
---

# 角的比较与运算

标签：#中考必考 #基础 #易错

## 一、角的大小比较

与线段完全平行的两种方法：

1. **度量法**：用量角器量出度数比较；
2. **叠合法**：使两角顶点及一边重合，看另一边的位置。

<svg viewBox="0 0 480 150" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="480" height="150" rx="10" fill="#f3e5f5"/>
  <text x="240" y="18" text-anchor="middle" fill="#7b1fa2" font-size="13" font-weight="bold">角的和差与角平分线</text>
  <!-- Angle AOB with OC inside -->
  <circle cx="100" cy="120" r="4" fill="#7b1fa2"/>
  <!-- OA ray -->
  <line x1="100" y1="120" x2="160" y2="40" stroke="#7b1fa2" stroke-width="2.5"/>
  <!-- OB ray -->
  <line x1="100" y1="120" x2="220" y2="120" stroke="#7b1fa2" stroke-width="2.5"/>
  <!-- OC ray (bisector) -->
  <line x1="100" y1="120" x2="190" y2="60" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Arc for AOB -->
  <path d="M 150,120 A 50,50 0 0,0 133,80" fill="none" stroke="#ce93d8" stroke-width="1.5"/>
  <!-- Arc for AOC -->
  <path d="M 140,120 A 40,40 0 0,0 127,88" fill="none" stroke="#9c27b0" stroke-width="1.5"/>
  <!-- Labels -->
  <text x="100" y="138" text-anchor="middle" fill="#4a148c" font-size="12" font-weight="bold">O</text>
  <text x="162" y="35" fill="#7b1fa2" font-size="12">A</text>
  <text x="225" y="125" fill="#7b1fa2" font-size="12">B</text>
  <text x="195" y="55" fill="#9c27b0" font-size="12">C（平分线）</text>
  <text x="155" y="115" fill="#ce93d8" font-size="11">∠AOB</text>
  <!-- Formulas -->
  <rect x="260" y="30" width="200" height="110" rx="6" fill="white" stroke="#ce93d8" stroke-width="1.5"/>
  <text x="360" y="50" text-anchor="middle" fill="#7b1fa2" font-size="12" font-weight="bold">关键公式</text>
  <text x="360" y="68" text-anchor="middle" fill="#4a148c" font-size="11">OC在∠AOB内部：</text>
  <text x="360" y="84" text-anchor="middle" fill="#4a148c" font-size="11">∠AOC + ∠COB = ∠AOB</text>
  <text x="360" y="102" text-anchor="middle" fill="#9c27b0" font-size="11">OC平分∠AOB：</text>
  <text x="360" y="118" text-anchor="middle" fill="#9c27b0" font-size="11">∠AOC = ∠COB = ½∠AOB</text>
  <text x="360" y="134" text-anchor="middle" fill="#4a148c" font-size="10">无图时分类讨论OC位置</text>
</svg>

## 二、角的和差

如果射线 $OC$ 在 $\angle AOB$ **内部**，那么：

$$
\angle AOC + \angle COB = \angle AOB
$$

$$
\angle AOC = \angle AOB - \angle COB
$$

角的和差本质上是**度数的加减**，注意度分秒 60 进制的进借位。

## 三、角平分线

**从一个角的顶点出发，把这个角分成两个相等的角的射线，叫做这个角的平分线。**

若 $OC$ 平分 $\angle AOB$，则：

$$
\angle AOC = \angle COB = \frac{1}{2}\angle AOB, \qquad \angle AOB = 2\angle AOC = 2\angle COB
$$

类似地还有三等分线等。

> 💡 **对照记忆**：角平分线之于角，正如[[6.2 直线、射线、线段|线段中点]]之于线段——概念、公式、题型全都平行，一起复习效率翻倍。

## 四、角的计算题的两大主线

### 1. 方程思想

设某个角为 $x$，用"和差、倍分"关系列方程。

例：$\angle AOB = 90°$，$OC$ 在其内部且 $\angle AOC = 2\angle COB$，求 $\angle COB$。

设 $\angle COB = x$，则 $2x + x = 90°$，$x = 30°$。

### 2. 分类讨论

射线 $OC$ 可能在 $\angle AOB$ **内部或外部**，两种位置的答案不同（加与减）。题目未给图时必须讨论。

> ⚠️ **易错点**：
> 1. 求"$\angle AOC$ 的度数"时漏掉 $OC$ 在外部的情况；
> 2. 度分秒计算中"借 1 当 60"忘了借；
> 3. $\frac{1}{2}\angle AOB$ 与 $\frac{1}{2}\angle AOC$ 混淆——看清平分的是哪个角。

## 五、要点小结

1. 比较：度量法、叠合法；
2. 和差：内部射线做"分割"，度数直接加减；
3. 角平分线 → 一半关系，配合方程求解；
4. 无图题先想"位置有几种可能"。

## 六、知识联系

- 概念基础见[[角的概念]]；
- 与线段的[[6.2 直线、射线、线段|中点问题]]方法互通；
- 两角和为特殊值（$90°$、$180°$）的情形见[[余角和补角]]。
