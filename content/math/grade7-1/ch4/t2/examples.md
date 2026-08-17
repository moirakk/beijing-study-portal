# 例题 · 整式的加法与减法

## 例题 1（基础 · 同类项判断与合并）

### 题目

(1) 判断 $2a^2b$ 与 $-3ba^2$ 是否为同类项；
(2) 合并同类项：$4x^2 - 3x + 7x^2 + 5x - 6$。

<svg viewBox="0 0 500 90" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="500" height="90" rx="10" fill="#f3e5f5"/>
  <text x="250" y="22" text-anchor="middle" fill="#7b1fa2" font-size="13" font-weight="bold">合并同类项示意：4x²−3x+7x²+5x−6</text>
  <!-- x² group -->
  <rect x="20" y="32" width="90" height="28" rx="6" fill="#7b1fa2"/>
  <text x="65" y="51" text-anchor="middle" fill="white" font-size="13">4x²</text>
  <rect x="130" y="32" width="90" height="28" rx="6" fill="#7b1fa2"/>
  <text x="175" y="51" text-anchor="middle" fill="white" font-size="13">+7x²</text>
  <text x="240" y="51" text-anchor="middle" fill="#9c27b0" font-size="18" font-weight="bold">→</text>
  <rect x="255" y="32" width="90" height="28" rx="6" fill="#4a148c"/>
  <text x="300" y="51" text-anchor="middle" fill="white" font-size="13">11x²</text>
  <!-- x group -->
  <rect x="20" y="62" width="90" height="22" rx="6" fill="#ce93d8"/>
  <text x="65" y="77" text-anchor="middle" fill="#4a148c" font-size="12">−3x</text>
  <rect x="130" y="62" width="90" height="22" rx="6" fill="#ce93d8"/>
  <text x="175" y="77" text-anchor="middle" fill="#4a148c" font-size="12">+5x</text>
  <text x="240" y="77" text-anchor="middle" fill="#9c27b0" font-size="18" font-weight="bold">→</text>
  <rect x="255" y="62" width="90" height="22" rx="6" fill="#9c27b0"/>
  <text x="300" y="77" text-anchor="middle" fill="white" font-size="12">+2x</text>
  <text x="390" y="62" fill="#4a148c" font-size="12">常数项</text>
  <text x="390" y="77" fill="#4a148c" font-size="12">−6 不变</text>
</svg>

### 解析

(1) 两式所含字母都是 $a$、$b$，且 $a$ 的指数都是 2、$b$ 的指数都是 1，字母顺序不影响判断——**是同类项**。

(2) 分组合并：

$$
(4x^2 + 7x^2) + (-3x + 5x) - 6 = 11x^2 + 2x - 6
$$

**答案：(1) 是；(2) $11x^2 + 2x - 6$**

---

## 例题 2（基础 · 去括号）

### 题目

化简：$3a - 2(a - 2b) + (a - b)$。

### 解析

先去括号（注意 $-2$ 要乘进每一项）：

$$
3a - 2a + 4b + a - b
$$

合并同类项：

$$
(3 - 2 + 1)a + (4 - 1)b = 2a + 3b
$$

**答案：$2a + 3b$**

> ⚠️ $-2(a - 2b) = -2a + 4b$，第二项是 $(-2) \times (-2b) = +4b$，负负得正。

---

## 例题 3（中档 · 先化简再求值）

### 题目

先化简，再求值：$5xy^2 - 2(3xy^2 - x^2y) + (2xy^2 - 3x^2y)$，其中 $x = \frac{1}{2}$，$y = -1$。

### 解析

去括号：

$$
5xy^2 - 6xy^2 + 2x^2y + 2xy^2 - 3x^2y
$$

合并同类项：

$$
(5 - 6 + 2)xy^2 + (2 - 3)x^2y = xy^2 - x^2y
$$

代入 $x = \frac{1}{2}$，$y = -1$：

$$
\frac{1}{2} \times (-1)^2 - \left(\frac{1}{2}\right)^2 \times (-1) = \frac{1}{2} + \frac{1}{4} = \frac{3}{4}
$$

**答案：化简结果 $xy^2 - x^2y$；值为 $\frac{3}{4}$**

---

## 例题 4（中档 · 整式加减的文字表述）

### 题目

求多项式 $2x^2 - x + 3$ 与 $-x^2 + 3x - 5$ 的和与差。

### 解析

**和**：

$$
(2x^2 - x + 3) + (-x^2 + 3x - 5) = x^2 + 2x - 2
$$

**差**（前减后，减式整体加括号）：

$$
(2x^2 - x + 3) - (-x^2 + 3x - 5) = 2x^2 - x + 3 + x^2 - 3x + 5 = 3x^2 - 4x + 8
$$

**答案：和为 $x^2 + 2x - 2$；差为 $3x^2 - 4x + 8$**

> ⚠️ 求差时后一个多项式必须**整体加括号再去括号**，否则符号必错。

---

## 例题 5（提高 · 与字母取值无关）

### 题目

已知代数式 $(2x^2 + ax - y) - (3bx^2 - x + y - 6)$ 的值与 $x$ 的取值无关，求 $a$、$b$ 的值。

### 解析

先化简：

$$
2x^2 + ax - y - 3bx^2 + x - y + 6 = (2 - 3b)x^2 + (a + 1)x - 2y + 6
$$

"与 $x$ 无关"意味着含 $x$ 的项的系数都为 $0$：

$$
2 - 3b = 0 \implies b = \frac{2}{3}, \qquad a + 1 = 0 \implies a = -1
$$

**答案：$a = -1$，$b = \frac{2}{3}$**

> 💡 "与某字母无关" = 该字母各次项**系数为零**，这是经典套路题。
