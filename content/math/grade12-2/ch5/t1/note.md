---
title: 专题五 导数及其应用
date: 2026-08-10
---

# 专题五 导数及其应用

## 概念定义

**导数**：函数 $y = f(x)$ 在点 $x_0$ 处的导数 $f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}$，其几何意义是曲线在点 $(x_0, f(x_0))$ 处切线的斜率。

**基本求导公式**：$(x^n)' = nx^{n-1}$，$(\sin x)' = \cos x$，$(\cos x)' = -\sin x$，$(e^x)' = e^x$，$(\ln x)' = \frac{1}{x}$，$(a^x)' = a^x \ln a$。

**求导法则**：$(u \pm v)' = u' \pm v'$，$(uv)' = u'v + uv'$，$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$，复合函数 $[f(g(x))]' = f'(g(x)) \cdot g'(x)$。

**单调性与极值**：$f'(x) > 0$ 时 $f(x)$ 单调递增，$f'(x) < 0$ 时单调递减；$f'(x_0) = 0$ 且两侧符号改变时 $x_0$ 为极值点。

## 知识梳理

| 应用 | 方法 | 关键点 |
| --- | --- | --- |
| 切线方程 | $y - f(x_0) = f'(x_0)(x - x_0)$ | 斜率即导数 |
| 单调性 | 解 $f'(x)>0$ 或 $<0$ | 注意定义域 |
| 极值 | $f'(x)=0$ 且变号 | 极大/极小值 |
| 最值 | 比较极值与端点值 | 闭区间上 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s5a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="120" y="15" width="120" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">导数</text>
  <line x1="150" y1="45" x2="70" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s5a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s5a)"/>
  <line x1="210" y1="45" x2="290" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s5a)"/>
  <rect x="20" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="70" y="91" font-size="11" fill="#fff" text-anchor="middle">切线斜率</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">单调性</text>
  <rect x="240" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="290" y="91" font-size="11" fill="#fff" text-anchor="middle">极值/最值</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">求导法则</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">四则运算</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">复合函数</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">基本公式</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">f'(x)>0 增，f'(x)<0 减</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">极值点处 f'(x)=0 且变号</text>
</svg>

## 典型例题

**例 1**：求曲线 $y = x^2$ 在点 $(1, 1)$ 处的切线方程。

**解**：$y' = 2x$，在 $x = 1$ 处斜率 $k = 2$。切线方程为 $y - 1 = 2(x - 1)$，即 $y = 2x - 1$。

**例 2**：求函数 $f(x) = x^3 - 3x$ 的单调区间和极值。

**解**：$f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$。令 $f'(x) = 0$ 得 $x = \pm 1$。当 $x < -1$ 或 $x > 1$ 时 $f'(x) > 0$ 递增；当 $-1 < x < 1$ 时 $f'(x) < 0$ 递减。故极大值 $f(-1) = 2$，极小值 $f(1) = -2$。

## 易错点

- 求导公式记错，如 $(\ln x)'$ 误写成 $\frac{1}{x}$ 之外的形式。
- 复合函数求导**漏乘内层导数**。
- 极值点处 $f'(x) = 0$ 是**必要不充分**条件，还需两侧变号。
- 求最值时**漏比较端点值**。
- 切线问题中"过某点"与"在某点处"的切线含义不同。

## 背记要点

1. $(x^n)' = nx^{n-1}$，$(e^x)' = e^x$，$(\ln x)' = \frac{1}{x}$。
2. $(uv)' = u'v + uv'$，$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$。
3. 切线方程：$y - f(x_0) = f'(x_0)(x - x_0)$。
4. $f'(x) > 0$ 增，$f'(x) < 0$ 减。
5. 极值点：$f'(x_0) = 0$ 且两侧符号相反。

## 自测题

1. 求 $f(x) = x^3$ 的导数：____。
2. 求 $f(x) = \sin x$ 的导数：____。
3. 曲线 $y = x^2$ 在 $x = 2$ 处的切线斜率是____。
4. 函数 $f(x) = x^2 - 2x$ 的极小值是____。
5. 求 $f(x) = e^x \cdot x$ 的导数：____。

## 相关知识点

导数综合应用见 [[专题六 导数综合]]；导数研究函数零点见 [[专题四 函数的零点与方程]]；与不等式证明结合见 [[专题十二 不等式]]。
