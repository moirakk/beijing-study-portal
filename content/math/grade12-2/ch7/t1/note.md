---
title: 专题七 三角函数与三角恒等变换
date: 2026-08-10
---

# 专题七 三角函数与三角恒等变换

## 概念定义

**任意角三角函数**：设角 $\alpha$ 终边上一点 $P(x, y)$，$r = \sqrt{x^2 + y^2}$，则 $\sin \alpha = \frac{y}{r}$，$\cos \alpha = \frac{x}{r}$，$\tan \alpha = \frac{y}{x}$。

**同角关系**：$\sin^2 \alpha + \cos^2 \alpha = 1$，$\tan \alpha = \frac{\sin \alpha}{\cos \alpha}$。

**诱导公式**：奇变偶不变，符号看象限。

**两角和差**：$\sin(\alpha \pm \beta) = \sin \alpha \cos \beta \pm \cos \alpha \sin \beta$，$\cos(\alpha \pm \beta) = \cos \alpha \cos \beta \mp \sin \alpha \sin \beta$。

**二倍角**：$\sin 2\alpha = 2\sin \alpha \cos \alpha$，$\cos 2\alpha = \cos^2 \alpha - \sin^2 \alpha = 2\cos^2 \alpha - 1 = 1 - 2\sin^2 \alpha$。

## 知识梳理

| 公式 | 内容 | 用途 |
| --- | --- | --- |
| 同角关系 | $\sin^2\alpha+\cos^2\alpha=1$ | 化简求值 |
| 诱导公式 | 奇变偶不变 | 化任意角为锐角 |
| 两角和差 | $\sin(\alpha\pm\beta)$ | 求值 |
| 二倍角 | $\cos 2\alpha$ | 降幂 |
| 辅助角 | $a\sin x+b\cos x$ | 化一 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s7a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">三角函数</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s7a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s7a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s7a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">定义与图像</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">恒等变换</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">图像变换</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">核心公式</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">同角/诱导</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">和差/倍角</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">辅助角公式</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">y=Asin(ωx+φ) 的性质</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">周期 T=2π/ω</text>
</svg>

## 典型例题

**例 1**：已知 $\sin \alpha = \frac{3}{5}$，$\alpha$ 为第二象限角，求 $\cos \alpha$。

**解**：由 $\sin^2 \alpha + \cos^2 \alpha = 1$ 得 $\cos^2 \alpha = 1 - \frac{9}{25} = \frac{16}{25}$。因 $\alpha$ 在第二象限，$\cos \alpha < 0$，故 $\cos \alpha = -\frac{4}{5}$。

**例 2**：化简 $y = \sin x + \cos x$。

**解**：$y = \sqrt{2}\left(\frac{\sqrt{2}}{2}\sin x + \frac{\sqrt{2}}{2}\cos x\right) = \sqrt{2}\sin\left(x + \frac{\pi}{4}\right)$。

## 易错点

- 求 $\cos \alpha$ 时**忽略象限**导致符号错误。
- 诱导公式"奇变偶不变"中**符号看象限**判断错误。
- 二倍角公式**降幂**方向记反。
- 辅助角公式中 $\varphi$ 的取值判断错误。
- 图像变换中**先平移后伸缩**与**先伸缩后平移**顺序混淆。

## 背记要点

1. $\sin^2 \alpha + \cos^2 \alpha = 1$，$\tan \alpha = \frac{\sin \alpha}{\cos \alpha}$。
2. $\sin(\alpha \pm \beta) = \sin \alpha \cos \beta \pm \cos \alpha \sin \beta$。
3. $\cos 2\alpha = 2\cos^2 \alpha - 1 = 1 - 2\sin^2 \alpha$。
4. 辅助角：$a\sin x + b\cos x = \sqrt{a^2 + b^2}\sin(x + \varphi)$。
5. $y = A\sin(\omega x + \varphi)$ 周期 $T = \frac{2\pi}{|\omega|}$。

## 自测题

1. 已知 $\cos \alpha = \frac{1}{2}$，$\alpha$ 为第一象限角，则 $\sin \alpha =$____。
2. 计算 $\sin 30^\circ \cos 60^\circ + \cos 30^\circ \sin 60^\circ =$____。
3. 化简 $\cos 2x$ 用 $\sin x$ 表示：____。
4. 函数 $y = \sin 2x$ 的周期是____。
5. 化简 $\sin x - \cos x =$____。

## 相关知识点

三角函数是解三角形的基础，见 [[专题八 解三角形]]；与平面向量结合见 [[专题九 平面向量]]；导数中三角函数求导见 [[专题五 导数及其应用]]。
