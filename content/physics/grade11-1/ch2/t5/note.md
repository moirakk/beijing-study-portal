---
title: 5 实验：用单摆测量重力加速度
date: 2026-08-07
---

# 5 实验：用单摆测量重力加速度

<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="260" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">用单摆测重力加速度实验</text>
  <defs>
    <marker id="spaarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <!-- 悬点（固定） -->
  <rect x="215" y="35" width="50" height="10" fill="#888" rx="2"/>
  <circle cx="240" cy="45" r="5" fill="#555"/>
  <!-- 摆绳 -->
  <line x1="240" y1="45" x2="185" y2="190" stroke="#555" stroke-width="2"/>
  <!-- 摆球（左侧摆动） -->
  <circle cx="185" cy="195" r="18" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2"/>
  <text x="185" y="200" text-anchor="middle" fill="white" font-size="10">摆球</text>
  <!-- 竖直摆绳（参考） -->
  <line x1="240" y1="45" x2="240" y2="215" stroke="#888" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- 平衡位置摆球 -->
  <circle cx="240" cy="215" r="18" fill="#888" opacity="0.4" stroke="#1a6faf" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- 摆长L标注 -->
  <line x1="250" y1="45" x2="250" y2="215" stroke="#e63946" stroke-width="1.5"/>
  <line x1="246" y1="45" x2="254" y2="45" stroke="#e63946" stroke-width="1.5"/>
  <line x1="246" y1="215" x2="254" y2="215" stroke="#e63946" stroke-width="1.5"/>
  <text x="268" y="135" fill="#e63946" font-size="12">L（摆长）</text>
  <text x="268" y="150" fill="#e63946" font-size="10">悬点到球心</text>
  <!-- 摆角θ -->
  <path d="M240,60 A40,40 0 0,0 224,95" fill="none" stroke="#2d6a2d" stroke-width="1.5"/>
  <text x="212" y="80" fill="#2d6a2d" font-size="11">θ&lt;5°</text>
  <!-- 游标卡尺测球径 -->
  <rect x="35" y="60" width="120" height="80" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="95" y="80" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">测量步骤</text>
  <text x="45" y="98" fill="#333" font-size="10">① 游标卡尺测球径d</text>
  <text x="45" y="113" fill="#333" font-size="10">② 刻度尺测线长l</text>
  <text x="45" y="128" fill="#333" font-size="10">③ L = l + d/2</text>
  <!-- 公式和g计算 -->
  <rect x="30" y="220" width="420" height="36" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="236" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">T = 2π√(L/g) → g = 4π²L/T²</text>
  <text x="240" y="250" text-anchor="middle" fill="#333" font-size="10">测30~50次全振动计时，T = 总时间/次数；减小偶然误差</text>
</svg>

## 实验原理

由单摆周期公式 $T=2\pi\sqrt{\dfrac{L}{g}}$ 变形得：
$$g=\dfrac{4\pi^2L}{T^2}$$

测出摆长 $L$ 和周期 $T$，即可算出当地重力加速度 $g$。

**器材**：铁架台、细线（约 1 m）、小钢球、毫米刻度尺、游标卡尺、秒表。

## 实验步骤

1. 组装单摆：细线上端固定于铁架台，下端系密度大、体积小的钢球。
2. 用毫米刻度尺测悬点到球顶的线长 $l$，用游标卡尺测小球直径 $d$，摆长 $L=l+\dfrac{d}{2}$。
3. 使摆球在**竖直平面内小角度**（摆角小于 $5^\circ$）摆动。
4. 摆球经过**最低点**时开始计时，用秒表测量 30～50 次全振动的总时间 $t$，周期 $T=\dfrac{t}{N}$。
5. 改变摆长重复几次，代入 $g=\dfrac{4\pi^2L}{T^2}$ 求平均值。

## 数据处理

**方法一（平均值法）**：每组算一个 $g$，取平均。

**方法二（图象法）**：由 $T^2=\dfrac{4\pi^2}{g}L$，作 $T^2$–$L$ 图象，应为过原点的直线，斜率 $k=\dfrac{4\pi^2}{g}$，故
$$g=\dfrac{4\pi^2}{k}$$

| 次数 | $L/\text{m}$ | $N$ | $t/\text{s}$ | $T=t/N$ | $T^2/\text{s}^2$ |
| --- | --- | --- | --- | --- | --- |
| 1~5 | … | 30 | … | … | … |

图象法能减小偶然误差，还能通过截距发现系统误差（如漏加或多加半径，直线不过原点但斜率仍准确）。

## 误差分析

- 摆长测量：漏加球半径 → $L$ 偏小 → $g$ 偏小；误把"线长＋直径"当摆长 → $g$ 偏大。
- 计时：把 $N$ 次全振动数成 $N+1$ 次 → $T$ 偏小 → $g$ 偏大；在最高点计时误差大（速度小，时刻不易判断），应在**最低点**计时。
- 摆角过大：不再是简谐运动，公式不适用。
- 悬点松动使摆长变化、锥摆（未在竖直平面内摆动）均引入误差。

## 易错点

- 摆长 $L=$ 线长 $+$ 半径（不是直径）；直径要用**游标卡尺**测。
- 测多次全振动取平均是减小**计时偶然误差**的关键，不能只测一次全振动。
- 计时起点选最低点：速度最大，通过时刻最分明。
- 图象法中若直线不过原点，斜率求 $g$ 仍然可靠，截距反映摆长系统误差。

## 背记要点

1. 原理式：$g=\dfrac{4\pi^2L}{T^2}$；图象法：$T^2=\dfrac{4\pi^2}{g}L$，斜率 $=\dfrac{4\pi^2}{g}$。
2. 摆长 $L=l_线+\dfrac{d}{2}$；周期 $T=\dfrac{t}{N}$（测 30～50 次全振动）。
3. 三要点：小摆角、竖直面内摆、最低点计时。
4. 高考视角：误差方向判断（$g$ 偏大还是偏小）和 $T^2$–$L$ 图象是北京卷实验题重点。

## 自测题

1. 本实验中 $g=$____（用 $L$、$T$ 表示）。
2. 忘记加小球半径，测得的 $g$ 偏____。
3. 应在摆球经过____时开始计时，并测量____次全振动的时间。
4. $T^2$–$L$ 图象斜率为 $k$，则 $g=$____。

## 相关知识点

周期公式来源见 [[4 单摆]]；周期与频率的测量思路见 [[2 简谐运动的描述]]；简谐运动成立条件见 [[3 简谐运动的回复力和能量]]。
