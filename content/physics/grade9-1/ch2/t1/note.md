# 第1节 热机

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 热机 | 利用内能做功的机器 | 内能→机械能 |
| 内燃机 | 燃料在气缸内燃烧的热机 | 汽油机、柴油机 |
| 冲程 | 活塞从气缸一端运动到另一端的过程 | 一个工作循环含四个冲程 |

## 知识梳理

热机是把燃料燃烧释放的内能转化为机械能的机器。常见热机有蒸汽机、内燃机、汽轮机、喷气发动机等，其中内燃机应用最广泛。

汽油机的一个工作循环包括四个冲程：
1. **吸气冲程**：进气门打开，排气门关闭，活塞下行，吸入汽油和空气的混合气体；
2. **压缩冲程**：两气门都关闭，活塞上行，压缩混合气体，**机械能转化为内能**；
3. **做功冲程**：两气门都关闭，火花塞点火，高温高压燃气推动活塞下行，**内能转化为机械能**（唯一对外做功的冲程）；
4. **排气冲程**：排气门打开，活塞上行，排出废气。

一个工作循环中，曲轴转动 **2 周**，活塞往复 **2 次**，对外做功 **1 次**。飞轮靠惯性完成其余三个辅助冲程。

## 示意图

**汽油机四冲程**（简化剖面图，◀▶ 表示气门开闭）：

<svg viewBox="0 0 620 200" width="620" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="arh" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <g>
    <rect x="20" y="40" width="70" height="110" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
    <rect x="26" y="95" width="58" height="22" fill="#94a3b8" stroke="#334155"/>
    <rect x="30" y="24" width="18" height="14" fill="#16a34a"/>
    <rect x="62" y="24" width="18" height="14" fill="#cbd5e1"/>
    <path d="M55 60 v30" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arh)"/>
    <text x="55" y="172" text-anchor="middle" font-size="12" fill="#334155">吸气</text>
    <text x="55" y="188" text-anchor="middle" font-size="10" fill="#16a34a">进气门开</text>
  </g>
  <g>
    <rect x="170" y="40" width="70" height="110" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
    <rect x="176" y="60" width="58" height="22" fill="#94a3b8" stroke="#334155"/>
    <rect x="180" y="24" width="18" height="14" fill="#cbd5e1"/>
    <rect x="212" y="24" width="18" height="14" fill="#cbd5e1"/>
    <path d="M205 115 v-28" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arh)"/>
    <text x="205" y="172" text-anchor="middle" font-size="12" fill="#334155">压缩</text>
    <text x="205" y="188" text-anchor="middle" font-size="10" fill="#64748b">机械能→内能</text>
  </g>
  <g>
    <rect x="320" y="40" width="70" height="110" fill="#fee2e2" stroke="#334155" stroke-width="2"/>
    <rect x="326" y="100" width="58" height="22" fill="#94a3b8" stroke="#334155"/>
    <rect x="330" y="24" width="18" height="14" fill="#cbd5e1"/>
    <rect x="362" y="24" width="18" height="14" fill="#cbd5e1"/>
    <path d="M355 48 l0 8 M348 52 l4 6 M362 52 l-4 6" stroke="#f59e0b" stroke-width="2"/>
    <path d="M355 60 v34" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arh)"/>
    <text x="355" y="172" text-anchor="middle" font-size="12" fill="#334155">做功</text>
    <text x="355" y="188" text-anchor="middle" font-size="10" fill="#dc2626">内能→机械能</text>
  </g>
  <g>
    <rect x="470" y="40" width="70" height="110" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
    <rect x="476" y="60" width="58" height="22" fill="#94a3b8" stroke="#334155"/>
    <rect x="480" y="24" width="18" height="14" fill="#cbd5e1"/>
    <rect x="512" y="24" width="18" height="14" fill="#f97316"/>
    <path d="M505 115 v-28" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arh)"/>
    <text x="505" y="172" text-anchor="middle" font-size="12" fill="#334155">排气</text>
    <text x="505" y="188" text-anchor="middle" font-size="10" fill="#ea580c">排气门开</text>
  </g>
</svg>

```mermaid
flowchart LR
  A[吸气冲程] --> B[压缩冲程<br/>机械能→内能] --> C[做功冲程<br/>内能→机械能] --> D[排气冲程] --> A
```

## 对比分析

| 比较项 | 汽油机 | 柴油机 |
|---|---|---|
| 燃料 | 汽油 | 柴油 |
| 气缸顶部 | 火花塞 | 喷油嘴 |
| 吸气冲程吸入 | 汽油与空气混合气体 | 只吸入空气 |
| 点火方式 | 点燃式 | 压燃式 |
| 效率 | 较低 | 较高 |
| 应用 | 小汽车、摩托车 | 载重汽车、拖拉机、轮船 |

## 实验要点

- 演示实验：试管内水沸腾后水蒸气把塞子冲开，水蒸气对塞子做功，内能转化为机械能——这是热机的工作原理雏形。
- 判断冲程的技巧：看气门开闭和活塞运动方向。两门全闭且活塞下行→做功冲程（有点火）；两门全闭且活塞上行→压缩冲程；进气门开→吸气；排气门开→排气。

## 背记要点

1. 热机原理：内能转化为机械能。
2. 四冲程顺序：吸气→压缩→做功→排气。
3. 能量转化：压缩冲程机械能→内能；做功冲程内能→机械能。
4. 一个循环：曲轴转2周，活塞往复2次，做功1次，点火1次。
5. 汽油机有火花塞（点燃式），柴油机有喷油嘴（压燃式）。
6. 柴油机吸气冲程只吸入空气。

## 自测题

1. 汽油机的哪个冲程将内能转化为机械能？该冲程中气门的状态如何？
2. 某汽油机飞轮转速 3600 r/min，1 秒内完成多少个工作循环？做功多少次？
3. 柴油机与汽油机在构造上最主要的区别是什么？

## 相关知识点

[[第2节 内能]] [[第2节 热机的效率]] [[第3节 能量的转化和守恒]]
