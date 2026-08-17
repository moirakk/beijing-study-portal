---
title: 4 实验：用双缝干涉测量光的波长
date: 2026-08-07
---

# 4 实验：用双缝干涉测量光的波长

<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="260" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">双缝干涉测波长实验装置</text>
  <defs>
    <marker id="laarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#f4a500"/>
    </marker>
  </defs>
  <!-- 光源 -->
  <ellipse cx="40" cy="130" rx="25" ry="20" fill="#f4a500" opacity="0.7" stroke="#e08000" stroke-width="2"/>
  <text x="40" y="160" text-anchor="middle" fill="#e08000" font-size="10">白炽灯</text>
  <!-- 光路箭头 -->
  <line x1="65" y1="130" x2="90" y2="130" stroke="#f4a500" stroke-width="2" marker-end="url(#laarr)"/>
  <!-- 滤光片 -->
  <rect x="90" y="108" width="12" height="44" fill="#4a9fd4" opacity="0.7" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="96" y="100" text-anchor="middle" fill="#4a9fd4" font-size="9">滤光片</text>
  <text x="96" y="164" text-anchor="middle" fill="#4a9fd4" font-size="9">（单色光）</text>
  <!-- 单缝 -->
  <rect x="160" y="107" width="10" height="20" fill="#888" stroke="#555" stroke-width="1"/>
  <rect x="160" y="137" width="10" height="20" fill="#888" stroke="#555" stroke-width="1"/>
  <text x="165" y="100" text-anchor="middle" fill="#555" font-size="9">单缝</text>
  <!-- 光线从单缝到双缝 -->
  <line x1="102" y1="130" x2="158" y2="130" stroke="#f4a500" stroke-width="1.5" marker-end="url(#laarr)"/>
  <!-- 双缝 -->
  <rect x="235" y="105" width="10" height="20" fill="#888" stroke="#555" stroke-width="1"/>
  <rect x="235" y="133" width="10" height="20" fill="#888" stroke="#555" stroke-width="1"/>
  <text x="240" y="98" text-anchor="middle" fill="#1a6faf" font-size="9">双缝</text>
  <text x="240" y="162" text-anchor="middle" fill="#1a6faf" font-size="9">（间距d）</text>
  <!-- 光从单缝到双缝 -->
  <line x1="170" y1="127" x2="233" y2="118" stroke="#f4a500" stroke-width="1.2" marker-end="url(#laarr)"/>
  <line x1="170" y1="133" x2="233" y2="133" stroke="#f4a500" stroke-width="1.2" marker-end="url(#laarr)"/>
  <line x1="170" y1="133" x2="233" y2="148" stroke="#f4a500" stroke-width="1.2" marker-end="url(#laarr)"/>
  <!-- 遮光筒 -->
  <rect x="245" y="100" width="120" height="60" fill="none" stroke="#888" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="305" y="125" text-anchor="middle" fill="#555" font-size="9">遮光筒</text>
  <!-- 干涉条纹（屏幕） -->
  <rect x="365" y="90" width="12" height="80" fill="#888" stroke="#555" stroke-width="1.5"/>
  <!-- 亮纹 -->
  <line x1="365" y1="100" x2="377" y2="100" stroke="#f4f050" stroke-width="3"/>
  <line x1="365" y1="113" x2="377" y2="113" stroke="#f4f050" stroke-width="3"/>
  <line x1="365" y1="126" x2="377" y2="126" stroke="#f4f050" stroke-width="3"/>
  <line x1="365" y1="139" x2="377" y2="139" stroke="#f4f050" stroke-width="3"/>
  <line x1="365" y1="152" x2="377" y2="152" stroke="#f4f050" stroke-width="3"/>
  <line x1="365" y1="165" x2="377" y2="165" stroke="#f4f050" stroke-width="3"/>
  <text x="371" y="82" text-anchor="middle" fill="#555" font-size="9">屏（测量头）</text>
  <!-- 光线（从双缝到屏） -->
  <line x1="245" y1="118" x2="365" y2="100" stroke="#f4a500" stroke-width="1" opacity="0.6" marker-end="url(#laarr)"/>
  <line x1="245" y1="118" x2="365" y2="113" stroke="#f4a500" stroke-width="1" opacity="0.6" marker-end="url(#laarr)"/>
  <line x1="245" y1="118" x2="365" y2="126" stroke="#f4a500" stroke-width="1" opacity="0.6" marker-end="url(#laarr)"/>
  <line x1="245" y1="148" x2="365" y2="139" stroke="#f4a500" stroke-width="1" opacity="0.6" marker-end="url(#laarr)"/>
  <line x1="245" y1="148" x2="365" y2="152" stroke="#f4a500" stroke-width="1" opacity="0.6" marker-end="url(#laarr)"/>
  <line x1="245" y1="148" x2="365" y2="165" stroke="#f4a500" stroke-width="1" opacity="0.6" marker-end="url(#laarr)"/>
  <!-- L标注 -->
  <line x1="240" y1="185" x2="365" y2="185" stroke="#e63946" stroke-width="1.5"/>
  <line x1="240" y1="181" x2="240" y2="189" stroke="#e63946" stroke-width="1.5"/>
  <line x1="365" y1="181" x2="365" y2="189" stroke="#e63946" stroke-width="1.5"/>
  <text x="302" y="200" text-anchor="middle" fill="#e63946" font-size="11">L（双缝到屏距离）</text>
  <!-- Δy标注 -->
  <line x1="385" y1="113" x2="385" y2="126" stroke="#2d6a2d" stroke-width="2"/>
  <text x="400" y="122" fill="#2d6a2d" font-size="11">Δy</text>
  <!-- 装置顺序 -->
  <text x="40" y="220" fill="#1a6faf" font-size="10">光源→</text>
  <text x="90" y="220" fill="#1a6faf" font-size="10">滤光片→</text>
  <text x="150" y="220" fill="#1a6faf" font-size="10">单缝→</text>
  <text x="200" y="220" fill="#1a6faf" font-size="10">双缝→</text>
  <text x="250" y="220" fill="#1a6faf" font-size="10">遮光筒→</text>
  <text x="320" y="220" fill="#1a6faf" font-size="10">测量头（屏）</text>
  <!-- 公式 -->
  <rect x="30" y="232" width="420" height="24" fill="white" rx="4" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="248" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">λ = dΔy/L；Δy = (aₙ - a₁)/(n-1)</text>
