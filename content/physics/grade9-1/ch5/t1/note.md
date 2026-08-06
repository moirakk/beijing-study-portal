# 第1节 电流与电压和电阻的关系

## 核心概念表

| 探究内容 | 控制不变量 | 结论 |
|---|---|---|
| 电流与电压的关系 | 电阻 R 不变 | 电阻一定时，电流与电压成正比 |
| 电流与电阻的关系 | 电压 U 不变 | 电压一定时，电流与电阻成反比 |

## 知识梳理

电压是形成电流的原因，电阻阻碍电流，所以电路中的电流大小与电压和电阻都有关。研究一个量与两个量的关系，采用**控制变量法**。

**探究电流与电压的关系**：保持定值电阻 $R$ 不变，移动滑动变阻器滑片改变 $R$ 两端电压，记录多组 $U$、$I$ 数据。
结论：**电阻一定时，通过导体的电流与导体两端的电压成正比**。$I\text{-}U$ 图象是过原点的直线。

**探究电流与电阻的关系**：保持定值电阻两端电压 $U$ 不变，更换不同阻值的定值电阻（5 Ω→10 Ω→20 Ω），每次更换后**调节滑动变阻器**使电阻两端电压恢复到控制值，记录 $R$、$I$ 数据。
结论：**电压一定时，通过导体的电流与导体的电阻成反比**。

## 实验电路图与图象

**探究电路**（电压表并联在定值电阻 R 两端，滑动变阻器串联）：

<svg viewBox="0 0 460 210" width="460" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <path d="M50 40 h360 v110 h-360 z" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="215" y1="28" x2="215" y2="52" stroke="#334155" stroke-width="2.5"/>
  <line x1="231" y1="34" x2="231" y2="46" stroke="#334155" stroke-width="5"/>
  <circle cx="110" cy="40" r="0"/>
  <circle cx="120" cy="150" r="15" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="120" y="155" text-anchor="middle" font-size="12">A</text>
  <rect x="200" y="140" width="55" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="227" y="132" text-anchor="middle" font-size="11">R（定值）</text>
  <rect x="310" y="140" width="60" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="316" y1="132" x2="340" y2="132" stroke="#334155" stroke-width="2"/>
  <path d="M340 132 l-6 -4 m6 4 l-6 4" stroke="#334155" stroke-width="1.5" fill="none"/>
  <text x="340" y="122" text-anchor="middle" font-size="11">滑动变阻器</text>
  <line x1="200" y1="160" x2="200" y2="188" stroke="#2563eb" stroke-width="1.6"/>
  <line x1="255" y1="160" x2="255" y2="188" stroke="#2563eb" stroke-width="1.6"/>
  <line x1="200" y1="188" x2="212" y2="188" stroke="#2563eb" stroke-width="1.6"/>
  <line x1="243" y1="188" x2="255" y2="188" stroke="#2563eb" stroke-width="1.6"/>
  <circle cx="227" cy="188" r="13" fill="#fff" stroke="#2563eb" stroke-width="2"/>
  <text x="227" y="193" text-anchor="middle" font-size="11" fill="#2563eb">V</text>
  <circle cx="90" cy="40" r="3.5" fill="#334155"/>
  <line x1="90" y1="40" x2="112" y2="24" stroke="#334155" stroke-width="2.2"/>
  <text x="100" y="14" font-size="11">S</text>
</svg>

**I-U 图象与 I-R 图象**：

<svg viewBox="0 0 560 190" width="560" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <g>
    <line x1="40" y1="155" x2="250" y2="155" stroke="#334155" stroke-width="2" marker-end="url(#ax5)"/>
    <line x1="40" y1="155" x2="40" y2="20" stroke="#334155" stroke-width="2" marker-end="url(#ax5)"/>
    <text x="240" y="175" font-size="12">U/V</text><text x="18" y="30" font-size="12">I/A</text>
    <line x1="40" y1="155" x2="220" y2="45" stroke="#dc2626" stroke-width="2.5"/>
    <circle cx="100" cy="118" r="3" fill="#dc2626"/><circle cx="160" cy="82" r="3" fill="#dc2626"/>
    <text x="145" y="35" font-size="11" fill="#dc2626">R 一定：I ∝ U（过原点直线）</text>
  </g>
  <g>
    <line x1="330" y1="155" x2="540" y2="155" stroke="#334155" stroke-width="2" marker-end="url(#ax5)"/>
    <line x1="330" y1="155" x2="330" y2="20" stroke="#334155" stroke-width="2" marker-end="url(#ax5)"/>
    <text x="528" y="175" font-size="12">R/Ω</text><text x="308" y="30" font-size="12">I/A</text>
    <path d="M350 40 Q380 120 520 145" stroke="#2563eb" stroke-width="2.5" fill="none"/>
    <text x="440" y="90" font-size="11" fill="#2563eb">U 一定：I ∝ 1/R（双曲线一支）</text>
  </g>
</svg>

## 实验要点

- **滑动变阻器的作用**：①保护电路；②探究 $I$ 与 $U$ 关系时改变定值电阻两端电压；③探究 $I$ 与 $R$ 关系时保持定值电阻两端电压不变。
- 电压表并联在定值电阻两端，电流表串联在电路中。
- 闭合开关前滑片移到阻值最大处。
- 换大电阻后，电压表示数会变大，应把变阻器阻值**调大**使电压恢复控制值。
- 多次测量目的：寻找普遍规律，避免偶然性。

## 数据与图象

| $R=10\ \Omega$ 时 | $U$/V | 1.0 | 2.0 | 3.0 |
|---|---|---|---|---|
| | $I$/A | 0.1 | 0.2 | 0.3 |

$I\text{-}U$ 图象为过原点的倾斜直线，斜率越大表示电阻越小。

| $U=3\ \text{V}$ 时 | $R$/Ω | 5 | 10 | 15 |
|---|---|---|---|---|
| | $I$/A | 0.6 | 0.3 | 0.2 |

$I$ 与 $R$ 的乘积不变（$IR=U$），说明成反比。

## 背记要点

1. 方法：控制变量法。
2. 电阻一定，$I\propto U$；电压一定，$I\propto\dfrac{1}{R}$。
3. 表述顺序不能颠倒：只能说"电流与电压成正比"，不能说"电压与电流成正比"。
4. 探究 $I$ 与 $R$ 关系时，换电阻后必须调变阻器保持 $U$ 不变。
5. 滑动变阻器双重作用：保护电路 + 改变（或保持）电压。

## 自测题

1. 探究电流与电阻的关系时，把 5 Ω 换成 10 Ω 后，应如何移动滑片？为什么？
2. 某导体两端电压从 2 V 增大到 6 V，通过它的电流从 0.2 A 变为多少？（电阻不变）
3. 实验中为什么不能用灯泡代替定值电阻探究电流与电压的关系？

## 相关知识点

[[第1节 电压]] [[第3节 电阻]] [[第4节 变阻器]] [[第2节 欧姆定律]]
