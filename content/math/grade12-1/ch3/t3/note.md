---
title: 8.3 列联表与独立性检验
date: 2026-08-10
---

# 8.3 列联表与独立性检验

## 概念定义

**列联表**：用于研究两个分类变量之间关系的表格。$2 \times 2$ 列联表如下：

|  | $B$ | $\bar{B}$ | 合计 |
| --- | --- | --- | --- |
| $A$ | $a$ | $b$ | $a+b$ |
| $\bar{A}$ | $c$ | $d$ | $c+d$ |
| 合计 | $a+c$ | $b+d$ | $n$ |

**独立性检验**：通过计算统计量 $\chi^2$ 判断两个分类变量是否有关。公式
$$
\chi^2 = \dfrac{n(ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)}
$$
其中 $n = a+b+c+d$。

**临界值**：当 $\chi^2 \ge 6.635$ 时，有 99% 的把握认为两变量有关；$\chi^2 \ge 3.841$ 时有 95% 的把握有关。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 列联表 | 2×2 表记录分类变量频数 |
| 统计量 | $\chi^2 = \dfrac{n(ad-bc)^2}{(a+b)(c+d)(a+c)(b+d)}$ |
| 临界值 | 3.841（95%）、6.635（99%） |
| 结论 | $\chi^2$ 越大越有把握认为有关 |
| 注意 | 独立性检验是"有关"不是"因果" |

## 列联表示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <rect x="40" y="30" width="280" height="150" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="40" y1="80" x2="320" y2="80" stroke="#2563eb" stroke-width="2"/>
  <line x1="40" y1="130" x2="320" y2="130" stroke="#2563eb" stroke-width="2"/>
  <line x1="130" y1="30" x2="130" y2="180" stroke="#2563eb" stroke-width="2"/>
  <line x1="220" y1="30" x2="220" y2="180" stroke="#2563eb" stroke-width="2"/>
  <text x="85" y="55" font-size="12" fill="#334155" text-anchor="middle">B</text>
  <text x="175" y="55" font-size="12" fill="#334155" text-anchor="middle">B̄</text>
  <text x="270" y="55" font-size="12" fill="#334155" text-anchor="middle">合计</text>
  <text x="85" y="105" font-size="12" fill="#334155" text-anchor="middle">a</text>
  <text x="175" y="105" font-size="12" fill="#334155" text-anchor="middle">b</text>
  <text x="270" y="105" font-size="12" fill="#334155" text-anchor="middle">a+b</text>
  <text x="85" y="155" font-size="12" fill="#334155" text-anchor="middle">c</text>
  <text x="175" y="155" font-size="12" fill="#334155" text-anchor="middle">d</text>
  <text x="270" y="155" font-size="12" fill="#334155" text-anchor="middle">c+d</text>
  <text x="20" y="105" font-size="12" fill="#334155" text-anchor="middle">A</text>
  <text x="20" y="155" font-size="12" fill="#334155" text-anchor="middle">Ā</text>
  <text x="180" y="210" font-size="12" fill="#dc2626" text-anchor="middle">χ² = n(ad-bc)² / [(a+b)(c+d)(a+c)(b+d)]</text>
</svg>

## 典型例题

**例 1**：某调查得列联表：$a=30$，$b=10$，$c=20$，$d=40$，$n=100$。计算 $\chi^2$ 并判断是否有 95% 把握认为有关。

**解**：$\chi^2 = \dfrac{100(30 \times 40 - 10 \times 20)^2}{(30+10)(20+40)(30+20)(10+40)} = \dfrac{100(1200-200)^2}{40 \times 60 \times 50 \times 50} = \dfrac{100 \times 10^6}{6 \times 10^6} \approx 16.67$。因 $16.67 > 6.635$，有 99% 把握认为有关。

**例 2**：若 $\chi^2 = 2.5$，能否认为两变量有关？

**解**：$2.5 < 3.841$，没有 95% 的把握认为两变量有关，即不能认为有关。

## 易错点

- $\chi^2$ 公式中 $n = a+b+c+d$ 是总样本量。
- 判断标准：$\chi^2 \ge 3.841$（95%）、$\ge 6.635$（99%）。
- 独立性检验只能说明"有关"，不能说明"因果"。
- 列联表中 $a,b,c,d$ 的位置不能放错。

## 背记要点

1. $\chi^2 = \dfrac{n(ad-bc)^2}{(a+b)(c+d)(a+c)(b+d)}$。
2. 临界值 3.841（95%）、6.635（99%）。
3. $\chi^2$ 越大，越有把握认为两变量有关。
4. 独立性检验不说明因果关系。

## 自测题

1. 独立性检验中 $\chi^2 \ge 6.635$ 说明有____%把握认为有关。
2. 列联表中 $n$ 表示什么？
3. 若 $\chi^2 = 4.5$，能否认为两变量有关（95%水平）？
4. 判断：独立性检验能证明两变量的因果关系。（　）

## 相关知识点

独立性检验用于分类变量，相关分析用于数值变量，见 [[8.1 成对数据的统计相关性]] 和 [[8.2 一元线性回归模型及其应用]]。
