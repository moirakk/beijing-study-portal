---
title: 8.5 空间直线、平面的平行
date: 2026-08-07
---

# 8.5 空间直线、平面的平行

## 概念定义

**线面平行判定定理**：平面外一条直线与平面内一条直线平行，则该直线与此平面平行（$a\not\subset\alpha,\ b\subset\alpha,\ a\parallel b\Rightarrow a\parallel\alpha$）。
**线面平行性质定理**：$a\parallel\alpha$，过 $a$ 的平面 $\beta$ 与 $\alpha$ 交于 $b$，则 $a\parallel b$。
**面面平行判定定理**：一个平面内**两条相交直线**分别平行于另一个平面，则两平面平行。
**面面平行性质定理**：两平行平面同时与第三个平面相交，则两条交线平行；$\alpha\parallel\beta,\ a\subset\alpha\Rightarrow a\parallel\beta$。

## 知识梳理

| 定理 | 条件 | 结论 | 口诀 |
| --- | --- | --- | --- |
| 线面平行判定 | 面外线 ∥ 面内线 | 线面平行 | 线线平行 → 线面平行 |
| 线面平行性质 | 线 ∥ 面，过线作面得交线 | 线 ∥ 交线 | 线面平行 → 线线平行 |
| 面面平行判定 | 面内两**相交**线 ∥ 另一面 | 面面平行 | 线面平行 → 面面平行 |
| 面面平行性质 | 两平行面被第三面所截 | 交线平行 | 面面平行 → 线线平行 |

**找平行线两大技巧**：①**中位线**——取中点连线；②**平行四边形**——构造对边。
传递链条：线线平行 $\rightleftharpoons$ 线面平行 $\rightleftharpoons$ 面面平行，证明即在链条上转化。

## 重点精讲：中位线法证线面平行

<svg viewBox="0 0 380 220" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <polygon points="60,190 320,190 270,140 110,140" fill="#e0e7ff" stroke="#64748b" stroke-width="2"/>
  <text x="70" y="182" font-size="12" fill="#64748b">平面 BDC（底面）</text>
  <polygon points="90,170 290,170 190,40" fill="none" stroke="#334155" stroke-width="2"/>
  <circle cx="140" cy="105" r="3" fill="#dc2626"/>
  <circle cx="240" cy="105" r="3" fill="#dc2626"/>
  <line x1="140" y1="105" x2="240" y2="105" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="90" y1="170" x2="290" y2="170" stroke="#16a34a" stroke-width="2.5"/>
  <text x="182" y="96" font-size="12" fill="#dc2626">EF（中位线）</text>
  <text x="180" y="210" font-size="12" fill="#16a34a">BD</text>
  <text x="76" y="166" font-size="12" fill="#334155">B</text>
  <text x="294" y="166" font-size="12" fill="#334155">D</text>
  <text x="184" y="32" font-size="12" fill="#334155">A</text>
  <text x="118" y="112" font-size="12" fill="#334155">E</text>
  <text x="248" y="112" font-size="12" fill="#334155">F</text>
  <text x="60" y="70" font-size="11" fill="#64748b">E、F 为 AB、AD 中点</text>
  <text x="60" y="88" font-size="11" fill="#64748b">EF∥BD ⇒ EF∥平面BDC</text>
</svg>

书写模板：先证 $EF\parallel BD$（中位线），再点明 $EF\not\subset$ 平面 $BDC$、$BD\subset$ 平面 $BDC$，由判定定理得 $EF\parallel$ 平面 $BDC$。三个条件**缺一不可**。

## 典型例题

**例 1**：正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，求证：$A_1B\parallel$ 平面 $ACD_1$。

**解**：因 $A_1D_1\parallel BC$ 且 $A_1D_1=BC$，故四边形 $A_1BCD_1$ 是平行四边形，
所以 $A_1B\parallel D_1C$。
又 $A_1B\not\subset$ 平面 $ACD_1$，$D_1C\subset$ 平面 $ACD_1$，
由线面平行判定定理，$A_1B\parallel$ 平面 $ACD_1$。

**例 2**：三棱锥 $P\text{-}ABC$ 中，$D,E$ 分别为 $PA,PB$ 中点，求证：$DE\parallel$ 平面 $ABC$。

**解**：在 $\triangle PAB$ 中，$D,E$ 为中点，故 $DE\parallel AB$（中位线）。
又 $DE\not\subset$ 平面 $ABC$，$AB\subset$ 平面 $ABC$，
由线面平行判定定理，$DE\parallel$ 平面 $ABC$。

## 易错点

- 线面平行判定的三个条件（面外、面内、平行）必须**逐条写明**，漏写"$a\not\subset\alpha$"是规范性扣分点。
- 面面平行判定必须是"两条**相交**直线"，两条平行直线不行。
- "线面平行"不能直接推"该线与面内任意直线平行"——只与**交线**平行（须过该线作辅助平面）。
- $\alpha\parallel\beta$，$a\subset\alpha$，$b\subset\beta$，则 $a$ 与 $b$ 平行或**异面**，不一定平行。

## 背记要点

1. 判定用"低维证高维"：线线 → 线面 → 面面；性质反向"高维出低维"。
2. 找平行线：中点想中位线，比例想平行截割，平面图形想平行四边形。
3. 线面平行性质：平行线在"过线的截面与已知面的交线"上。
4. 高考视角：立体几何大题第一问常考证线面平行，通法是中位线或构造平行四边形，注意书写三条件齐全。

## 自测题

1. 判断：若 $a\parallel b$，$b\subset\alpha$，则 $a\parallel\alpha$。（　）
2. 判断：一个平面内有无数条直线平行于另一平面，则两平面平行。（　）
3. 正方体 $ABCD\text{-}A_1B_1C_1D_1$ 中，平面 $AB_1D_1$ 与平面 $BDC_1$ 的位置关系是____。
4. $\alpha\parallel\beta$，直线 $l\subset\alpha$，则 $l$ 与 $\beta$ 的位置关系是____。

## 相关知识点

位置关系与基本事实见 [[8.4 空间点、直线、平面之间的位置关系]]；垂直体系见 [[8.6 空间直线、平面的垂直]]。
