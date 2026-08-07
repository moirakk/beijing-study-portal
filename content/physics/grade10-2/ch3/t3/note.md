---
title: 3 万有引力理论的成就
date: 2026-08-07
---

# 3 万有引力理论的成就

## 概念定义

万有引力理论的两大成就：**"称量"天体的质量**（由表面重力或卫星运动求中心天体质量、密度）和**预言并发现未知天体**（海王星的发现、哈雷彗星回归的预言）。

核心思想：天体（或卫星）绕中心天体做匀速圆周运动时，**万有引力提供向心力**：
$$G\dfrac{Mm}{r^2}=m\dfrac{v^2}{r}=m\omega^2r=m\dfrac{4\pi^2}{T^2}r$$

## 知识梳理

| 求法 | 已知量 | 公式 |
| --- | --- | --- |
| 重力加速度法 | 表面 $g$、半径 $R$ | $M=\dfrac{gR^2}{G}$（黄金代换） |
| 环绕法（周期） | 卫星轨道半径 $r$、周期 $T$ | $M=\dfrac{4\pi^2r^3}{GT^2}$ |
| 环绕法（线速度） | $r$、$v$ | $M=\dfrac{rv^2}{G}$ |
| 密度 | $M$、$R$ | $\rho=\dfrac{3M}{4\pi R^3}$；近地卫星（$r\approx R$）时 $\rho=\dfrac{3\pi}{GT^2}$ |

**发现海王星**：天王星轨道"出轨"，亚当斯与**勒维耶**根据万有引力定律计算出未知行星轨道，1846 年伽勒在预言位置发现海王星——"笔尖下发现的行星"。

## 卫星环绕求中心天体质量示意

<svg viewBox="0 0 380 210" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p33r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="p33b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <circle cx="150" cy="110" r="46" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="128" y="115" font-size="13" fill="#1d4ed8">M（中心）</text>
  <circle cx="150" cy="110" r="88" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <circle cx="238" cy="110" r="7" fill="#dc2626"/>
  <text x="250" y="114" font-size="12" fill="#dc2626">m（卫星）</text>
  <line x1="238" y1="110" x2="202" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#p33r)"/>
  <text x="196" y="98" font-size="11" fill="#dc2626">F引</text>
  <line x1="238" y1="103" x2="238" y2="46" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p33b)"/>
  <text x="244" y="60" font-size="12" fill="#2563eb">v</text>
  <text x="42" y="196" font-size="12" fill="#64748b">GMm/r²=m·4π²r/T² ⇒ M=4π²r³/(GT²)</text>
</svg>

## 典型例题

**例 1**：某卫星绕地球做匀速圆周运动，轨道半径 $r=6.8\times10^6\ \text{m}$，周期 $T=5.6\times10^3\ \text{s}$。求地球质量（$G=6.67\times10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2$）。

**解**：$G\dfrac{Mm}{r^2}=m\dfrac{4\pi^2}{T^2}r$，
$M=\dfrac{4\pi^2r^3}{GT^2}=\dfrac{4\times9.87\times(6.8\times10^6)^3}{6.67\times10^{-11}\times(5.6\times10^3)^2}\approx 6.0\times10^{24}\ \text{kg}$。

**例 2**：某行星的近地卫星（贴近表面飞行）周期为 $T$，求该行星的平均密度。

**解**：近地卫星 $r\approx R$：$G\dfrac{Mm}{R^2}=m\dfrac{4\pi^2}{T^2}R$ ⇒ $M=\dfrac{4\pi^2R^3}{GT^2}$。
$\rho=\dfrac{M}{\frac43\pi R^3}=\dfrac{3\pi}{GT^2}$，只需测周期即可求密度。

## 易错点

- 环绕法求出的是**中心天体**的质量，与环绕天体（卫星）质量无关。
- 密度公式 $\rho=\dfrac{3\pi}{GT^2}$ 仅对**近地卫星**（$r\approx R$）成立，一般轨道需乘 $\left(\dfrac{r}{R}\right)^3$。
- 区分轨道半径 $r$（到球心）与离地高度 $h$：$r=R+h$。
- 海王星是**先计算后观测**发现的，体现理论的预言能力，与偶然观测发现不同。

## 背记要点

1. 主线方程：$G\dfrac{Mm}{r^2}=m\dfrac{v^2}{r}=m\omega^2r=m\dfrac{4\pi^2}{T^2}r$。
2. $M=\dfrac{gR^2}{G}$ 或 $M=\dfrac{4\pi^2r^3}{GT^2}$；近地卫星 $\rho=\dfrac{3\pi}{GT^2}$。
3. 成就：称量地球（天体）质量；预言发现海王星、哈雷彗星回归。
4. 高考视角："引力提供向心力+黄金代换"是天体题两大法宝，先写主线方程再按已知量取式。

## 自测题

1. 由卫星的 $r$、$T$ 求中心天体质量的公式为 $M=$____。
2. 用环绕法能否求出卫星自身的质量？____。
3. 近地卫星周期为 $T$，行星平均密度 $\rho=$____。
4. 被称为"笔尖下发现的行星"的是____星。

## 相关知识点

定律本身见 [[2 万有引力定律]]；开普勒定律见 [[1 行星的运动]]；宇宙速度与卫星见 [[4 宇宙航行]]。
