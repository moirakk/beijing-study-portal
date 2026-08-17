---
title: 2 简谐运动的描述
date: 2026-08-07
---

# 2 简谐运动的描述

<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="260" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">简谐运动：位移–时间图象</text>
  <defs>
    <marker id="sax" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#333"/>
    </marker>
  </defs>
  <!-- 坐标轴 -->
  <line x1="40" y1="145" x2="450" y2="145" stroke="#333" stroke-width="1.5" marker-end="url(#sax)"/>
  <line x1="40" y1="240" x2="40" y2="50" stroke="#333" stroke-width="1.5" marker-end="url(#sax)"/>
  <text x="455" y="149" fill="#333" font-size="11">t/s</text>
  <text x="28" y="48" fill="#333" font-size="11">x/m</text>
  <!-- 正弦曲线 -->
  <path d="M40,145 Q80,55 120,145 Q160,235 200,145 Q240,55 280,145 Q320,235 360,145 Q400,55 440,145" fill="none" stroke="#4a9fd4" stroke-width="2.5"/>
  <!-- 振幅标注 -->
  <line x1="35" y1="55" x2="45" y2="55" stroke="#e63946" stroke-width="1.5"/>
  <text x="22" y="59" fill="#e63946" font-size="11">A</text>
  <line x1="35" y1="235" x2="45" y2="235" stroke="#e63946" stroke-width="1.5"/>
  <text x="18" y="239" fill="#e63946" font-size="11">-A</text>
  <!-- 一个周期T -->
  <line x1="40" y1="250" x2="200" y2="250" stroke="#2d6a2d" stroke-width="1.5"/>
  <line x1="40" y1="246" x2="40" y2="254" stroke="#2d6a2d" stroke-width="1.5"/>
  <line x1="200" y1="246" x2="200" y2="254" stroke="#2d6a2d" stroke-width="1.5"/>
  <text x="120" y="264" text-anchor="middle" fill="#2d6a2d" font-size="11">T（周期）</text>
  <!-- 关键点标注 -->
  <text x="40" y="138" text-anchor="middle" fill="#333" font-size="10">0</text>
  <text x="120" y="138" fill="#1a6faf" font-size="10">T/2</text>
  <text x="200" y="138" fill="#1a6faf" font-size="10">T</text>
  <text x="280" y="138" fill="#1a6faf" font-size="10">3T/2</text>
  <text x="360" y="138" fill="#1a6faf" font-size="10">2T</text>
  <!-- 公式和说明 -->
  <rect x="30" y="42" width="420" height="18" fill="white" rx="3" stroke="#4a9fd4" stroke-width="0.5" opacity="0.8"/>
  <!-- 物理量说明框 -->
  <rect x="280" y="52" width="185" height="80" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1.5" opacity="0.95"/>
  <text x="372" y="70" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">简谐运动要素</text>
  <text x="290" y="88" fill="#333" font-size="10">振幅A：最大位移</text>
  <text x="290" y="104" fill="#333" font-size="10">周期T：重复一次用时</text>
  <text x="290" y="120" fill="#333" font-size="10">频率f=1/T（Hz）</text>
  <text x="290" y="136" fill="#333" font-size="10">角频率ω=2πf</text>
  <!-- 回复力说明 -->
  <rect x="30" y="180" width="240" height="30" fill="white" rx="4" stroke="#4a9fd4" stroke-width="1"/>
  <text x="150" y="194" text-anchor="middle" fill="#1a6faf" font-size="11">F回复 = -kx（指向平衡位置）</text>
  <text x="150" y="207" text-anchor="middle" fill="#333" font-size="10">位移最大→速度=0；平衡位置→速度最大</text>
</svg>

## 概念定义

**振幅 $A$**：振动物体离开平衡位置的**最大距离**，标量，描述振动的强弱（范围）。

**周期 $T$**：完成一次全振动所需的时间，单位 s；**频率 $f$**：单位时间内完成全振动的次数，单位 Hz，$f=\dfrac{1}{T}$。

**相位**：$(\omega t+\varphi)$，描述振动所处的"步调"；$\varphi$ 为初相位。

**简谐运动表达式**：
$$x=A\sin(\omega t+\varphi),\qquad \omega=\dfrac{2\pi}{T}=2\pi f$$

## 知识梳理

| 物理量 | 意义 | 说明 |
| --- | --- | --- |
| 振幅 $A$ | 振动强弱 | 等于最大位移的大小；振动范围为 $2A$ |
| 周期 $T$、频率 $f$ | 振动快慢 | $T=\dfrac{1}{f}$；固有周期由系统本身决定 |
| 角频率 $\omega$ | 快慢的另一表示 | $\omega=\dfrac{2\pi}{T}=2\pi f$ |
| 相位差 | 两振动步调之差 | 同相 $\Delta\varphi=2k\pi$；反相 $\Delta\varphi=(2k+1)\pi$ |

**由图象读信息**：峰值读 $A$；一个完整波形对应的横轴长度读 $T$；某时刻切线斜率的正负判断速度方向。

## 典型例题

**例 1**：某简谐运动表达式 $x=5\sin\!\left(4\pi t+\dfrac{\pi}{6}\right)\ \text{cm}$。求振幅、周期、频率、初相位。

**解**：$A=5\ \text{cm}$；$\omega=4\pi\ \text{rad/s}$，$T=\dfrac{2\pi}{\omega}=0.5\ \text{s}$；$f=\dfrac{1}{T}=2\ \text{Hz}$；初相位 $\varphi=\dfrac{\pi}{6}$。

**例 2**：两个简谐运动 $x_1=3\sin(2\pi t)\ \text{cm}$，$x_2=4\sin\!\left(2\pi t+\pi\right)\ \text{cm}$。判断二者相位关系。

**解**：相位差 $\Delta\varphi=\pi$，二者**反相**：一个到达正向最大位移时，另一个恰在负向最大位移，步调完全相反。（振幅不同不影响相位比较。）

## 易错点

- 全振动的判断：从某位置**以相同速度方向**再次回到该位置才算一次全振动，不能只看位置重复。
- 周期是系统**固有属性**（由振子本身决定），与振幅无关（简谐运动的等时性）。
- $x=A\sin(\omega t+\varphi)$ 默认从平衡位置计时才是纯正弦；计时起点不同则 $\varphi$ 不同。
- 相位差比较必须**同频率**才有恒定相位差。

## 背记要点

1. $x=A\sin(\omega t+\varphi)$，$\omega=\dfrac{2\pi}{T}=2\pi f$。
2. $A$ 描述强弱，$T、f$ 描述快慢，相位描述步调。
3. 同相 $\Delta\varphi=2k\pi$，反相 $\Delta\varphi=(2k+1)\pi$。
4. 高考视角：给表达式求各量、给图象写表达式是北京卷基础题标配。

## 自测题

1. $x=2\sin(10\pi t)\ \text{cm}$ 的振动，周期为____s，频率为____Hz。
2. 简谐运动的周期由____决定，与振幅____。
3. 两同频振动相位差为 $\pi$，称二者____。
4. 完成一次全振动通过的路程为____（用 $A$ 表示）。

## 相关知识点

简谐运动的定义与图象见 [[1 简谐运动]]；周期公式的具体形式见 [[4 单摆]]；能量随位移的变化见 [[3 简谐运动的回复力和能量]]。
