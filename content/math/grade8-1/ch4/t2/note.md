---
title: 16.2 整式的乘法
date: 2026-08-06
---

# 16.2 整式的乘法

## 单项式乘单项式

单项式与单项式相乘，把它们的系数、同底数幂分别相乘，对于只在一个单项式里含有的字母，则连同它的指数作为积的一个因式。

例如：
$$3a^2b\cdot(-2ab^3)=-6a^3b^4$$

<svg width="400" height="180" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 400 180">
  <!-- 标题 -->
  <text x="200" y="22" font-size="14" fill="#7b1fa2" font-weight="bold" text-anchor="middle">整式乘法示意：(a+b)(m+n) 展开</text>
  <!-- 矩形面积模型 -->
  <!-- 大矩形 -->
  <rect x="60" y="40" width="280" height="110" fill="none" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 分割线（竖） -->
  <line x1="200" y1="40" x2="200" y2="150" stroke="#9c27b0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- 分割线（横） -->
  <line x1="60" y1="95" x2="340" y2="95" stroke="#9c27b0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- 四个子矩形填色 -->
  <rect x="60" y="40" width="140" height="55" fill="#e1bee7" opacity="0.7"/>
  <rect x="200" y="40" width="140" height="55" fill="#ce93d8" opacity="0.5"/>
  <rect x="60" y="95" width="140" height="55" fill="#ce93d8" opacity="0.5"/>
  <rect x="200" y="95" width="140" height="55" fill="#e1bee7" opacity="0.7"/>
  <!-- 标注 -->
  <text x="130" y="72" font-size="15" fill="#7b1fa2" font-weight="bold" text-anchor="middle">am</text>
  <text x="270" y="72" font-size="15" fill="#7b1fa2" font-weight="bold" text-anchor="middle">an</text>
  <text x="130" y="127" font-size="15" fill="#7b1fa2" font-weight="bold" text-anchor="middle">bm</text>
  <text x="270" y="127" font-size="15" fill="#7b1fa2" font-weight="bold" text-anchor="middle">bn</text>
  <!-- 边标注 -->
  <text x="130" y="36" font-size="13" fill="#424242" text-anchor="middle">a</text>
  <text x="270" y="36" font-size="13" fill="#424242" text-anchor="middle">b</text>
  <text x="48" y="72" font-size="13" fill="#424242" text-anchor="middle">m</text>
  <text x="48" y="127" font-size="13" fill="#424242" text-anchor="middle">n</text>
  <!-- 公式 -->
  <text x="200" y="170" font-size="13" fill="#9c27b0" text-anchor="middle" font-weight="bold">(a+b)(m+n) = am + an + bm + bn</text>
</svg>

## 单项式乘多项式

单项式与多项式相乘，就是用单项式去乘多项式的每一项，再把所得的积相加。
$$m(a+b+c)=ma+mb+mc$$

## 多项式乘多项式

多项式与多项式相乘，先用一个多项式的每一项乘另一个多项式的每一项，再把所得的积相加。
$$(a+b)(m+n)=am+an+bm+bn$$

## 例题解析

**例**：计算 $(2x+3)(x-4)$。

$$(2x+3)(x-4)=2x\cdot x+2x\cdot(-4)+3\cdot x+3\cdot(-4)$$
$$=2x^2-8x+3x-12=2x^2-5x-12$$

**例**：计算 $x(2x-1)-2(x+3)$。

$$x(2x-1)-2(x+3)=2x^2-x-2x-6=2x^2-3x-6$$

## 易错点

- 单项式乘多项式时，不要漏乘任何一项。
- 多项式乘多项式时，注意符号变化。
- 合并同类项时要仔细，不要漏项。

## 多项式乘法技巧

- 计算前先观察能否用乘法公式简化。
- 多项式乘多项式时，按顺序相乘，避免漏项。
- 结果要合并同类项，并按降幂排列。

## 自测题

1. $2a\cdot 3a^2=$____。
2. $3x(2x-1)=$____。
3. $(x+2)(x-3)=$____。
4. $(2a-b)(a+3b)=$____。
5. 计算 $(x+1)(x-1)$ 的结果是____。

相关知识点：[[16.1 幂的运算]]、[[16.3 乘法公式]]、[[17.1 用提公因式法分解因式]]
