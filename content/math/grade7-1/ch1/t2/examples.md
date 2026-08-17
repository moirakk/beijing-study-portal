# 例题 · 有理数

## 例题 1（基础 · 概念辨析）

### 题目

下列说法中正确的是（　　）

A. 一个数的相反数一定是负数
B. $0$ 既不是正数也不是负数
C. 绝对值等于本身的数只有正数
D. $\pi$ 是有理数

### 解析

逐项分析：

- A 错误。正数的相反数是负数，但**负数的相反数是正数**，$0$ 的相反数是 $0$。
- B **正确**。这是 $0$ 的基本属性，必须牢记。
- C 错误。绝对值等于本身的数是**正数和 $0$**（非负数）。
- D 错误。$\pi$ 是无限不循环小数，不是有理数。

**答案：B**

---

## 数轴示意

<svg viewBox="0 0 500 110" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t2e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="55" x2="470" y2="55" stroke="#424242" stroke-width="2" marker-end="url(#arr-t2e)"/>
  <!-- 刻度 -->
  <line x1="90" y1="48" x2="90" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">-4</text>
  <line x1="170" y1="48" x2="170" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">-2</text>
  <line x1="250" y1="48" x2="250" y2="62" stroke="#424242" stroke-width="2"/>
  <text x="250" y="76" text-anchor="middle" font-size="13" fill="#424242">0</text>
  <line x1="330" y1="48" x2="330" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="330" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">2</text>
  <line x1="410" y1="48" x2="410" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="410" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">4</text>
  <!-- 例3：点A(-4)和点B(2) -->
  <circle cx="90" cy="55" r="5" fill="#7b1fa2"/>
  <text x="90" y="38" text-anchor="middle" font-size="12" fill="#7b1fa2">A(-4)</text>
  <circle cx="330" cy="55" r="5" fill="#9c27b0"/>
  <text x="330" y="38" text-anchor="middle" font-size="12" fill="#9c27b0">B(2)</text>
  <!-- P=0 和 P=8 标注 -->
  <circle cx="250" cy="55" r="5" fill="#ce93d8"/>
  <text x="250" y="100" text-anchor="middle" font-size="11" fill="#7b1fa2">P=0（PA=2PB✔）</text>
</svg>

## 例题 2（中档 · 绝对值化简）

### 题目

已知 $|a - 2| + |b + 3| = 0$，求 $a + b$ 的值。

### 解析

由绝对值的**非负性**可知 $|a-2| \ge 0$，$|b+3| \ge 0$。

两个非负数之和为 $0$，则每一个都必须为 $0$：

$$
|a - 2| = 0 \implies a = 2
$$

$$
|b + 3| = 0 \implies b = -3
$$

所以：

$$
a + b = 2 + (-3) = -1
$$

**答案：$-1$**

> 💡 「若干个非负数之和为 0，则各个都为 0」是初中阶段的高频套路，绝对值、平方、算术平方根都具有非负性。

---

## 例题 3（提高 · 数轴与距离）

### 题目

数轴上点 $A$ 表示的数为 $-4$，点 $B$ 表示的数为 $2$。点 $P$ 在数轴上，且 $PA = 2PB$（$PA$ 表示 $P$ 到 $A$ 的距离），求点 $P$ 表示的数。

### 解析

设点 $P$ 表示的数为 $x$，则 $PA = |x - (-4)| = |x+4|$，$PB = |x - 2|$。

由条件 $PA = 2PB$：

$$
|x + 4| = 2|x - 2|
$$

**分类讨论**（按 $P$ 的位置分三段）：

1. 当 $x < -4$ 时：$-(x+4) = 2(2 - x)$，解得 $x = 8$，与 $x<-4$ 矛盾，舍去。
2. 当 $-4 \le x \le 2$ 时：$x + 4 = 2(2 - x)$，解得 $3x = 0$，即 $x = 0$，符合范围。✔
3. 当 $x > 2$ 时：$x + 4 = 2(x - 2)$，解得 $x = 8$，符合范围。✔

**答案：点 $P$ 表示的数为 $0$ 或 $8$**

> ⚠️ 涉及数轴上的距离问题，**分类讨论**是关键，最后一定要检验解是否落在所设范围内。
