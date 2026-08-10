---
title: 6.4 平面向量的应用
date: 2026-08-07
---

# 6.4 平面向量的应用（含余弦定理、正弦定理）

## 概念定义

**余弦定理**：三角形中 $a^2=b^2+c^2-2bc\cos A$（另两式轮换），推论 $\cos A=\dfrac{b^2+c^2-a^2}{2bc}$。
**正弦定理**：$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}=2R$（$R$ 为外接圆半径）。
**三角形面积**：$S=\dfrac12ab\sin C=\dfrac12bc\sin A=\dfrac12ca\sin B$。

## 知识梳理

| 已知条件 | 选用定理 | 备注 |
| --- | --- | --- |
| 两边及夹角（SAS） | 余弦定理求第三边 | 解唯一 |
| 三边（SSS） | 余弦定理推论求角 | 解唯一 |
| 两角及一边（AAS/ASA） | 正弦定理 | 解唯一 |
| 两边及一边对角（SSA） | 正弦定理 | 可能**两解、一解或无解** |

**边角互化**（正弦定理变形）：$a=2R\sin A$，$\sin A:\sin B:\sin C=a:b:c$；条件中"边的齐次式"与"正弦齐次式"可互换。
**判断三角形形状**：$\cos C>0\Leftrightarrow c^2<a^2+b^2$（角 $C$ 为锐角），$\cos C<0\Leftrightarrow c^2>a^2+b^2$（钝角）。

## 典型模型：测量问题（底部不可到达的高度）

<svg viewBox="0 0 360 210" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <line x1="30" y1="180" x2="340" y2="180" stroke="#64748b" stroke-width="2"/>
  <line x1="280" y1="180" x2="280" y2="40" stroke="#dc2626" stroke-width="3"/>
  <text x="288" y="110" font-size="13" fill="#dc2626">h</text>
  <line x1="70" y1="180" x2="280" y2="40" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="160" y1="180" x2="280" y2="40" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 100 180 A 30 30 0 0 0 95 163" fill="none" stroke="#16a34a" stroke-width="1.5"/>
  <text x="104" y="172" font-size="12" fill="#16a34a">α</text>
  <path d="M 190 180 A 30 30 0 0 0 182 159" fill="none" stroke="#16a34a" stroke-width="1.5"/>
  <text x="196" y="170" font-size="12" fill="#16a34a">β</text>
  <text x="62" y="198" font-size="12" fill="#334155">A</text>
  <text x="155" y="198" font-size="12" fill="#334155">B</text>
  <text x="275" y="198" font-size="12" fill="#334155">C</text>
  <text x="100" y="205" font-size="11" fill="#64748b">AB＝d 已知，两次测仰角 α、β，先在△ABP 中用正弦定理求 BP，再求 h</text>
</svg>

在 $\triangle ABP$ 中 $\angle APB=\beta-\alpha$，由正弦定理 $BP=\dfrac{d\sin\alpha}{\sin(\beta-\alpha)}$，则 $h=BP\sin\beta$。

## 典型例题

**例 1**：$\triangle ABC$ 中，$a=2$，$b=3$，$C=60°$，求 $c$ 和面积 $S$。

**解**：$c^2=a^2+b^2-2ab\cos C=4+9-2\times2\times3\times\dfrac12=7$，故 $c=\sqrt7$。
$S=\dfrac12ab\sin C=\dfrac12\times2\times3\times\dfrac{\sqrt3}{2}=\dfrac{3\sqrt3}{2}$。

**例 2**：$\triangle ABC$ 中，$a=\sqrt3$，$b=1$，$A=60°$，解此三角形。

**解**：由正弦定理 $\sin B=\dfrac{b\sin A}{a}=\dfrac{1\times\frac{\sqrt3}{2}}{\sqrt3}=\dfrac12$。
因 $b<a$，故 $B<A$，$B=30°$（$150°$ 舍去）。$C=180°-60°-30°=90°$，
$c=\sqrt{a^2+b^2}=2$（或 $c=\dfrac{a\sin C}{\sin A}=2$）。

## 易错点

- SSA 型（已知两边及一边的对角）用正弦定理可能有**两解**，须用"大边对大角"或内角和检验取舍。
- 余弦定理推论中分母是 $2bc$，符号勿错；$\cos A<0$ 说明 $A$ 为钝角。
- 三角形内角范围 $(0,\pi)$，$\sin$ 为正但 $\cos$ 可正可负；由 $\sin B=\frac12$ 不能直接断定 $B=30°$。
- 化简 $\sin 2A=\sin 2B$ 时有 $A=B$ 或 $A+B=\dfrac{\pi}{2}$ 两种情形，不要漏解。

## 背记要点

1. 余弦定理：$a^2=b^2+c^2-2bc\cos A$；正弦定理：$\dfrac{a}{\sin A}=2R$。
2. 面积：$S=\dfrac12ab\sin C$；边角互化：$a\to\sin A$。
3. "知三求三"：SAS、SSS 用余弦；AAS 用正弦；SSA 注意多解。
4. 高考视角：解三角形是高考解答题固定板块（约 10 分），常见设问为"边角互化求角＋求面积（或周长）范围"，注意角的范围限制。

## 自测题

1. $\triangle ABC$ 中 $b=c=1$，$A=120°$，则 $a=$____。
2. $a:b:c=3:5:7$，则最大内角为____。
3. $\triangle ABC$ 中 $a=2$，$B=45°$，$C=75°$，则 $b=$____。
4. 判断：$\triangle ABC$ 中若 $a^2+b^2<c^2$，则三角形为钝角三角形。（　）

## 相关知识点

数量积工具见 [[6.2 平面向量的运算]]；坐标法见 [[6.3 平面向量基本定理及坐标表示]]；后续复数几何意义见 [[7.1 复数的概念]]。
