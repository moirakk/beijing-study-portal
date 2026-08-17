---
title: 第三节 化学反应的方向
date: 2026-08-07
---

# 第三节 化学反应的方向

## ΔG判据四象限示意

<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:12px auto;font-family:sans-serif">
  <!-- 坐标轴 -->
  <line x1="210" y1="20" x2="210" y2="280" stroke="#555" stroke-width="2"/>
  <line x1="20" y1="150" x2="400" y2="150" stroke="#555" stroke-width="2"/>
  <!-- 轴标签 -->
  <text x="210" y="14" text-anchor="middle" font-size="12" fill="#333">ΔH</text>
  <text x="405" y="154" font-size="12" fill="#333">ΔS</text>
  <text x="115" y="14" font-size="11" fill="#333" text-anchor="middle">ΔH&lt;0</text>
  <text x="310" y="14" font-size="11" fill="#333" text-anchor="middle">ΔH&gt;0</text>
  <!-- 象限背景 -->
  <rect x="20" y="20" width="190" height="130" rx="6" fill="#c8e6c9" opacity="0.7"/>
  <rect x="210" y="20" width="190" height="130" rx="6" fill="#ffe0b2" opacity="0.7"/>
  <rect x="20" y="150" width="190" height="130" rx="6" fill="#ffcdd2" opacity="0.7"/>
  <rect x="210" y="150" width="190" height="130" rx="6" fill="#c8e6c9" opacity="0.7"/>
  <!-- 象限文字 -->
  <text x="115" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#2e7d32">任何温度自发</text>
  <text x="115" y="95" text-anchor="middle" font-size="11" fill="#388e3c">ΔH&lt;0, ΔS&gt;0</text>
  <text x="115" y="112" text-anchor="middle" font-size="11" fill="#388e3c">ΔG恒&lt;0</text>
  <text x="305" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#e65100">高温才自发</text>
  <text x="305" y="95" text-anchor="middle" font-size="11" fill="#ef6c00">ΔH&gt;0, ΔS&gt;0</text>
  <text x="305" y="112" text-anchor="middle" font-size="11" fill="#ef6c00">高温 ΔG&lt;0</text>
  <text x="115" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="#c62828">低温才自发</text>
  <text x="115" y="220" text-anchor="middle" font-size="11" fill="#d32f2f">ΔH&lt;0, ΔS&lt;0</text>
  <text x="115" y="237" text-anchor="middle" font-size="11" fill="#d32f2f">低温 ΔG&lt;0</text>
  <text x="305" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="#2e7d32">任何温度不自发</text>
  <text x="305" y="220" text-anchor="middle" font-size="11" fill="#388e3c">ΔH&gt;0, ΔS&lt;0</text>
  <text x="305" y="237" text-anchor="middle" font-size="11" fill="#388e3c">ΔG恒&gt;0</text>
  <!-- 轴方向箭头 -->
  <polygon points="210,20 205,32 215,32" fill="#555"/>
  <polygon points="400,150 388,145 388,155" fill="#555"/>
  <text x="55" y="163" font-size="11" fill="#777">ΔS&lt;0</text>
  <text x="330" y="163" font-size="11" fill="#777">ΔS&gt;0</text>
</svg>

**核心公式**：$\Delta G = \Delta H - T\Delta S$，恒温恒压下 ΔG<0 自发进行。

## 概念定义

**自发过程**：在一定条件下，不需要外界持续做功就能自动进行的过程。

**熵（S）**：度量体系混乱程度的物理量，混乱度越大熵越大。**熵变 ΔS** = 生成物总熵 − 反应物总熵。同一物质 S(g) > S(l) > S(s)；气体分子数增多的反应 ΔS > 0。

**复合判据（吉布斯自由能变）**：
$$\Delta G=\Delta H-T\Delta S$$
恒温恒压下，ΔG<0 反应能自发进行；ΔG>0 不能自发；ΔG=0 达平衡。

