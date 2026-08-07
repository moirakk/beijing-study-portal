---
title: 7.3 复数的三角表示
date: 2026-08-07
---

# 7.3 复数的三角表示

## 概念定义

**三角形式**：非零复数 $z=a+bi$ 可写成
$$z=r(\cos\theta+i\sin\theta)$$
其中 $r=|z|=\sqrt{a^2+b^2}$ 为模，$\theta$ 为**辐角**（以 $x$ 正半轴为始边、$\overrightarrow{OZ}$ 为终边的角）。
**辐角主值**：$\theta\in[0,2\pi)$ 内的辐角，记作 $\arg z$，非零复数的主值唯一。
互化关系：$a=r\cos\theta$，$b=r\sin\theta$，$\tan\theta=\dfrac{b}{a}$（结合象限定 $\theta$）。

## 知识梳理

设 $z_1=r_1(\cos\theta_1+i\sin\theta_1)$，$z_2=r_2(\cos\theta_2+i\sin\theta_2)$：

| 运算 | 公式 | 几何意义 |
| --- | --- | --- |
| 乘法 | $z_1z_2=r_1r_2[\cos(\theta_1+\theta_2)+i\sin(\theta_1+\theta_2)]$ | 模相乘、辐角**相加**：伸缩＋逆时针旋转 |
| 除法 | $\dfrac{z_1}{z_2}=\dfrac{r_1}{r_2}[\cos(\theta_1-\theta_2)+i\sin(\theta_1-\theta_2)]$ | 模相除、辐角**相减** |

**常见复数的三角形式**：$1=\cos0+i\sin0$；$i=\cos\dfrac{\pi}{2}+i\sin\dfrac{\pi}{2}$；$-1=\cos\pi+i\sin\pi$；$1+i=\sqrt2\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)$。
乘 $i$ 相当于把向量**逆时针旋转 $90°$**（模不变）。

## 重点精讲：模与辐角

<svg viewBox="0 0 360 210" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="m73b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="m73g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#64748b"/></marker></defs>
  <line x1="25" y1="150" x2="345" y2="150" stroke="#64748b" stroke-width="1.5" marker-end="url(#m73g)"/>
  <line x1="80" y1="200" x2="80" y2="15" stroke="#64748b" stroke-width="1.5" marker-end="url(#m73g)"/>
  <line x1="80" y1="150" x2="260" y2="55" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m73b)"/>
  <circle cx="260" cy="55" r="3" fill="#dc2626"/>
  <text x="268" y="52" font-size="13" fill="#dc2626">Z(a, b)</text>
  <text x="150" y="90" font-size="12" fill="#2563eb">r＝|z|</text>
  <path d="M 130 150 A 50 50 0 0 0 124 127" fill="none" stroke="#16a34a" stroke-width="1.8"/>
  <text x="138" y="140" font-size="13" fill="#16a34a">θ＝arg z</text>
  <line x1="260" y1="55" x2="260" y2="150" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="266" y="110" font-size="11" fill="#f59e0b">b＝r sinθ</text>
  <text x="150" y="168" font-size="11" fill="#f59e0b">a＝r cosθ</text>
  <text x="66" y="168" font-size="12" fill="#334155">O</text>
  <text x="330" y="168" font-size="12" fill="#64748b">x</text>
</svg>

代数形式便于**加减**，三角形式便于**乘除（与旋转）**——按需选形式。

## 典型例题

**例 1**：把 $z=-1+\sqrt3 i$ 化为三角形式。

**解**：$r=\sqrt{(-1)^2+(\sqrt3)^2}=2$；点 $(-1,\sqrt3)$ 在第二象限，$\cos\theta=-\dfrac12$，$\sin\theta=\dfrac{\sqrt3}{2}$，故 $\arg z=\dfrac{2\pi}{3}$。
$$z=2\left(\cos\dfrac{2\pi}{3}+i\sin\dfrac{2\pi}{3}\right).$$

**例 2**：计算 $z=4\left(\cos\dfrac{\pi}{3}+i\sin\dfrac{\pi}{3}\right)\times2\left(\cos\dfrac{\pi}{6}+i\sin\dfrac{\pi}{6}\right)$。

**解**：模相乘 $4\times2=8$，辐角相加 $\dfrac{\pi}{3}+\dfrac{\pi}{6}=\dfrac{\pi}{2}$：
$$z=8\left(\cos\dfrac{\pi}{2}+i\sin\dfrac{\pi}{2}\right)=8i.$$

## 易错点

- 三角形式要求：$r\ge0$、中间为"＋"号、$\cos$ 与 $\sin$ 的角**相同**。如 $r(\cos\theta-i\sin\theta)$ 不是标准形式，应化为 $r[\cos(-\theta)+i\sin(-\theta)]$。
- 由 $\tan\theta=\dfrac{b}{a}$ 定辐角必须**结合点所在象限**，否则可能差 $\pi$。
- 辐角有无穷多个（相差 $2k\pi$），主值范围是 $[0,2\pi)$。
- 乘法是辐角**相加**不是相乘。

## 背记要点

1. $z=r(\cos\theta+i\sin\theta)$，$r=\sqrt{a^2+b^2}$，$\arg z\in[0,2\pi)$。
2. 乘：模乘、角加；除：模除、角减。
3. 乘 $i$ ＝ 逆时针旋转 $90°$；乘 $\cos\theta+i\sin\theta$ ＝ 旋转 $\theta$。
4. 高考视角：三角表示为选学拓展内容，考查以化标准形式、利用"旋转"理解乘法几何意义为主，理解即可，不必深挖。

## 自测题

1. $z=1-i$ 的三角形式为____。
2. $\arg(-2i)=$____。
3. $2\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)\div\left(\cos\dfrac{\pi}{4}+i\sin\dfrac{\pi}{4}\right)=$____。
4. 判断：$3\left(\cos\dfrac{\pi}{6}-i\sin\dfrac{\pi}{6}\right)$ 是复数的三角形式。（　）

## 相关知识点

复数概念与复平面见 [[7.1 复数的概念]]；代数运算见 [[7.2 复数的四则运算]]。
