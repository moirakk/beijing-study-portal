---
title: 2 法拉第电磁感应定律
date: 2026-08-10
---

# 2 法拉第电磁感应定律

## 概念定义

**法拉第电磁感应定律**：闭合回路中感应电动势的大小与穿过回路的磁通量变化率成正比：
$$\varepsilon=n\frac{\Delta\Phi}{\Delta t}$$
（$n$ 为线圈匝数，$\dfrac{\Delta\Phi}{\Delta t}$ 为磁通量变化率）。

**导体棒切割磁感线**：长 $L$ 的导体棒以速度 $v$ 垂直切割磁感线时，
$$\varepsilon=BLv$$
（$B$、$L$、$v$ 两两垂直；一般情形取垂直分量）。

感应电动势反映的是**电源**性质：即使回路不闭合也存在电动势，只是无电流。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 普遍公式 | $\varepsilon=n\dfrac{\Delta\Phi}{\Delta t}$，求平均电动势 |
| 切割公式 | $\varepsilon=BLv$，$v$ 为瞬时值时求瞬时电动势 |
| 感应电流 | $I=\dfrac{\varepsilon}{R+r}$ |
| 电荷量 | $q=I\Delta t=\dfrac{n\Delta\Phi}{R+r}$，与时间无关 |
| $\Phi$ 变化方式 | $B$ 变、$S$ 变、$B$ 与 $S$ 夹角变 |
| 能量转化 | 克服安培力做功 $=$ 产生的电能 |

## 导体棒切割磁感线示意图

<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="e1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <text x="60" y="45" font-size="13" fill="#2563eb">× × × × × ×</text>
  <text x="60" y="75" font-size="13" fill="#2563eb">× × × × × ×</text>
  <text x="60" y="105" font-size="13" fill="#2563eb">× × × × × ×</text>
  <text x="60" y="135" font-size="13" fill="#2563eb">× × × × × ×</text>
  <line x1="50" y1="30" x2="280" y2="30" stroke="#334155" stroke-width="3"/>
  <line x1="50" y1="150" x2="280" y2="150" stroke="#334155" stroke-width="3"/>
  <rect x="40" y="30" width="10" height="120" fill="#94a3b8"/>
  <text x="14" y="95" font-size="12" fill="#94a3b8">R</text>
  <line x1="170" y1="30" x2="170" y2="150" stroke="#dc2626" stroke-width="4"/>
  <text x="158" y="24" font-size="12" fill="#dc2626">a</text>
  <text x="158" y="166" font-size="12" fill="#dc2626">b</text>
  <line x1="180" y1="90" x2="240" y2="90" stroke="#16a34a" stroke-width="2.5" marker-end="url(#e1)"/>
  <text x="246" y="94" font-size="12" fill="#16a34a">v</text>
  <text x="60" y="190" font-size="12" fill="#334155">ε = BLv，棒 ab 相当于电源（a 为正极）</text>
</svg>

## 典型例题

**例 1**：100 匝线圈面积 $S=0.02\ \text{m}^2$，磁场在 $0.1\ \text{s}$ 内由 $0.2\ \text{T}$ 均匀增大到 $0.6\ \text{T}$（垂直线圈平面）。求感应电动势。

**解**：$\Delta\Phi=\Delta B\cdot S=(0.6-0.2)\times0.02=8\times10^{-3}\ \text{Wb}$。
$\varepsilon=n\dfrac{\Delta\Phi}{\Delta t}=100\times\dfrac{8\times10^{-3}}{0.1}=8\ \text{V}$。

**例 2**：导轨间距 $L=0.5\ \text{m}$，$B=0.4\ \text{T}$，棒以 $v=10\ \text{m/s}$ 匀速滑动，回路总电阻 $R+r=2\ \Omega$。求电动势、电流及维持匀速所需外力。

**解**：$\varepsilon=BLv=0.4\times0.5\times10=2\ \text{V}$；$I=\dfrac{\varepsilon}{R+r}=1\ \text{A}$。
棒受安培力 $F_A=BIL=0.4\times1\times0.5=0.2\ \text{N}$，匀速时外力 $F=F_A=0.2\ \text{N}$。
此时外力功率 $P=Fv=2\ \text{W}$，恰好等于电路消耗的电功率 $\varepsilon I=2\ \text{W}$，能量守恒。

## 易错点

- $\varepsilon=n\dfrac{\Delta\Phi}{\Delta t}$ 求的是**平均**电动势；$\varepsilon=BLv$ 中 $v$ 取瞬时值时求**瞬时**电动势。
- 电动势由 $\dfrac{\Delta\Phi}{\Delta t}$（变化率）决定，与 $\Phi$ 本身大小、$\Delta\Phi$ 大小都无必然关系。
- 多匝线圈别忘乘 $n$；求电荷量 $q=\dfrac{n\Delta\Phi}{R+r}$ 与时间无关。
- 切割公式要求 $B$、$L$、$v$ 两两垂直，斜切割时取 $v$ 的垂直分量。

## 背记要点

1. $\varepsilon=n\dfrac{\Delta\Phi}{\Delta t}$（平均），$\varepsilon=BLv$（切割，瞬时）。
2. 电动势大小看**变化率**，不看磁通量大小。
3. 电荷量 $q=\dfrac{n\Delta\Phi}{R+r}$，只与 $\Delta\Phi$ 有关。
4. 能量链条：外力做功 → 克服安培力做功 → 电能 → 内能（电阻发热）。
5. 高考视角：北京卷计算题最爱"导轨＋棒"模型，按"电动势→电流→安培力→动力学/能量"四步走。

## 自测题

1. 法拉第电磁感应定律公式：$\varepsilon=$____。
2. $B=0.5\ \text{T}$、$L=0.4\ \text{m}$、$v=5\ \text{m/s}$ 垂直切割，$\varepsilon=$____V。
3. 通过回路的电荷量 $q=$____（用 $n$、$\Delta\Phi$、$R+r$ 表示）。
4. 判断：磁通量为零的时刻，感应电动势一定为零。（　）

## 相关知识点

感应电流方向判断见 [[1 楞次定律]]；旋转线圈中 $\varepsilon$ 随时间正弦变化引出 [[1 交变电流]]；磁通量自身变化引起的感应见 [[4 互感和自感]]。
