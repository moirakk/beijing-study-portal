---
title: 17.1 勾股定理
date: 2026-08-06
---

# 17.1 勾股定理

标签：#中考高频 #核心定理

## 一、勾股定理的内容

**如果直角三角形的两条直角边长分别为 $a$、$b$，斜边长为 $c$，那么**

$$a^2 + b^2 = c^2$$

即：直角三角形两直角边的平方和等于斜边的平方。我国古代把较短直角边叫"勾"，较长直角边叫"股"，斜边叫"弦"，故名勾股定理。

| 已知 | 求法 |
|---|---|
| 两直角边 $a$、$b$ | $c = \sqrt{a^2 + b^2}$ |
| 斜边 $c$ 和一直角边 $a$ | $b = \sqrt{c^2 - a^2}$ |

<svg width="420" height="220" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 420 220">
  <!-- 直角三角形 -->
  <polygon points="60,180 60,40 220,180" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 直角标记 -->
  <rect x="60" y="164" width="16" height="16" fill="none" stroke="#7b1fa2" stroke-width="1.5"/>
  <!-- 顶点标注 -->
  <text x="44" y="196" font-size="14" fill="#7b1fa2" font-weight="bold">C</text>
  <text x="44" y="34" font-size="14" fill="#7b1fa2" font-weight="bold">A</text>
  <text x="222" y="196" font-size="14" fill="#7b1fa2" font-weight="bold">B</text>
  <!-- 边标注 -->
  <text x="30" y="115" font-size="15" fill="#9c27b0" font-weight="bold" font-style="italic">a</text>
  <text x="135" y="198" font-size="15" fill="#9c27b0" font-weight="bold" font-style="italic">b</text>
  <text x="148" y="100" font-size="15" fill="#7b1fa2" font-weight="bold" font-style="italic">c</text>
  <!-- a² 正方形（左侧） -->
  <rect x="20" y="40" width="40" height="140" fill="#9c27b0" opacity="0.25" stroke="#9c27b0" stroke-width="1.5"/>
  <text x="40" y="115" font-size="13" fill="#9c27b0" font-weight="bold" text-anchor="middle">a²</text>
  <!-- b² 正方形（下方） -->
  <rect x="60" y="180" width="160" height="35" fill="#7b1fa2" opacity="0.2" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="140" y="202" font-size="13" fill="#7b1fa2" font-weight="bold" text-anchor="middle">b²</text>
  <!-- c² 正方形（斜边，简化为文字） -->
  <text x="310" y="80" font-size="15" fill="#7b1fa2" font-weight="bold" text-anchor="middle">a² + b² = c²</text>
  <rect x="260" y="60" width="140" height="40" rx="6" fill="#e1bee7" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="330" y="86" font-size="15" fill="#7b1fa2" font-weight="bold" text-anchor="middle">a² + b² = c²</text>
  <!-- 勾股数示例 -->
  <text x="310" y="130" font-size="13" fill="#424242" text-anchor="middle">常见勾股数：</text>
  <text x="310" y="150" font-size="13" fill="#9c27b0" text-anchor="middle">3,4,5</text>
  <text x="310" y="168" font-size="13" fill="#9c27b0" text-anchor="middle">5,12,13</text>
  <text x="310" y="186" font-size="13" fill="#9c27b0" text-anchor="middle">8,15,17</text>
</svg>

## 二、定理的证明思想

教材采用**赵爽弦图**：用 4 个全等的直角三角形拼成大正方形，中间空出小正方形，由面积关系

$$c^2 = 4 \times \frac{1}{2}ab + (b-a)^2$$

展开整理即得 $a^2 + b^2 = c^2$。这种"同一图形面积的两种算法"是**面积法**证明的典范。

## 三、典型例题

**例1** 直角三角形两直角边分别为 $6$ 和 $8$，求斜边长。

解：$c = \sqrt{6^2 + 8^2} = \sqrt{100} = 10$。

**例2** 直角三角形斜边为 $13$，一直角边为 $5$，求另一直角边。

解：$b = \sqrt{13^2 - 5^2} = \sqrt{144} = 12$。

**例3** 在 $\triangle ABC$ 中，$AB = AC = 5$，$BC = 6$，求 BC 边上的高。

解：等腰三角形底边上的高平分底边，半底为 $3$，高 $h = \sqrt{5^2 - 3^2} = 4$。

> 💡 **技巧**：非直角三角形中用勾股定理，先**作高**构造直角三角形。

**例4**（梯子问题）长 $2.5\,\text{m}$ 的梯子斜靠墙上，梯脚离墙 $0.7\,\text{m}$，求梯子顶端离地高度。

解：$h = \sqrt{2.5^2 - 0.7^2} = \sqrt{6.25 - 0.49} = \sqrt{5.76} = 2.4\,(\text{m})$。

## 四、易错点

1. **前提必须是直角三角形**，且 $c$ 必须是**斜边**（直角所对的边），不要死记 " $c$ "；
2. 已知两边求第三边时，若未指明哪条是斜边，要**分类讨论**：第三边可能是斜边，也可能是直角边；
3. 开平方后结果要化成最简二次根式，如 $\sqrt{8} = 2\sqrt{2}$；
4. 常用勾股数要熟记：$(3,4,5)$、$(5,12,13)$、$(6,8,10)$、$(8,15,17)$、$(7,24,25)$。

## 五、要点小结

1. $a^2 + b^2 = c^2$（$c$ 为斜边）；
2. 面积法（弦图）是证明核心思想；
3. 应用套路：找（造）直角三角形 → 定斜边 → 列式开方；
4. 两边定三边问题记得分类讨论。

## 六、自测题

1. 直角三角形两直角边为 $9$、$12$，斜边长为多少？
2. 直角三角形有两边长为 $3$ 和 $4$，求第三边（注意讨论）。
3. 一棵树在离地 $3\,\text{m}$ 处折断，树顶落在离树根 $4\,\text{m}$ 处，求树原来的高度。

<details><summary>参考答案</summary>

1. $15$；
2. 若 $4$ 为直角边，第三边 $=5$；若 $4$ 为斜边，第三边 $=\sqrt{7}$；
3. 折断部分长 $\sqrt{3^2+4^2}=5$，原高 $3+5=8\,\text{m}$。

</details>

## 七、知识联系

- 计算结果的化简用到 [[16.2 二次根式的乘除]] 与 [[16.3 二次根式的加减]]；
- 它的逆命题见 [[17.2 勾股定理的逆定理]]；
- 更多实际与几何应用见 [[勾股定理综合应用]]；
- 在 [[18.2 特殊的平行四边形]] 中求矩形、菱形的对角线也离不开它。
