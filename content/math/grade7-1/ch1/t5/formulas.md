# 公式与定义卡片 · 绝对值

## 图示

<svg viewBox="0 0 500 110" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t5f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="55" x2="470" y2="55" stroke="#424242" stroke-width="2" marker-end="url(#arr-t5f)"/>
  <line x1="90" y1="48" x2="90" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">a（a&lt;0）</text>
  <line x1="250" y1="48" x2="250" y2="62" stroke="#424242" stroke-width="2"/>
  <text x="250" y="76" text-anchor="middle" font-size="13" fill="#424242" font-weight="bold">0</text>
  <line x1="410" y1="48" x2="410" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="410" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">b（b&gt;0）</text>
  <circle cx="90" cy="55" r="6" fill="#7b1fa2"/>
  <circle cx="410" cy="55" r="6" fill="#9c27b0"/>
  <!-- |a| 距离 -->
  <line x1="90" y1="95" x2="250" y2="95" stroke="#7b1fa2" stroke-width="2"/>
  <line x1="90" y1="90" x2="90" y2="100" stroke="#7b1fa2" stroke-width="2"/>
  <line x1="250" y1="90" x2="250" y2="100" stroke="#7b1fa2" stroke-width="2"/>
  <text x="170" y="108" text-anchor="middle" font-size="12" fill="#7b1fa2">|a| = -a（a&lt;0时）</text>
  <!-- |b| 距离 -->
  <line x1="250" y1="30" x2="410" y2="30" stroke="#9c27b0" stroke-width="2"/>
  <line x1="250" y1="25" x2="250" y2="35" stroke="#9c27b0" stroke-width="2"/>
  <line x1="410" y1="25" x2="410" y2="35" stroke="#9c27b0" stroke-width="2"/>
  <text x="330" y="22" text-anchor="middle" font-size="12" fill="#9c27b0">|b| = b（b&gt;0时）</text>
</svg>

## 1. 分段定义

$$
|a| =
\begin{cases}
a, & a > 0 \\
0, & a = 0 \\
-a, & a < 0
\end{cases}
$$

## 2. 非负性

$$
|a| \ge 0
$$

非负数之和为零则各项皆零：

$$
|a| + |b| = 0 \implies a = b = 0
$$

## 3. 相反数的绝对值

$$
|a| = |-a|
$$

## 4. 解绝对值方程（基本型）

$$
|x| = m \ (m > 0) \implies x = \pm m
$$

## 5. 两负数比较大小

$$
a < 0,\ b < 0,\ |a| > |b| \implies a < b
$$

## 6. 数轴上两点距离

$$
d(a, b) = |a - b|
$$
