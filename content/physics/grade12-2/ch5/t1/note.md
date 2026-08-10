---
title: 专题五 功和功率
date: 2026-08-10
---

# 专题五 功和功率

## 概念定义

**功**：$W = Fs\cos\theta$，其中 $\theta$ 为力与位移的夹角。功是**标量**，有正负：$\theta < 90^\circ$ 做正功，$\theta > 90^\circ$ 做负功，$\theta = 90^\circ$ 不做功。

**功率**：$P = \dfrac{W}{t}$，瞬时功率 $P = Fv\cos\theta$。当 $F$ 与 $v$ 同向时 $P = Fv$。

**机车启动**：以恒定功率启动时，$P = Fv$，速度增大则牵引力减小，加速度减小，最终匀速；以恒定加速度启动时，先匀加速后变加速。

**平均功率与瞬时功率**：平均功率 $\bar{P} = \dfrac{W}{t}$；瞬时功率 $P = Fv$。

## 知识梳理

| 项目 | 要点 |
| --- | --- |
| 功 | $W = Fs\cos\theta$，标量有正负 |
| 不做功 | 力与位移垂直、力为零、位移为零 |
| 功率 | $P = \frac{W}{t}$（平均），$P = Fv$（瞬时） |
| 机车启动 | 恒定功率：$P=Fv$，$a$ 减小 |
| 额定功率 | 发动机正常工作时的最大功率 |
| 功的正负 | 正功表示动力做功，负功表示阻力做功 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="f5a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="f5b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <line x1="40" y1="180" x2="320" y2="180" stroke="#64748b" stroke-width="2"/>
  <text x="320" y="200" font-size="12" fill="#64748b">位移 s</text>
  <rect x="60" y="120" width="80" height="60" rx="6" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="100" y="155" text-anchor="middle" font-size="12" fill="#2563eb">物体</text>
  <line x1="140" y1="150" x2="240" y2="150" stroke="#2563eb" stroke-width="2" marker-end="url(#f5a)"/>
  <text x="190" y="140" font-size="12" fill="#2563eb">F（与位移同向）</text>
  <line x1="100" y1="120" x2="100" y2="70" stroke="#dc2626" stroke-width="2" marker-end="url(#f5b)"/>
  <text x="110" y="80" font-size="12" fill="#dc2626">N</text>
  <text x="180" y="225" text-anchor="middle" font-size="12" fill="#64748b">W = Fs（F 与 s 同向）；P = Fv</text>
</svg>

## 典型例题

**例 1**：质量为 $2\ \text{kg}$ 的物体在水平恒力 $F = 10\ \text{N}$ 作用下沿水平面移动 $5\ \text{m}$，力与位移夹角 $60^\circ$，求力做的功。

**解**：$W = Fs\cos\theta = 10 \times 5 \times \cos 60^\circ = 10 \times 5 \times 0.5 = 25\ \text{J}$。

**例 2**：汽车以恒定功率 $P = 60\ \text{kW}$ 行驶，速度为 $20\ \text{m/s}$ 时牵引力多大？

**解**：$F = \dfrac{P}{v} = \dfrac{60000}{20} = 3000\ \text{N}$。

**例 3**：物体从静止开始自由下落 $2\ \text{s}$，质量 $1\ \text{kg}$，求 $2\ \text{s}$ 内重力做功的平均功率和 $2\ \text{s}$ 末的瞬时功率。

**解**：$h = \frac{1}{2}gt^2 = 20\ \text{m}$，$W = mgh = 200\ \text{J}$，$\bar{P} = \dfrac{W}{t} = 100\ \text{W}$；$v = gt = 20\ \text{m/s}$，$P = mgv = 200\ \text{W}$。

## 易错点

- 功的公式中 $\theta$ 是**力与位移的夹角**，不是力与速度的夹角。
- 功是标量，正负表示**动力或阻力做功**，不代表方向。
- 瞬时功率 $P = Fv$ 中 $v$ 是**瞬时速度**。
- 机车以恒定功率启动时，牵引力随速度增大而**减小**。
- 计算功时注意位移是**对地位移**，不是相对位移。

## 背记要点

1. 功：$W = Fs\cos\theta$。
2. 功率：$P = \frac{W}{t}$（平均），$P = Fv$（瞬时）。
3. 恒力做功与路径无关，只与初末位置有关（保守力）。
4. 机车启动：$P = Fv$，恒定功率时 $a$ 逐渐减小。
5. 重力做功 $W = mgh$，与路径无关。

## 自测题

1. 力与位移垂直时，力做的功为____。
2. 功率 $P = Fv$ 中 $v$ 是____速度。
3. 汽车上坡时为何要减小速度？
4. 判断：功是矢量。（　）

## 相关知识点

功与能量关系见 [[专题六 动能定理与机械能守恒]]；机车启动与牛顿定律结合见 [[专题二 牛顿运动定律]]。
