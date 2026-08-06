# 第4节 电流的测量

## 核心概念表

| 概念 | 说明 |
|---|---|
| 电流 | 表示电流强弱的物理量，符号 $I$，单位安培（A） |
| 单位换算 | $1\ \text{A}=10^{3}\ \text{mA}$，$1\ \text{mA}=10^{3}\ \mu\text{A}$ |
| 电流表 | 测量电流的仪表，符号 A（圆圈内） |

## 知识梳理

常见电流值：计算器约 100 μA，节能灯约几十毫安，电冰箱约 1 A，空调约 5 A。

**电流表使用规则**：①必须**串联**在被测电路中；②电流从**"+"接线柱流入**、"−"流出；③不能超过**量程**（先试触选量程）；④**绝对不允许**不经用电器直接接电源两极（内阻极小，相当于短路）。

**读数方法**：先看量程，再看分度值，最后读数。0~0.6 A 量程分度值 0.02 A；0~3 A 量程分度值 0.1 A；同一指针位置两量程读数相差 5 倍（如 0.26 A / 1.3 A）。

## 示意图

**电流表表盘读数**（双量程刻度示意，指针指向 0.26 A / 1.3 A）：

<svg viewBox="0 0 360 200" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <path d="M40 150 A140 140 0 0 1 320 150" fill="none" stroke="#334155" stroke-width="2"/>
  <g stroke="#334155">
    <line x1="40" y1="150" x2="55" y2="150"/>
    <line x1="61" y1="93" x2="74" y2="101"/>
    <line x1="110" y1="52" x2="118" y2="65"/>
    <line x1="180" y1="38" x2="180" y2="53"/>
    <line x1="250" y1="52" x2="242" y2="65"/>
    <line x1="299" y1="93" x2="286" y2="101"/>
    <line x1="320" y1="150" x2="305" y2="150"/>
  </g>
  <text x="34" y="170" font-size="10" fill="#334155">0</text>
  <text x="52" y="88" font-size="10" fill="#334155">0.1</text>
  <text x="104" y="45" font-size="10" fill="#334155">0.2</text>
  <text x="176" y="30" font-size="10" fill="#334155">0.3</text>
  <text x="243" y="45" font-size="10" fill="#334155">0.4</text>
  <text x="290" y="88" font-size="10" fill="#334155">0.5</text>
  <text x="312" y="170" font-size="10" fill="#334155">0.6</text>
  <text x="34" y="185" font-size="10" fill="#64748b">0</text>
  <text x="176" y="70" font-size="10" fill="#64748b">1.5</text>
  <text x="312" y="185" font-size="10" fill="#64748b">3</text>
  <line x1="180" y1="150" x2="97" y2="72" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="180" cy="150" r="6" fill="#334155"/>
  <text x="180" y="178" text-anchor="middle" font-size="12" fill="#334155">A</text>
  <text x="180" y="196" text-anchor="middle" font-size="11" fill="#dc2626">读数：小量程 0.26 A ／ 大量程 1.3 A</text>
</svg>

**电流表的正确接法**（串联，"+"进"−"出）：

<svg viewBox="0 0 420 170" width="420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ara" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <path d="M60 30 h300 v110 h-300 z" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="195" y1="18" x2="195" y2="42" stroke="#334155" stroke-width="2.5"/>
  <line x1="212" y1="24" x2="212" y2="36" stroke="#334155" stroke-width="5"/>
  <text x="186" y="12" font-size="11">+</text><text x="214" y="12" font-size="11">−</text>
  <circle cx="140" cy="140" r="16" fill="#fff" stroke="#334155" stroke-width="2"/>
  <text x="140" y="145" text-anchor="middle" font-size="13" fill="#334155">A</text>
  <text x="118" y="122" font-size="10" fill="#dc2626">+</text><text x="158" y="122" font-size="10" fill="#2563eb">−</text>
  <circle cx="280" cy="140" r="15" fill="#fff" stroke="#334155" stroke-width="2"/>
  <line x1="270" y1="130" x2="290" y2="150" stroke="#334155" stroke-width="1.8"/>
  <line x1="290" y1="130" x2="270" y2="150" stroke="#334155" stroke-width="1.8"/>
  <text x="280" y="167" text-anchor="middle" font-size="11">L</text>
  <path d="M90 30 h26" stroke="#dc2626" stroke-width="2.2" marker-end="url(#ara)"/>
  <text x="103" y="20" font-size="11" fill="#dc2626">I</text>
  <text x="103" y="160" font-size="11" fill="#64748b">电流从"+"流入</text>
</svg>

## 实验要点

- 连接电路时开关断开；先估计电流再选量程，无法估计用大量程**试触**。
- 故障判断：指针反偏→正负接线柱接反；超最大刻度→量程选小；几乎不偏→量程选大或电路断路。

## 背记要点

1. 电流符号 $I$，单位安培（A）；1 A = 1000 mA，1 mA = 1000 μA。
2. 电流表串联接入，"+"进"−"出；不能超量程，不能直接接电源两极。
3. 两个量程：0~0.6 A（分度值 0.02 A）、0~3 A（分度值 0.1 A）；读数三步：看量程→看分度值→读示数。

## 自测题

1. 0.45 A 等于多少毫安？等于多少微安？
2. 用 0~3 A 量程测量，指针指在 0.6 A 刻度处；改用 0~0.6 A 量程时指针应指多少？

## 相关知识点

[[第2节 电流和电路]] [[第5节 串、并联电路中电流的规律]] [[第1节 电压]]
