# 例题 · 相反数

## 例题 1（基础 · 求相反数）

### 题目

分别写出下列各数的相反数：$7$，$-2.5$，$\frac{3}{4}$，$0$，$-(-6)$。

### 解析

先把每个数化到最简，再改变符号：

| 原数 | 化简 | 相反数 |
|---|---|---|
| $7$ | $7$ | $-7$ |
| $-2.5$ | $-2.5$ | $2.5$ |
| $\frac{3}{4}$ | $\frac{3}{4}$ | $-\frac{3}{4}$ |
| $0$ | $0$ | $0$ |
| $-(-6)$ | $6$ | $-6$ |

> ⚠️ 求 $-(-6)$ 的相反数，必须**先化简为 6**，再取相反数。

---

## 例题 2（基础 · 概念判断）

### 题目

下列说法正确的是（　　）

A. $-a$ 一定是负数
B. 相反数等于它本身的数只有 $0$
C. 符号不同的两个数互为相反数
D. $\frac{1}{2}$ 的相反数是 $2$

### 解析

- A 错误：当 $a<0$ 时 $-a>0$，当 $a=0$ 时 $-a=0$；
- B **正确**：$0$ 是唯一相反数等于自身的数；
- C 错误：漏掉"数字部分相同"这一条件，如 $3$ 与 $-5$ 符号不同但不是相反数；
- D 错误：$\frac{1}{2}$ 的相反数是 $-\frac{1}{2}$；$2$ 是它的**倒数**。

**答案：B**

> ⚠️ "相反数"与"倒数"是两个完全不同的概念，别混淆。

## 图示

<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t4e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="50" x2="470" y2="50" stroke="#424242" stroke-width="2" marker-end="url(#arr-t4e)"/>
  <line x1="90" y1="43" x2="90" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">-2.5</text>
  <line x1="170" y1="43" x2="170" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">-3/4</text>
  <line x1="250" y1="43" x2="250" y2="57" stroke="#424242" stroke-width="2"/>
  <text x="250" y="72" text-anchor="middle" font-size="13" fill="#424242">0</text>
  <line x1="330" y1="43" x2="330" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="330" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">3/4</text>
  <line x1="410" y1="43" x2="410" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="410" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">2.5</text>
  <!-- 相反数对标注 -->
  <circle cx="90" cy="50" r="5" fill="#7b1fa2"/>
  <circle cx="410" cy="50" r="5" fill="#7b1fa2"/>
  <path d="M95,43 Q250,18 405,43" stroke="#9c27b0" stroke-width="1.5" fill="none" stroke-dasharray="5,3"/>
  <text x="250" y="15" text-anchor="middle" font-size="11" fill="#9c27b0">-2.5 与 2.5 互为相反数</text>
  <circle cx="170" cy="50" r="5" fill="#ce93d8"/>
  <circle cx="330" cy="50" r="5" fill="#ce93d8"/>
  <path d="M175,43 Q250,28 325,43" stroke="#ce93d8" stroke-width="1.2" fill="none" stroke-dasharray="4,3"/>
  <text x="250" y="90" text-anchor="middle" font-size="11" fill="#ce93d8">-3/4 与 3/4 互为相反数</text>
</svg>

---

## 例题 3（中档 · 多重符号化简）

### 题目

化简：(1) $-(-(-5))$；(2) $-\left[-\left(+\frac{2}{3}\right)\right]$。

### 解析

数一数负号的个数：

(1) 共 3 个负号（奇数个），结果为负：

$$
-(-(-5)) = -5
$$

(2) 共 2 个负号（偶数个），结果为正：

$$
-\left[-\left(+\frac{2}{3}\right)\right] = \frac{2}{3}
$$

**答案：(1) $-5$；(2) $\frac{2}{3}$**

---

## 例题 4（提高 · 与和为零结合）

### 题目

已知 $a$ 与 $b$ 互为相反数，$c$ 的相反数是 $-2$，求 $a + b + c$ 的值。

### 解析

- $a$ 与 $b$ 互为相反数 $\implies a + b = 0$；
- $c$ 的相反数是 $-2$ $\implies c = 2$。

所以：

$$
a + b + c = 0 + 2 = 2
$$

**答案：$2$**

> 💡 看到"互为相反数"，第一反应就是把两数之和替换为 $0$——整体代入是常用技巧。
