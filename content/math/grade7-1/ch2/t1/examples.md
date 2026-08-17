# 例题 · 有理数的加减法

## 例题 1（基础 · 直接计算）

### 题目

计算：

(1) $(-12) + (-8)$
(2) $(-15) + 9$
(3) $7 - (-3)$

### 解析

(1) 同号相加，取负号，绝对值相加：

$$
(-12) + (-8) = -(12 + 8) = -20
$$

(2) 异号相加，$|-15| > |9|$，取负号，大绝对值减小绝对值：

$$
(-15) + 9 = -(15 - 9) = -6
$$

(3) 减去负数等于加上它的相反数：

$$
7 - (-3) = 7 + 3 = 10
$$

**答案：(1) $-20$；(2) $-6$；(3) $10$**

---

## 图示

<svg viewBox="0 0 500 110" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t21e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
    <marker id="arr-t21ep" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#9c27b0"/>
    </marker>
    <marker id="arr-t21en" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#7b1fa2"/>
    </marker>
  </defs>
  <line x1="30" y1="60" x2="470" y2="60" stroke="#424242" stroke-width="2" marker-end="url(#arr-t21e)"/>
  <line x1="90" y1="53" x2="90" y2="67" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="80" text-anchor="middle" font-size="12" fill="#7b1fa2">-15</text>
  <line x1="250" y1="53" x2="250" y2="67" stroke="#424242" stroke-width="2"/>
  <text x="250" y="80" text-anchor="middle" font-size="13" fill="#424242">0</text>
  <line x1="330" y1="53" x2="330" y2="67" stroke="#424242" stroke-width="1.5"/>
  <text x="330" y="80" text-anchor="middle" font-size="12" fill="#7b1fa2">9</text>
  <line x1="170" y1="53" x2="170" y2="67" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="80" text-anchor="middle" font-size="12" fill="#7b1fa2">-6</text>
  <!-- 演示 (-15)+9=-6 -->
  <circle cx="90" cy="60" r="6" fill="#7b1fa2"/>
  <text x="90" y="43" text-anchor="middle" font-size="11" fill="#7b1fa2">-15</text>
  <path d="M96,52 L324,52" stroke="#9c27b0" stroke-width="2" marker-end="url(#arr-t21ep)"/>
  <text x="210" y="43" text-anchor="middle" font-size="11" fill="#9c27b0">+9（右移9）</text>
  <circle cx="170" cy="60" r="6" fill="#9c27b0"/>
  <text x="170" y="43" text-anchor="middle" font-size="11" fill="#9c27b0">结果=-6</text>
  <text x="250" y="100" text-anchor="middle" font-size="12" fill="#7b1fa2">(-15)+9=-(15-9)=-6（|−15|&gt;|9|，取负号）</text>
</svg>

## 例题 2（中档 · 简便运算）

### 题目

计算：$(-6.5) + 3\frac{1}{4} + 6.5 + (-4\frac{1}{4})$

### 解析

利用加法交换律和结合律，把互为相反数的、同分母的分别结合：

$$
\begin{aligned}
原式 &= \left[(-6.5) + 6.5\right] + \left[3\tfrac{1}{4} + (-4\tfrac{1}{4})\right] \\
&= 0 + (-1) \\
&= -1
\end{aligned}
$$

**答案：$-1$**

> 💡 简便运算三凑：凑零（相反数）、凑整、凑同分母。

---

## 例题 3（提高 · 实际应用）

### 题目

某检修小组乘汽车沿公路检修线路，规定向东为正、向西为负。某天从出发点起行驶记录（单位：千米）为：

$$
+10,\; -3,\; +4,\; +2,\; -8,\; +13,\; -2,\; -11,\; +7,\; -5
$$

(1) 收工时小组在出发点的哪个方向？距出发点多远？
(2) 若汽车每千米耗油 0.2 升，这一天共耗油多少升？

### 解析

(1) 求最终位置：把所有记录**求和**（正负相消）：

$$
10 - 3 + 4 + 2 - 8 + 13 - 2 - 11 + 7 - 5 = 7
$$

结果为 $+7$，即收工时在出发点**东边 7 千米**处。

(2) 耗油看的是**总路程**，与方向无关，所以取每段的**绝对值**求和：

$$
10 + 3 + 4 + 2 + 8 + 13 + 2 + 11 + 7 + 5 = 65 \text{（千米）}
$$

耗油量：

$$
65 \times 0.2 = 13 \text{（升）}
$$

**答案：(1) 东边 7 千米；(2) 13 升**

> ⚠️ **易错点**：位置用「代数和」，路程/耗油用「绝对值之和」，两者不能混淆。
