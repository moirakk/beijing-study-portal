---
title: 5 弹性碰撞和非弹性碰撞
date: 2026-08-07
---

# 5 弹性碰撞和非弹性碰撞

## 概念定义

**弹性碰撞**：碰撞前后系统动量守恒且**动能不损失**的碰撞。

**非弹性碰撞**：动量守恒但动能有损失的碰撞；若碰后两物体**结合在一起**（共速），动能损失最大，称为**完全非弹性碰撞**。

一切碰撞都满足动量守恒（内力远大于外力）；区别只在动能是否损失。

## 知识梳理

| 碰撞类型 | 动量 | 动能 | 特征 |
| --- | --- | --- | --- |
| 弹性碰撞 | 守恒 | 守恒 | 形变完全恢复 |
| 一般非弹性碰撞 | 守恒 | 损失一部分 | 形变部分恢复 |
| 完全非弹性碰撞 | 守恒 | 损失最多 | 碰后共速（粘合） |

**弹性正碰公式**（$m_1$ 以 $v_1$ 碰静止的 $m_2$）：
$$v_1'=\dfrac{m_1-m_2}{m_1+m_2}v_1,\qquad v_2'=\dfrac{2m_1}{m_1+m_2}v_1$$

三个特例：① $m_1=m_2$：交换速度；② $m_1\gg m_2$：$v_1'\approx v_1$，$v_2'\approx 2v_1$；③ $m_1\ll m_2$：$v_1'\approx-v_1$（原速弹回），$v_2'\approx0$。

## 碰撞类型示意

<svg viewBox="0 0 420 170" width="420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="c5a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <text x="10" y="24" font-size="13" fill="#334155">等质量弹性碰撞：交换速度</text>
  <circle cx="60" cy="55" r="14" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <line x1="78" y1="55" x2="118" y2="55" stroke="#dc2626" stroke-width="2.5" marker-end="url(#c5a)"/>
  <text x="86" y="47" font-size="12" fill="#dc2626">v</text>
  <circle cx="160" cy="55" r="14" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="188" y="60" font-size="13" fill="#64748b">碰后→</text>
  <circle cx="260" cy="55" r="14" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="252" y="82" font-size="12" fill="#2563eb">静止</text>
  <circle cx="320" cy="55" r="14" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <line x1="338" y1="55" x2="378" y2="55" stroke="#dc2626" stroke-width="2.5" marker-end="url(#c5a)"/>
  <text x="348" y="47" font-size="12" fill="#dc2626">v</text>
  <text x="10" y="120" font-size="13" fill="#334155">完全非弹性碰撞：碰后粘合共速</text>
  <circle cx="60" cy="145" r="14" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <line x1="78" y1="145" x2="118" y2="145" stroke="#dc2626" stroke-width="2.5" marker-end="url(#c5a)"/>
  <circle cx="160" cy="145" r="14" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="188" y="150" font-size="13" fill="#64748b">碰后→</text>
  <circle cx="286" cy="145" r="14" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <circle cx="312" cy="145" r="14" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <line x1="332" y1="145" x2="366" y2="145" stroke="#dc2626" stroke-width="2.5" marker-end="url(#c5a)"/>
  <text x="336" y="137" font-size="12" fill="#dc2626">v共</text>
</svg>

## 典型例题

**例 1**：质量 $2\ \text{kg}$ 的球 A 以 $6\ \text{m/s}$ 与静止的质量 $4\ \text{kg}$ 的球 B 发生弹性正碰。求碰后两球速度。

**解**：$v_A'=\dfrac{2-4}{2+4}\times6=-2\ \text{m/s}$（反弹），$v_B'=\dfrac{2\times2}{2+4}\times6=4\ \text{m/s}$。
检验：动量 $2\times6=12=2\times(-2)+4\times4$ ✓；动能 $36\ \text{J}=4+32$ ✓。

**例 2**：质量 $1\ \text{kg}$ 的物块以 $6\ \text{m/s}$ 滑上静止在光滑面上、质量 $2\ \text{kg}$ 的小车并最终共速。求共同速度和损失的动能。

**解**：动量守恒：$1\times6=(1+2)v$，$v=2\ \text{m/s}$。
$\Delta E_k=\dfrac{1}{2}\times1\times6^2-\dfrac{1}{2}\times3\times2^2=18-6=12\ \text{J}$（转化为内能）。

## 易错点

- 判断碰撞可能性三关：动量守恒、动能不增加（$E_k'\le E_k$）、位置合理（追碰后前快后慢或共速）。
- 弹性碰撞公式仅适用于**被碰球静止的正碰**；被碰球有初速时需重新联立两守恒方程。
- 完全非弹性碰撞是动能损失**最大**的碰撞，但动能一般不会全部损失（共速动能仍在，除非总动量为零）。
- "完全非弹性"不等于"完全没有动能"。

## 背记要点

1. 一切碰撞动量守恒；弹性碰撞动能也守恒。
2. 弹性正碰（$v_2=0$）：$v_1'=\dfrac{m_1-m_2}{m_1+m_2}v_1$，$v_2'=\dfrac{2m_1}{m_1+m_2}v_1$；等质量交换速度。
3. 完全非弹性：$v_共=\dfrac{m_1v_1+m_2v_2}{m_1+m_2}$，动能损失最大。
4. 高考视角：碰撞可能性判断（三关检验）是北京卷选择题高频考点。

## 自测题

1. 完全非弹性碰撞的特征是碰后____，动能损失____。
2. 等质量小球弹性正碰（被碰球静止），碰后两球____。
3. 2 kg 物体以 3 m/s 与静止的 1 kg 物体粘合，损失动能____J。
4. 判断：碰撞后系统总动能可以大于碰撞前。（　）

## 相关知识点

守恒条件见 [[3 动量守恒定律]]；实验方案见 [[4 实验：验证动量守恒定律]]；动量与动能换算见 [[1 动量]]。
