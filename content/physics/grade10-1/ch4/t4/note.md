---
title: 4 力学单位制
date: 2026-08-07
---

# 4 力学单位制

## 概念定义

**基本量与基本单位**：被选定的、可据以导出其他物理量的物理量称基本量，其单位为基本单位。力学中基本量是**长度、质量、时间**，SI 基本单位为 **m、kg、s**。

**导出单位**：由物理关系从基本单位推导出的单位，如 $\text{N}=\text{kg}\cdot\text{m/s}^2$、$\text{m/s}$、$\text{m/s}^2$。

**单位制**＝基本单位＋导出单位。**国际单位制（SI）**共 7 个基本量。

## 知识梳理

| SI 基本量 | 基本单位 | 符号 |
| --- | --- | --- |
| 长度 | 米 | m |
| 质量 | 千克 | kg |
| 时间 | 秒 | s |
| 电流 | 安培 | A |
| 热力学温度 | 开尔文 | K |
| 物质的量 | 摩尔 | mol |
| 发光强度 | 坎德拉 | cd |

常用力学导出单位：牛顿 $\text{N}=\text{kg}\cdot\text{m/s}^2$；帕斯卡 $\text{Pa}=\text{N/m}^2$；焦耳 $\text{J}=\text{N}\cdot\text{m}$。

**单位制的作用**：①统一运算——各量均用 SI 单位代入，结果必为 SI 单位，计算中可只在结果处写单位；②**检验公式**——量纲不一致的公式必错（如 $x=\dfrac12at^2$ 右边 $\text{m/s}^2\cdot\text{s}^2=\text{m}$ ✓）。

## 单位推导关系图

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="a17b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="20" y="30" width="70" height="36" rx="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="55" y="53" text-anchor="middle" font-size="14" fill="#1e3a8a">m</text>
  <rect x="145" y="30" width="70" height="36" rx="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="180" y="53" text-anchor="middle" font-size="14" fill="#1e3a8a">kg</text>
  <rect x="270" y="30" width="70" height="36" rx="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="305" y="53" text-anchor="middle" font-size="14" fill="#1e3a8a">s</text>
  <text x="180" y="18" text-anchor="middle" font-size="12" fill="#2563eb">基本单位（力学三基）</text>
  <line x1="55" y1="66" x2="100" y2="120" stroke="#64748b" stroke-width="1.8" marker-end="url(#a17b)"/>
  <line x1="305" y1="66" x2="140" y2="120" stroke="#64748b" stroke-width="1.8" marker-end="url(#a17b)"/>
  <rect x="75" y="122" width="90" height="34" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="120" y="144" text-anchor="middle" font-size="13" fill="#166534">v: m/s</text>
  <line x1="120" y1="156" x2="120" y2="188" stroke="#64748b" stroke-width="1.8" marker-end="url(#a17b)"/>
  <rect x="75" y="190" width="90" height="34" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="120" y="212" text-anchor="middle" font-size="13" fill="#166534">a: m/s²</text>
  <line x1="180" y1="66" x2="240" y2="190" stroke="#64748b" stroke-width="1.8" marker-end="url(#a17b)"/>
  <line x1="165" y1="207" x2="205" y2="207" stroke="#64748b" stroke-width="1.8" marker-end="url(#a17b)"/>
  <rect x="210" y="190" width="130" height="34" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="275" y="212" text-anchor="middle" font-size="13" fill="#991b1b">F=ma: N=kg·m/s²</text>
</svg>

## 典型例题

**例 1**：判断公式 $v=\sqrt{2gx}$ 的单位是否自洽。

**解**：右边单位 $\sqrt{\text{m/s}^2\cdot\text{m}}=\sqrt{\text{m}^2/\text{s}^2}=\text{m/s}$，与左边一致，公式在量纲上成立。

**例 2**：质量 500 g 的物体受合力 200 gf 类混乱数据——改为规范：质量 $m=0.5\ \text{kg}$，加速度 $a=4\ \text{m/s}^2$，求合力并说明单位处理。

**解**：统一为 SI：$F=ma=0.5\times4=2\ \text{N}$。所有量换成 SI 单位后，结果单位必为 N，无需逐项标注。

## 易错点

- kg 是**质量**单位，不是重量（力）单位；"公斤力"不是 SI 单位。
- 计算前必须统一单位：cm→m、g→kg、min→s。
- N 是导出单位不是基本单位；力学基本量只有长度、质量、时间三个。
- 单位检验只能证明公式**可能**正确（系数无法检验），但能证明公式错误。

## 背记要点

1. SI 七个基本量：m、kg、s、A、K、mol、cd（力学用前三个）。
2. $\text{N}=\text{kg}\cdot\text{m/s}^2$，由 $F=ma$ 导出。
3. 统一 SI 单位代入 → 结果必为 SI 单位。
4. 高考视角：单位制单独命题少，但隐含在每道计算题的规范表达中，量纲检查是查错利器。

## 自测题

1. 国际单位制中力学的三个基本单位是____、____、____。
2. 1 N ＝____（用基本单位表示）。
3. 下列全部由 SI 基本单位组成的是：A. N、m、s　B. kg、m、s　C. g、cm、s。答：____。
4. 用单位检验：$t=\sqrt{\dfrac{2h}{g}}$ 右边单位化简结果为____。

## 相关知识点

$F=ma$ 与单位定义见 [[3 牛顿第二定律]]；单位规范在综合计算中的运用见 [[5 牛顿运动定律的应用]]。
