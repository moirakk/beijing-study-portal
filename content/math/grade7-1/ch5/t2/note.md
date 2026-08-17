---
title: 等式的性质
date: 2026-08-05
---

# 等式的性质

标签：#中考必考 #基础

## 一、等式的两条基本性质

把等式想象成一架**天平**：两边平衡时，同时加、减、乘、除相同的"砝码"，天平仍然平衡。

<svg viewBox="0 0 480 180" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="480" height="180" rx="10" fill="#f3e5f5"/>
  <text x="240" y="22" text-anchor="middle" fill="#7b1fa2" font-size="14" font-weight="bold">天平模型：等式的性质</text>
  <!-- Stand -->
  <line x1="240" y1="40" x2="240" y2="100" stroke="#424242" stroke-width="3"/>
  <line x1="100" y1="100" x2="380" y2="100" stroke="#424242" stroke-width="3"/>
  <!-- Left pan -->
  <line x1="130" y1="100" x2="130" y2="130" stroke="#424242" stroke-width="2"/>
  <ellipse cx="130" cy="135" rx="50" ry="10" fill="#ce93d8" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="130" y="139" text-anchor="middle" fill="#4a148c" font-size="12">a + c</text>
  <!-- Right pan -->
  <line x1="350" y1="100" x2="350" y2="130" stroke="#424242" stroke-width="2"/>
  <ellipse cx="350" cy="135" rx="50" ry="10" fill="#ce93d8" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="350" y="139" text-anchor="middle" fill="#4a148c" font-size="12">b + c</text>
  <!-- Labels -->
  <text x="240" y="90" text-anchor="middle" fill="#7b1fa2" font-size="12">a = b</text>
  <text x="130" y="160" text-anchor="middle" fill="#9c27b0" font-size="11">左边同加 c</text>
  <text x="350" y="160" text-anchor="middle" fill="#9c27b0" font-size="11">右边同加 c</text>
  <text x="240" y="175" text-anchor="middle" fill="#4a148c" font-size="12">两边同加减同一数，等式不变（性质1）</text>
</svg>

### 性质 1（加减）

**等式两边加（或减）同一个数（或式子），结果仍相等。**

$$
a = b \implies a + c = b + c, \quad a - c = b - c
$$

### 性质 2（乘除）

**等式两边乘同一个数，或除以同一个不为 0 的数，结果仍相等。**

$$
a = b \implies ac = bc; \qquad a = b,\ c \neq 0 \implies \frac{a}{c} = \frac{b}{c}
$$

> ⚠️ **易错点**：除法必须强调**除数不为 0**！"两边同除以 $x$"是危险操作——$x$ 可能是 0。

## 二、用等式性质解简单方程

例：解方程 $2x + 5 = 9$。

1. 两边**减 5**（性质 1）：$2x = 4$；
2. 两边**除以 2**（性质 2）：$x = 2$。

每一步变形的目标都是让方程逐渐变成 **$x = a$** 的形式。

## 三、"移项"的本质

由性质 1 可以推出常用操作——**移项**：

$$
x + 3 = 7 \iff x = 7 - 3
$$

**把等式一边的某项变号后移到另一边，叫做移项。** 它就是"两边同减（加）该项"的简写。

> ⚠️ **易错点**：移项**必须变号**！$5x = 2x + 9$ 移项得 $5x - 2x = 9$（$+2x$ 移过来变 $-2x$），不变号是解方程的头号错误。

## 四、等式性质的其他推论

- **对称性**：$a = b \implies b = a$（等式两边可交换）；
- **传递性**：$a = b,\ b = c \implies a = c$。

## 五、要点小结

1. 性质 1：两边同加减，等式不变；
2. 性质 2：两边同乘除（除数非 0），等式不变；
3. 移项 = 性质 1 的快捷方式，**过桥变号**；
4. 天平模型帮助理解每一步变形。

## 六、知识联系

- 等式的性质是[[5.2 解一元一次方程]]全部步骤的理论依据；
- 初二学不等式时会对比"不等式的性质"（乘除负数要变号），届时回看本节。
