---
title: 绝对值
date: 2026-08-05
---

# 绝对值

标签：#中考高频 #基础 #易错

## 一、绝对值的定义

**数轴上表示数 $a$ 的点与原点的距离**，叫做数 $a$ 的绝对值，记作 $|a|$。

例如：$|3| = 3$，$|-3| = 3$，$|0| = 0$。

> 💡 **理解要点**：绝对值的本质是**距离**。距离只关心"多远"，不关心"哪个方向"，所以绝对值永远不会是负数。

## 图示

<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t5n" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="65" x2="470" y2="65" stroke="#424242" stroke-width="2" marker-end="url(#arr-t5n)"/>
  <!-- 刻度 -->
  <line x1="90" y1="58" x2="90" y2="72" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="86" text-anchor="middle" font-size="13" fill="#7b1fa2">-3</text>
  <line x1="170" y1="58" x2="170" y2="72" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="86" text-anchor="middle" font-size="13" fill="#7b1fa2">-2</text>
  <line x1="250" y1="58" x2="250" y2="72" stroke="#424242" stroke-width="2"/>
  <text x="250" y="86" text-anchor="middle" font-size="14" fill="#424242" font-weight="bold">0</text>
  <line x1="330" y1="58" x2="330" y2="72" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="86" text-anchor="middle" font-size="13" fill="#7b1fa2">-2</text>
  <line x1="410" y1="58" x2="410" y2="72" stroke="#424242" stroke-width="1.5"/>
  <text x="410" y="86" text-anchor="middle" font-size="13" fill="#7b1fa2">3</text>
  <!-- |-3|=3 的距离示意 -->
  <circle cx="90" cy="65" r="6" fill="#7b1fa2"/>
  <text x="90" y="48" text-anchor="middle" font-size="12" fill="#7b1fa2">-3</text>
  <circle cx="250" cy="65" r="5" fill="#424242"/>
  <!-- 距离线 -->
  <line x1="90" y1="100" x2="250" y2="100" stroke="#9c27b0" stroke-width="2"/>
  <line x1="90" y1="95" x2="90" y2="105" stroke="#9c27b0" stroke-width="2"/>
  <line x1="250" y1="95" x2="250" y2="105" stroke="#9c27b0" stroke-width="2"/>
  <text x="170" y="116" text-anchor="middle" font-size="13" fill="#9c27b0" font-weight="bold">|-3| = 3（到原点的距离）</text>
  <!-- |3|=3 的距离示意 -->
  <circle cx="410" cy="65" r="6" fill="#7b1fa2"/>
  <text x="410" y="48" text-anchor="middle" font-size="12" fill="#7b1fa2">3</text>
  <line x1="250" y1="100" x2="410" y2="100" stroke="#ce93d8" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="410" y1="95" x2="410" y2="105" stroke="#ce93d8" stroke-width="2"/>
  <text x="330" y="116" text-anchor="middle" font-size="12" fill="#ce93d8">|3| = 3</text>
</svg>

## 二、代数意义（分段定义）

$$
|a| =
\begin{cases}
a, & a > 0 \\
0, & a = 0 \\
-a, & a < 0
\end{cases}
$$

用文字表述：

- 正数的绝对值是**它本身**；
- $0$ 的绝对值是 $0$；
- 负数的绝对值是**它的相反数**。

> ⚠️ **易错点**：当 $a < 0$ 时 $|a| = -a$，这里 $-a$ 是**正数**（负数的相反数），不要看到负号就以为结果是负的。

## 三、绝对值的重要性质

1. **非负性**：$|a| \ge 0$，即绝对值最小的数是 $0$；
2. 互为相反数的两个数绝对值**相等**：$|a| = |-a|$；
3. 若 $|a| = |b|$，则 $a = b$ 或 $a = -b$；
4. 若几个非负数之和为 $0$，则每个非负数都为 $0$：

$$
|a| + |b| = 0 \implies a = 0 \text{ 且 } b = 0
$$

## 四、已知绝对值求原数

若 $|x| = 5$，则 $x = 5$ 或 $x = -5$——**绝对值相等的数有两个**（互为相反数），除非绝对值为 0。

| 条件 | 结论 |
|---|---|
| $\lvert x \rvert = 5$ | $x = \pm 5$ |
| $\lvert x \rvert = 0$ | $x = 0$ |
| $\lvert x \rvert = -2$ | 无解（绝对值不可能为负） |

> ⚠️ **易错点**：由 $|x|=5$ 只答 $x=5$，漏掉 $x=-5$，是本节最高频的丢分点。

## 五、利用绝对值比较大小

**两个负数比较大小：绝对值大的反而小。**

例如比较 $-\frac{3}{4}$ 与 $-\frac{2}{3}$：

$$
\left|-\frac{3}{4}\right| = \frac{9}{12} > \frac{8}{12} = \left|-\frac{2}{3}\right| \implies -\frac{3}{4} < -\frac{2}{3}
$$

## 六、知识联系

- 绝对值建立在[[数轴]]的距离概念上，与[[相反数]]紧密关联；
- [[有理数的加减法]]的符号法则要靠"比较绝对值大小"来确定结果的符号；
- [[大小比较]]中两负数的比较完全依赖绝对值。