</svg>

## 实验原理

双缝干涉相邻亮（暗）纹间距：
$$\Delta y=\dfrac{L}{d}\lambda\quad\Rightarrow\quad \lambda=\dfrac{d}{L}\Delta y$$

$d$ 为双缝间距（已知，刻在双缝片上），$L$ 为双缝到屏的距离（刻度尺测量），$\Delta y$ 用**测量头（分划板＋螺旋测微装置/游标装置）**测量。

**装置沿光具座依次排列**：光源（白炽灯）→ 滤光片（获得单色光）→ 单缝（获得线光源）→ 双缝 → 遮光筒 → 屏（测量头）。

## 实验步骤

1. 按顺序安装器件，使光源灯丝、单缝、双缝、屏中心大致**共轴**；单缝与双缝**相互平行**，间距约 5～10 cm。
2. 接通电源，调节至屏上出现清晰的干涉条纹。
3. 转动测量头手轮，使分划板中心刻线对齐第 1 条亮纹中心，读数 $a_1$；再对齐第 $n$ 条亮纹中心，读数 $a_n$。
4. 条纹间距 $\Delta y=\dfrac{|a_n-a_1|}{n-1}$。
5. 用刻度尺测双缝到屏的距离 $L$，代入 $\lambda=\dfrac{d}{L}\Delta y$。
6. 更换滤光片重复，比较不同色光波长。

## 数据处理

| 物理量 | $d/\text{mm}$ | $L/\text{m}$ | $a_1/\text{mm}$ | $a_n/\text{mm}$ | $n$ | $\Delta y$ | $\lambda$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 数值 | 0.2（已知） | 测量 | 读数 | 读数 | 计数 | $\frac{a_n-a_1}{n-1}$ | $\frac{d\Delta y}{L}$ |

多次测量取平均。典型结果：红光约 $7\times10^{-7}\ \text{m}$，绿光约 $5.5\times10^{-7}\ \text{m}$，紫光约 $4\times10^{-7}\ \text{m}$。

## 误差分析

- $\Delta y$ 很小，测**多条条纹间总距离再除以间隔数**可显著减小偶然误差；间隔数是 $n-1$ 不是 $n$，除错是最典型失误。
- 分划板刻线未对准亮纹**中心**、测量头回程差（应沿同一方向旋转测量）引入读数误差。
- $L$ 测量偏差：应从双缝量到测量头分划板处。
- 单缝与双缝不平行 → 条纹倾斜模糊，无法准确测量。

## 易错点

- 从第 1 条亮纹到第 $n$ 条亮纹之间共 $(n-1)$ 个间距。
- 滤光片的作用是获得**单色光**；单缝的作用是获得**线光源（相干性）**；双缝的作用是**产生两束相干光**。
- 白光实验（去掉滤光片）看到中央白纹、两侧彩色条纹，不能用于精确测波长。
- 换用波长更长的滤光片，条纹变宽，可测性更好但条数变少。

## 背记要点

1. 原理式：$\lambda=\dfrac{d}{L}\Delta y$；$\Delta y=\dfrac{a_n-a_1}{n-1}$。
2. 器件顺序：灯 → 滤光片 → 单缝 → 双缝 → 屏（测量头）。
3. 减小误差：测多个间距取平均、同方向旋转测量头。
4. 高考视角：北京卷常考器件作用、间隔数计算与误差判断。

## 自测题

1. 器件排列顺序：光源、____、____、____、屏。
2. 测得第 1 到第 6 条亮纹中心间距 7.5 mm，则 $\Delta y=$____mm。
3. $d=0.2\ \text{mm}$，$L=1\ \text{m}$，$\Delta y=3\ \text{mm}$，则 $\lambda=$____m。
4. 单缝的作用是____，滤光片的作用是____。

## 相关知识点

干涉原理与条纹公式见 [[3 光的干涉]]；波长与颜色、衍射的关系见 [[5 光的衍射]]；折射率与光速见 [[1 光的折射]]。
