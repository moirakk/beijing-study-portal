# 例题 · 有理数的乘除法

## 例题 1（基础 · 符号判断）

### 题目

计算：

(1) $(-2) \times (-3) \times (-5)$
(2) $(-\frac{3}{4}) \div (-\frac{3}{8})$

### 解析

(1) 三个负因数，负因数个数为奇数，积为负：

$$
(-2) \times (-3) \times (-5) = -(2 \times 3 \times 5) = -30
$$

(2) 除以一个数等于乘它的倒数，同号得正：

$$
\left(-\frac{3}{4}\right) \div \left(-\frac{3}{8}\right) = \frac{3}{4} \times \frac{8}{3} = 2
$$

**答案：(1) $-30$；(2) $2$**

---

## 图示

<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <rect x="20" y="10" width="460" height="110" fill="#f3e5f5" rx="8"/>
  <text x="250" y="32" text-anchor="middle" font-size="14" fill="#7b1fa2" font-weight="bold">多因数乘积符号规律</text>
  <!-- 示例1：3个负因数 -->
  <rect x="40" y="42" width="420" height="28" fill="#e1bee7" rx="4"/>
  <text x="250" y="61" text-anchor="middle" font-size="13" fill="#212121">(-2)×(-3)×(-5)：负因数3个（奇数）→ 积为负 = -30</text>
  <!-- 示例2：2个负因数 -->
  <rect x="40" y="74" width="420" height="28" fill="#ce93d8" rx="4" opacity="0.6"/>
  <text x="250" y="93" text-anchor="middle" font-size="13" fill="#212121">(-2)×(-3)×4：负因数2个（偶数）→ 积为正 = +24</text>
  <!-- 规律 -->
  <text x="250" y="118" text-anchor="middle" font-size="12" fill="#7b1fa2">口诀：负因数个数为偶数→正，为奇数→负</text>
</svg>

## 例题 2（中档 · 分配律简算）

### 题目

计算：$\left(\frac{1}{2} - \frac{2}{3} + \frac{3}{4}\right) \times (-12)$

### 解析

用分配律把 $-12$ 分别乘进去，避免先通分：

$$
\begin{aligned}
原式 &= \frac{1}{2} \times (-12) - \frac{2}{3} \times (-12) + \frac{3}{4} \times (-12) \\
&= -6 + 8 - 9 \\
&= -7
\end{aligned}
$$

**答案：$-7$**

> 💡 括号内是分数和差、括号外是分母们的公倍数时，分配律几乎总是最快路径。

---

## 例题 3（提高 · 混合运算）

### 题目

计算：$-1^{4} - \left(1 - 0.5\right) \times \frac{1}{3} \times \left[2 - (-3)^{2}\right]$

### 解析

严格按运算顺序，注意两个高频易错符号：

- $-1^4 = -(1^4) = -1$（**不是** $(-1)^4 = 1$，乘方优先于取负号）；
- $(-3)^2 = 9$。

分步计算：

$$
\begin{aligned}
原式 &= -1 - 0.5 \times \frac{1}{3} \times (2 - 9) \\
&= -1 - \frac{1}{2} \times \frac{1}{3} \times (-7) \\
&= -1 - \left(-\frac{7}{6}\right) \\
&= -1 + \frac{7}{6} \\
&= \frac{1}{6}
\end{aligned}
$$

**答案：$\dfrac{1}{6}$**

> ⚠️ **易错点**：$-1^4$ 与 $(-1)^4$ 的区别是初一上学期考试的最爱，务必分清底数到底是 $-1$ 还是 $1$。
