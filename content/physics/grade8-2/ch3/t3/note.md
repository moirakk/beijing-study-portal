---
title: 大气压强
date: 2026-08-06
---

# 大气压强

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 大气压强 | 大气对浸在它里面的物体产生的压强 | 简称大气压，符号 $p_0$ |
| 标准大气压 | 相当于 760 mm 水银柱的压强 | 约 $1.013\times10^5$ Pa |
| 气压计 | 测量大气压的仪器 | 水银气压计、无液(金属盒)气压计 |

## 知识梳理

大气受重力作用且具有流动性，因此产生大气压强。马德堡半球实验有力地证明了大气压的存在，且大气压很大；覆杯实验、吸盘、吸管吸饮料也都证明大气压存在。

托里拆利实验最早测出了大气压的值：玻璃管内水银柱高 760 mm，对应压强约为 $1.013\times10^5$ Pa，称为标准大气压。管倾斜、粗细变化不影响水银柱竖直高度；若管内混入空气，测量值偏小。

大气压随高度升高而减小；大气压还与天气有关，晴天气压高、阴雨天气压低。液体沸点随气压减小而降低（高山上煮饭不易熟），随气压增大而升高（高压锅原理）。

活塞式抽水机和离心式水泵都是利用大气压把水压上来的。

## 公式汇总

标准大气压：

$$
p_0 = \rho_{\text{水银}} g h = 13.6\times10^3 \times 9.8 \times 0.76 \approx 1.013\times10^5\ \text{Pa}
$$

估测大气压（吸盘法）：

$$
p = \frac{F}{S}
$$

## 实验要点

<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="270" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">托里拆利实验：测大气压</text>
  <!-- 水银槽 -->
  <rect x="100" y="195" width="200" height="40" fill="#888" rx="3" stroke="#555" stroke-width="2"/>
  <text x="200" y="220" text-anchor="middle" fill="white" font-size="11">水银槽</text>
  <!-- 水银（槽内） -->
  <rect x="110" y="185" width="180" height="12" fill="#aaa" rx="2"/>
  <!-- 玻璃管 -->
  <rect x="185" y="55" width="30" height="140" fill="white" stroke="#1a6faf" stroke-width="2"/>
  <!-- 管内水银柱 -->
  <rect x="188" y="100" width="24" height="95" fill="#888"/>
  <!-- 真空（管顶） -->
  <rect x="188" y="57" width="24" height="43" fill="#e8f4f8"/>
  <text x="250" y="82" fill="#1a6faf" font-size="11">真空</text>
  <line x1="215" y1="78" x2="240" y2="78" stroke="#1a6faf" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- 760mm标注 -->
  <defs>
    <marker id="tarr" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#e63946"/>
    </marker>
  </defs>
  <line x1="340" y1="97" x2="340" y2="197" stroke="#e63946" stroke-width="2"/>
  <line x1="340" y1="97" x2="334" y2="97" stroke="#e63946" stroke-width="2"/>
  <line x1="340" y1="197" x2="334" y2="197" stroke="#e63946" stroke-width="2"/>
  <text x="360" y="152" fill="#e63946" font-size="12" font-weight="bold">760 mm</text>
  <text x="360" y="167" fill="#e63946" font-size="11">（1标准大气压）</text>
  <!-- 大气压箭头 -->
  <line x1="100" y1="175" x2="185" y2="175" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#tarr)"/>
  <text x="60" y="172" text-anchor="end" fill="#4a9fd4" font-size="11">大气压</text>
  <text x="60" y="184" text-anchor="end" fill="#4a9fd4" font-size="11">p₀→</text>
  <!-- 水银面标注 -->
  <text x="110" y="192" fill="#555" font-size="9">水银面</text>
  <!-- 公式 -->
  <rect x="30" y="240" width="420" height="24" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="255" text-anchor="middle" fill="#1a6faf" font-size="11">p₀ = ρ水银 × g × h = 1.01×10⁵ Pa；大气压随高度升高而降低</text>
</svg>

- 托里拆利实验：管内水银上方是真空；大气压支持 760 mm 水银柱。
- 换更粗的玻璃管、将管倾斜：水银柱竖直高度不变。
- 覆杯实验中硬纸片不掉：大气压向上托住纸片。
- 估测大气压：记录吸盘刚脱离时的拉力 $F$ 和吸盘面积 $S$，$p=F/S$。

## 对比分析

| 高度升高 | 气压变化 | 沸点变化 |
|---|---|---|
| 上升 | 减小 | 降低 |
| 下降 | 增大 | 升高 |

## 背记要点

1. 标准大气压 $p_0 \approx 1.013\times10^5\ \text{Pa} = 760\ \text{mmHg}$。
2. 马德堡半球实验证明大气压存在，托里拆利实验测出大气压数值。
3. 大气压随海拔升高而减小；液体沸点随气压增大而升高。
4. 吸管"吸"饮料实质是大气压把饮料压入口中。

## 自测题

1. 标准大气压能支持约多高的水柱？（约 10.3 m，试用 $p=\rho gh$ 验证）
2. 高压锅为什么能更快煮熟食物？
3. 托里拆利实验中把玻璃管倾斜，水银柱长度和竖直高度各如何变化？

## 相关知识点

[[压强]] [[液体的压强]] [[流体压强与流速的关系]] [[跨学科实践：制作简易活塞式抽水机]]
