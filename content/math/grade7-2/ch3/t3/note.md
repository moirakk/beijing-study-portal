---
title: 表示平移
date: 2026-08-05
---

# 表示平移

标签：#中考必考 #重点

## 一、点的平移与坐标变化

在平面直角坐标系中，把点 $(x, y)$：

| 平移方式 | 对应点坐标 |
|---|---|
| 向右平移 $a$ 个单位 | $(x + a,\ y)$ |
| 向左平移 $a$ 个单位 | $(x - a,\ y)$ |
| 向上平移 $b$ 个单位 | $(x,\ y + b)$ |
| 向下平移 $b$ 个单位 | $(x,\ y - b)$ |

记忆口诀：**右加左减（横坐标），上加下减（纵坐标）**。（$a, b > 0$）

$$ (x,y) \xrightarrow{\text{右移}a\text{,上移}b} (x+a,\ y+b) $$

<svg viewBox="0 0 340 280" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <!-- 坐标系 -->
  <line x1="20" y1="160" x2="320" y2="160" stroke="#7b1fa2" stroke-width="2"/>
  <polygon points="315,155 325,160 315,165" fill="#7b1fa2"/>
  <line x1="100" y1="270" x2="100" y2="20" stroke="#7b1fa2" stroke-width="2"/>
  <polygon points="95,25 100,15 105,25" fill="#7b1fa2"/>
  <text x="328" y="164" font-size="13" fill="#7b1fa2" font-family="serif">x</text>
  <text x="103" y="14" font-size="13" fill="#7b1fa2" font-family="serif">y</text>
  <text x="85" y="175" font-size="12" fill="#333" font-family="serif">O</text>
  <!-- 刻度 -->
  <line x1="160" y1="155" x2="160" y2="165" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="156" y="178" font-size="11" fill="#333">1</text>
  <line x1="220" y1="155" x2="220" y2="165" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="216" y="178" font-size="11" fill="#333">2</text>
  <line x1="280" y1="155" x2="280" y2="165" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="276" y="178" font-size="11" fill="#333">3</text>
  <line x1="95" y1="100" x2="105" y2="100" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="108" y="104" font-size="11" fill="#333">2</text>
  <!-- 原点P(-2,3) -->
  <circle cx="160" cy="100" r="6" fill="#7b1fa2"/>
  <text x="165" y="97" font-size="13" fill="#7b1fa2" font-family="serif">P(1,2)</text>
  <!-- 右移2后P'(3,2) -->
  <circle cx="280" cy="100" r="6" fill="#e91e63"/>
  <text x="285" y="97" font-size="13" fill="#e91e63" font-family="serif">P'(3,2)</text>
  <!-- 平移箭头（向右） -->
  <line x1="168" y1="100" x2="272" y2="100" stroke="#e91e63" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="268,95 278,100 268,105" fill="#e91e63"/>
  <text x="200" y="90" font-size="11" fill="#e91e63">右移2：x+2</text>
  <!-- 上移1后P''(1,3) -->
  <circle cx="160" cy="40" r="6" fill="#4caf50"/>
  <text x="165" y="37" font-size="13" fill="#4caf50" font-family="serif">P''(1,3)</text>
  <!-- 平移箭头（向上） -->
  <line x1="160" y1="92" x2="160" y2="48" stroke="#4caf50" stroke-width="2" stroke-dasharray="5,3"/>
  <polygon points="155,52 160,42 165,52" fill="#4caf50"/>
  <text x="108" y="70" font-size="11" fill="#4caf50">上移1：y+1</text>
  <!-- 说明 -->
  <text x="20" y="220" font-size="12" fill="#555">右加左减（横坐标x）</text>
  <text x="20" y="238" font-size="12" fill="#555">上加下减（纵坐标y）</text>
  <text x="20" y="256" font-size="11" fill="#7b1fa2">图形平移 = 每个顶点作相同平移</text>
</svg>

## 二、图形的平移

对一个图形进行平移，等价于把图形上**每个点**（实际操作中只需关键点/顶点）作同样的平移：

- 图形向右平移 $a$ 个单位 ⟺ 各顶点横坐标都加 $a$；
- 图形向上平移 $b$ 个单位 ⟺ 各顶点纵坐标都加 $b$。

反过来，由对应点坐标的变化也能读出平移的方向和距离。

## 三、例题解析

**例 1**：点 $P(-2, 3)$ 先向右平移 4 个单位，再向下平移 5 个单位，求对应点坐标。

**解**：横坐标 $-2 + 4 = 2$，纵坐标 $3 - 5 = -2$，对应点为 $(2, -2)$。

**例 2**：线段 $AB$ 平移后，$A(1, 2)$ 的对应点是 $A'(3, -1)$，求 $B(-2, 4)$ 的对应点 $B'$。

**解**：由 $A \to A'$：横坐标 $+2$，纵坐标 $-3$（即右移 2、下移 3）。
所以 $B'(-2+2,\ 4-3) = (0, 1)$。

**例 3**：$\triangle ABC$ 各顶点横坐标不变、纵坐标都加 3，得到的三角形与原三角形是什么关系？

**解**：是把 $\triangle ABC$ **向上平移 3 个单位**得到的图形，两三角形形状、大小完全相同。

## 四、易错点

1. "右加左减"作用在**横坐标**，"上加下减"作用在**纵坐标**，别作用错对象。
2. 区分两类问题：**点动**（点平移，坐标怎么变）与**逆问题**（已知坐标变化，问怎样平移），方向别说反。
3. 图形平移时**所有顶点**必须作**相同**的平移，不能只移动部分顶点。
4. 连续两次平移可以合并：先右移 3 再左移 5，等于左移 2。

## 五、自测题

1. 点 $(4, -1)$ 向左平移 6 个单位后的坐标是多少？
2. 点 $M(a, b)$ 平移后得到 $M'(a, b-4)$，描述这次平移。
3. $\triangle ABC$ 的顶点 $A(0,0)$、$B(2,1)$、$C(1,3)$，将三角形向右平移 2 个单位、向上平移 1 个单位，写出三个对应顶点的坐标。

<details>
<summary>参考答案</summary>

1. $(4-6, -1) = (-2, -1)$。
2. 向下平移 4 个单位。
3. $A'(2,1)$、$B'(4,2)$、$C'(3,4)$。

</details>

## 六、知识联系

- 平移的概念与性质见 [[7.4 平移]]，坐标表示是它的"数量化"；
- 坐标系与象限的基础见 [[9.1 用坐标描述平面内点的位置]]；
- 用坐标确定实际位置见 [[表示地理位置]]。
