---
title: 跨学科实践：制作简易活塞式抽水机
date: 2026-08-06
---

# 跨学科实践：制作简易活塞式抽水机

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 活塞式抽水机 | 利用大气压抽水的机械 | 又叫吸取式抽水机 |
| 单向阀门 | 只允许水单方向通过的部件 | 抽水机的关键结构 |
| 理论抽水高度 | 大气压能支持的最大水柱高 | 约 10.3 m |

## 知识梳理

活塞式抽水机的工作原理基于大气压：向上提活塞时，活塞下方气压减小，井水在大气压作用下被压入进水管，顶开下阀门进入圆筒；向下压活塞时，下阀门关闭，水顶开活塞上的阀门到达活塞上方；再次提起活塞时，活塞上方的水随之升高并从出水口流出，同时下方又吸入新的水。

因为水是被大气压"压"上来的，所以理论最大抽水高度为 $h = p_0/(\rho g) \approx 10.3\ \text{m}$，实际因密封不严等原因小于此值。

本实践融合物理（大气压、液体压强）、工程（结构设计、密封工艺）、数学（抽水高度估算）等学科知识。

## 制作要点

<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="240" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">活塞式抽水机工作原理（大气压应用）</text>
  <!-- 储水罐/井 -->
  <rect x="170" y="170" width="140" height="55" fill="#4a9fd4" opacity="0.4" stroke="#1a6faf" stroke-width="2" rx="3"/>
  <text x="240" y="200" text-anchor="middle" fill="#1a6faf" font-size="11">水源（井/水箱）</text>
  <!-- 进水管 -->
  <rect x="225" y="110" width="30" height="62" fill="#c8dff0" stroke="#1a6faf" stroke-width="1.5"/>
  <!-- 进水阀（止回阀，向上开） -->
  <polygon points="225,130 255,130 240,118" fill="#888" stroke="#555" stroke-width="1"/>
  <text x="270" y="125" fill="#555" font-size="10">进水阀</text>
  <!-- 泵筒 -->
  <rect x="195" y="50" width="90" height="65" fill="#c8dff0" stroke="#1a6faf" stroke-width="2" rx="3"/>
  <!-- 活塞 -->
  <rect x="198" y="90" width="84" height="14" fill="#888" stroke="#555" stroke-width="1.5" rx="2"/>
  <text x="240" y="101" text-anchor="middle" fill="white" font-size="9">活塞</text>
  <!-- 活塞杆 -->
  <line x1="240" y1="50" x2="240" y2="30" stroke="#888" stroke-width="4"/>
  <!-- 出水阀 -->
  <polygon points="225,65 255,65 240,52" fill="#888" stroke="#555" stroke-width="1"/>
  <text x="270" y="62" fill="#555" font-size="10">出水阀</text>
  <!-- 出水管 -->
  <rect x="285" y="45" width="25" height="70" fill="#c8dff0" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="330" y="85" fill="#1a6faf" font-size="10">出水管</text>
  <!-- 上行箭头 -->
  <defs>
    <marker id="pmarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#4a9fd4"/>
    </marker>
  </defs>
  <line x1="240" y1="30" x2="240" y2="18" stroke="#4a9fd4" stroke-width="2" marker-end="url(#pmarr)"/>
  <text x="250" y="18" fill="#4a9fd4" font-size="10">↑活塞上移</text>
  <!-- 大气压标注 -->
  <line x1="140" y1="165" x2="178" y2="165" stroke="#e63946" stroke-width="2" marker-end="url(#pmarr)"/>
  <text x="60" y="168" fill="#e63946" font-size="10">大气压→</text>
  <!-- 原理说明 -->
  <rect x="30" y="210" width="420" height="24" fill="white" rx="4" stroke="#4a9fd4" stroke-width="1"/>
  <text x="240" y="222" text-anchor="middle" fill="#1a6faf" font-size="11">活塞上移→泵筒气压降低→大气压压水进入→活塞下移→水升至出口</text>
</svg>

材料：大号注射器（或透明塑料筒）、单向阀（可用橡皮膜、玻璃珠自制）、软管、密封胶。

- 筒身选透明材料便于观察水流。
- 活塞与筒壁之间、接口处必须密封良好，否则漏气导致无法吸水。
- 下阀门装在进水管口，只许水进不许水出；上阀门装在活塞上，只许水上不许水下。
- 先向筒内注少量水排出空气（引水），可提高抽水效果。

## 公式汇总

理论最大抽水高度：

$$
h_{\max} = \frac{p_0}{\rho g} = \frac{1.013\times10^5}{1.0\times10^3 \times 9.8} \approx 10.3\ \text{m}
$$

## 对比分析

| 提起活塞 | 压下活塞 |
|---|---|
| 下阀门打开，上阀门关闭 | 下阀门关闭，上阀门打开 |
| 水被大气压压入筒内 | 水从活塞下方到达上方 |

## 背记要点

1. 活塞式抽水机靠大气压把水压上来，不是"吸"上来。
2. 两个单向阀门交替开闭是抽水的关键。
3. 理论抽水高度约 10.3 m，与大气压对应。
4. 密封性是制作成败的核心。

## 自测题

1. 提起活塞时，是什么力使水进入圆筒？
2. 为什么抽水机不能把 15 m 深井里的水直接抽上来？
3. 如果活塞与筒壁间漏气，会出现什么现象？

## 相关知识点

[[大气压强]] [[压强]] [[液体的压强]] [[流体压强与流速的关系]]
