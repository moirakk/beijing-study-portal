---
title: 光的折射
date: 2026-08-06
---

# 光的折射

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 光的折射 | 光从一种介质斜射入另一种介质时传播方向偏折 | 入射角、折射角 |
| 折射角 | 折射光线与法线的夹角 | — |
| 法线 | 过入射点垂直界面的直线 | — |
| 光密介质 | 光在其中传播较慢的介质 | 如水、玻璃 |

## 知识梳理

光从一种介质斜射入另一种介质时，传播方向发生偏折，叫光的折射。折射定律：折射光线、入射光线和法线在同一平面内；折射光线和入射光线分居法线两侧；光从空气斜射入水或玻璃时，折射角小于入射角。

垂直入射时传播方向不变。折射现象：池水变浅、筷子在水中弯折、海市蜃楼等。

## 公式汇总

折射定律定性关系（空气→其他介质）：

$$
n=\frac{\sin i}{\sin r}
$$

$n$ 为折射率，$i$ 为入射角，$r$ 为折射角。

<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="270" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">光的折射：空气→水（折射角&lt;入射角）</text>
  <!-- 界面 -->
  <rect x="0" y="140" width="480" height="130" fill="#c8dff0" opacity="0.5" rx="0"/>
  <line x1="0" y1="140" x2="480" y2="140" stroke="#4a9fd4" stroke-width="2"/>
  <text x="420" y="135" fill="#4a9fd4" font-size="11">界面</text>
  <text x="420" y="110" fill="#1a6faf" font-size="11">空气</text>
  <text x="420" y="200" fill="#1a6faf" font-size="11">水（玻璃）</text>
  <!-- 法线 -->
  <line x1="240" y1="50" x2="240" y2="255" stroke="#333" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="252" y="65" fill="#333" font-size="11">法线 N</text>
  <!-- 入射光线（空气中） -->
  <defs>
    <marker id="ref1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
    <marker id="ref2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
  </defs>
  <line x1="90" y1="60" x2="240" y2="140" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#ref1)"/>
  <text x="125" y="88" fill="#4a9fd4" font-size="11">入射光线</text>
  <!-- 折射光线（水中，偏向法线） -->
  <line x1="240" y1="140" x2="310" y2="240" stroke="#e63946" stroke-width="2.5" marker-end="url(#ref2)"/>
  <text x="335" y="200" fill="#e63946" font-size="11">折射光线</text>
  <!-- 反射光线（虚） -->
  <line x1="240" y1="140" x2="390" y2="60" stroke="#888" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#ref1)"/>
  <text x="340" y="80" fill="#888" font-size="10">反射光线</text>
  <!-- 入射角标注 -->
  <path d="M240,140 A55,55 0 0,0 194,98" fill="none" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="195" y="122" fill="#4a9fd4" font-size="12">i</text>
  <!-- 折射角标注 -->
  <path d="M258,172 A45,45 0 0,0 240,140" fill="none" stroke="#e63946" stroke-width="1.5"/>
  <text x="268" y="162" fill="#e63946" font-size="12">r</text>
  <!-- 规律说明 -->
  <rect x="30" y="200" width="190" height="55" fill="white" rx="5" stroke="#1a6faf" stroke-width="1"/>
  <text x="125" y="218" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">折射规律</text>
  <text x="125" y="234" text-anchor="middle" fill="#333" font-size="10">空气→水/玻璃：r &lt; i</text>
  <text x="125" y="248" text-anchor="middle" fill="#333" font-size="10">垂直入射：方向不变</text>
</svg>

## 实验要点

- 光从空气斜射入水中，记录入射角和折射角。
- 改变入射角大小，观察折射角变化。
- 垂直入射时，折射光线不偏折。
- 验证折射光路可逆。

## 对比分析

| 项目 | 反射 | 折射 |
|---|---|---|
| 发生条件 | 同种介质中返回 | 进入另一种介质 |
| 光速 | 不变 | 改变 |
| 角度关系 | 反射角=入射角 | 折射角一般≠入射角 |

## 背记要点

1. 折射光线、入射光线、法线在同一平面内。
2. 空气斜射入水/玻璃，折射角小于入射角。
3. 垂直入射方向不变。
4. 折射光路可逆。

## 自测题

1. 光从空气斜射入水中，折射角与入射角哪个大？
2. 插入水中的筷子看起来向上弯折，是什么现象？

## 相关知识点

[[光的直线传播]] [[光的反射]] [[光的色散]]