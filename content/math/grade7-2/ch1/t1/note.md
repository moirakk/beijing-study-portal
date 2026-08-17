---
title: 两条直线相交
date: 2026-08-05
---

# 两条直线相交

标签：#中考必考 #基础

## 一、相交线与对顶角

在同一平面内，两条直线只有一个公共点时，称这两条直线**相交**，公共点叫做**交点**。

两条直线相交形成 4 个角，按位置关系分为两类：

- **邻补角**：有一条公共边，另一边互为反向延长线的两个角。如 $\angle 1$ 与 $\angle 2$。
- **对顶角**：有公共顶点，且两边分别互为反向延长线的两个角。如 $\angle 1$ 与 $\angle 3$。

<svg viewBox="0 0 320 260" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <!-- 两条直线相交于O点 -->
  <!-- 直线AB：从左下到右上 -->
  <line x1="40" y1="210" x2="280" y2="50" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 直线CD：从左上到右下 -->
  <line x1="40" y1="50" x2="280" y2="210" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 交点O -->
  <circle cx="160" cy="130" r="3" fill="#7b1fa2"/>
  <!-- 角度弧线 ∠1（右上，对顶角∠3在左下） -->
  <path d="M 185 115 A 30 30 0 0 0 175 105" fill="none" stroke="#9c27b0" stroke-width="1.5"/>
  <!-- 角度弧线 ∠2（右下，邻补角） -->
  <path d="M 185 145 A 30 30 0 0 1 175 155" fill="none" stroke="#e91e63" stroke-width="1.5"/>
  <!-- 角度弧线 ∠3（左下，对顶角∠1） -->
  <path d="M 135 145 A 30 30 0 0 0 145 155" fill="none" stroke="#9c27b0" stroke-width="1.5"/>
  <!-- 角度弧线 ∠4（左上，邻补角） -->
  <path d="M 135 115 A 30 30 0 0 1 145 105" fill="none" stroke="#e91e63" stroke-width="1.5"/>
  <!-- 标注角度编号 -->
  <text x="195" y="118" font-size="14" fill="#9c27b0" font-family="serif">∠1</text>
  <text x="195" y="158" font-size="14" fill="#e91e63" font-family="serif">∠2</text>
  <text x="112" y="158" font-size="14" fill="#9c27b0" font-family="serif">∠3</text>
  <text x="112" y="118" font-size="14" fill="#e91e63" font-family="serif">∠4</text>
  <!-- 端点字母 -->
  <text x="25" y="218" font-size="14" fill="#333" font-family="serif">A</text>
  <text x="282" y="48" font-size="14" fill="#333" font-family="serif">B</text>
  <text x="25" y="48" font-size="14" fill="#333" font-family="serif">C</text>
  <text x="282" y="218" font-size="14" fill="#333" font-family="serif">D</text>
  <text x="165" y="125" font-size="13" fill="#333" font-family="serif">O</text>
  <!-- 图例说明 -->
  <rect x="30" y="228" width="12" height="12" fill="#9c27b0" rx="2"/>
  <text x="46" y="239" font-size="12" fill="#555">对顶角：∠1=∠3（相等）</text>
  <rect x="175" y="228" width="12" height="12" fill="#e91e63" rx="2"/>
  <text x="191" y="239" font-size="12" fill="#555">邻补角：∠1+∠2=180°</text>
</svg>

## 二、性质

**邻补角互补**：

$$\angle 1 + \angle 2 = 180^{\circ}$$

**对顶角相等**：

$$\angle 1 = \angle 3,\quad \angle 2 = \angle 4$$

推导：因为 $\angle 1 + \angle 2 = 180^{\circ}$，$\angle 3 + \angle 2 = 180^{\circ}$，所以 $\angle 1 = \angle 3$（同角的补角相等）。

> 💡 两条直线相交得到 **2 对对顶角**、**4 对邻补角**。

## 三、例题解析

**例 1**：直线 $AB$、$CD$ 相交于点 $O$，$\angle AOC = 35^{\circ}$，求 $\angle BOD$ 和 $\angle AOD$ 的度数。

**解**：$\angle BOD$ 与 $\angle AOC$ 是对顶角，所以 $\angle BOD = 35^{\circ}$；
$\angle AOD$ 与 $\angle AOC$ 是邻补角，所以 $\angle AOD = 180^{\circ} - 35^{\circ} = 145^{\circ}$。

**例 2**：两条直线相交，若 $\angle 1 : \angle 2 = 2 : 3$（$\angle 1$、$\angle 2$ 是邻补角），求各角度数。

**解**：设 $\angle 1 = 2x$，则 $\angle 2 = 3x$。由 $2x + 3x = 180^{\circ}$ 得 $x = 36^{\circ}$。
所以 $\angle 1 = 72^{\circ}$，$\angle 2 = 108^{\circ}$。

## 四、易错点

1. **对顶角必须由两条直线相交形成**。只是"两个角相等且有公共顶点"不一定是对顶角。
2. 邻补角是**位置关系 + 数量关系**的结合：既相邻（有公共边）又互补；而互补的两个角不一定是邻补角。
3. "对顶角相等"成立，但反过来"相等的角是对顶角"是错误的。
4. 数角的对数时容易漏数：$n$ 条直线交于一点，共有 $n(n-1)$ 对对顶角。

## 五、自测题

1. 直线 $AB$ 与 $CD$ 相交于 $O$，$\angle AOC = 62^{\circ}$，则 $\angle AOD = ?$
2. 判断：相等的两个角是对顶角。（对/错）
3. 两条直线相交所成的四个角中，若有一个角是直角，其余三个角各是多少度？

<details>
<summary>参考答案</summary>

1. $\angle AOD = 180^{\circ} - 62^{\circ} = 118^{\circ}$。
2. 错。对顶角一定相等，但相等的角不一定是对顶角。
3. 都是 $90^{\circ}$（由邻补角互补与对顶角相等可得）。

</details>

## 六、知识联系

- 当四个角中有一个是直角时，两条直线的位置关系就是 [[垂直]]；
- 角的和差计算基础见 [[比较与运算]] 与 [[余角和补角]]；
- 三条直线的位置关系将在 [[被第三条直线所截]] 中研究。
