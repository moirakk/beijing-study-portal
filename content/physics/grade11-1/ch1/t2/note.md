---
title: 2 动量定理
date: 2026-08-07
---

# 2 动量定理

<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="240" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">动量定理：Ft = Δp = mv' - mv</text>
  <defs>
    <marker id="dparr" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4a9fd4"/>
    </marker>
    <marker id="dparr2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#e63946"/>
    </marker>
  </defs>
  <!-- 棒球被击打过程 -->
  <circle cx="100" cy="115" r="22" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2"/>
  <text x="100" y="120" text-anchor="middle" fill="white" font-size="10">球</text>
  <!-- 初速度（向左） -->
  <line x1="78" y1="105" x2="42" y2="105" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#dparr)"/>
  <text x="55" y="96" fill="#4a9fd4" font-size="11">v（初）</text>
  <!-- 冲力（向右） -->
  <line x1="122" y1="115" x2="190" y2="115" stroke="#e63946" stroke-width="3.5" marker-end="url(#dparr2)"/>
  <text x="155" y="108" fill="#e63946" font-size="12" font-weight="bold">F（击打力）</text>
  <!-- 末速度（向右） -->
  <circle cx="320" cy="115" r="22" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2"/>
  <text x="320" y="120" text-anchor="middle" fill="white" font-size="10">球</text>
  <line x1="342" y1="105" x2="395" y2="105" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#dparr)"/>
  <text x="370" y="96" fill="#4a9fd4" font-size="11">v'（末）</text>
  <!-- 时间标注 -->
  <line x1="100" y1="150" x2="320" y2="150" stroke="#888" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="210" y="168" text-anchor="middle" fill="#555" font-size="11">接触时间 t</text>
  <!-- 公式推导 -->
  <rect x="40" y="180" width="400" height="55" fill="white" rx="6" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="198" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">冲量 I = Ft（N·s）= Δp = mv' - mv</text>
  <text x="240" y="215" text-anchor="middle" fill="#333" font-size="11">应用：汽车安全气囊（延长作用时间→减小冲力）</text>
  <text x="240" y="230" text-anchor="middle" fill="#333" font-size="10">跳高沙坑（增大t）；铁砧锻铁（减小t→增大F）</text>
</svg>

## 概念定义

**冲量**：力与力的作用时间的乘积，$I=Ft$，单位 $\text{N}\cdot\text{s}$，矢量，方向与恒力 $F$ 方向相同。它描述力对**时间**的积累效应。

**动量定理**：物体所受合外力的冲量等于物体动量的变化量：
$$I_合=F_合 t=\Delta p=mv'-mv$$

由牛顿第二定律推导：$F=ma=m\dfrac{v'-v}{t}\Rightarrow Ft=mv'-mv$。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 表达式 | $F_合 t=mv'-mv$（矢量式，一维取正方向） |
| 适用范围 | 恒力、变力（变力取平均力或用图象面积）均适用 |
| 单位关系 | $1\ \text{N}\cdot\text{s}=1\ \text{kg}\cdot\text{m/s}$ |
| 变力冲量 | $F$–$t$ 图象与 $t$ 轴围成的"面积"表示冲量 |
| 应用方向 | 求平均冲力（缓冲、打击）、流体连续冲击问题 |

**缓冲原理**：$\Delta p$ 一定时，延长作用时间 $t$ 可减小平均作用力 $F=\dfrac{\Delta p}{t}$（安全气囊、跳远沙坑、轮船碰垫）。

## 典型例题

**例 1**：质量 $60\ \text{kg}$ 的人从高处跳下，落地时速度 $6\ \text{m/s}$，屈腿缓冲用时 $0.6\ \text{s}$ 停下。求地面对人的平均作用力（$g=10\ \text{m/s}^2$）。

**解**：取竖直向上为正。对人用动量定理（受重力 $mg$ 与支持力 $N$）：
$(N-mg)t=0-(-mv)$，即 $(N-600)\times0.6=60\times6=360$。
解得 $N=1200\ \text{N}$，方向竖直向上。

**例 2**：质量 $0.2\ \text{kg}$ 的小球以 $10\ \text{m/s}$ 水平飞来，被球拍反向击回，速度 $15\ \text{m/s}$，作用时间 $0.05\ \text{s}$。求球拍对球的平均作用力（不计重力影响）。

**解**：取击回方向为正。$Ft=mv'-mv=0.2\times15-0.2\times(-10)=5\ \text{kg}\cdot\text{m/s}$。
$F=\dfrac{5}{0.05}=100\ \text{N}$，方向与击回方向相同。

## 易错点

- 动量定理中的 $I$ 是**合外力**的冲量；分力冲量之和才等于 $\Delta p$，缓冲问题勿漏重力冲量。
- 冲量与动量变化量是矢量，一维必须先规定正方向，反弹时末动量带负号。
- $I=Ft$ 中 $F$ 为恒力才可直接相乘；变力用平均力或 $F$–$t$ 图象面积。
- 冲量不等于动量：冲量对应"过程"，动量对应"状态"。

## 背记要点

1. $I=Ft$，单位 $\text{N}\cdot\text{s}$，与 $\text{kg}\cdot\text{m/s}$ 等价。
2. 动量定理：$F_合t=mv'-mv$，恒力变力均适用。
3. 缓冲：$\Delta p$ 一定，$t$ 越长 $F$ 越小。
4. 高考视角：北京卷常考"估算平均冲力"与用动量定理解释生活现象（安全带、缓冲包装）。

## 自测题

1. 冲量的单位是____，它是力对____的积累效应。
2. 物体受 4 N 恒力作用 3 s，冲量大小为____。
3. 鸡蛋落在海绵上不易碎，是因为延长了____，减小了____。
4. 质量 1 kg 的球以 5 m/s 撞墙原速率弹回，墙对球冲量大小为____。

## 相关知识点

动量的概念见 [[1 动量]]；将动量定理用于系统即得 [[3 动量守恒定律]]；反冲问题综合应用见 [[6 反冲现象 火箭]]。
