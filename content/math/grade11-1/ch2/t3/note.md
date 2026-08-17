---
title: 2.3 直线的交点坐标与距离公式
date: 2026-08-07
---

# 2.3 直线的交点坐标与距离公式

## 概念定义

**交点坐标**：两直线 $l_1:A_1x+B_1y+C_1=0$ 与 $l_2:A_2x+B_2y+C_2=0$ 的交点即方程组的解；有唯一解则相交，无解则平行，无穷多解则重合。
**两点间距离**：$P_1(x_1,y_1)$，$P_2(x_2,y_2)$，
$$|P_1P_2|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$
**点到直线距离**：点 $P(x_0,y_0)$ 到 $Ax+By+C=0$ 的距离
$$d=\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$$
**平行线间距离**：$Ax+By+C_1=0$ 与 $Ax+By+C_2=0$ 之间 $d=\dfrac{|C_1-C_2|}{\sqrt{A^2+B^2}}$。

## 知识梳理

| 公式 | 表达式 | 使用要点 |
| --- | --- | --- |
| 交点 | 解二元一次方程组 | 消元法；解的个数对应位置关系 |
| 两点距离 | $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ | 中点 $\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$ |
| 点线距离 | $\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$ | 先化**一般式**再代入 |
| 平行线距离 | $\dfrac{|C_1-C_2|}{\sqrt{A^2+B^2}}$ | 两式中 $x,y$ 系数须**相同** |
| 过交点直线系 | $A_1x+B_1y+C_1+\lambda(A_2x+B_2y+C_2)=0$ | 不含 $l_2$ 本身 |

**对称问题**：点关于直线对称，用"中点在直线上 + 连线与直线垂直"两条件列方程组；点关于点对称用中点公式。

<svg viewBox="0 0 480 280" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="axd" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#555"/></marker>
    <marker id="ayd" markerWidth="7" markerHeight="7" refX="3" refY="5" orient="auto"><path d="M0,7 L6,7 L3,0 z" fill="#555"/></marker>
  </defs>
  <!-- 坐标轴 -->
  <line x1="40" y1="220" x2="440" y2="220" stroke="#555" stroke-width="1.5" marker-end="url(#axd)"/>
  <line x1="80" y1="260" x2="80" y2="20" stroke="#555" stroke-width="1.5" marker-end="url(#ayd)"/>
  <text x="444" y="224" font-size="12" fill="#555">x</text>
  <text x="83" y="17" font-size="12" fill="#555">y</text>
  <text x="72" y="234" font-size="11" fill="#555">O</text>
  <!-- 直线 l: Ax+By+C=0，画为 y = (-Ax-C)/B，取斜线 -->
  <!-- 示例直线：3x+4y-60=0，即 y=(60-3x)/4，x=0→y=15，x=20→y=0 -->
  <!-- 在SVG坐标中：x轴y=220，每单位10px，原点(80,220) -->
  <!-- x=0(SVG:80), y=15(SVG:220-150=70); x=20(SVG:280), y=0(SVG:220) -->
  <line x1="60" y1="82" x2="340" y2="222" stroke="#7b1fa2" stroke-width="2.5"/>
  <text x="344" y="218" font-size="13" font-weight="bold" fill="#7b1fa2">l: Ax+By+C=0</text>
  <!-- 点P(x₀,y₀)，取P=(5,20)→SVG(130,20) -->
  <circle cx="180" cy="80" r="5" fill="#e91e63"/>
  <text x="186" y="76" font-size="13" font-weight="bold" fill="#e91e63">P(x₀, y₀)</text>
  <!-- 垂线（从P到直线的垂足） -->
  <!-- 直线方向向量(4,-3)（法向量(3,4)），垂足计算略，示意即可 -->
  <!-- 垂足约在(200,155)处 -->
  <line x1="180" y1="80" x2="218" y2="158" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <circle cx="218" cy="158" r="4" fill="#9c27b0"/>
  <text x="222" y="156" font-size="11" fill="#9c27b0">垂足</text>
  <!-- 直角标记 -->
  <rect x="210" y="150" width="10" height="10" fill="none" stroke="#555" stroke-width="1.2" transform="rotate(-37,215,155)"/>
  <!-- d标注 -->
  <text x="186" y="128" font-size="13" font-weight="bold" fill="#9c27b0">d</text>
  <!-- 公式框 -->
  <rect x="20" y="230" width="420" height="40" rx="8" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="230" y="248" text-anchor="middle" font-size="13" font-weight="bold" fill="#7b1fa2">点到直线距离：d = |Ax₀+By₀+C| / √(A²+B²)</text>
  <text x="230" y="265" text-anchor="middle" font-size="11" fill="#555">分子：点坐标代入直线方程取绝对值；分母：系数平方和开根</text>
</svg>

## 典型例题

**例 1**：求点 $P(3,-2)$ 到直线 $l:3x+4y-1=0$ 的距离。

**解**：$d=\dfrac{|3\times3+4\times(-2)-1|}{\sqrt{3^2+4^2}}=\dfrac{|9-8-1|}{5}=0$。
距离为 0，说明点 $P$ 在直线 $l$ 上。（先代入检验可避免无谓计算。）

**例 2**：求点 $A(2,0)$ 关于直线 $l:x-y+1=0$ 的对称点 $A'$。

**解**：设 $A'(a,b)$。
① 中点 $\left(\dfrac{a+2}{2},\dfrac{b}{2}\right)$ 在 $l$ 上：$\dfrac{a+2}{2}-\dfrac{b}{2}+1=0$；
② $AA'\perp l$：$\dfrac{b-0}{a-2}\times1=-1$。
联立解得 $a=-1$，$b=3$，故 $A'(-1,3)$。
（斜率为 $\pm1$ 的直线有速算：$x-y+1=0$ 关于其对称即 $x\to y-1$，$y\to x+1$。）

## 易错点

- 点到直线距离公式必须先把直线化为**一般式**，斜截式直接代入会算错。
- 平行线间距离公式要求两方程 $x,y$ 系数**完全一致**，如 $2x+2y-1=0$ 须先化为 $x+y-\dfrac12=0$ 再与 $x+y+1=0$ 求距。
- 直线系 $l_1+\lambda l_2=0$ 表示过交点的直线但**不含 $l_2$**，验证答案时别遗漏。
- 对称问题两条件缺一不可；垂直条件用斜率时注意斜率不存在的情形。

## 背记要点

1. $d=\dfrac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$——分子代点取绝对值，分母系数平方和开根。
2. 平行线距离 $\dfrac{|C_1-C_2|}{\sqrt{A^2+B^2}}$（系数统一后）。
3. 点关于直线对称："中点在线上 + 垂直"双条件。
4. 两直线位置关系 $\Leftrightarrow$ 方程组解的个数。
5. 高考视角：距离公式是圆与圆锥曲线问题的基础工具（弦长、切线、最值），对称问题常与光线反射、最短路径结合。

## 自测题

1. 直线 $x+y-3=0$ 与 $2x-y=0$ 的交点坐标为____。
2. 点 $(1,2)$ 到直线 $4x-3y+5=0$ 的距离为____。
3. 平行线 $3x+4y-2=0$ 与 $3x+4y+8=0$ 之间的距离为____。
4. 点 $(0,0)$ 关于直线 $x=1$ 的对称点为____。

## 相关知识点

直线方程各形式见 [[2.2 直线的方程]]；斜率与垂直条件见 [[2.1 直线的倾斜角与斜率]]；用距离判断直线与圆位置关系见 [[2.5 直线与圆、圆与圆的位置关系]]。
