# 例题 · 有理数的大小比较

## 例题 1（基础 · 直接比较）

### 题目

比较下列每组数的大小：

(1) $-3$ 与 $2$；(2) $-\frac{1}{2}$ 与 $-\frac{1}{3}$；(3) $0$ 与 $-0.01$。

### 解析

(1) 正数大于一切负数：$-3 < 2$；

(2) 两负数比绝对值：$\left|-\frac{1}{2}\right| = \frac{3}{6} > \frac{2}{6} = \left|-\frac{1}{3}\right|$，绝对值大的反而小：

$$
-\frac{1}{2} < -\frac{1}{3}
$$

(3) 负数都小于 $0$：$0 > -0.01$。

---

## 图示

<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t6e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="50" x2="470" y2="50" stroke="#424242" stroke-width="2" marker-end="url(#arr-t6e)"/>
  <!-- 刻度 -->
  <line x1="90" y1="43" x2="90" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">-1/2</text>
  <line x1="170" y1="43" x2="170" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">-1/3</text>
  <line x1="250" y1="43" x2="250" y2="57" stroke="#424242" stroke-width="2"/>
  <text x="250" y="72" text-anchor="middle" font-size="13" fill="#424242">0</text>
  <line x1="350" y1="43" x2="350" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="350" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">1</text>
  <line x1="430" y1="43" x2="430" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="430" y="72" text-anchor="middle" font-size="12" fill="#7b1fa2">3</text>
  <!-- 标注各点 -->
  <circle cx="90" cy="50" r="5" fill="#7b1fa2"/>
  <circle cx="170" cy="50" r="5" fill="#9c27b0"/>
  <circle cx="250" cy="50" r="5" fill="#424242"/>
  <circle cx="350" cy="50" r="5" fill="#9c27b0"/>
  <circle cx="430" cy="50" r="5" fill="#7b1fa2"/>
  <!-- 关键：两负数比较 -->
  <text x="130" y="30" text-anchor="middle" font-size="11" fill="#7b1fa2">|-1/2|&gt;|-1/3|</text>
  <text x="130" y="18" text-anchor="middle" font-size="11" fill="#9c27b0">故 -1/2 &lt; -1/3</text>
  <text x="250" y="92" text-anchor="middle" font-size="12" fill="#424242">-1/2 &lt; -1/3 &lt; 0 &lt; 1 &lt; 3</text>
</svg>

## 例题 2（基础 · 排序）

### 题目

把下列各数用"$<$"连接：$-2.5,\ \ 3,\ \ 0,\ \ -\frac{5}{2},\ \ 1$。

### 解析

先观察：$-2.5 = -\frac{5}{2}$，两数**相等**。

分类：负数组 $-2.5 = -\frac{5}{2}$；零；正数组 $1 < 3$。

$$
-2.5 = -\frac{5}{2} < 0 < 1 < 3
$$

> ⚠️ 排序前先化简、化同形式，注意可能出现相等的数。

---

## 例题 3（中档 · 作差法）

### 题目

比较 $\frac{7}{9}$ 与 $\frac{8}{10}$ 的大小。

### 解析

作差：

$$
\frac{7}{9} - \frac{8}{10} = \frac{70}{90} - \frac{72}{90} = -\frac{2}{90} < 0
$$

所以：

$$
\frac{7}{9} < \frac{8}{10}
$$

**答案：$\frac{7}{9} < \frac{8}{10}$**

> 💡 作差法是"万能钥匙"，尤其适合分数、字母式的大小比较。

---

## 例题 4（提高 · 字母比较与分类）

### 题目

已知 $a < 0$，试比较 $a$、$-a$、$\frac{a}{2}$ 三个数的大小。

### 解析

取特殊值检验思路：设 $a = -2$，则 $-a = 2$，$\frac{a}{2} = -1$，有 $-2 < -1 < 2$。

一般证明：

- $a < 0$ 时，$-a > 0$，所以 $-a$ 最大；
- $a$ 与 $\frac{a}{2}$ 都是负数，$|a| = -a > -\frac{a}{2} = \left|\frac{a}{2}\right|$，绝对值大的反而小，所以 $a < \frac{a}{2}$。

**答案：$a < \dfrac{a}{2} < -a$**

> 💡 含字母比较大小，"特殊值探路 + 法则证明"双管齐下最稳妥。
