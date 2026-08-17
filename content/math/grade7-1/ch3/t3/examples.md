# 例题 · 代数式（章末综合）

## 例题 1（综合 · 列式+求值）

### 题目

学校买了 $a$ 支钢笔，每支 12 元；又买了 $b$ 本笔记本，每本 5 元。

(1) 用代数式表示总花费；
(2) 当 $a = 10$，$b = 24$ 时，求总花费。

### 解析

(1) 总花费：

$$
(12a + 5b) \text{ 元}
$$

(2) 代入 $a = 10$，$b = 24$：

$$
12 \times 10 + 5 \times 24 = 120 + 120 = 240
$$

**答案：(1) $(12a+5b)$ 元；(2) $240$ 元**

## 图示

<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <rect x="20" y="10" width="460" height="100" fill="#f3e5f5" rx="8"/>
  <text x="250" y="32" text-anchor="middle" font-size="14" fill="#7b1fa2" font-weight="bold">列代数式 + 代入求值 综合流程</text>
  <!-- 步骤1 -->
  <rect x="40" y="42" width="130" height="55" fill="#7b1fa2" rx="6"/>
  <text x="105" y="62" text-anchor="middle" font-size="12" fill="white">读题</text>
  <text x="105" y="78" text-anchor="middle" font-size="11" fill="white">找数量关系</text>
  <text x="105" y="94" text-anchor="middle" font-size="11" fill="white">a支钢笔，b本本</text>
  <!-- 箭头 -->
  <text x="185" y="72" text-anchor="middle" font-size="18" fill="#9c27b0">→</text>
  <!-- 步骤2 -->
  <rect x="200" y="42" width="130" height="55" fill="#9c27b0" rx="6"/>
  <text x="265" y="62" text-anchor="middle" font-size="12" fill="white">列代数式</text>
  <text x="265" y="78" text-anchor="middle" font-size="11" fill="white">12a + 5b</text>
  <text x="265" y="94" text-anchor="middle" font-size="11" fill="white">（元）</text>
  <!-- 箭头 -->
  <text x="345" y="72" text-anchor="middle" font-size="18" fill="#9c27b0">→</text>
  <!-- 步骤3 -->
  <rect x="360" y="42" width="110" height="55" fill="#ce93d8" rx="6"/>
  <text x="415" y="62" text-anchor="middle" font-size="12" fill="#212121">代入求值</text>
  <text x="415" y="78" text-anchor="middle" font-size="11" fill="#212121">a=10, b=24</text>
  <text x="415" y="94" text-anchor="middle" font-size="11" fill="#7b1fa2" font-weight="bold">= 240元</text>
</svg>

---

## 例题 2（综合 · 整体代入）

### 题目

已知 $2a - b = 4$，求代数式 $5 + 4a - 2b$ 的值。

### 解析

把 $4a - 2b$ 凑成 $2(2a - b)$：

$$
5 + 4a - 2b = 5 + 2(2a - b) = 5 + 2 \times 4 = 13
$$

**答案：$13$**

---

## 例题 3（综合 · 规律探究）

### 题目

将连续的正整数按下面方式排列：

第 1 行：$1$
第 2 行：$2\ \ 3$
第 3 行：$4\ \ 5\ \ 6$
第 4 行：$7\ \ 8\ \ 9\ \ 10$
……

(1) 第 $n$ 行有多少个数？
(2) 第 $n$ 行最后一个数是多少（用含 $n$ 的代数式表示）？
(3) 第 10 行的最后一个数是多少？

### 解析

(1) 观察每行个数为 $1, 2, 3, 4, \dots$，第 $n$ 行有 **$n$ 个**数。

(2) 第 $n$ 行最后一个数是前 $n$ 行数的总个数：

$$
1 + 2 + 3 + \cdots + n = \frac{n(n+1)}{2}
$$

(3) 代入 $n = 10$：

$$
\frac{10 \times 11}{2} = 55
$$

**答案：(1) $n$ 个；(2) $\frac{n(n+1)}{2}$；(3) $55$**

> 💡 $1+2+\cdots+n = \frac{n(n+1)}{2}$（高斯求和）是找规律题的常客，值得牢记。

---

## 例题 4（综合 · 易错检验）

### 题目

小亮说："当 $x = -1$ 时，代数式 $-x^2 + 2x$ 的值是 $3$。"他算得对吗？请写出正确过程。

### 解析

小亮把 $-x^2$ 错当成 $(-x)^2$ 了。正确代入：

$$
-x^2 + 2x = -(-1)^2 + 2 \times (-1) = -1 - 2 = -3
$$

**答案：不对，正确的值是 $-3$**

> ⚠️ $-x^2$ 的意思是"$x^2$ 的相反数"：先平方，再取负。$x = -1$ 时，$-x^2 = -1$。