## 知识梳理

| ΔH | ΔS | ΔG=ΔH−TΔS | 结论 |
| --- | --- | --- | --- |
| <0 | >0 | 恒<0 | 任何温度都自发 |
| >0 | <0 | 恒>0 | 任何温度都不自发 |
| <0 | <0 | 低温<0 | **低温**自发（如 2SO2+O2→2SO3） |
| >0 | >0 | 高温<0 | **高温**自发（如 CaCO3 分解） |

**单一判据的局限**：
- 焓判据：多数放热反应自发，但吸热反应也可能自发（如 NH4Cl 溶解、Ba(OH)2·8H2O 与 NH4Cl 反应）。
- 熵判据：多数 ΔS>0 的反应自发，但 ΔS<0 的反应也可能自发（如常温下 2SO2+O2=2SO3）。
- 必须用 **ΔG=ΔH−TΔS 复合判据**综合判断。

**注意**：自发性只说明反应有发生的**可能性（方向）**，不能说明速率快慢，也不代表实际一定发生（如金刚石→石墨自发但极慢）。

## 典型例题

**例 1**：已知 $CaCO_3(s)=CaO(s)+CO_2(g)$ 的 ΔH=+178.3 kJ/mol，ΔS=+160.4 J/(mol·K)。求常压下该反应自发进行的最低温度。

**解**：自发需 ΔG=ΔH−TΔS<0，即 $T>\dfrac{\Delta H}{\Delta S}=\dfrac{178.3\times10^3}{160.4}\approx1112\ \text{K}$（约 839 ℃）。
故**高于约 1112 K** 时反应自发进行。

**例 2**：判断反应 $2H_2(g)+O_2(g)=2H_2O(l)$ 在常温下能否自发进行，并说明 ΔH、ΔS 情况。

**解**：该反应放热，ΔH<0；气体分子数减小（3 mol 气体→液体），ΔS<0。
常温下 T 较小，|TΔS| < |ΔH|，ΔG=ΔH−TΔS<0，**能自发进行**（但需点燃引发，说明自发性与速率无关）。

## 易错点

- "自发"≠"快"：ΔG<0 只说明方向可行，反应速率由活化能决定。
- ΔH>0 的反应**不一定**不自发（高温且 ΔS>0 时可自发）。
- 计算临界温度时注意**单位统一**：ΔH 常为 kJ/mol，ΔS 常为 J/(mol·K)，需换算。
- 熵增不只看气体：固体溶解、气体分子数增多、物质的量增多通常 ΔS>0。
- 判据适用条件是**恒温恒压**，且 ΔG 判断的是"能否自发"，不是"是否已发生"。

## 背记要点

1. ΔG=ΔH−TΔS；ΔG<0 自发，ΔG=0 平衡，ΔG>0 不自发。
2. 四象限口诀：放热熵增恒自发，吸热熵减恒不发；放热熵减低温发，吸热熵增高温发。
3. 熵大小：S(g)≫S(l)>S(s)；气体分子数增多则 ΔS>0。
4. 高考视角：给出 ΔH、ΔS 求自发温度范围，或结合盖斯定律综合命题，是北京卷原理大题常见设问。

## 自测题

1. 反应 ΔH<0、ΔS>0，则该反应在____温度下都能自发进行。
2. $N_2(g)+3H_2(g)\rightleftharpoons 2NH_3(g)\ \Delta H<0$，其 ΔS____0，低温有利于其____（自发/不自发）。
3. 判断：凡是自发反应都是放热反应。（　）
4. 某反应 ΔH=+100 kJ/mol，ΔS=+200 J/(mol·K)，自发进行需 T>____K。

## 相关知识点

焓变的概念与计算见 [[第一节 反应热]] 和 [[第二节 反应热的计算]]；方向、限度、速率的综合调控见 [[第四节 化学反应的调控]]；平衡常数见 [[第二节 化学平衡]]。
