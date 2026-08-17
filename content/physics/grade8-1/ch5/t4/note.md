---
title: 眼睛和眼镜
date: 2026-08-06
---

# 眼睛和眼镜

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 晶状体 | 眼睛中的凸透镜 | 折射光线、聚焦成像 |
| 视网膜 | 相当于光屏 | 成倒立缩小实像 |
| 近视眼 | 像成在视网膜前方 | 看不清远处物体 |
| 远视眼 | 像成在视网膜后方 | 看不清近处物体 |

## 知识梳理

眼睛相当于一架照相机，晶状体和角膜共同作用相当于凸透镜，视网膜相当于光屏。看远近不同物体时，睫状体改变晶状体厚薄，从而改变焦距，使像始终成在视网膜上。

近视眼晶状体太厚或眼球前后径过长，远处物体的像成在视网膜前方，需戴凹透镜矫正。远视眼晶状体太薄或眼球前后径过短，近处物体的像成在视网膜后方，需戴凸透镜矫正。

## 公式汇总

眼镜度数与焦距关系：

$$
D=\frac{100}{f}
$$

其中 $D$ 为度数，$f$ 为焦距（单位 cm）。

<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="250" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">近视眼与远视眼的成因及矫正</text>
  <defs>
    <marker id="earr" markerWidth="7" markerHeight="7" refX="3" refY="3" orient="auto">
      <path d="M0,0 L7,3 L0,6 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <!-- 左：近视眼 -->
  <text x="100" y="44" text-anchor="middle" fill="#e63946" font-size="12" font-weight="bold">近视眼</text>
  <!-- 眼球（椭圆形，前后径过长）-->
  <ellipse cx="120" cy="120" rx="55" ry="45" fill="white" stroke="#1a6faf" stroke-width="2"/>
  <!-- 晶状体（凸透镜）-->
  <path d="M78,107 Q88,120 78,133" fill="none" stroke="#4a9fd4" stroke-width="2.5"/>
  <path d="M95,107 Q85,120 95,133" fill="none" stroke="#4a9fd4" stroke-width="2.5"/>
  <!-- 视网膜 -->
  <path d="M168,80 Q180,120 168,160" fill="none" stroke="#888" stroke-width="2"/>
  <!-- 像成在视网膜前 -->
  <circle cx="148" cy="120" r="4" fill="#e63946"/>
  <text x="148" y="112" text-anchor="middle" fill="#e63946" font-size="9">成像点</text>
  <text x="170" y="120" fill="#888" font-size="9">视网膜</text>
  <!-- 光线 -->
  <line x1="30" y1="105" x2="80" y2="112" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#earr)"/>
  <line x1="30" y1="135" x2="80" y2="128" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#earr)"/>
  <!-- 矫正 -->
  <text x="100" y="185" text-anchor="middle" fill="#e63946" font-size="11">成像在视网膜前</text>
  <text x="100" y="200" text-anchor="middle" fill="#1a6faf" font-size="11">→ 戴凹透镜矫正</text>
  <rect x="35" y="105" width="10" height="30" fill="none" stroke="#555" stroke-width="1.5" rx="2"/>
  <path d="M40,107 Q36,120 40,133" fill="none" stroke="#555" stroke-width="1.5"/>
  <path d="M45,107 Q49,120 45,133" fill="none" stroke="#555" stroke-width="1.5"/>
  <text x="42" y="148" text-anchor="middle" fill="#555" font-size="8">凹透镜</text>
  <!-- 右：远视眼 -->
  <text x="360" y="44" text-anchor="middle" fill="#2d6a2d" font-size="12" font-weight="bold">远视眼</text>
  <ellipse cx="360" cy="120" rx="48" ry="45" fill="white" stroke="#1a6faf" stroke-width="2"/>
  <path d="M322,107 Q332,120 322,133" fill="none" stroke="#4a9fd4" stroke-width="2.5"/>
  <path d="M337,107 Q327,120 337,133" fill="none" stroke="#4a9fd4" stroke-width="2.5"/>
  <!-- 视网膜 -->
  <path d="M400,80 Q412,120 400,160" fill="none" stroke="#888" stroke-width="2"/>
  <!-- 像成在视网膜后 -->
  <circle cx="415" cy="120" r="4" fill="#2d6a2d"/>
  <text x="440" y="120" fill="#2d6a2d" font-size="9">成像点（后）</text>
  <!-- 光线 -->
  <line x1="270" y1="105" x2="320" y2="112" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#earr)"/>
  <line x1="270" y1="135" x2="320" y2="128" stroke="#4a9fd4" stroke-width="1.5" marker-end="url(#earr)"/>
  <text x="360" y="185" text-anchor="middle" fill="#2d6a2d" font-size="11">成像在视网膜后</text>
  <text x="360" y="200" text-anchor="middle" fill="#1a6faf" font-size="11">→ 戴凸透镜矫正</text>
  <text x="240" y="230" text-anchor="middle" fill="#1a6faf" font-size="11">眼镜度数 D = 100/f（f单位cm）</text>
</svg>

## 实验要点

- 用凸透镜模拟晶状体，光屏模拟视网膜。
- 把光屏靠近透镜，模拟近视眼，用凹透镜发散光线矫正。
- 把光屏远离透镜，模拟远视眼，用凸透镜会聚光线矫正。

## 对比分析

| 眼睛问题 | 成因 | 矫正透镜 | 看不清 |
|---|---|---|---|
| 近视眼 | 晶状体过厚或眼轴过长 | 凹透镜 | 远处 |
| 远视眼 | 晶状体过薄或眼轴过短 | 凸透镜 | 近处 |

## 背记要点

1. 眼睛晶状体相当于凸透镜，视网膜相当于光屏。
2. 近视戴凹透镜，远视戴凸透镜。
3. 眼镜度数 $D=100/f$（f 单位 cm）。
4. 保护视力：保持正确读写姿势，避免长时间用眼。

## 自测题

1. 近视眼看不清远处物体，应配戴什么透镜？
2. 焦距 20 cm 的凸透镜做成老花镜，度数是多少？

## 相关知识点

[[透镜]] [[生活中的透镜]] [[凸透镜成像的规律]]