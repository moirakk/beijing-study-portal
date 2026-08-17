---
title: 声的利用
date: 2026-08-06
---

# 声的利用

## 核心概念表

| 概念 | 含义 | 实例 |
|---|---|---|
| 传递信息 | 声音携带某种内容 | B超、声呐、回声定位 |
| 传递能量 | 声音能引起物体变化 | 超声波碎石、清洗 |
| 回声 | 声音遇到障碍物反射回来 | 测距、探测 |

## 知识梳理

声音既可以传递信息，也可以传递能量。蝙蝠靠超声波进行回声定位，探测障碍物和猎物；声呐利用回声测距，应用于航海和渔业。医学上 B超利用超声波成像检查身体。

超声波具有能量，可用于清洗精密仪器、击碎结石等。回声测距的原理是测出声波发出到接收的时间，利用 $s=vt/2$ 计算距离。

## 公式汇总

回声测距：

$$
s=\frac{1}{2}vt
$$

其中 $t$ 为往返时间。

## 实验要点

- 扬声器前放烛焰，声音使烛焰晃动，说明声音能传递能量。
- 敲击长水管一端，另一端能听到多次声音，说明固体和气体传声速度不同。

<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="220" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">声呐回声测距原理</text>
  <!-- 海面 -->
  <rect x="0" y="50" width="480" height="8" fill="#4a9fd4" opacity="0.4"/>
  <!-- 船 -->
  <polygon points="160,50 200,50 220,35 180,30 140,35" fill="#1a6faf"/>
  <rect x="178" y="20" width="5" height="15" fill="#555"/>
  <text x="180" y="65" text-anchor="middle" fill="#1a6faf" font-size="11">声呐发射/接收</text>
  <!-- 海水区域 -->
  <rect x="0" y="58" width="480" height="155" fill="#c8dff0" opacity="0.5"/>
  <!-- 超声波发射路径 -->
  <defs>
    <marker id="sarr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
    <marker id="rarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
  </defs>
  <line x1="180" y1="58" x2="260" y2="175" stroke="#4a9fd4" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#sarr2)"/>
  <text x="195" y="130" fill="#4a9fd4" font-size="10">发出</text>
  <!-- 反射回路径 -->
  <line x1="260" y1="175" x2="190" y2="60" stroke="#e63946" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#rarr)"/>
  <text x="230" y="130" fill="#e63946" font-size="10">反射</text>
  <!-- 海底障碍物 -->
  <ellipse cx="260" cy="178" rx="35" ry="12" fill="#888"/>
  <text x="310" y="183" fill="#555" font-size="11">海底/潜艇</text>
  <!-- 公式 -->
  <rect x="320" y="90" width="145" height="50" fill="white" rx="5" stroke="#1a6faf" stroke-width="1"/>
  <text x="393" y="111" text-anchor="middle" fill="#1a6faf" font-size="12">s = ½ v t</text>
  <text x="393" y="130" text-anchor="middle" fill="#333" font-size="10">t为声波往返时间</text>
  <text x="240" y="205" text-anchor="middle" fill="#1a6faf" font-size="11">声音传递信息：B超、声呐；传递能量：超声波碎石</text>
</svg>

## 对比分析

| 利用方式 | 本质 | 典型应用 |
|---|---|---|
| 传递信息 | 获取内容 | B超、声呐、回声定位 |
| 传递能量 | 做功改变物体 | 超声波碎石、清洗 |

## 背记要点

1. 声音能传递信息，也能传递能量。
2. 回声定位利用超声波反射。
3. 回声测距公式 $s=vt/2$。
4. B超、声呐传递信息；超声波碎石、清洗传递能量。

## 自测题

1. 医生用 B超检查胎儿，说明声音能传递什么？
2. 超声波清洗眼镜，说明声音能传递什么？

## 相关知识点

[[声音的产生与传播]] [[声音的特性]] [[噪声的危害和控制]]