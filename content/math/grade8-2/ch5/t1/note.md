---
title: 20.1 数据的集中趋势
date: 2026-08-06
---

# 20.1 数据的集中趋势

标签：#中考高频 #统计

## 一、平均数

**算术平均数**：$\bar{x} = \dfrac{x_1 + x_2 + \cdots + x_n}{n}$

**加权平均数**：若 $x_1, x_2, \ldots, x_k$ 的权分别为 $w_1, w_2, \ldots, w_k$，则

$$\bar{x} = \frac{x_1 w_1 + x_2 w_2 + \cdots + x_k w_k}{w_1 + w_2 + \cdots + w_k}$$

**权**反映各数据的"重要程度"，可以是次数、比例或百分比。

<svg width="420" height="180" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 420 180">
  <!-- 标题 -->
  <text x="210" y="18" font-size="14" fill="#7b1fa2" font-weight="bold" text-anchor="middle">集中趋势三指标对比</text>
  <!-- 数据示例：3,5,7,8,12 -->
  <!-- 数轴 -->
  <line x1="30" y1="80" x2="390" y2="80" stroke="#424242" stroke-width="2"/>
  <polygon points="390,80 382,76 382,84" fill="#424242"/>
  <!-- 数据点 -->
  <circle cx="80" cy="80" r="6" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="80" y="100" font-size="13" fill="#424242" text-anchor="middle">3</text>
  <circle cx="150" cy="80" r="6" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="150" y="100" font-size="13" fill="#424242" text-anchor="middle">5</text>
  <circle cx="220" cy="80" r="6" fill="#9c27b0" stroke="#7b1fa2" stroke-width="2"/>
  <text x="220" y="100" font-size="13" fill="#9c27b0" font-weight="bold" text-anchor="middle">7</text>
  <circle cx="270" cy="80" r="6" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="270" y="100" font-size="13" fill="#424242" text-anchor="middle">8</text>
  <circle cx="340" cy="80" r="6" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="340" y="100" font-size="13" fill="#424242" text-anchor="middle">12</text>
  <!-- 中位数标注 -->
  <line x1="220" y1="55" x2="220" y2="74" stroke="#9c27b0" stroke-width="2"/>
  <text x="220" y="50" font-size="12" fill="#9c27b0" font-weight="bold" text-anchor="middle">中位数=7</text>
  <!-- 平均数标注（(3+5+7+8+12)/5=7） -->
  <line x1="220" y1="86" x2="220" y2="115" stroke="#7b1fa2" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="220" y="128" font-size="12" fill="#7b1fa2" font-weight="bold" text-anchor="middle">平均数=(3+5+7+8+12)/5=7</text>
  <!-- 众数标注 -->
  <text x="210" y="150" font-size="12" fill="#424242" text-anchor="middle">众数：出现次数最多的数（此例无重复，无众数）</text>
  <text x="210" y="168" font-size="12" fill="#424242" text-anchor="middle">数据：3, 5, 7, 8, 12（已排序）</text>
</svg>

**例1** 某应聘者笔试 $85$ 分、面试 $90$ 分，按笔试 $60\%$、面试 $40\%$ 计总评。

解：$\bar{x} = 85 \times 0.6 + 90 \times 0.4 = 51 + 36 = 87$（分）。

> ⚠️ **易错点**：有权重时**不能**直接算术平均（$\frac{85+90}{2}=87.5$ 是错的），必须按权计算。

## 二、中位数

将数据**按大小顺序排列**后：

- 数据个数为**奇数**：最中间的数即中位数；
- 数据个数为**偶数**：中间两个数的**平均数**即中位数。

**例2** 求数据 $3, 8, 5, 12, 7$ 的中位数。

解：排序得 $3, 5, 7, 8, 12$，中位数为 $7$。

**例3** 求数据 $2, 4, 6, 8$ 的中位数：中间两数为 $4$、$6$，中位数 $= 5$。

> ⚠️ **易错点**：求中位数**必须先排序**！直接取原始数据中间位置的数是最常见错误。

## 三、众数

一组数据中**出现次数最多**的数据叫做众数。

- 众数可以**不止一个**，也可能没有（各数据次数都相同时一般不提众数）；
- 众数是"数据"本身，不是出现的次数。

**例4** 数据 $5, 3, 5, 7, 3, 5$ 的众数是 $5$（出现 3 次）。

## 四、三个统计量的选用

| 统计量 | 优点 | 缺点 | 适用场景 |
|---|---|---|---|
| 平均数 | 利用全部数据 | 易受**极端值**影响 | 数据较均匀时 |
| 中位数 | 不受极端值影响 | 只与位置有关 | 有极端值（如工资） |
| 众数 | 反映"多数"情况 | 可能不唯一 | 销量、尺码等 |

**例5** 某公司 9 名员工月薪中 8 人为 $5000$ 元，经理为 $30000$ 元。平均数约 $7778$ 元被"拉高"，此时**中位数 $5000$ 元**更能代表一般水平。

## 五、要点小结

1. 平均数看总体、带权要加权；
2. 中位数先排序、看位置、偶数个取中间两数平均；
3. 众数看"出现最多"，可多个；
4. 有极端值选中位数，讲"畅销款"选众数。

## 六、自测题

1. 数据 $1, 2, 2, 3, 4, 10$ 的平均数、中位数、众数各是多少？
2. 某学生平时、期中、期末成绩为 $80$、$85$、$90$，按 $2:3:5$ 加权，求总评。
3. 鞋店进货最应参考哪个统计量？为什么？

<details><summary>参考答案</summary>

1. 平均数 $\dfrac{22}{6} = \dfrac{11}{3} \approx 3.7$；中位数 $\dfrac{2+3}{2} = 2.5$；众数 $2$；
2. $\dfrac{80\times2 + 85\times3 + 90\times5}{10} = 86.5$ 分；
3. 众数——最畅销的尺码进货最多。

</details>

## 七、知识联系

- 集中趋势之外还要看离散程度，见 [[20.2 数据的波动程度]]；
- 两者综合分析真实数据的实践见 [[20.3 课题学习：体质健康测试中的数据]]。
