---
title: 专题八 力学综合计算
date: 2026-08-10
---

# 专题八 力学综合计算

## 概念定义

**力学综合问题**：将牛顿运动定律、运动学、功和能、动量等知识综合起来求解的问题，是高考压轴题的重要来源。

**解题思路**：①确定研究对象（整体或隔离）；②受力分析；③判断运动过程；④选择合适规律（牛顿定律、动能定理、动量守恒、机械能守恒）；⑤列方程求解。

**规律选择**：涉及时间、加速度用牛顿定律；涉及位移、速度、功用动能定理；涉及碰撞、爆炸用动量守恒；只有重力做功用机械能守恒。

## 知识梳理

| 项目 | 适用条件 |
| --- | --- |
| 牛顿第二定律 | 求加速度、时间、瞬时力 |
| 动能定理 | 求位移、速度、变力做功 |
| 动量守恒 | 碰撞、爆炸、反冲 |
| 机械能守恒 | 只有重力或弹力做功 |
| 功能关系 | 求摩擦生热、机械能变化 |
| 多过程问题 | 分段分析，找衔接点 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="f8a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="120" y="20" width="120" height="34" rx="6" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="180" y="42" text-anchor="middle" font-size="12" fill="#2563eb">确定研究对象</text>
  <line x1="180" y1="54" x2="180" y2="74" stroke="#2563eb" stroke-width="2" marker-end="url(#f8a)"/>
  <rect x="120" y="74" width="120" height="34" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="180" y="96" text-anchor="middle" font-size="12" fill="#dc2626">受力分析</text>
  <line x1="180" y1="108" x2="180" y2="128" stroke="#2563eb" stroke-width="2" marker-end="url(#f8a)"/>
  <rect x="120" y="128" width="120" height="34" rx="6" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
  <text x="180" y="150" text-anchor="middle" font-size="12" fill="#16a34a">选择运动规律</text>
  <line x1="180" y1="162" x2="180" y2="182" stroke="#2563eb" stroke-width="2" marker-end="url(#f8a)"/>
  <rect x="120" y="182" width="120" height="34" rx="6" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <text x="180" y="204" text-anchor="middle" font-size="12" fill="#92400e">列方程求解</text>
</svg>

## 典型例题

**例 1**：质量为 $m$ 的物体从高 $h$ 处沿光滑斜面滑下，斜面倾角 $\theta$，求到达底端的速度。

**解**：机械能守恒 $mgh = \frac{1}{2}mv^2$，$v = \sqrt{2gh}$。也可用牛顿定律：$a = g\sin\theta$，$s = \dfrac{h}{\sin\theta}$，$v^2 = 2as = 2gh$。

**例 2**：质量为 $m$ 的小球从高 $H$ 处自由下落，与地面碰撞后反弹到 $\dfrac{H}{4}$ 高处，求碰撞过程中损失的机械能。

**解**：碰前动能 $E_{k1} = mgH$，碰后动能 $E_{k2} = mg\dfrac{H}{4}$，损失 $\Delta E = mgH - mg\dfrac{H}{4} = \dfrac{3}{4}mgH$。

**例 3**：光滑水平面上，质量 $m_1$ 以 $v_0$ 运动，与静止的 $m_2$ 发生完全非弹性碰撞，求系统损失的动能。

**解**：碰后共速 $v = \dfrac{m_1v_0}{m_1+m_2}$。损失 $\Delta E_k = \frac{1}{2}m_1v_0^2 - \frac{1}{2}(m_1+m_2)v^2 = \dfrac{m_1m_2}{2(m_1+m_2)}v_0^2$。

## 易错点

- 多过程问题要**分段分析**，注意各段衔接点的速度。
- 选择规律要**匹配条件**，不能乱用机械能守恒。
- 碰撞问题注意**动量守恒但动能不一定守恒**。
- 受力分析要完整，避免漏力或多力。
- 注意正方向的选取，矢量式要统一符号。

## 背记要点

1. 牛顿定律：$F = ma$。
2. 动能定理：$W_{\text{合}} = \Delta E_k$。
3. 动量守恒：$m_1v_1 + m_2v_2 = m_1v_1' + m_2v_2'$。
4. 机械能守恒：$E_{k1}+E_{p1} = E_{k2}+E_{p2}$。
5. 完全非弹性碰撞损失动能 $\Delta E_k = \dfrac{m_1m_2}{2(m_1+m_2)}v_0^2$。

## 自测题

1. 求加速度和时间应选用____定律。
2. 求变力做功应选用____定理。
3. 碰撞问题优先考虑____守恒。
4. 判断：多过程问题可以整体列一个方程求解。（　）

## 相关知识点

综合运用 [[专题二 牛顿运动定律]]、[[专题六 动能定理与机械能守恒]]、[[专题七 动量与动量守恒]] 等专题知识。
