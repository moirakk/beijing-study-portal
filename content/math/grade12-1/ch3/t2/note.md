---
title: 8.2 一元线性回归模型及其应用
date: 2026-08-10
---

# 8.2 一元线性回归模型及其应用

## 概念定义

**回归直线方程**：设 $y$ 与 $x$ 具有线性相关关系，则回归直线方程为 $\hat{y} = \hat{b}x + \hat{a}$，其中
$$
\hat{b} = \dfrac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2}, \qquad \hat{a} = \bar{y} - \hat{b}\bar{x}
$$
回归直线**必过样本中心点** $(\bar{x}, \bar{y})$。

**残差**：$e_i = y_i - \hat{y}_i$，残差平方和 $Q = \sum e_i^2$ 越小，拟合效果越好。

**决定系数**：$R^2 = 1 - \dfrac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$，$R^2$ 越接近 1，拟合效果越好。

## 知识梳理

| 项目 | 公式/内容 |
| --- | --- |
| 回归方程 | $\hat{y} = \hat{b}x + \hat{a}$ |
| 斜率 | $\hat{b} = \dfrac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sum (x_i-\bar{x})^2}$ |
| 截距 | $\hat{a} = \bar{y} - \hat{b}\bar{x}$ |
| 过点 | 必过 $(\bar{x}, \bar{y})$ |
| 拟合评价 | 残差平方和越小、$R^2$ 越接近 1 越好 |

## 回归直线示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="r1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="40" y1="200" x2="330" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#r1a)"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#r1a)"/>
  <text x="320" y="220" font-size="12" fill="#64748b">x</text>
  <text x="20" y="30" font-size="12" fill="#64748b">y</text>
  <circle cx="80" cy="170" r="4" fill="#2563eb"/>
  <circle cx="120" cy="150" r="4" fill="#2563eb"/>
  <circle cx="160" cy="130" r="4" fill="#2563eb"/>
  <circle cx="200" cy="110" r="4" fill="#2563eb"/>
  <circle cx="240" cy="90" r="4" fill="#2563eb"/>
  <circle cx="280" cy="70" r="4" fill="#2563eb"/>
  <line x1="60" y1="185" x2="300" y2="55" stroke="#dc2626" stroke-width="2.5"/>
  <text x="300" y="48" font-size="12" fill="#dc2626">ŷ=b̂x+â</text>
  <line x1="160" y1="130" x2="160" y2="150" stroke="#16a34a" stroke-width="2"/>
  <text x="150" y="120" font-size="11" fill="#16a34a">残差 eᵢ</text>
  <text x="180" y="40" font-size="12" fill="#64748b" text-anchor="middle">回归直线必过样本中心 (x̄,ȳ)</text>
</svg>

## 典型例题

**例 1**：已知 $\bar{x} = 3$，$\bar{y} = 5$，$\hat{b} = 2$，求回归直线方程。

**解**：$\hat{a} = \bar{y} - \hat{b}\bar{x} = 5 - 2 \times 3 = -1$，故 $\hat{y} = 2x - 1$。

**例 2**：某产品广告费 $x$（万元）与销售额 $y$（万元）数据：$(1,2),(2,3),(3,5),(4,6)$，求回归方程并预测 $x=5$ 时销售额。

**解**：$\bar{x} = 2.5$，$\bar{y} = 4$。$\sum (x_i-\bar{x})(y_i-\bar{y}) = (-1.5)(-2)+(-0.5)(-1)+(0.5)(1)+(1.5)(2) = 3+0.5+0.5+3 = 7$。$\sum (x_i-\bar{x})^2 = 2.25+0.25+0.25+2.25 = 5$。$\hat{b} = \dfrac{7}{5} = 1.4$，$\hat{a} = 4 - 1.4 \times 2.5 = 0.5$。方程 $\hat{y} = 1.4x + 0.5$。当 $x=5$ 时，$\hat{y} = 1.4 \times 5 + 0.5 = 7.5$ 万元。

## 易错点

- 回归直线**必过样本中心点** $(\bar{x}, \bar{y})$，但不过每个样本点。
- $\hat{b}$ 与相关系数 $r$ 符号一致。
- 预测值 $\hat{y}$ 是估计值，不是精确值。
- 计算 $\hat{b}$ 时注意分子分母的求和范围。

## 背记要点

1. $\hat{y} = \hat{b}x + \hat{a}$，$\hat{a} = \bar{y} - \hat{b}\bar{x}$。
2. 回归直线必过 $(\bar{x}, \bar{y})$。
3. 残差平方和越小、$R^2$ 越接近 1，拟合越好。
4. 预测值 $\hat{y}$ 是估计值。

## 自测题

1. 回归直线必过哪个点？
2. 已知 $\bar{x}=2$，$\bar{y}=6$，$\hat{b}=1.5$，求 $\hat{a}$。
3. $R^2$ 越接近____，拟合效果越好。
4. 判断：回归直线经过所有样本点。（　）

## 相关知识点

回归分析基于相关关系，见 [[8.1 成对数据的统计相关性]]；分类变量关系见 [[8.3 列联表与独立性检验]]。
