---
title: 5 共点力的平衡
date: 2026-08-07
---

# 5 共点力的平衡

## 概念定义

**共点力**：作用于同一点，或作用线交于一点的几个力。
**平衡状态**：物体保持**静止**或**匀速直线运动**的状态（$a=0$）。
**共点力平衡条件**：合力为零：
$$\vec{F}_{合}=0 \quad\Longleftrightarrow\quad \begin{cases} \sum F_x=0 \\ \sum F_y=0 \end{cases}$$

## 知识梳理

| 方法 | 适用情形 | 要点 |
| --- | --- | --- |
| 二力平衡 | 两个力 | 等大反向共线 |
| 合成法（三力） | 三个力 | 任意两力的合力与第三力等大反向 |
| 正交分解法 | 三力及以上 | 沿 x、y 轴分解，两方向分别列 $\sum F=0$ |
| 图解法 | 动态平衡 | 一力恒定、一力方向不变时，画矢量三角形分析变化 |

**受力分析顺序**：先重力 → 再弹力（找接触面）→ 后摩擦力 → 其他外力；隔离研究对象，防止"多力""漏力"。

## 斜面上静止物体的三力平衡

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="a13r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="a13b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="a13g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <polygon points="15,215 235,215 235,85" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
  <text x="195" y="207" font-size="11" fill="#64748b">θ</text>
  <circle cx="125" cy="148" r="5" fill="#334155"/>
  <line x1="125" y1="148" x2="125" y2="225" stroke="#dc2626" stroke-width="2.5" marker-end="url(#a13r)"/>
  <text x="130" y="222" font-size="12" fill="#dc2626">mg</text>
  <line x1="125" y1="148" x2="90" y2="90" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a13b)"/>
  <text x="58" y="88" font-size="12" fill="#2563eb">N=mgcosθ</text>
  <line x1="125" y1="148" x2="188" y2="112" stroke="#16a34a" stroke-width="2.5" marker-end="url(#a13g)"/>
  <text x="182" y="100" font-size="12" fill="#16a34a">f=mgsinθ</text>
  <text x="65" y="45" font-size="12" fill="#64748b">静止：沿面 f=mgsinθ，垂直面 N=mgcosθ</text>
  <line x1="270" y1="215" x2="270" y2="150" stroke="#dc2626" stroke-width="2" marker-end="url(#a13r)"/>
  <line x1="270" y1="150" x2="316" y2="176" stroke="#2563eb" stroke-width="2" marker-end="url(#a13b)"/>
  <line x1="316" y1="176" x2="270" y2="215" stroke="#16a34a" stroke-width="2" marker-end="url(#a13g)"/>
  <text x="262" y="232" font-size="11" fill="#64748b">首尾相接成闭合三角形 ⇒ 平衡</text>
</svg>

## 典型例题

**例 1**：重 $G=100\ \text{N}$ 的灯用两根绳悬挂，两绳与水平天花板均成 30° 角，求每根绳的拉力。

**解**：设张力 $T$，竖直方向平衡：$2T\sin30°=G$，$T=\dfrac{100}{2\times0.5}=100\ \text{N}$。
（角度越小绳越"平"，张力越大——晾衣绳模型。）

**例 2**：物体在倾角 $37°$ 粗糙斜面上恰好匀速下滑，求动摩擦因数 $\mu$（$\sin37°=0.6$，$\cos37°=0.8$）。

**解**：匀速下滑，沿斜面：$mg\sin\theta=f=\mu N=\mu mg\cos\theta$，
故 $\mu=\tan37°=\dfrac{0.6}{0.8}=0.75$。

## 易错点

- 平衡包括**匀速直线运动**，不只是静止；速度为零瞬间（如上抛最高点）**不一定**平衡。
- 三力平衡中若两力垂直，优先沿这两力方向建轴。
- 动态平衡问题（绳缓慢转动等）用**矢量三角形图解**，不宜硬算。
- 受力分析漏掉摩擦力或多画"下滑力"（下滑力只是重力的分量，不是独立的力）。

## 背记要点

1. 平衡条件：$F_合=0$，正交分解后 $\sum F_x=0$、$\sum F_y=0$。
2. 三力平衡：任意两力合力与第三力等大反向；矢量首尾相接构成闭合三角形。
3. 恰好匀速下滑 ⇒ $\mu=\tan\theta$。
4. 高考视角：共点力平衡（含动态平衡、临界问题）是选择题压轴常客，图解法与正交分解必须熟练。

## 自测题

1. 物体做匀速直线运动，所受合力为____。
2. 三个共点力平衡，其中两个力的合力与第三个力的关系是____。
3. 用与竖直方向成 $\theta$ 角的绳和竖直墙共同支撑小球，墙对球弹力为 $N$，则绳张力 $T=$____（用 $mg$、$\theta$ 表示）。
4. 判断：物体速度为零时一定处于平衡状态。（　）

## 相关知识点

力的合成分解方法见 [[4 力的合成和分解]]；摩擦力求解见 [[2 摩擦力]]；非平衡（有加速度）问题见 [[3 牛顿第二定律]]。
