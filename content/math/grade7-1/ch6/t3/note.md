---
title: 6.2 直线、射线、线段
date: 2026-08-05
---

# 6.2 直线、射线、线段

标签：#中考必考 #基础 #易错

## 一、三种"线"的对比

| | 直线 | 射线 | 线段 |
|---|---|---|---|
| 端点 | 无 | 1 个 | 2 个 |
| 延伸性 | 向两方无限延伸 | 向一方无限延伸 | 不延伸 |
| 可否度量 | 不可 | 不可 | **可以** |
| 表示法 | 直线 $AB$ 或直线 $l$ | 射线 $OA$（端点字母在前） | 线段 $AB$ 或线段 $a$ |

<svg viewBox="0 0 480 130" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="480" height="130" rx="10" fill="#f3e5f5"/>
  <text x="240" y="18" text-anchor="middle" fill="#7b1fa2" font-size="13" font-weight="bold">直线、射线、线段对比图</text>
  <!-- Line (infinite both ways) -->
  <line x1="20" y1="45" x2="460" y2="45" stroke="#7b1fa2" stroke-width="2.5"/>
  <polygon points="20,45 35,40 35,50" fill="#7b1fa2"/>
  <polygon points="460,45 445,40 445,50" fill="#7b1fa2"/>
  <text x="240" y="40" text-anchor="middle" fill="#7b1fa2" font-size="11">直线 AB（无端点，向两方无限延伸）</text>
  <text x="60" y="60" fill="#4a148c" font-size="11">A</text>
  <text x="420" y="60" fill="#4a148c" font-size="11">B</text>
  <!-- Ray (one endpoint) -->
  <circle cx="80" cy="85" r="4" fill="#9c27b0"/>
  <line x1="80" y1="85" x2="450" y2="85" stroke="#9c27b0" stroke-width="2.5"/>
  <polygon points="450,85 435,80 435,90" fill="#9c27b0"/>
  <text x="80" y="100" text-anchor="middle" fill="#9c27b0" font-size="11">O（端点）</text>
  <text x="270" y="80" text-anchor="middle" fill="#9c27b0" font-size="11">射线 OA（一个端点，向一方延伸）</text>
  <text x="430" y="100" fill="#9c27b0" font-size="11">A</text>
  <!-- Segment (two endpoints) -->
  <circle cx="100" cy="118" r="4" fill="#4a148c"/>
  <circle cx="380" cy="118" r="4" fill="#4a148c"/>
  <line x1="100" y1="118" x2="380" y2="118" stroke="#4a148c" stroke-width="2.5"/>
  <text x="100" y="130" text-anchor="middle" fill="#4a148c" font-size="11">A</text>
  <text x="380" y="130" text-anchor="middle" fill="#4a148c" font-size="11">B</text>
  <text x="240" y="113" text-anchor="middle" fill="#4a148c" font-size="11">线段 AB（两个端点，可度量）</text>
</svg>

> ⚠️ **易错点**：
> 1. 射线 $OA$ 与射线 $AO$ **不同**（端点不同，方向不同）；
> 2. 直线 $AB$ 与直线 $BA$ 是**同一条**直线；
> 3. "延长线段 $AB$"指从 $B$ 向外延长；"反向延长"才是从 $A$ 向外。

## 二、两个基本事实（公理）

### 1. 直线公理

**经过两点有一条直线，并且只有一条直线。** 简记："两点确定一条直线。"

应用：植树时只要定好两端的树坑，其余树坑就能排成直线；木板上钉两颗钉子就能固定木条。

### 2. 线段公理

**两点的所有连线中，线段最短。** 简记："两点之间，线段最短。"

**两点的距离**：连接两点的**线段的长度**（注意：距离是"长度"这个数，不是线段本身）。

应用：把弯曲的河道改直可以缩短航程。

## 三、线段的比较与运算

### 比较方法

1. **度量法**：用刻度尺量出长度比大小；
2. **叠合法**：把一条线段移到另一条上，比端点位置。

### 线段的和差

若点 $C$ 在线段 $AB$ 上，则 $AC + CB = AB$，$AC = AB - CB$。

### 中点

若点 $M$ 在线段 $AB$ 上且 $AM = MB$，则 $M$ 是 $AB$ 的**中点**：

$$
AM = MB = \frac{1}{2}AB
$$

> ⚠️ **易错点**：由 $AM = MB$ 推"$M$ 是中点"必须先保证 **$M$ 在线段 $AB$ 上**——若 $M$ 在 $AB$ 的垂直平分线上（以后学）也满足距离相等但不是中点。

## 四、数线段的规律

一条直线上有 $n$ 个点，共能数出的线段条数：

$$
\frac{n(n-1)}{2}
$$

## 五、要点小结

1. 直线无端点、射线一个、线段两个；只有线段可度量；
2. 两点确定一条直线；两点之间线段最短；
3. 中点把线段分成相等两半；
4. 线段计算常分类讨论（点在线段上还是延长线上）。

## 六、知识联系

- 线段的比较与运算方法将平移到[[比较与运算|角的比较与运算]]——两者结构完全平行；
- [[角的概念|角]]由两条有公共端点的射线组成。
