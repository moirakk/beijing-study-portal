# 例题 · 列代数式

## 例题 1（基础 · 书写规范）

### 题目

下列代数式书写规范的是（　　）

A. $a \times 5$　　B. $2\frac{1}{2}x$　　C. $\frac{mn}{3}$　　D. $x \div y$

### 解析

- A：数字应在前且省略乘号，应写 $5a$；
- B：带分数与字母相乘应化假分数，应写 $\frac{5}{2}x$；
- C：**规范** ✔；
- D：除法应写成分数 $\frac{x}{y}$。

**答案：C**

---

## 图示

<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <rect x="20" y="10" width="460" height="100" fill="#f3e5f5" rx="8"/>
  <text x="250" y="32" text-anchor="middle" font-size="14" fill="#7b1fa2" font-weight="bold">代数式书写规范对比</text>
  <!-- 表头 -->
  <rect x="40" y="40" width="130" height="22" fill="#7b1fa2" rx="3"/>
  <rect x="180" y="40" width="130" height="22" fill="#7b1fa2" rx="3"/>
  <rect x="320" y="40" width="150" height="22" fill="#7b1fa2" rx="3"/>
  <text x="105" y="55" text-anchor="middle" font-size="12" fill="white">错误写法</text>
  <text x="245" y="55" text-anchor="middle" font-size="12" fill="white">正确写法</text>
  <text x="395" y="55" text-anchor="middle" font-size="12" fill="white">规范说明</text>
  <!-- 行1 -->
  <rect x="40" y="65" width="130" height="22" fill="#e1bee7" rx="3"/>
  <rect x="180" y="65" width="130" height="22" fill="#ce93d8" rx="3" opacity="0.6"/>
  <rect x="320" y="65" width="150" height="22" fill="#e1bee7" rx="3"/>
  <text x="105" y="80" text-anchor="middle" font-size="12" fill="#9c27b0">a×5 或 a5</text>
  <text x="245" y="80" text-anchor="middle" font-size="12" fill="#7b1fa2" font-weight="bold">5a</text>
  <text x="395" y="80" text-anchor="middle" font-size="11" fill="#212121">数字在前，省乘号</text>
  <!-- 行2 -->
  <rect x="40" y="90" width="130" height="22" fill="#e1bee7" rx="3"/>
  <rect x="180" y="90" width="130" height="22" fill="#ce93d8" rx="3" opacity="0.6"/>
  <rect x="320" y="90" width="150" height="22" fill="#e1bee7" rx="3"/>
  <text x="105" y="105" text-anchor="middle" font-size="12" fill="#9c27b0">x÷y</text>
  <text x="245" y="105" text-anchor="middle" font-size="12" fill="#7b1fa2" font-weight="bold">x/y</text>
  <text x="395" y="105" text-anchor="middle" font-size="11" fill="#212121">除法写分数形式</text>
</svg>

## 例题 2（基础 · 翻译句子）

### 题目

用代数式表示：

(1) $x$ 的 3 倍与 $y$ 的差；
(2) $a$ 与 $b$ 的和的平方；
(3) 比 $m$ 的一半少 2 的数。

### 解析

(1) "$x$ 的 3 倍"是 $3x$，与 $y$ 的差：$3x - y$；

(2) 先求和再平方，要加括号：$(a + b)^2$；

(3) "$m$ 的一半"是 $\frac{m}{2}$，少 2：$\frac{m}{2} - 2$。

> ⚠️ (2) 若写成 $a + b^2$ 就变成"$a$ 与 $b$ 的平方的和"，意思完全不同。

---

## 例题 3（中档 · 实际问题）

### 题目

某商品原价 $a$ 元。

(1) 先提价 $10\%$，用代数式表示提价后的价格；
(2) 再打八折出售，用代数式表示最终售价；
(3) 最终售价与原价相比是贵了还是便宜了？

### 解析

(1) 提价 $10\%$ 后：

$$
a(1 + 10\%) = 1.1a \text{ 元}
$$

(2) 打八折即乘 $\frac{8}{10} = 0.8$：

$$
1.1a \times 0.8 = 0.88a \text{ 元}
$$

(3) $0.88a < a$，所以最终**便宜了**，便宜 $0.12a$ 元。

> 💡 "先涨后降"不会回到原价，用代数式一算便知——这是字母表示数的威力。

---

## 例题 4（中档 · 数位问题）

### 题目

一个两位数，个位数字是 $a$，十位数字是 $b$。

(1) 用代数式表示这个两位数；
(2) 把它的个位与十位数字对调，得到的新两位数是多少？
(3) 原数与新数的和有什么规律？

### 解析

(1) 十位是 $b$、个位是 $a$：

$$
10b + a
$$

(2) 对调后十位是 $a$、个位是 $b$：

$$
10a + b
$$

(3) 两数之和：

$$
(10b + a) + (10a + b) = 11a + 11b = 11(a + b)
$$

和总是 **11 的倍数**（且等于数字之和的 11 倍）。

> 💡 数位问题必须用 $10 \times \text{十位} + \text{个位}$ 表示，直接写 "$ba$" 是无意义的。

---

## 例题 5（提高 · 图形规律）

### 题目

用火柴棒按下图方式搭正方形：搭 1 个正方形用 4 根，搭 2 个连着的正方形用 7 根，搭 3 个用 10 根……搭 $n$ 个这样连着的正方形需要多少根火柴棒？

### 解析

方法一（递推观察）：每多搭 1 个正方形多用 3 根，第 $n$ 个图形用：

$$
4 + 3(n - 1) = 3n + 1
$$

方法二（结构分析）：每个正方形贡献 3 根（右侧 U 形），再加最左边 1 根：$3n + 1$。

检验：$n=1$ 时 $3+1=4$ ✔；$n=2$ 时 $7$ ✔。

**答案：$(3n + 1)$ 根**

> 💡 找规律题先算增量（公差），写出式子后**代小数检验**，防止差 1 错误。
