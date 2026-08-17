---
title: 长度和时间的测量
date: 2026-08-06
---

# 长度和时间的测量

## 核心概念表

| 概念 | 含义 | 单位/说明 |
|---|---|---|
| 长度 | 物体空间延伸 | m |
| 时间 | 事件持续多久 | s |
| 刻度尺 | 测量长度工具 | 看量程、分度值、零刻度 |
| 误差 | 测量值与真实值之差 | 不可消除，可减小 |

## 知识梳理

长度测量的基本工具是刻度尺。使用前要观察零刻度线是否磨损、量程和分度值；测量时让刻度线紧贴被测物体；读数时视线垂直刻度线，并估读到分度值下一位。记录结果必须带单位。

时间测量常用停表。机械停表的小盘指示分钟，大盘指示秒，读数时注意是否过半分钟刻度线。测量值与真实值之间的差别叫误差，误差不能避免，但多次测量取平均值可以减小误差。

## 公式汇总

单位换算：

$$
1\ \text{m}=10^{3}\ \text{mm}=10^{6}\ \mu\text{m}=10^{9}\ \text{nm}
$$

速度公式：

$$
v=\frac{s}{t}
$$

<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="220" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">刻度尺读数示意图</text>
  <!-- 刻度尺主体 -->
  <rect x="40" y="60" width="400" height="30" fill="#fff" stroke="#1a6faf" stroke-width="2"/>
  <!-- 刻度线 0~10mm -->
  <line x1="60" y1="60" x2="60" y2="90" stroke="#1a6faf" stroke-width="2"/>
  <text x="60" y="105" text-anchor="middle" fill="#1a6faf" font-size="12">0</text>
  <line x1="100" y1="60" x2="100" y2="78" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="140" y1="60" x2="140" y2="78" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="160" y1="60" x2="160" y2="72" stroke="#1a6faf" stroke-width="1"/>
  <line x1="180" y1="60" x2="180" y2="78" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="200" y1="60" x2="200" y2="85" stroke="#1a6faf" stroke-width="2"/>
  <text x="200" y="105" text-anchor="middle" fill="#1a6faf" font-size="12">1cm</text>
  <line x1="220" y1="60" x2="220" y2="78" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="240" y1="60" x2="240" y2="72" stroke="#1a6faf" stroke-width="1"/>
  <line x1="260" y1="60" x2="260" y2="78" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="280" y1="60" x2="280" y2="78" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="300" y1="60" x2="300" y2="85" stroke="#1a6faf" stroke-width="2"/>
  <text x="300" y="105" text-anchor="middle" fill="#1a6faf" font-size="12">2cm</text>
  <line x1="340" y1="60" x2="340" y2="78" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="380" y1="60" x2="380" y2="78" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="400" y1="60" x2="400" y2="85" stroke="#1a6faf" stroke-width="2"/>
  <text x="400" y="105" text-anchor="middle" fill="#1a6faf" font-size="12">3cm</text>
  <!-- 被测物体 -->
  <rect x="60" y="115" width="260" height="20" fill="#4a9fd4" rx="3" opacity="0.8"/>
  <text x="190" y="129" text-anchor="middle" fill="white" font-size="11">被测物体</text>
  <!-- 视线箭头（正确） -->
  <circle cx="300" cy="53" r="6" fill="#1a6faf" opacity="0.7"/>
  <text x="316" y="48" fill="#1a6faf" font-size="11">👁 视线⊥刻度面</text>
  <line x1="300" y1="59" x2="300" y2="65" stroke="#1a6faf" stroke-width="2" marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#1a6faf"/>
    </marker>
  </defs>
  <!-- 读数标注 -->
  <line x1="60" y1="150" x2="320" y2="150" stroke="#e63946" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="345" y="154" fill="#e63946" font-size="12">读数 3.45 cm</text>
  <text x="240" y="185" text-anchor="middle" fill="#333" font-size="11">分度值1mm，末位估读→小数点后第2位</text>
  <text x="240" y="205" text-anchor="middle" fill="#1a6faf" font-size="11">多次测量取平均值，减小偶然误差</text>
</svg>

## 实验要点

- 放置：刻度尺放正，零刻度对准一端。
- 读数：视线正对刻度线，估读一位。
- 记录：数值加单位。
- 多次测量取平均值。

## 对比分析

| 误差 | 错误 |
|---|---|
| 测量工具、方法造成 | 操作不规范造成 |
| 不可避免 | 可以避免 |
| 多次测量取平均减小 | 重新正确操作 |

## 背记要点

1. 国际单位制中长度基本单位是米，时间基本单位是秒。
2. 刻度尺读数必须估读到分度值的下一位。
3. 误差不是错误，多次测量取平均值可减小偶然误差。

## 自测题

1. 用分度值 1 mm 的刻度尺测长度，读数为 3.45 cm，其中估读值是多少？
2. 机械停表小盘指针位于 2 和 3 之间且过了半格，大盘读数为 36 s，总读数是多少？

## 相关知识点

[[运动的描述]] [[运动的快慢]] [[速度的测量]]
