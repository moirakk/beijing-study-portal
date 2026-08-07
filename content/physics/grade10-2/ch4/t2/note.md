---
title: 2 重力势能
date: 2026-08-07
---

# 2 重力势能

## 概念定义

**重力势能**：物体由于被举高而具有的能量：
$$E_p=mgh$$
其中 $h$ 是物体相对**参考平面**的高度。$E_p$ 是标量，可正可负可为零。

**重力做功特点**：只与初、末位置的高度差有关，与路径无关：
$$W_G=mgh_1-mgh_2=-\Delta E_p$$

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 重力做功与势能变化 | $W_G=-\Delta E_p$：重力做正功，势能减少；做负功（克服重力），势能增加 |
| 相对性 | $E_p$ 的数值与参考平面选取有关，但**变化量 $\Delta E_p$ 与参考平面无关** |
| 系统性 | 重力势能属于**物体与地球组成的系统**共有 |
| 弹性势能 | 物体因发生弹性形变而具有的能量；弹簧形变量越大，弹性势能越大（同一弹簧） |
| 弹力做功 | $W_弹=-\Delta E_{p弹}$，同样与路径无关 |

## 重力做功与路径无关示意

<svg viewBox="0 0 380 220" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p42r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="p42b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="20" y1="190" x2="360" y2="190" stroke="#64748b" stroke-width="2.5"/>
  <text x="26" y="208" font-size="12" fill="#64748b">参考平面 (E_p=0)</text>
  <circle cx="120" cy="40" r="6" fill="#334155"/>
  <text x="98" y="30" font-size="12" fill="#334155">A（h₁）</text>
  <circle cx="270" cy="130" r="6" fill="#334155"/>
  <text x="280" y="126" font-size="12" fill="#334155">B（h₂）</text>
  <line x1="120" y1="40" x2="266" y2="126" stroke="#2563eb" stroke-width="2" marker-end="url(#p42b)"/>
  <text x="160" y="72" font-size="11" fill="#2563eb">路径1（直线）</text>
  <path d="M120,40 Q120,150 264,132" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#p42r)"/>
  <text x="96" y="140" font-size="11" fill="#dc2626">路径2（曲线）</text>
  <line x1="330" y1="40" x2="330" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="336" y="90" font-size="11" fill="#64748b">Δh</text>
  <text x="150" y="178" font-size="12" fill="#64748b">两条路径 W_G=mg(h₁−h₂) 相同</text>
</svg>

## 典型例题

**例 1**：质量 $m=2\ \text{kg}$ 的物体从离地 $h_1=5\ \text{m}$ 处下落到离地 $h_2=2\ \text{m}$ 处（$g=10\ \text{m/s}^2$）。求重力做的功和重力势能的变化。

**解**：$W_G=mg(h_1-h_2)=2\times10\times3=60\ \text{J}$。
$\Delta E_p=-W_G=-60\ \text{J}$，即重力势能减少 60 J。

**例 2**：以桌面为参考平面，质量 $m=1\ \text{kg}$ 的小球位于桌面上方 0.5 m 处；桌面高 0.8 m。分别求以桌面和地面为参考平面时小球的重力势能（$g=10\ \text{m/s}^2$）。

**解**：以桌面为零势面：$E_p=mgh=1\times10\times0.5=5\ \text{J}$。
以地面为零势面：$E_p=1\times10\times(0.5+0.8)=13\ \text{J}$。
数值不同，但小球从该处落到桌面，两种取法算出的 $\Delta E_p$ 都是 $-5\ \text{J}$。

## 易错点

- $E_p$ 的正负、大小依赖参考平面；**只有变化量有绝对意义**。
- $W_G=-\Delta E_p$ 对任意路径成立；曲线运动、往返运动都只看始末高度差。
- 重力势能是系统（物体与地球）共有的，习惯上说"物体的重力势能"是简化说法。
- 克服重力做功 $W_{克}=+\Delta E_p$，不要漏掉"克服"二字导致符号错误。

## 背记要点

1. $E_p=mgh$（相对参考平面）；$W_G=mgh_1-mgh_2=-\Delta E_p$。
2. 重力做功与路径无关，只看高度差。
3. 势能相对性：数值随零势面变，$\Delta E_p$ 不变。
4. 弹性势能与形变量有关；$W_弹=-\Delta E_{p弹}$。
5. 高考视角：势能概念常与机械能守恒结合考查，注意题目给定的零势面。

## 自测题

1. 重力做功与____无关，只与始末位置的____有关。
2. 质量 3 kg 的物体升高 2 m，重力势能增加____J（$g=10\ \text{m/s}^2$）。
3. 判断：重力势能一定是正值。（　）
4. 重力对物体做 $-20\ \text{J}$ 的功，物体重力势能____（增/减）____J。

## 相关知识点

功的定义见 [[1 功与功率]]；动能变化规律见 [[3 动能和动能定理]]；两种能量的转化见 [[4 机械能守恒定律]]。
