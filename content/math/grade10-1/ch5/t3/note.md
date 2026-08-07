---
title: 5.3 诱导公式
date: 2026-08-07
---

# 5.3 诱导公式

## 概念定义

**诱导公式**利用单位圆的对称性，把任意角的三角函数化为锐角三角函数。共六组，对应终边关于坐标轴、原点、直线 $y=x$ 的对称。

统一记忆口诀："**奇变偶不变，符号看象限**"——对 $\dfrac{k\pi}{2}\pm\alpha$，$k$ 为奇数则函数名改变（正弦↔余弦），$k$ 为偶数不变；符号由**把 $\alpha$ 视为锐角时原角所在象限**决定。

## 知识梳理

终边对称关系（$\alpha$ 与 $\pi-\alpha$ 关于 $y$ 轴对称）：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="130" x2="330" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="15" x2="180" y2="228" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="180" cy="130" r="82" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="130" x2="245" y2="80" stroke="#dc2626" stroke-width="2"/>
  <line x1="180" y1="130" x2="115" y2="80" stroke="#2563eb" stroke-width="2"/>
  <circle cx="245" cy="80" r="4" fill="#dc2626"/>
  <circle cx="115" cy="80" r="4" fill="#2563eb"/>
  <line x1="115" y1="80" x2="245" y2="80" stroke="#64748b" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="252" y="72" font-size="13" fill="#dc2626">P(x,y) 角α</text>
  <text x="18" y="72" font-size="13" fill="#2563eb">P'(-x,y) 角π−α</text>
  <text x="322" y="148" font-size="13" fill="#64748b">x</text>
  <text x="190" y="26" font-size="13" fill="#64748b">y</text>
  <text x="180" y="242" font-size="12" fill="#64748b" text-anchor="middle">sin(π−α)=sinα，cos(π−α)=−cosα</text>
</svg>

| 角 | $\sin$ | $\cos$ | $\tan$ |
| --- | --- | --- | --- |
| $-\alpha$ | $-\sin\alpha$ | $\cos\alpha$ | $-\tan\alpha$ |
| $\pi-\alpha$ | $\sin\alpha$ | $-\cos\alpha$ | $-\tan\alpha$ |
| $\pi+\alpha$ | $-\sin\alpha$ | $-\cos\alpha$ | $\tan\alpha$ |
| $2\pi-\alpha$ | $-\sin\alpha$ | $\cos\alpha$ | $-\tan\alpha$ |
| $\dfrac\pi2-\alpha$ | $\cos\alpha$ | $\sin\alpha$ | — |
| $\dfrac\pi2+\alpha$ | $\cos\alpha$ | $-\sin\alpha$ | — |

## 典型例题

**例 1**：化简 $\dfrac{\sin(\pi+\alpha)\cos(\pi-\alpha)\tan(2\pi-\alpha)}{\sin\left(\dfrac{\pi}{2}+\alpha\right)\tan(-\alpha)}$。

**解**：原式 $=\dfrac{(-\sin\alpha)(-\cos\alpha)(-\tan\alpha)}{\cos\alpha\cdot(-\tan\alpha)}=\dfrac{-\sin\alpha\cos\alpha\tan\alpha}{-\cos\alpha\tan\alpha}=\sin\alpha$。

**例 2**：已知 $\sin\left(\dfrac{\pi}{3}-\alpha\right)=\dfrac13$，求 $\cos\left(\dfrac{\pi}{6}+\alpha\right)$。

**解**：注意到 $\dfrac{\pi}{6}+\alpha=\dfrac{\pi}{2}-\left(\dfrac{\pi}{3}-\alpha\right)$，
故 $\cos\left(\dfrac{\pi}{6}+\alpha\right)=\sin\left(\dfrac{\pi}{3}-\alpha\right)=\dfrac13$。

## 易错点

- "符号看象限"是把 $\alpha$ **看作锐角**后判断原角象限，而非 $\alpha$ 的真实象限。
- $\dfrac\pi2\pm\alpha$ 型函数名要**互换**（奇变），$\pi\pm\alpha$ 型不换（偶不变）。
- 化简时先处理负角与大角（去 $2k\pi$），再用公式，避免符号混乱。
- 互余配角技巧：观察两角之和是否为 $\dfrac\pi2$ 或 $\pi$，整体代换而不是硬解 $\alpha$。

## 背记要点

1. 口诀：奇变偶不变，符号看象限（$\alpha$ 视为锐角）。
2. 四组横轴型（$\pi\pm\alpha,\ -\alpha,\ 2\pi-\alpha$）只变符号不变名。
3. 两组纵轴型（$\dfrac\pi2\pm\alpha$）变名：$\sin\leftrightarrow\cos$。
4. 配角意识：$\dfrac\pi3-\alpha$ 与 $\dfrac\pi6+\alpha$ 互余，$\dfrac\pi4+\alpha$ 与 $\dfrac{3\pi}4-\alpha$ 互补。

## 自测题

1. $\sin 150^\circ=$____，$\cos\dfrac{4\pi}{3}=$____。
2. $\tan(-\dfrac{\pi}{6})=$____。
3. 化简：$\cos\left(\dfrac{\pi}{2}+\alpha\right)+\sin(\pi-\alpha)=$____。
4. 已知 $\cos\left(\dfrac{\pi}{4}+\alpha\right)=\dfrac35$，则 $\sin\left(\dfrac{\pi}{4}-\alpha\right)=$____。

## 相关知识点

单位圆定义与符号见 [[5.2 三角函数的概念]]；化简后研究图象见 [[5.4 三角函数的图象与性质]]；更一般的恒等变换见 [[5.5 三角恒等变换]]。
