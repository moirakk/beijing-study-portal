# 例题 · 实际问题与一元一次方程

## 例题 1（基础 · 和差倍分）

### 题目

七年级两个班共有 85 人，一班人数比二班人数的 2 倍少 20 人。两个班各有多少人？

### 解析

设二班有 $x$ 人，则一班有 $(2x - 20)$ 人。

相等关系：一班 $+$ 二班 $=$ 总人数：

$$
(2x - 20) + x = 85 \implies 3x = 105 \implies x = 35
$$

一班：$2 \times 35 - 20 = 50$ 人。

检验：$50 + 35 = 85$ ✔，且都是正整数 ✔。

**答案：一班 50 人，二班 35 人**

---

## 例题 2（中档 · 行程之相遇）

### 题目

甲、乙两地相距 360 千米。一辆轿车从甲地出发，速度为 80 千米/时；同时一辆货车从乙地出发相向而行，速度为 64 千米/时。几小时后两车相遇？

<svg viewBox="0 0 480 100" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="480" height="100" rx="10" fill="#f3e5f5"/>
  <text x="240" y="20" text-anchor="middle" fill="#7b1fa2" font-size="13" font-weight="bold">行程相遇问题线段图</text>
  <!-- Main line -->
  <line x1="40" y1="55" x2="440" y2="55" stroke="#424242" stroke-width="2.5"/>
  <!-- Points -->
  <circle cx="40" cy="55" r="5" fill="#7b1fa2"/>
  <circle cx="440" cy="55" r="5" fill="#7b1fa2"/>
  <circle cx="240" cy="55" r="5" fill="#9c27b0"/>
  <!-- Labels -->
  <text x="40" y="75" text-anchor="middle" fill="#4a148c" font-size="12">甲地</text>
  <text x="440" y="75" text-anchor="middle" fill="#4a148c" font-size="12">乙地</text>
  <text x="240" y="75" text-anchor="middle" fill="#9c27b0" font-size="12">相遇点</text>
  <!-- Arrows -->
  <line x1="40" y1="42" x2="220" y2="42" stroke="#7b1fa2" stroke-width="2" marker-end="url(#arr1)"/>
  <line x1="440" y1="42" x2="260" y2="42" stroke="#9c27b0" stroke-width="2" marker-end="url(#arr2)"/>
  <defs>
    <marker id="arr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#7b1fa2"/>
    </marker>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
      <path d="M8,0 L8,6 L0,3 z" fill="#9c27b0"/>
    </marker>
  </defs>
  <text x="130" y="36" text-anchor="middle" fill="#7b1fa2" font-size="11">轿车 80t 千米</text>
  <text x="350" y="36" text-anchor="middle" fill="#9c27b0" font-size="11">货车 64t 千米</text>
  <text x="240" y="92" text-anchor="middle" fill="#4a148c" font-size="11">80t + 64t = 360 → t = 2.5 小时</text>
</svg>

### 解析

设 $t$ 小时后相遇。相遇问题：两车路程之和 $=$ 全程：

$$
80t + 64t = 360 \implies 144t = 360 \implies t = 2.5
$$

**答案：$2.5$ 小时后相遇**

> 💡 画一条线段图：两端出发，中间碰头，路程"拼"成全程——图一画关系就出来。

---

## 例题 3（中档 · 工程问题）

### 题目

一项工程，甲队单独做需 12 天完成，乙队单独做需 8 天完成。甲队先做 3 天后，乙队加入合做，还需几天完成？

### 解析

设总量为 1，甲效率 $\frac{1}{12}$，乙效率 $\frac{1}{8}$。设合做还需 $x$ 天：

$$
\frac{3}{12} + \left(\frac{1}{12} + \frac{1}{8}\right)x = 1
$$

化简（$\frac{1}{12} + \frac{1}{8} = \frac{2}{24} + \frac{3}{24} = \frac{5}{24}$）：

$$
\frac{1}{4} + \frac{5}{24}x = 1 \implies \frac{5}{24}x = \frac{3}{4} \implies x = \frac{18}{5} = 3.6
$$

**答案：还需 $3.6$ 天完成**

---

## 例题 4（中档 · 利润问题）

### 题目

某商品按标价打八折出售仍可获利 20%。已知该商品进价为 200 元，求标价。

### 解析

设标价为 $x$ 元。

- 售价 $= 0.8x$；
- 获利 20% 意味着售价 $=$ 进价 $\times (1 + 20\%) = 240$ 元。

$$
0.8x = 240 \implies x = 300
$$

**答案：标价为 300 元**

> ⚠️ "获利 20%" 是相对**进价**而言：售价 $= 200 \times 1.2$，不要写成 $x \times 1.2$。

---

## 例题 5（提高 · 分段计费）

### 题目

某市居民用水收费标准：每月用水不超过 12 吨，每吨 3 元；超过 12 吨的部分，每吨 5 元。小明家某月交水费 51 元，这个月用水多少吨？

### 解析

先判断：若恰好用 12 吨，水费 $12 \times 3 = 36 < 51$，所以用水超过了 12 吨。

设用水 $x$ 吨（$x > 12$）：

$$
12 \times 3 + 5(x - 12) = 51
$$

$$
36 + 5x - 60 = 51 \implies 5x = 75 \implies x = 15
$$

检验：$x = 15 > 12$ 与假设一致 ✔。

**答案：这个月用水 15 吨**

> 💡 分段计费三步：**先定段 → 按段列式 → 解后回验所在段**。
