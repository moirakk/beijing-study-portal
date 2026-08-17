# 例题 · 整式

## 例题 1（基础 · 系数与次数）

### 题目

写出下列单项式的系数和次数：

(1) $-3x^2y$；(2) $\frac{ab^2c}{4}$；(3) $-m$；(4) $2\pi r^2$。

<svg viewBox="0 0 520 160" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="520" height="160" rx="10" fill="#f3e5f5"/>
  <!-- Header -->
  <rect x="10" y="10" width="500" height="36" rx="6" fill="#7b1fa2"/>
  <text x="260" y="33" text-anchor="middle" fill="white" font-size="14" font-weight="bold">单项式的系数与次数</text>
  <!-- Row 1 -->
  <rect x="10" y="50" width="500" height="28" rx="0" fill="#e1bee7"/>
  <text x="130" y="69" text-anchor="middle" fill="#4a148c" font-size="13" font-weight="bold">$-3x^2y$</text>
  <text x="310" y="69" text-anchor="middle" fill="#4a148c" font-size="13">系数 $-3$</text>
  <text x="450" y="69" text-anchor="middle" fill="#4a148c" font-size="13">次数 $2+1=3$</text>
  <!-- Row 2 -->
  <rect x="10" y="78" width="500" height="28" rx="0" fill="white"/>
  <text x="130" y="97" text-anchor="middle" fill="#4a148c" font-size="13">$\frac{1}{4}ab^2c$</text>
  <text x="310" y="97" text-anchor="middle" fill="#4a148c" font-size="13">系数 $\frac{1}{4}$</text>
  <text x="450" y="97" text-anchor="middle" fill="#4a148c" font-size="13">次数 $1+2+1=4$</text>
  <!-- Row 3 -->
  <rect x="10" y="106" width="500" height="28" rx="0" fill="#e1bee7"/>
  <text x="130" y="125" text-anchor="middle" fill="#4a148c" font-size="13">$-m$</text>
  <text x="310" y="125" text-anchor="middle" fill="#4a148c" font-size="13">系数 $-1$</text>
  <text x="450" y="125" text-anchor="middle" fill="#4a148c" font-size="13">次数 $1$</text>
  <!-- Row 4 -->
  <rect x="10" y="134" width="500" height="26" rx="0" fill="white"/>
  <text x="130" y="152" text-anchor="middle" fill="#4a148c" font-size="13">$2\pi r^2$</text>
  <text x="310" y="152" text-anchor="middle" fill="#4a148c" font-size="13">系数 $2\pi$（$\pi$ 是数）</text>
  <text x="450" y="152" text-anchor="middle" fill="#4a148c" font-size="13">次数 $2$</text>
</svg>

### 解析

| 单项式 | 系数 | 次数 |
|---|---|---|
| $-3x^2y$ | $-3$ | $2+1=3$ |
| $\frac{ab^2c}{4} = \frac{1}{4}ab^2c$ | $\frac{1}{4}$ | $1+2+1=4$ |
| $-m$ | $-1$ | $1$ |
| $2\pi r^2$ | $2\pi$ | $2$ |

> ⚠️ $\pi$ 是常数，算进系数，不算次数。

---

## 例题 2（基础 · 多项式辨析）

### 题目

对于多项式 $3x^2y - 4xy + 5x - 7$：

(1) 它是几次几项式？
(2) 写出它的最高次项和常数项。

### 解析

(1) 各项次数：$3x^2y$ 为 3 次，$-4xy$ 为 2 次，$5x$ 为 1 次，$-7$ 为 0 次。最高次数是 3，共 4 项，是**三次四项式**。

(2) 最高次项是 $3x^2y$；常数项是 $-7$（带符号！）。

**答案：(1) 三次四项式；(2) 最高次项 $3x^2y$，常数项 $-7$**

---

## 例题 3（中档 · 整式判断）

### 题目

下列代数式中，哪些是单项式？哪些是多项式？哪些不是整式？

$$
\frac{x}{2}, \qquad \frac{2}{x}, \qquad 0, \qquad x^2 + \frac{1}{2}, \qquad \frac{x+y}{3}, \qquad \frac{3}{a+b}
$$

### 解析

- $\frac{x}{2} = \frac{1}{2}x$：**单项式**；
- $\frac{2}{x}$：分母含字母，**不是整式**；
- $0$：单独的数，**单项式**；
- $x^2 + \frac{1}{2}$：两个单项式的和，**多项式**；
- $\frac{x+y}{3} = \frac{1}{3}x + \frac{1}{3}y$：**多项式**；
- $\frac{3}{a+b}$：分母含字母，**不是整式**。

> 💡 判断标准只有一条：**字母在不在分母里**。在 → 不是整式。

---

## 例题 4（提高 · 含参数确定次数）

### 题目

已知关于 $x$、$y$ 的单项式 $-5x^{m}y^{3}$ 的次数是 7，多项式 $2x^{n+1}y - x^2y + 1$ 是三次多项式，求 $m + n$ 的值。

### 解析

单项式次数 = 指数和：

$$
m + 3 = 7 \implies m = 4
$$

多项式是三次的，最高次项 $2x^{n+1}y$ 的次数为 $(n+1) + 1 = 3$：

$$
n + 2 = 3 \implies n = 1
$$

（检验：此时另一项 $-x^2y$ 的次数是 3，最高次仍为 3 ✔）

$$
m + n = 4 + 1 = 5
$$

**答案：$5$**

> 💡 含字母指数的题，把"次数"翻译成**指数的方程**即可。
