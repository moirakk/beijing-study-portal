# 第4节 欧姆定律在串、并联电路中的应用

## 核心概念表

| 电路 | 电流关系 | 电压关系 | 总电阻 |
|---|---|---|---|
| 串联 | $I=I_1=I_2$ | $U=U_1+U_2$ | $R=R_1+R_2$ |
| 并联 | $I=I_1+I_2$ | $U=U_1=U_2$ | $\dfrac{1}{R}=\dfrac{1}{R_1}+\dfrac{1}{R_2}$ |

## 知识梳理

**串联总电阻**：$R=R_1+R_2$，相当于**增大**导体长度，总电阻比任何分电阻都**大**。

**并联总电阻**：$\dfrac{1}{R}=\dfrac{1}{R_1}+\dfrac{1}{R_2}\Rightarrow R=\dfrac{R_1R_2}{R_1+R_2}$，相当于**增大**横截面积，总电阻比任何分电阻都**小**；$n$ 个 $R_0$ 并联为 $\dfrac{R_0}{n}$。

**分压与分流**：串联分压与电阻成正比 $\dfrac{U_1}{U_2}=\dfrac{R_1}{R_2}$；并联分流与电阻成反比 $\dfrac{I_1}{I_2}=\dfrac{R_2}{R_1}$。

## 电路图

**串联（等效增长）与并联（等效加粗）**：

<svg viewBox="0 0 620 200" width="620" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <g>
    <line x1="30" y1="70" x2="80" y2="70" stroke="#334155" stroke-width="2"/>
    <rect x="80" y="60" width="60" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
    <text x="110" y="52" text-anchor="middle" font-size="11">R₁</text>
    <line x1="140" y1="70" x2="170" y2="70" stroke="#334155" stroke-width="2"/>
    <rect x="170" y="60" width="60" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
    <text x="200" y="52" text-anchor="middle" font-size="11">R₂</text>
    <line x1="230" y1="70" x2="280" y2="70" stroke="#334155" stroke-width="2"/>
    <text x="155" y="110" text-anchor="middle" font-size="12" fill="#334155">R = R₁ + R₂</text>
    <text x="155" y="130" text-anchor="middle" font-size="11" fill="#64748b">（比最大的分电阻还大）</text>
  </g>
  <g>
    <line x1="370" y1="70" x2="420" y2="70" stroke="#334155" stroke-width="2"/>
    <line x1="420" y1="40" x2="420" y2="100" stroke="#334155" stroke-width="2"/>
    <line x1="420" y1="40" x2="450" y2="40" stroke="#334155" stroke-width="2"/>
    <rect x="450" y="30" width="60" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
    <text x="480" y="24" text-anchor="middle" font-size="11">R₁</text>
    <line x1="510" y1="40" x2="540" y2="40" stroke="#334155" stroke-width="2"/>
    <line x1="420" y1="100" x2="450" y2="100" stroke="#334155" stroke-width="2"/>
    <rect x="450" y="90" width="60" height="20" fill="#fff" stroke="#334155" stroke-width="2"/>
    <text x="480" y="126" text-anchor="middle" font-size="11">R₂</text>
    <line x1="510" y1="100" x2="540" y2="100" stroke="#334155" stroke-width="2"/>
    <line x1="540" y1="40" x2="540" y2="100" stroke="#334155" stroke-width="2"/>
    <line x1="540" y1="70" x2="590" y2="70" stroke="#334155" stroke-width="2"/>
    <circle cx="420" cy="70" r="3.5" fill="#334155"/><circle cx="540" cy="70" r="3.5" fill="#334155"/>
    <text x="480" y="155" text-anchor="middle" font-size="12" fill="#334155">R = R₁R₂/(R₁+R₂)</text>
    <text x="480" y="175" text-anchor="middle" font-size="11" fill="#64748b">（比最小的分电阻还小）</text>
  </g>
</svg>

**动态电路分析思路**（滑片移动类问题）：

```mermaid
flowchart LR
  A[滑片移动] --> B[判断变阻器接入电阻变化] --> C["总电阻 R总 变化"] --> D["I = U/R总 判断电流变化"] --> E["U定 = I·R定 判断定值电阻电压"] --> F["U滑 = U − U定 反向变化"]
```

## 典型例题思路

- 串联例：$R_1=10\ \Omega$、$R_2=20\ \Omega$ 接 6 V：$R=30\ \Omega$，$I=0.2\ \text{A}$，$U_1=2\ \text{V}$，$U_2=4\ \text{V}$。
- 并联例：同样两电阻接 6 V：$I_1=0.6\ \text{A}$，$I_2=0.3\ \text{A}$，干路 $I=0.9\ \text{A}$，$R\approx6.7\ \Omega$。
- 动态电路：滑片移动→$R_{\text{总}}$ 变→$I=\dfrac{U}{R_{\text{总}}}$ 判断电流→$U=IR$ 判断各部分电压；串联中定值电阻电压与电流同增同减，变阻器电压相反变化。

## 背记要点

1. 串联 $R=R_1+R_2$，越串越大（比最大的还大，等效增长导体）；并联倒数和的倒数，越并越小（比最小的还小，等效加粗导体），$n$ 个相同电阻并联为 $R_0/n$。
2. 串联分压与电阻成正比；并联分流与电阻成反比。
3. 解题步骤：画电路图→判断连接方式→写出已知量→选公式（注意同体性）；动态电路先判断 $R_{\text{总}}$ 变化，再依次分析 $I$、$U$。

## 自测题

1. 5 Ω 和 20 Ω 的电阻串联后总电阻多大？并联后呢？
2. 电源电压不变，滑动变阻器滑片右移使阻值增大，串联电路中电流表和定值电阻两端电压表的示数如何变化？

## 相关知识点

[[第2节 欧姆定律]] [[第5节 串、并联电路中电流的规律]] [[第2节 串、并联电路中电压的规律]] [[第3节 串联和并联]]
