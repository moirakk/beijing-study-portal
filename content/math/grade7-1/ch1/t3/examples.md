# 例题 · 数轴

## 例题 1（基础 · 三要素辨析）

### 题目

下列关于数轴的说法正确的是（　　）

A. 有原点和正方向的直线是数轴
B. 数轴上离原点越远的点表示的数越大
C. 数轴上表示 $-2$ 的点在原点左侧 2 个单位长度处
D. 所有有理数都在原点右侧

### 解析

- A 错误：缺少**单位长度**，三要素不全；
- B 错误：左侧离原点越远的数越**小**（如 $-100$ 离原点很远却很小）；
- C **正确**：负数在原点左侧，距离为其绝对值；
- D 错误：负数都在原点左侧。

**答案：C**

---

## 图示

<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t3e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="50" x2="470" y2="50" stroke="#424242" stroke-width="2" marker-end="url(#arr-t3e)"/>
  <!-- 刻度 -->
  <line x1="90" y1="43" x2="90" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="72" text-anchor="middle" font-size="13" fill="#7b1fa2">-3</text>
  <line x1="170" y1="43" x2="170" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="72" text-anchor="middle" font-size="13" fill="#7b1fa2">-2</text>
  <line x1="250" y1="43" x2="250" y2="57" stroke="#424242" stroke-width="2"/>
  <text x="250" y="72" text-anchor="middle" font-size="14" fill="#424242">0</text>
  <line x1="330" y1="43" x2="330" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="330" y="72" text-anchor="middle" font-size="13" fill="#7b1fa2">1</text>
  <!-- 例2：A从-3出发，右移5到2，再左移2到0 -->
  <circle cx="90" cy="50" r="5" fill="#7b1fa2"/>
  <text x="90" y="35" text-anchor="middle" font-size="11" fill="#7b1fa2">A(-3)出发</text>
  <!-- 右移5箭头 -->
  <path d="M95,42 Q210,25 325,42" stroke="#9c27b0" stroke-width="1.5" fill="none" marker-end="url(#arr-t3e)"/>
  <text x="210" y="22" text-anchor="middle" font-size="11" fill="#9c27b0">右移5</text>
  <!-- 左移2箭头 -->
  <path d="M325,58 Q290,75 255,58" stroke="#7b1fa2" stroke-width="1.5" fill="none" marker-end="url(#arr-t3e)"/>
  <text x="290" y="90" text-anchor="middle" font-size="11" fill="#7b1fa2">左移2</text>
  <circle cx="250" cy="50" r="5" fill="#ce93d8"/>
  <text x="250" y="35" text-anchor="middle" font-size="11" fill="#424242">结果=0</text>
</svg>

## 例题 2（基础 · 点的移动）

### 题目

数轴上点 $A$ 表示 $-3$。将点 $A$ 先向右移动 5 个单位长度，再向左移动 2 个单位长度，此时点 $A$ 表示的数是多少？

### 解析

右移加、左移减：

$$
-3 + 5 - 2 = 0
$$

**答案：$0$**

> 💡 移动问题不必画图逐格数，直接"右加左减"列算式即可。

---

## 例题 3（中档 · 距离问题）

### 题目

数轴上点 $M$ 表示的数为 $x$，且点 $M$ 到表示 $1$ 的点的距离为 4。求 $x$ 的值。

### 解析

"到表示 1 的点的距离为 4"即：

$$
|x - 1| = 4
$$

点 $M$ 可能在 1 的左边或右边：

- 在右边：$x = 1 + 4 = 5$；
- 在左边：$x = 1 - 4 = -3$。

**答案：$x = 5$ 或 $x = -3$**

> ⚠️ 距离问题一般有**两个解**，只答一个是最常见的丢分点。

---

## 例题 4（提高 · 动点综合）

### 题目

数轴上点 $A$ 表示 $-6$，点 $B$ 表示 $4$。动点 $P$ 从点 $A$ 出发，以每秒 2 个单位长度的速度沿数轴向右运动。问几秒后 $PB = 3$？

### 解析

设运动 $t$ 秒后，点 $P$ 表示的数为 $-6 + 2t$。

$PB = 3$ 即：

$$
|(-6 + 2t) - 4| = 3 \implies |2t - 10| = 3
$$

分两种情况：

1. $2t - 10 = 3$，解得 $t = 6.5$；
2. $2t - 10 = -3$，解得 $t = 3.5$。

两个时刻都在 $t \ge 0$ 范围内，均符合题意。

**答案：$3.5$ 秒或 $6.5$ 秒后 $PB = 3$**

> 💡 动点问题的通法：用时间 $t$ 表示动点位置，再用 $|a-b|$ 表示距离，列方程求解。
