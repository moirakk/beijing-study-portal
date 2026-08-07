---
title: 7.2 复数的四则运算
date: 2026-08-07
---

# 7.2 复数的四则运算

## 概念定义

设 $z_1=a+bi$，$z_2=c+di$（$a,b,c,d\in\mathbb{R}$）：
**加减法**：$z_1\pm z_2=(a\pm c)+(b\pm d)i$（实部、虚部分别加减）。
**乘法**：$z_1z_2=(ac-bd)+(ad+bc)i$（按多项式展开，用 $i^2=-1$ 化简）。
**除法**：$\dfrac{z_1}{z_2}=\dfrac{(a+bi)(c-di)}{(c+di)(c-di)}=\dfrac{ac+bd}{c^2+d^2}+\dfrac{bc-ad}{c^2+d^2}i$（分母**实数化**：分子分母同乘分母的共轭）。

## 知识梳理

| 内容 | 结论 |
| --- | --- |
| $i$ 的幂周期 | $i^1=i,\ i^2=-1,\ i^3=-i,\ i^4=1$，周期为 4：$i^{4k+r}=i^r$ |
| 模的性质 | $|z_1z_2|=|z_1||z_2|$，$\left|\dfrac{z_1}{z_2}\right|=\dfrac{|z_1|}{|z_2|}$ |
| 共轭性质 | $\overline{z_1\pm z_2}=\bar{z_1}\pm\bar{z_2}$，$\overline{z_1z_2}=\bar{z_1}\bar{z_2}$，$z\bar z=|z|^2$ |
| 常用结果 | $(1+i)^2=2i$，$(1-i)^2=-2i$，$\dfrac{1+i}{1-i}=i$，$\dfrac{1-i}{1+i}=-i$ |
| 几何意义 | 加减法对应向量 $\overrightarrow{OZ_1}\pm\overrightarrow{OZ_2}$（平行四边形/三角形法则） |

**实系数一元二次方程**：$\Delta<0$ 时 $ax^2+bx+c=0$ 有共轭虚根 $x=\dfrac{-b\pm\sqrt{-\Delta}\,i}{2a}$，仍满足韦达定理。

## 重点精讲：加法的向量意义

<svg viewBox="0 0 360 200" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="m72b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="m72r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <line x1="20" y1="150" x2="345" y2="150" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="60" y1="195" x2="60" y2="15" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="60" y1="150" x2="200" y2="110" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m72b)"/>
  <text x="140" y="145" font-size="12" fill="#2563eb">z₁</text>
  <line x1="60" y1="150" x2="130" y2="55" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m72b)"/>
  <text x="76" y="90" font-size="12" fill="#2563eb">z₂</text>
  <line x1="200" y1="110" x2="270" y2="18" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="130" y1="55" x2="270" y2="18" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="60" y1="150" x2="270" y2="18" stroke="#dc2626" stroke-width="2.5" marker-end="url(#m72r)"/>
  <text x="175" y="60" font-size="13" fill="#dc2626">z₁＋z₂</text>
  <text x="46" y="166" font-size="12" fill="#334155">O</text>
  <text x="225" y="170" font-size="11" fill="#64748b">复数加法＝对应向量加法（平行四边形法则）</text>
</svg>

## 典型例题

**例 1**：计算 $\dfrac{3+4i}{1-2i}$。

**解**：分子分母同乘 $1+2i$：
$$\dfrac{(3+4i)(1+2i)}{(1-2i)(1+2i)}=\dfrac{3+6i+4i+8i^2}{1+4}=\dfrac{-5+10i}{5}=-1+2i.$$

**例 2**：已知 $z(1+i)=2i$，求 $z$、$\bar z$ 及 $|z|$。

**解**：$z=\dfrac{2i}{1+i}=\dfrac{2i(1-i)}{(1+i)(1-i)}=\dfrac{2i+2}{2}=1+i$。
故 $\bar z=1-i$，$|z|=\sqrt{1^2+1^2}=\sqrt2$。

## 易错点

- 除法必须**分母实数化**（乘分母共轭），不能只对分子操作。
- 展开乘法后勿忘 $i^2=-1$ 带来的符号变化。
- $i$ 的高次幂先对 4 取余：如 $i^{2023}=i^{4\times505+3}=-i$。
- $|z|^2=z\bar z$ 而非 $z^2$：对虚数 $z$，$z^2\ne|z|^2$。
- 虚根成对（共轭）出现的前提是**实系数**方程。

## 背记要点

1. 加减：实虚部分别运算；乘法：展开＋$i^2=-1$；除法：分母实数化。
2. $i$ 幂按 4 循环；$(1\pm i)^2=\pm2i$；$\dfrac{1+i}{1-i}=i$。
3. 模可乘除拆分：$|z_1z_2|=|z_1||z_2|$。
4. 高考视角：复数运算小题必考，典型形式"$z(1+i)=\cdots$ 求 $\bar z$ 或对应点象限"，先解出 $z$ 再作答，两分钟内拿下。

## 自测题

1. $(1+i)(2-i)=$____。
2. $\dfrac{1}{i}=$____。
3. $i+i^2+i^3+i^4=$____。
4. 方程 $x^2+2x+5=0$ 的两根为____。

## 相关知识点

概念与模见 [[7.1 复数的概念]]；乘除的几何意义（旋转伸缩）见 [[7.3 复数的三角表示]]。
