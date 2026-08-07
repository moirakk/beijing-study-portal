---
title: 4 单摆
date: 2026-08-07
---

# 4 单摆

## 概念定义

**单摆**：细线一端固定、另一端系一小球组成的装置，满足：线的**伸缩和质量可忽略**、球的直径远小于线长——是实际摆的理想化模型。

**回复力**：摆球重力沿圆弧**切线方向**的分力 $F=mg\sin\theta$。当摆角很小（$\theta<5^\circ$）时 $\sin\theta\approx\dfrac{x}{L}$，则
$$F=-\dfrac{mg}{L}x$$
满足 $F=-kx$，故**小摆角下单摆做简谐运动**。

**周期公式**（惠更斯）：
$$T=2\pi\sqrt{\dfrac{L}{g}}$$

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 周期公式 | $T=2\pi\sqrt{\dfrac{L}{g}}$，只与摆长和 $g$ 有关 |
| 与质量、振幅关系 | 无关（等时性，伽利略发现） |
| 摆长 $L$ | 悬点到**球心**的距离：$L=l_线+\dfrac{d}{2}$ |
| 等效重力加速度 | 加速系统、其他星球上用等效 $g$ 代入 |
| 应用 | 摆钟计时、测重力加速度 |

## 单摆受力示意

<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="v4r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="v4b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="v4g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <line x1="180" y1="20" x2="180" y2="190" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="180" cy="20" r="4" fill="#334155"/>
  <line x1="180" y1="20" x2="248" y2="150" stroke="#64748b" stroke-width="2"/>
  <circle cx="248" cy="150" r="10" fill="#e0e7ff" stroke="#334155" stroke-width="2"/>
  <text x="196" y="80" font-size="12" fill="#64748b">θ</text>
  <line x1="248" y1="160" x2="248" y2="212" stroke="#dc2626" stroke-width="2.5" marker-end="url(#v4r)"/>
  <text x="254" y="206" font-size="12" fill="#dc2626">mg</text>
  <line x1="248" y1="150" x2="216" y2="90" stroke="#2563eb" stroke-width="2.5" marker-end="url(#v4b)"/>
  <text x="196" y="86" font-size="12" fill="#2563eb">T</text>
  <line x1="240" y1="146" x2="196" y2="170" stroke="#16a34a" stroke-width="2.5" marker-end="url(#v4g)"/>
  <text x="150" y="182" font-size="12" fill="#16a34a">F回=mg sinθ</text>
  <text x="36" y="36" font-size="12" fill="#64748b">切向分力提供回复力</text>
</svg>

## 典型例题

**例 1**：摆长 $1\ \text{m}$ 的单摆在 $g=\pi^2\approx9.87\ \text{m/s}^2$ 处的周期是多少？

**解**：$T=2\pi\sqrt{\dfrac{L}{g}}=2\pi\sqrt{\dfrac{1}{\pi^2}}=2\ \text{s}$（这样的摆叫"秒摆"）。

**例 2**：一摆钟在山下走时准确，搬到高山上后变慢。为使其走时准确，应如何调整摆长？

**解**：山上 $g$ 减小，$T=2\pi\sqrt{L/g}$ 增大，钟变慢。为恢复原周期，须**减小摆长** $L$，使 $\dfrac{L}{g}$ 恢复原值（$L'=L\dfrac{g'}{g}<L$）。

## 易错点

- 单摆做简谐运动的条件是**摆角很小**（$<5^\circ$），大摆角不是简谐运动。
- 摆长是悬点到**球心**的距离，不是线长；实验中忘加半径是典型错误。
- 周期与摆球质量、振幅无关；只改变振幅不改变周期。
- 变加速环境（电梯、斜面上、圆周运动）中用**等效 $g$**：$g_{等效}$ 为摆球相对静止时摆线张力对应的"视重加速度"。

## 背记要点

1. $T=2\pi\sqrt{\dfrac{L}{g}}$，与 $m$、$A$ 无关。
2. 回复力：$F=mg\sin\theta\approx\dfrac{mg}{L}x$（小角度），是重力的切向分力。
3. 秒摆：$T=2\ \text{s}$，$L\approx1\ \text{m}$。
4. 高考视角：摆钟快慢调节、等效摆长（挡钉摆）、等效 $g$ 是常见变式。

## 自测题

1. 单摆做简谐运动的条件是____。
2. 摆长增大为原来的 4 倍，周期变为原来的____倍。
3. 单摆的回复力由____提供；最低点时回复力为____。
4. 判断：单摆周期与摆球质量成正比。（　）

## 相关知识点

简谐运动判据 $F=-kx$ 见 [[3 简谐运动的回复力和能量]]；周期与频率的定义见 [[2 简谐运动的描述]]；利用周期公式测 $g$ 见 [[5 实验：用单摆测量重力加速度]]。
