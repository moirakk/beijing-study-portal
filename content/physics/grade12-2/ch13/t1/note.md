---
title: 专题十三 交变电流与变压器
date: 2026-08-10
---

# 专题十三 交变电流与变压器

## 概念定义

**交变电流**：大小和方向都随时间周期性变化的电流。正弦式交变电流：$e = E_m\sin\omega t$，$i = I_m\sin\omega t$。

**有效值**：让交变电流与恒定电流在相同时间内产生相同热量，该恒定电流的值即为有效值。正弦式电流 $E = \dfrac{E_m}{\sqrt{2}}$，$I = \dfrac{I_m}{\sqrt{2}}$，$U = \dfrac{U_m}{\sqrt{2}}$。

**周期与频率**：$T = \dfrac{1}{f}$，角频率 $\omega = 2\pi f = \dfrac{2\pi}{T}$。

**变压器**：$\dfrac{U_1}{U_2} = \dfrac{n_1}{n_2}$，理想变压器 $\dfrac{I_1}{I_2} = \dfrac{n_2}{n_1}$，$P_1 = P_2$。

## 知识梳理

| 项目 | 要点 |
| --- | --- |
| 瞬时值 | $e = E_m\sin\omega t$ |
| 有效值 | $E = \frac{E_m}{\sqrt{2}}$ |
| 周期频率 | $T = \frac{1}{f}$，$\omega = 2\pi f$ |
| 变压器 | $\frac{U_1}{U_2} = \frac{n_1}{n_2}$ |
| 理想变压器 | $P_1 = P_2$，$\frac{I_1}{I_2} = \frac{n_2}{n_1}$ |
| 远距离输电 | 高压输电减小损耗 $P = I^2R$ |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <rect x="40" y="60" width="120" height="120" rx="8" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="100" y="125" text-anchor="middle" font-size="12" fill="#2563eb">原线圈 n1</text>
  <rect x="200" y="60" width="120" height="120" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="260" y="125" text-anchor="middle" font-size="12" fill="#dc2626">副线圈 n2</text>
  <line x1="160" y1="120" x2="200" y2="120" stroke="#16a34a" stroke-width="3"/>
  <text x="180" y="110" text-anchor="middle" font-size="12" fill="#16a34a">铁芯</text>
  <text x="100" y="45" text-anchor="middle" font-size="12" fill="#2563eb">U1</text>
  <text x="260" y="45" text-anchor="middle" font-size="12" fill="#dc2626">U2</text>
  <text x="180" y="215" text-anchor="middle" font-size="12" fill="#64748b">U1/U2 = n1/n2，P1 = P2</text>
</svg>

## 典型例题

**例 1**：正弦式交变电流的最大值 $I_m = 10\ \text{A}$，求有效值。

**解**：$I = \dfrac{I_m}{\sqrt{2}} = \dfrac{10}{\sqrt{2}} = 5\sqrt{2}\ \text{A}$。

**例 2**：理想变压器原线圈 $n_1 = 1000$ 匝，副线圈 $n_2 = 100$ 匝，原线圈电压 $220\ \text{V}$，求副线圈电压。

**解**：$\dfrac{U_1}{U_2} = \dfrac{n_1}{n_2}$，$U_2 = U_1\dfrac{n_2}{n_1} = 220 \times \dfrac{100}{1000} = 22\ \text{V}$。

**例 3**：正弦式交变电流频率 $50\ \text{Hz}$，求周期和角频率。

**解**：$T = \dfrac{1}{f} = \dfrac{1}{50} = 0.02\ \text{s}$；$\omega = 2\pi f = 100\pi\ \text{rad/s}$。

## 易错点

- 有效值用于计算**热量、功率、电流表电压表读数**。
- 最大值与有效值关系 $E = \frac{E_m}{\sqrt{2}}$ 仅适用于**正弦式**电流。
- 变压器只能改变**交流**电压，不能改变直流。
- 理想变压器**输入功率等于输出功率**。
- 远距离输电用**高压**减小电流，从而减小线路损耗 $P = I^2R$。

## 背记要点

1. 瞬时值：$e = E_m\sin\omega t$。
2. 有效值：$E = \frac{E_m}{\sqrt{2}}$。
3. 周期频率：$T = \frac{1}{f}$。
4. 变压器：$\frac{U_1}{U_2} = \frac{n_1}{n_2}$。
5. 理想变压器：$P_1 = P_2$。

## 自测题

1. 正弦式电流有效值与最大值的关系是____。
2. 变压器能否改变直流电压？
3. 升压变压器中，原线圈匝数____副线圈匝数。
4. 判断：电流表读数等于交变电流的最大值。（　）

## 相关知识点

交变电流由电磁感应产生，见 [[专题十二 电磁感应]]；与电路结合见 [[专题十 恒定电流]]。
