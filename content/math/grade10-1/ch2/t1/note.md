---
title: 2.1 等式性质与不等式性质
date: 2026-08-07
---

# 2.1 等式性质与不等式性质

## 概念定义

**比较大小的基本事实**：$a-b>0\Leftrightarrow a>b$；$a-b=0\Leftrightarrow a=b$；$a-b<0\Leftrightarrow a<b$。

由此得到**作差比较法**：作差 → 变形（因式分解、配方）→ 定号 → 下结论。

## 知识梳理

不等式的基本性质（高考推理基础）：

| 性质 | 内容 | 注意 |
| --- | --- | --- |
| 对称性 | $a>b\Leftrightarrow b<a$ | 可逆 |
| 传递性 | $a>b,\ b>c\Rightarrow a>c$ | 单向 |
| 加法 | $a>b\Rightarrow a+c>b+c$ | 可逆 |
| 乘法 | $a>b,\ c>0\Rightarrow ac>bc$；$c<0\Rightarrow ac<bc$ | **变号** |
| 同向相加 | $a>b,\ c>d\Rightarrow a+c>b+d$ | 不可减 |
| 同向同正相乘 | $a>b>0,\ c>d>0\Rightarrow ac>bd$ | 需为正 |
| 乘方 | $a>b>0\Rightarrow a^n>b^n$ | $n\in\mathbb{N}^*$ |
| 倒数 | $a>b,\ ab>0\Rightarrow \dfrac1a<\dfrac1b$ | 同号才成立 |

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="120" x2="330" y2="120" stroke="#64748b" stroke-width="2"/>
  <polygon points="330,120 320,115 320,125" fill="#64748b"/>
  <circle cx="120" cy="120" r="5" fill="#dc2626"/>
  <circle cx="240" cy="120" r="5" fill="#2563eb"/>
  <text x="120" y="105" font-size="15" fill="#dc2626" text-anchor="middle">b</text>
  <text x="240" y="105" font-size="15" fill="#2563eb" text-anchor="middle">a</text>
  <path d="M 120 140 Q 180 175 240 140" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="180" y="192" font-size="13" fill="#64748b" text-anchor="middle">a - b &gt; 0 ⟺ a 在数轴上位于 b 右侧</text>
  <text x="340" y="138" font-size="13" fill="#64748b">x</text>
</svg>

## 典型例题

**例 1**：比较 $x^2+3$ 与 $3x$ 的大小。

**解**：作差 $x^2+3-3x=\left(x-\dfrac32\right)^2+\dfrac34\ge\dfrac34>0$，
所以对任意实数 $x$，都有 $x^2+3>3x$。

**例 2**：已知 $1<a<4$，$2<b<3$，求 $a-b$ 与 $\dfrac{a}{b}$ 的取值范围。

**解**：由 $2<b<3$ 得 $-3<-b<-2$，同向相加得 $-2<a-b<2$。
又 $\dfrac13<\dfrac1b<\dfrac12$，且 $a>0$，同向同正相乘得 $\dfrac13<\dfrac{a}{b}<2$。

## 易错点

- 不等式两边**乘负数要变向**，乘含参数的式子必须讨论符号。
- 同向不等式**只能相加不能相减**，只能相乘（同正）不能相除；求 $a-b$ 范围要转化为 $a+(-b)$。
- 倒数性质要求 $ab>0$：$a>b$ 不能直接得 $\dfrac1a<\dfrac1b$（如 $1>-1$）。
- 范围代换会放大区间：多次使用已知范围会导致范围不准，应整体代换。

## 背记要点

1. 作差法四步：作差、变形、定号、结论。
2. 乘除看符号，负数要变向。
3. 同向可加、同正可乘；异向不等式不能加。
4. 求范围先把目标写成已知量的"和"形式，再套加法性质。

## 自测题

1. 若 $a>b$，$c>d$，则下列一定成立的是：$a+c>b+d$ 还是 $a-c>b-d$？____
2. 比较大小：$(x+1)(x+3)$____$(x+2)^2$。
3. 已知 $-1<x<2$，$0<y<1$，则 $x-2y$ 的范围是____。
4. 若 $a<b<0$，则 $\dfrac1a$____$\dfrac1b$（填 $>$ 或 $<$）。

## 相关知识点

由不等式性质推出的重要结论见 [[2.2 基本不等式]]；解不等式方法见 [[2.3 二次函数与一元二次方程、不等式]]。
