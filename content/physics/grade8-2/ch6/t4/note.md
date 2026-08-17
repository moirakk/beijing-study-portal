---
title: 机械效率
date: 2026-08-06
---

# 机械效率

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 有用功 $W_{\text{有}}$ | 为达到目的必须做的功 | 提升重物时 $W_{\text{有}}=Gh$ |
| 额外功 $W_{\text{额}}$ | 不需要但不得不做的功 | 克服滑轮重、摩擦做的功 |
| 总功 $W_{\text{总}}$ | 动力做的全部功 | $W_{\text{总}}=W_{\text{有}}+W_{\text{额}}=Fs$ |
| 机械效率 $\eta$ | 有用功占总功的百分比 | 总小于 1 |

## 知识梳理

使用机械时，对人们有用的功叫有用功；并非需要但不得不做的功（克服机械自重、摩擦）叫额外功；有用功与额外功之和叫总功。

机械效率是有用功跟总功的比值：$\eta=W_{\text{有}}/W_{\text{总}}\times100\%$。由于额外功不可避免，机械效率总小于 100%。

提高机械效率的方法：减小机械自重（换轻质动滑轮）、减小摩擦（加润滑油）、增大提升的物重（同一滑轮组提升更重的物体时效率更高）。

注意：机械效率与是否省力、功率大小无关；同一机械的效率也不是固定不变的。

## 公式汇总

机械效率定义：

$$
\eta = \frac{W_{\text{有}}}{W_{\text{总}}} \times 100\%
$$

滑轮组竖直提升：

$$
\eta = \frac{Gh}{Fs} = \frac{Gh}{F \cdot nh} = \frac{G}{nF}
$$

## 实验要点

<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="230" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">机械效率 η = W有用 / W总 &lt; 1</text>
  <!-- 总功（外框） -->
  <rect x="40" y="45" width="400" height="130" fill="#c8dff0" rx="8" stroke="#1a6faf" stroke-width="2"/>
  <text x="240" y="65" text-anchor="middle" fill="#1a6faf" font-size="12">W总（总功）</text>
  <!-- 有用功（内框） -->
  <rect x="60" y="80" width="240" height="80" fill="#4a9fd4" opacity="0.5" rx="5" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="180" y="125" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">W有用</text>
  <text x="180" y="143" text-anchor="middle" fill="#1a6faf" font-size="10">= G物 × h（克服重力做功）</text>
  <!-- 额外功（右侧部分） -->
  <rect x="310" y="80" width="110" height="80" fill="#e63946" opacity="0.4" rx="5" stroke="#e63946" stroke-width="1.5"/>
  <text x="365" y="118" text-anchor="middle" fill="#e63946" font-size="11" font-weight="bold">W额外</text>
  <text x="365" y="133" text-anchor="middle" fill="#e63946" font-size="10">克服摩擦</text>
  <text x="365" y="145" text-anchor="middle" fill="#e63946" font-size="10">克服自重</text>
  <!-- 公式 -->
  <rect x="40" y="185" width="400" height="40" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="201" text-anchor="middle" fill="#1a6faf" font-size="11">W总 = W有用 + W额外；η = W有用/W总 = 有用功/总功</text>
  <text x="240" y="219" text-anchor="middle" fill="#333" font-size="10">机械效率永远小于1；减少摩擦、减轻机械自重可提高效率</text>
</svg>

测滑轮组的机械效率：

- 器材：滑轮组、钩码、弹簧测力计、刻度尺。
- 竖直向上匀速拉动弹簧测力计，读出拉力 $F$；测钩码重 $G$、上升高度 $h$、绳端移动距离 $s$。
- 计算 $\eta=Gh/(Fs)$。
- 匀速拉动的目的：使测力计示数稳定准确。
- 改变钩码个数多次实验：钩码越重，机械效率越高。

## 对比分析

| 提高效率的做法 | 原理 |
|---|---|
| 增大提升物重 | 有用功占比增大 |
| 减轻动滑轮自重 | 额外功减小 |
| 减小摩擦（润滑） | 额外功减小 |

## 背记要点

1. $\eta=W_{\text{有}}/W_{\text{总}}\times100\%$，恒小于 100%。
2. 提升重物：$W_{\text{有}}=Gh$，$W_{\text{总}}=Fs$。
3. 机械效率与省力多少、功率大小无关。
4. 同一滑轮组：物重越大，效率越高。

## 自测题

1. 用滑轮组把 400 N 的物体提高 1 m，绳端拉力 250 N、移动 2 m，机械效率多大？
2. 起重机把 3600 N 的货物提升 4 m，总功 2.4×10⁴ J，有用功和额外功各多少？
3. 为什么机械效率不可能达到 100%？

## 相关知识点

[[功]] [[功率]] [[滑轮]] [[杠杆]]
