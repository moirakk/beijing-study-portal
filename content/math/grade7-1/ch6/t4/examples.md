# 例题 · 角的概念

## 例题 1（基础 · 表示方法）

### 题目

如图（想象），射线 $OA$、$OB$、$OC$ 有公共端点 $O$。图中以 $O$ 为顶点的角共有几个？能记作 $\angle O$ 吗？

### 解析

三条射线两两组成角，共：

$$
\frac{3 \times 2}{2} = 3 \text{ 个}
$$

即 $\angle AOB$、$\angle BOC$、$\angle AOC$。

顶点 $O$ 处有多个角，**不能**简记为 $\angle O$，必须用三个字母表示。

**答案：3 个；不能**

> 💡 $n$ 条共端点射线组成 $\frac{n(n-1)}{2}$ 个角，与数线段同一个公式。

---

## 例题 2（基础 · 度分秒换算）

### 题目

(1) 把 $34.4°$ 化成度、分表示；
(2) 把 $50°42'$ 化成度表示。

### 解析

(1) $0.4° = 0.4 \times 60' = 24'$：

$$
34.4° = 34°24'
$$

(2) $42' = \frac{42}{60}° = 0.7°$：

$$
50°42' = 50.7°
$$

> ⚠️ 别按十进制想当然：$34.4° \ne 34°4'$。

---

## 例题 3（中档 · 度分秒运算）

### 题目

计算：(1) $48°39' + 67°45'$；(2) $90° - 25°38'$。

### 解析

(1) 分与分相加：$39' + 45' = 84' = 1°24'$，进位：

$$
48°39' + 67°45' = 115°84' = 116°24'
$$

(2) 借位：$90° = 89°60'$：

$$
89°60' - 25°38' = 64°22'
$$

**答案：(1) $116°24'$；(2) $64°22'$**

> 💡 加法"满 60 进 1"，减法"借 1 当 60"——像小学竖式，只是进制变了。

---

## 例题 4（中档 · 钟表角）

### 题目

求 8:20 时，时针与分针的夹角。

<svg viewBox="0 0 300 200" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" rx="10" fill="#f3e5f5"/>
  <text x="150" y="18" text-anchor="middle" fill="#7b1fa2" font-size="13" font-weight="bold">8:20 时针与分针夹角</text>
  <!-- Clock face -->
  <circle cx="150" cy="110" r="75" fill="white" stroke="#7b1fa2" stroke-width="2.5"/>
  <!-- Hour marks -->
  <text x="150" y="45" text-anchor="middle" fill="#424242" font-size="12">12</text>
  <text x="222" y="115" text-anchor="middle" fill="#424242" font-size="12">3</text>
  <text x="150" y="185" text-anchor="middle" fill="#424242" font-size="12">6</text>
  <text x="78" y="115" text-anchor="middle" fill="#424242" font-size="12">9</text>
  <text x="195" y="55" text-anchor="middle" fill="#424242" font-size="11">1</text>
  <text x="215" y="80" text-anchor="middle" fill="#424242" font-size="11">2</text>
  <text x="215" y="148" text-anchor="middle" fill="#424242" font-size="11">4</text>
  <text x="195" y="170" text-anchor="middle" fill="#424242" font-size="11">5</text>
  <text x="105" y="170" text-anchor="middle" fill="#424242" font-size="11">7</text>
  <text x="85" y="148" text-anchor="middle" fill="#424242" font-size="11">8</text>
  <text x="85" y="80" text-anchor="middle" fill="#424242" font-size="11">10</text>
  <text x="105" y="55" text-anchor="middle" fill="#424242" font-size="11">11</text>
  <!-- Minute hand: 20 min → points to 4 (120° from 12, clockwise) -->
  <line x1="150" y1="110" x2="213" y2="147" stroke="#9c27b0" stroke-width="3"/>
  <text x="220" y="160" fill="#9c27b0" font-size="10">分针(4)</text>
  <!-- Hour hand: 8:20 → 8×30+20×0.5=250° from 12 clockwise -->
  <!-- 250° from top = 250-90=160° in standard = sin(160°)≈0.342, cos(160°)≈-0.940 -->
  <!-- x=150+60*sin(250°)=150+60*(-0.940)=150-56=94, y=110-60*cos(250°)=110-60*(-0.342)=110+21=131 -->
  <line x1="150" y1="110" x2="94" y2="131" stroke="#7b1fa2" stroke-width="4"/>
  <text x="72" y="145" fill="#7b1fa2" font-size="10">时针</text>
  <!-- Angle arc -->
  <path d="M 150,110 m 40,0 A 40,40 0 1,0 183,130" fill="none" stroke="#ce93d8" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="150" y="195" text-anchor="middle" fill="#4a148c" font-size="11">夹角 = |30×8 − 5.5×20| = 130°</text>
</svg>

### 解析

用公式 $\theta = |30m - 5.5n|$，$m = 8$，$n = 20$：

$$
\theta = |30 \times 8 - 5.5 \times 20| = |240 - 110| = 130°
$$

**答案：$130°$**

> 💡 也可以分开算：分针指 4（$120°$ 处），时针在 8 过 20 分钟（$240° + 10° = 250°$ 处），差 $130°$。

---

## 例题 5（提高 · 旋转与角）

### 题目

射线 $OA$ 从正北方向开始，绕点 $O$ 顺时针旋转。转过多少度时它指向正东？继续转到正南呢？若转速为每秒 $5°$，从正北转到正南需要几秒？

### 解析

方位角基础：正北 → 正东是顺时针 $90°$；正北 → 正南是 $180°$。

从正北到正南需转 $180°$，转速 $5°$/秒：

$$
t = \frac{180°}{5°/\text{秒}} = 36 \text{ 秒}
$$

**答案：$90°$；$180°$；需 36 秒**
