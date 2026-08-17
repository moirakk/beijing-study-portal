---
title: 18.4 整数指数幂
date: 2026-08-06
---

# 18.4 整数指数幂

## 负整数指数幂

一般地，当 $n$ 是正整数时：
$$a^{-n}=\frac{1}{a^n}\quad(a\neq0)$$

这样，指数的取值范围就从正整数推广到了全体整数。

<svg width="420" height="160" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 420 160">
  <!-- 标题 -->
  <text x="210" y="20" font-size="14" fill="#7b1fa2" font-weight="bold" text-anchor="middle">整数指数幂：指数范围扩展</text>
  <!-- 数轴 -->
  <line x1="20" y1="80" x2="400" y2="80" stroke="#424242" stroke-width="2"/>
  <polygon points="400,80 392,76 392,84" fill="#424242"/>
  <!-- 刻度 -->
  <line x1="80" y1="74" x2="80" y2="86" stroke="#424242" stroke-width="1.5"/>
  <line x1="140" y1="74" x2="140" y2="86" stroke="#424242" stroke-width="1.5"/>
  <line x1="200" y1="74" x2="200" y2="86" stroke="#424242" stroke-width="1.5"/>
  <line x1="260" y1="74" x2="260" y2="86" stroke="#424242" stroke-width="1.5"/>
  <line x1="320" y1="74" x2="320" y2="86" stroke="#424242" stroke-width="1.5"/>
  <line x1="380" y1="74" x2="380" y2="86" stroke="#424242" stroke-width="1.5"/>
  <!-- 刻度标注 -->
  <text x="80" y="100" font-size="13" fill="#9c27b0" text-anchor="middle">-3</text>
  <text x="140" y="100" font-size="13" fill="#9c27b0" text-anchor="middle">-2</text>
  <text x="200" y="100" font-size="13" fill="#9c27b0" text-anchor="middle">-1</text>
  <text x="260" y="100" font-size="13" fill="#424242" text-anchor="middle">0</text>
  <text x="320" y="100" font-size="13" fill="#7b1fa2" text-anchor="middle">1</text>
  <text x="380" y="100" font-size="13" fill="#7b1fa2" text-anchor="middle">2</text>
  <!-- 对应幂值 -->
  <text x="80" y="60" font-size="12" fill="#9c27b0" text-anchor="middle">a⁻³=1/a³</text>
  <text x="140" y="60" font-size="12" fill="#9c27b0" text-anchor="middle">a⁻²=1/a²</text>
  <text x="200" y="60" font-size="12" fill="#9c27b0" text-anchor="middle">a⁻¹=1/a</text>
  <text x="260" y="60" font-size="12" fill="#424242" text-anchor="middle">a⁰=1</text>
  <text x="320" y="60" font-size="12" fill="#7b1fa2" text-anchor="middle">a¹=a</text>
  <text x="380" y="60" font-size="12" fill="#7b1fa2" text-anchor="middle">a²</text>
  <!-- 区域标注 -->
  <rect x="20" y="108" width="230" height="22" rx="4" fill="#e1bee7" opacity="0.7"/>
  <text x="135" y="123" font-size="11" fill="#9c27b0" text-anchor="middle">负整数指数幂（新扩展）</text>
  <rect x="250" y="108" width="140" height="22" rx="4" fill="#7b1fa2" opacity="0.2"/>
  <text x="320" y="123" font-size="11" fill="#7b1fa2" text-anchor="middle">正整数指数幂（原有）</text>
  <text x="210" y="148" font-size="12" fill="#424242" text-anchor="middle">运算法则对整数指数均成立（a≠0）</text>
</svg>

## 整数指数幂的运算性质

1. $a^m\cdot a^n=a^{m+n}$
2. $(a^m)^n=a^{mn}$
3. $(ab)^n=a^nb^n$
4. $a^m\div a^n=a^{m-n}$
5. $\left(\dfrac{a}{b}\right)^n=\dfrac{a^n}{b^n}$

以上性质中，$a\neq0$，$b\neq0$，$m$、$n$ 为整数。

## 科学记数法

利用负整数指数幂，可以把绝对值小于 $1$ 的数用科学记数法表示：
$$0.0003=3\times10^{-4}$$

## 例题解析

**例**：计算 $a^{-2}\cdot a^5$。

$$a^{-2}\cdot a^5=a^{-2+5}=a^3$$

**例**：将 $0.000025$ 用科学记数法表示。

$$0.000025=2.5\times10^{-5}$$

## 易错点

- $a^{-n}$ 不是负数，而是 $\dfrac{1}{a^n}$。
- 科学记数法中，$10$ 的指数由小数点移动的位数决定。
- 运算结果中一般不含负指数，要化为正指数形式。
- 注意区分 $-a^n$ 与 $(-a)^n$ 的运算顺序。

## 自测题

1. $a^{-3}=$____。
2. $2^{-2}=$____。
3. $a^2\cdot a^{-5}=$____。
4. $(a^{-2})^3=$____。
5. $0.0045$ 用科学记数法表示为____。

相关知识点：[[16.1 幂的运算]]、[[18.1 分式及其基本性质]]、[[18.5 分式方程]]
