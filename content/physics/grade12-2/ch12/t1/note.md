---
title: 专题十二 电磁感应
date: 2026-08-10
---

# 专题十二 电磁感应

## 概念定义

**磁通量**：$\Phi = BS\cos\theta$，单位韦伯（Wb）。

**法拉第电磁感应定律**：感应电动势 $E = n\dfrac{\Delta\Phi}{\Delta t}$，其中 $n$ 为线圈匝数。

**导体切割磁感线**：$E = BLv\sin\theta$，$\theta$ 为 $v$ 与 $B$ 的夹角。

**楞次定律**：感应电流的磁场总要**阻碍**引起感应电流的磁通量的变化。"增反减同、来拒去留"。

**自感**：线圈中电流变化时产生自感电动势，$E = L\dfrac{\Delta I}{\Delta t}$。

## 知识梳理

| 项目 | 要点 |
| --- | --- |
| 磁通量 | $\Phi = BS\cos\theta$ |
| 法拉第定律 | $E = n\frac{\Delta\Phi}{\Delta t}$ |
| 切割磁感线 | $E = BLv\sin\theta$ |
| 楞次定律 | 阻碍磁通量变化 |
| 右手定则 | 判断感应电流方向 |
| 自感 | $E = L\frac{\Delta I}{\Delta t}$ |
| 感应电流 | $I = \frac{E}{R}$ |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="f12a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="60" y1="40" x2="60" y2="200" stroke="#16a34a" stroke-width="2"/>
  <line x1="300" y1="40" x2="300" y2="200" stroke="#16a34a" stroke-width="2"/>
  <text x="50" y="30" font-size="12" fill="#16a34a">×</text>
  <text x="310" y="30" font-size="12" fill="#16a34a">×</text>
  <text x="180" y="30" text-anchor="middle" font-size="12" fill="#16a34a">× × × × × ×（磁场 B 垂直纸面向里）</text>
  <rect x="120" y="100" width="120" height="20" rx="4" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="180" y="115" text-anchor="middle" font-size="12" fill="#2563eb">导体棒 L</text>
  <line x1="180" y1="120" x2="180" y2="180" stroke="#2563eb" stroke-width="2" marker-end="url(#f12a)"/>
  <text x="195" y="175" font-size="12" fill="#2563eb">v</text>
  <text x="180" y="225" text-anchor="middle" font-size="12" fill="#64748b">E = BLv，用右手定则判断电流方向</text>
</svg>

## 典型例题

**例 1**：长 $0.5\ \text{m}$ 的导体棒以 $4\ \text{m/s}$ 垂直切割 $B = 0.2\ \text{T}$ 的磁场，求感应电动势。

**解**：$E = BLv = 0.2 \times 0.5 \times 4 = 0.4\ \text{V}$。

**例 2**：$100$ 匝线圈，磁通量在 $0.1\ \text{s}$ 内从 $0.02\ \text{Wb}$ 变为 $0.07\ \text{Wb}$，求感应电动势。

**解**：$E = n\dfrac{\Delta\Phi}{\Delta t} = 100 \times \dfrac{0.07-0.02}{0.1} = 50\ \text{V}$。

**例 3**：磁通量变化率越大，感应电动势越____。

**解**：由 $E = n\dfrac{\Delta\Phi}{\Delta t}$ 知，磁通量变化率越大，感应电动势越大。

## 易错点

- 感应电动势由**磁通量变化率**决定，与磁通量大小无关。
- 楞次定律"阻碍"的是**磁通量的变化**，不是磁通量本身。
- 切割磁感线公式 $E = BLv\sin\theta$ 注意夹角。
- 感应电流方向用**右手定则**（切割）或楞次定律判断。
- 自感电动势阻碍电流的**变化**，不是阻碍电流。

## 背记要点

1. 磁通量：$\Phi = BS\cos\theta$。
2. 法拉第定律：$E = n\frac{\Delta\Phi}{\Delta t}$。
3. 切割磁感线：$E = BLv\sin\theta$。
4. 楞次定律：增反减同、来拒去留。
5. 自感：$E = L\frac{\Delta I}{\Delta t}$。

## 自测题

1. 法拉第电磁感应定律的表达式是____。
2. 楞次定律中"阻碍"的是____。
3. 导体棒垂直切割磁感线，感应电动势 $E =$____。
4. 判断：磁通量越大，感应电动势越大。（　）

## 相关知识点

电磁感应与电路结合见 [[专题十 恒定电流]]；与力学综合见 [[专题十四 电磁综合计算]]；交变电流见 [[专题十三 交变电流与变压器]]。
