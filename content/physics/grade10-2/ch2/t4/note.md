---
title: 4 生活中的圆周运动
date: 2026-08-07
---

# 4 生活中的圆周运动

## 概念定义

**离心运动**：做圆周运动的物体，当提供的向心力**小于**所需向心力（$F<m\dfrac{v^2}{r}$）时，物体逐渐远离圆心的运动；合力突然消失时沿**切线方向**飞出。

生活中的圆周运动实例：铁路弯道、拱形桥与凹形桥、航天器中的失重、离心机（脱水机、离心分离）等。

## 知识梳理

| 模型 | 向心力来源与方程 | 结论 |
| --- | --- | --- |
| 铁路弯道（外轨超高） | 重力与支持力的合力：$mg\tan\theta=m\dfrac{v_0^2}{r}$ | 以规定速度 $v_0$ 行驶时轮缘不挤压钢轨 |
| 拱形桥顶 | $mg-N=m\dfrac{v^2}{r}$ | $N<mg$，超速 $v\ge\sqrt{gr}$ 时飞离桥面（失重） |
| 凹形桥底 | $N-mg=m\dfrac{v^2}{r}$ | $N>mg$，超重 |
| 航天器绕地 | 重力全部提供向心力 | 完全失重，$N=0$ |
| 竖直圆最高点（绳/内轨） | $mg+F=m\dfrac{v^2}{r}$ | 最小速度 $v_{min}=\sqrt{gr}$（此时 $F=0$） |

## 汽车过拱形桥受力示意

<svg viewBox="0 0 380 220" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p24r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="p24b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <path d="M20,200 Q190,20 360,200" fill="none" stroke="#64748b" stroke-width="3"/>
  <rect x="160" y="85" width="60" height="26" rx="5" fill="#e0e7ff" stroke="#334155" stroke-width="2"/>
  <circle cx="175" cy="113" r="6" fill="#334155"/>
  <circle cx="205" cy="113" r="6" fill="#334155"/>
  <line x1="190" y1="85" x2="190" y2="35" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p24b)"/>
  <text x="196" y="46" font-size="12" fill="#2563eb">N</text>
  <line x1="190" y1="120" x2="190" y2="190" stroke="#dc2626" stroke-width="2.5" marker-end="url(#p24r)"/>
  <text x="196" y="182" font-size="12" fill="#dc2626">mg</text>
  <text x="236" y="90" font-size="12" fill="#64748b">桥顶：mg−N=mv²/r</text>
  <text x="236" y="108" font-size="12" fill="#64748b">N=m(g−v²/r)＜mg</text>
</svg>

## 典型例题

**例 1**：质量 $m=1000\ \text{kg}$ 的汽车以 $v=10\ \text{m/s}$ 通过半径 $r=50\ \text{m}$ 的拱形桥顶（$g=10\ \text{m/s}^2$）。求桥面对汽车的支持力，并求汽车飞离桥面的临界速度。

**解**：桥顶 $mg-N=m\dfrac{v^2}{r}$，$N=1000\times(10-\dfrac{100}{50})=8000\ \text{N}$。
$N=0$ 时 $v_c=\sqrt{gr}=\sqrt{500}\approx 22.4\ \text{m/s}$，超过此速度汽车将飞离桥面。

**例 2**：长 $L=0.5\ \text{m}$ 的轻绳系质量 $m=0.2\ \text{kg}$ 的小球在竖直平面内做圆周运动（$g=10\ \text{m/s}^2$）。求小球恰能通过最高点的速度，及此时若最高点速度为 $3\ \text{m/s}$ 绳的张力。

**解**：恰过最高点时绳张力为零，重力提供向心力：$mg=m\dfrac{v_{min}^2}{L}$，$v_{min}=\sqrt{gL}=\sqrt{5}\approx 2.2\ \text{m/s}$。
若 $v=3\ \text{m/s}$：$T+mg=m\dfrac{v^2}{L}$，$T=0.2\times\dfrac{9}{0.5}-2=1.6\ \text{N}$。

## 易错点

- 汽车在**水平弯道**转弯靠静摩擦力提供向心力，最大速度 $v=\sqrt{\mu gr}$；弯道超高时靠合力提供，勿混淆。
- 绳、内轨模型最高点 $v_{min}=\sqrt{gr}$；**杆、管道**模型最高点最小速度可为 0（杆可提供支持力）。
- 离心运动不是受"离心力"作用，而是向心力**不足**；合力消失时沿切线飞出，不是沿半径飞出。
- 桥顶失重、桥底超重指视重变化，重力本身不变。

## 背记要点

1. 拱顶：$N=m\!\left(g-\dfrac{v^2}{r}\right)$；凹底：$N=m\!\left(g+\dfrac{v^2}{r}\right)$。
2. 弯道超高设计速度：$v_0=\sqrt{gr\tan\theta}$。
3. 竖直圆：绳/内轨最高点 $v_{min}=\sqrt{gr}$；杆/管 $v_{min}=0$。
4. 离心条件：$F_供<F_需$；应用有脱水机，危害有汽车超速侧滑。
5. 高考视角：竖直面圆周运动最高点临界问题、桥顶飞离临界是必考模型，先判断模型类型（绳还是杆）。

## 自测题

1. 汽车过拱桥顶时对桥面的压力____（填"大于/小于"）自身重力。
2. 半径 20 m 的拱桥，汽车不脱离桥面的最大速度为____m/s（$g=10\ \text{m/s}^2$）。
3. 用杆连接的小球在竖直面内做圆周运动，通过最高点的最小速度为____。
4. 判断：做离心运动的物体受到了离心力的作用。（　）

## 相关知识点

向心力来源分析见 [[2 向心力]]；加速度计算见 [[3 向心加速度]]；天体的圆周运动见 [[4 宇宙航行]]。
