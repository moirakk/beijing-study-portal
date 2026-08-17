# 公式与定义卡片 · 数轴

## 图示

<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t3f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
    <marker id="arr-t3f2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#9c27b0"/>
    </marker>
  </defs>
  <line x1="30" y1="55" x2="470" y2="55" stroke="#424242" stroke-width="2" marker-end="url(#arr-t3f)"/>
  <!-- 刻度 -->
  <line x1="110" y1="48" x2="110" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="110" y="76" text-anchor="middle" font-size="13" fill="#7b1fa2">-2</text>
  <line x1="190" y1="48" x2="190" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="190" y="76" text-anchor="middle" font-size="13" fill="#7b1fa2">-1</text>
  <line x1="270" y1="48" x2="270" y2="62" stroke="#424242" stroke-width="2"/>
  <text x="270" y="76" text-anchor="middle" font-size="14" fill="#424242" font-weight="bold">0</text>
  <line x1="350" y1="48" x2="350" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="350" y="76" text-anchor="middle" font-size="13" fill="#7b1fa2">1</text>
  <line x1="430" y1="48" x2="430" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="430" y="76" text-anchor="middle" font-size="13" fill="#7b1fa2">2</text>
  <!-- 中点公式示意：a=-1, b=1, 中点=0 -->
  <circle cx="190" cy="55" r="5" fill="#7b1fa2"/>
  <text x="190" y="38" text-anchor="middle" font-size="11" fill="#7b1fa2">a=-1</text>
  <circle cx="350" cy="55" r="5" fill="#7b1fa2"/>
  <text x="350" y="38" text-anchor="middle" font-size="11" fill="#7b1fa2">b=1</text>
  <circle cx="270" cy="55" r="5" fill="#9c27b0"/>
  <text x="270" y="38" text-anchor="middle" font-size="11" fill="#9c27b0">中点=(a+b)/2=0</text>
  <!-- 距离标注 -->
  <line x1="190" y1="100" x2="350" y2="100" stroke="#9c27b0" stroke-width="1.5"/>
  <line x1="190" y1="95" x2="190" y2="105" stroke="#9c27b0" stroke-width="1.5"/>
  <line x1="350" y1="95" x2="350" y2="105" stroke="#9c27b0" stroke-width="1.5"/>
  <text x="270" y="116" text-anchor="middle" font-size="11" fill="#9c27b0">d = |a-b| = |-1-1| = 2</text>
</svg>

## 1. 数轴三要素

$$
\text{数轴} = \text{原点} + \text{正方向} + \text{单位长度}
$$

## 2. 大小比较法则

数轴上，右边的数大于左边的数：

$$
a \text{ 在 } b \text{ 右侧} \iff a > b
$$

## 3. 点的移动

表示数 $a$ 的点：

$$
\text{右移 } m \text{ 个单位} \to a + m, \qquad \text{左移 } m \text{ 个单位} \to a - m
$$

## 4. 两点间距离

数轴上表示 $a$、$b$ 的两点之间的距离：

$$
d = |a - b|
$$

## 5. 中点公式

数轴上表示 $a$、$b$ 的两点的中点表示的数：

$$
x_{\text{中}} = \frac{a + b}{2}
$$
