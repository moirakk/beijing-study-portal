---
title: 4 实验：验证动量守恒定律
date: 2026-08-07
---

# 4 实验：验证动量守恒定律

<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="260" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">验证动量守恒：斜槽平抛实验</text>
  <defs>
    <marker id="exarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <!-- 桌子 -->
  <rect x="30" y="165" width="220" height="15" fill="#888" rx="2"/>
  <!-- 斜槽 -->
  <path d="M60,40 Q90,60 130,165" fill="none" stroke="#1a6faf" stroke-width="3"/>
  <text x="55" y="38" fill="#1a6faf" font-size="11">斜槽</text>
  <!-- 入射球（在槽上）-->
  <circle cx="90" cy="72" r="10" fill="#4a9fd4" stroke="#1a6faf" stroke-width="1.5"/>
  <!-- 桌边的球（碰撞点）-->
  <circle cx="170" cy="158" r="12" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2"/>
  <text x="155" y="155" text-anchor="end" fill="#1a6faf" font-size="9">入射球</text>
  <!-- 被碰球（静止在桌边）-->
  <circle cx="195" cy="155" r="12" fill="#e63946" stroke="#555" stroke-width="2" opacity="0.7"/>
  <text x="210" y="152" fill="#e63946" font-size="9">被碰球</text>
  <!-- 地面 -->
  <rect x="0" y="230" width="480" height="10" fill="#888"/>
  <!-- 三个落点标注 -->
  <!-- O点（正下方，无碰撞入射球落点） -->
  <line x1="190" y1="165" x2="190" y2="230" stroke="#888" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="190" cy="230" r="5" fill="#555"/>
  <text x="190" y="245" text-anchor="middle" fill="#555" font-size="10">O（基准）</text>
  <!-- M点（入射球碰后落点，较近） -->
  <line x1="245" y1="178" x2="285" y2="230" stroke="#4a9fd4" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="285" cy="230" r="5" fill="#4a9fd4"/>
  <text x="285" y="245" text-anchor="middle" fill="#4a9fd4" font-size="10">M（入射球碰后）</text>
  <!-- N点（被碰球落点，较远） -->
  <line x1="207" y1="167" x2="370" y2="230" stroke="#e63946" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="370" cy="230" r="5" fill="#e63946"/>
  <text x="370" y="245" text-anchor="middle" fill="#e63946" font-size="10">N（被碰球）</text>
  <!-- P点（无碰撞时入射球落点，最远）-->
  <line x1="185" y1="165" x2="430" y2="230" stroke="#1a6faf" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="430" cy="230" r="5" fill="#1a6faf"/>
  <text x="430" y="245" text-anchor="middle" fill="#1a6faf" font-size="10">P（无碰撞）</text>
  <!-- 验证条件 -->
  <rect x="30" y="168" width="220" height="50" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1"/>
  <text x="140" y="183" text-anchor="middle" fill="#1a6faf" font-size="10" font-weight="bold">验证：m₁·OP = m₁·OM + m₂·ON</text>
  <text x="140" y="198" text-anchor="middle" fill="#333" font-size="10">水平位移代替速度（t相同）</text>
  <text x="140" y="212" text-anchor="middle" fill="#333" font-size="9">需测量各球质量m₁, m₂</text>
</svg>

## 实验原理

一维碰撞中，若系统合外力为零，则碰撞前后总动量相等：
$$m_1v_1+m_2v_2=m_1v_1'+m_2v_2'$$

只需测出两物体的**质量**和碰撞前后的**速度**，比较等式两边即可验证。

**测速方案**（任选其一）：
1. 气垫导轨＋光电门：$v=\dfrac{d}{\Delta t}$（$d$ 为遮光条宽度）；
2. 斜槽末端平抛：下落高度相同，飞行时间相同，**水平射程 $x$ 正比于平抛初速度**，可用射程代替速度；
3. 频闪照片 / 打点计时器测纸带速度。

## 实验步骤

以"斜槽平抛法"（入射球 $m_1$ 碰静止球 $m_2$，要求 $m_1>m_2$）为例：

1. 用天平测出两球质量 $m_1$、$m_2$。
2. 安装斜槽，使**末端切线水平**；固定斜槽位置，在地面铺白纸和复写纸。
3. 不放被碰球，让 $m_1$ 从**同一位置**释放多次，圆规取平均落点，测出射程 $x_1$（对应 $v_1$）。
4. 在槽口支柱上放 $m_2$，让 $m_1$ 从同一位置释放，多次碰撞，分别定出 $m_1$、$m_2$ 的平均落点，测射程 $x_1'$、$x_2'$。
5. 记录数据并比较。

## 数据处理

因平抛时间相同，$v\propto x$，验证式化为：
$$m_1x_1=m_1x_1'+m_2x_2'$$

| 物理量 | $m_1$ | $m_2$ | $x_1$ | $x_1'$ | $x_2'$ |
| --- | --- | --- | --- | --- | --- |
| 数值 | 测量 | 测量 | 平均落点 | 平均落点 | 平均落点 |

分别计算 $m_1x_1$ 与 $m_1x_1'+m_2x_2'$，若在误差允许范围内相等，则动量守恒得到验证。

## 误差分析

- 两球碰撞不是正碰（球心不等高、偏碰）→ 系统误差；要求 $m_2$ 支柱高度使两球**球心等高**。
- 斜槽末端不水平，$v$ 与 $x$ 不再成正比。
- 落点分散：多次实验取平均落点（用尽量小的圆把落点圈住，圆心为平均落点）。
- 摩擦与空气阻力使总动量略有损失，属不可避免的偶然与系统误差。
- 释放位置不同导致 $v_1$ 不同：必须**从同一位置由静止释放**。

## 易错点

- 必须 $m_1>m_2$，否则入射球被反弹，落点在支柱后方，处理复杂且易漏。
- 用射程代替速度的前提：抛出点等高、平抛时间相同。
- 入射球碰后的落点 $x_1'$ 最靠近槽口，$x_2'$ 最远，$x_1$ 居中，勿弄混三个落点归属。
- 气垫导轨方案中，导轨必须调水平（轻推滑块匀速通过两光电门）。

## 背记要点

1. 验证式：$m_1v_1=m_1v_1'+m_2v_2'$（被碰球初速为零）。
2. 平抛法：等时平抛 $v\propto x$，验证 $m_1x_1=m_1x_1'+m_2x_2'$。
3. 三条件：$m_1>m_2$、末端水平、同一位置静止释放。
4. 高考视角：北京卷实验题常考落点归属判断、误差来源与验证式的推导。

## 自测题

1. 平抛法中用水平射程代替速度的依据是____。
2. 入射球质量必须____（大于/小于）被碰球质量，防止____。
3. 三个落点由近到远依次对应的速度是____、____、____。
4. 确定平均落点的方法是____。

## 相关知识点

理论依据见 [[3 动量守恒定律]]；碰撞类型的判断见 [[5 弹性碰撞和非弹性碰撞]]；动量概念见 [[1 动量]]。
