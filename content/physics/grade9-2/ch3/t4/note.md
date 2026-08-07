---
title: 第4节 电动机
date: 2026-08-07
---

# 第4节 电动机

## 核心概念表

| 项目 | 内容 |
|---|---|
| 原理 | 通电线圈在磁场中受力转动 |
| 受力方向 | 与**电流方向**和**磁场方向**都有关 |
| 能量转化 | 电能 → 机械能 |
| 换向器 | 线圈刚转过平衡位置时自动改变线圈中电流方向，使线圈持续转动 |

## 知识梳理

1. **磁场对通电导线的作用**：通电导线在磁场中受到力的作用；力的方向与电流方向、磁场方向有关，改变其中任意一个，受力方向就改变（两者同时改变，受力方向不变）。
2. **通电线圈在磁场中转动**：线圈两边电流方向相反，受力方向相反，形成转动。线圈转到**平衡位置**时受力不能使其继续转动，靠惯性冲过平衡位置。
3. **换向器**：由两个彼此绝缘的铜半环组成，每当线圈刚转过平衡位置时自动改变线圈中的电流方向，使线圈不停转动。
4. **直流电动机**：由磁体（定子）、线圈（转子）、换向器、电刷等组成；优点是构造简单、控制方便、效率高、无污染。

## 直流电动机原理示意图

<svg viewBox="0 0 420 190" width="420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="fa" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 z" fill="#16a34a"/></marker></defs>
  <rect x="30" y="45" width="45" height="90" fill="#fecaca" stroke="#334155" stroke-width="2"/><text x="52" y="95" text-anchor="middle" font-size="14">N</text>
  <rect x="345" y="45" width="45" height="90" fill="#bfdbfe" stroke="#334155" stroke-width="2"/><text x="367" y="95" text-anchor="middle" font-size="14">S</text>
  <rect x="120" y="60" width="180" height="60" fill="none" stroke="#f59e0b" stroke-width="3"/>
  <circle cx="120" cy="60" r="4" fill="#dc2626"/><text x="106" y="52" font-size="11" fill="#dc2626">ab 边</text>
  <circle cx="120" cy="120" r="4" fill="#2563eb"/><text x="106" y="140" font-size="11" fill="#2563eb">cd 边</text>
  <line x1="150" y1="60" x2="150" y2="28" stroke="#16a34a" stroke-width="2.5" marker-end="url(#fa)"/><text x="160" y="32" font-size="11" fill="#16a34a">F（向上）</text>
  <line x1="270" y1="120" x2="270" y2="152" stroke="#16a34a" stroke-width="2.5" marker-end="url(#fa)"/><text x="278" y="150" font-size="11" fill="#16a34a">F（向下）</text>
  <circle cx="210" cy="168" r="12" fill="#fff" stroke="#334155" stroke-width="2"/><line x1="210" y1="156" x2="210" y2="180" stroke="#334155" stroke-width="1.5"/>
  <text x="252" y="176" font-size="11" fill="#64748b">换向器+电刷</text>
</svg>

（两边电流方向相反→受力方向相反→线圈绕轴转动。）

## 易错点

- 电动机原理是"通电导体在磁场中受力"，不是电磁感应（那是发电机）。
- 只改变电流方向**或**只改变磁场方向，转向改变；两者同时改变，转向不变。
- 换向器的作用是**改变线圈中电流方向**，不是改变磁场。
- 平衡位置：线圈平面与磁感线垂直的位置，此处不能提供转动效果，靠惯性越过。

## 背记要点

1. 原理：通电线圈在磁场中受力转动；能量转化：电能→机械能。
2. 受力方向由电流方向和磁场方向共同决定。
3. 换向器：刚过平衡位置时自动换向，使线圈持续转动。

## 自测题

1. 要使直流电动机反转，可以采取哪两种方法？
2. 换向器的作用是什么？

## 相关知识点

[[第5节 磁生电]] [[第1节 磁现象 磁场]] [[第2节 电生磁]] [[第3节 电磁铁 电磁继电器]]
