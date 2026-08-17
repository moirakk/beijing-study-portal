# 例题 · 绝对值

## 例题 1（基础 · 求绝对值）

### 题目

计算：(1) $|-7|$；(2) $\left|+\frac{2}{5}\right|$；(3) $|0|$；(4) $-|-3|$。

### 解析

(1) $|-7| = 7$（负数的绝对值是其相反数）；

(2) $\left|+\frac{2}{5}\right| = \frac{2}{5}$（正数的绝对值是它本身）；

(3) $|0| = 0$；

(4) 先算绝对值再添负号：$-|-3| = -3$。

> ⚠️ (4) 中外层的负号**在绝对值符号外面**，不受绝对值保护，结果是负数。

---

## 图示

<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t5e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="50" x2="470" y2="50" stroke="#424242" stroke-width="2" marker-end="url(#arr-t5e)"/>
  <line x1="90" y1="43" x2="90" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">-4</text>
  <line x1="170" y1="43" x2="170" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">-2</text>
  <line x1="250" y1="43" x2="250" y2="57" stroke="#424242" stroke-width="2"/>
  <text x="250" y="72" text-anchor="middle" font-size="13" fill="#424242">0</text>
  <line x1="330" y1="43" x2="330" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="330" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">2</text>
  <line x1="410" y1="43" x2="410" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="410" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">4</text>
  <!-- x=-4 和 x=4 的绝对值示意 -->
  <circle cx="90" cy="50" r="5" fill="#7b1fa2"/>
  <circle cx="410" cy="50" r="5" fill="#7b1fa2"/>
  <line x1="90" y1="30" x2="250" y2="30" stroke="#9c27b0" stroke-width="2"/>
  <line x1="90" y1="25" x2="90" y2="35" stroke="#9c27b0" stroke-width="2"/>
  <line x1="250" y1="25" x2="250" y2="35" stroke="#9c27b0" stroke-width="2"/>
  <text x="170" y="22" text-anchor="middle" font-size="11" fill="#9c27b0">|x|=4（x=-4时）</text>
  <line x1="250" y1="30" x2="410" y2="30" stroke="#ce93d8" stroke-width="2" stroke-dasharray="4,3"/>
  <line x1="410" y1="25" x2="410" y2="35" stroke="#ce93d8" stroke-width="2"/>
  <text x="330" y="22" text-anchor="middle" font-size="11" fill="#ce93d8">|x|=4（x=4时）</text>
  <text x="250" y="92" text-anchor="middle" font-size="12" fill="#7b1fa2">|x|=4 有两解：x=±4</text>
</svg>

## 例题 2（基础 · 已知绝对值求数）

### 题目

已知 $|x| = 4$，$|y| = 2$，求 $x$、$y$ 的值；若又知 $x < 0 < y$，求 $x + y$。

### 解析

由绝对值定义：

$$
x = \pm 4, \qquad y = \pm 2
$$

加上条件 $x < 0 < y$，则 $x = -4$，$y = 2$：

$$
x + y = -4 + 2 = -2
$$

**答案：$x = \pm 4$，$y = \pm 2$；加条件后 $x + y = -2$**

> 💡 绝对值给出两个候选值，再用附加条件（正负、大小关系）筛选。

---

## 例题 3（中档 · 非负性应用）

### 题目

已知 $|a + 1| + |b - 2| = 0$，求 $a^{b}$ 的值。

### 解析

绝对值均非负，两个非负数之和为 $0$，则每个都为 $0$：

$$
a + 1 = 0 \implies a = -1, \qquad b - 2 = 0 \implies b = 2
$$

所以：

$$
a^b = (-1)^2 = 1
$$

**答案：$1$**

---

## 例题 4（中档 · 两负数比较大小）

### 题目

比较 $-\frac{5}{6}$ 与 $-\frac{7}{8}$ 的大小。

### 解析

先比较绝对值（通分到 24）：

$$
\left|-\frac{5}{6}\right| = \frac{20}{24}, \qquad \left|-\frac{7}{8}\right| = \frac{21}{24}
$$

因为 $\frac{20}{24} < \frac{21}{24}$，即 $\left|-\frac{5}{6}\right| < \left|-\frac{7}{8}\right|$。

两负数比较，**绝对值大的反而小**：

$$
-\frac{5}{6} > -\frac{7}{8}
$$

**答案：$-\frac{5}{6} > -\frac{7}{8}$**

---

## 例题 5（提高 · 分类讨论化简）

### 题目

有理数 $a$、$b$ 在数轴上的位置满足：$a < 0 < b$ 且 $|a| > |b|$。化简：$|a| - |b| + |a + b|$。

### 解析

逐项判断符号：

- $a < 0 \implies |a| = -a$；
- $b > 0 \implies |b| = b$；
- $a + b$：负数 $a$ 的绝对值更大，"负的力量"更强，所以 $a + b < 0$，$|a+b| = -(a+b)$。

代入化简：

$$
|a| - |b| + |a+b| = (-a) - b + [-(a+b)] = -a - b - a - b = -2a - 2b
$$

**答案：$-2a - 2b$**

> 💡 化简含字母的绝对值，核心是**先定符号，再去符号**；判断 $a+b$ 的符号时比较两数绝对值大小。
