---
title: 1 功与功率
date: 2026-08-07
---

# 1 功与功率

## 概念定义

**功**：力对物体做功等于力的大小、位移的大小、力与位移夹角的余弦三者的乘积：
$$W=Fl\cos\alpha$$
单位：焦耳（J），$1\ \text{J}=1\ \text{N}\cdot\text{m}$。功是标量，但有正负。

**功率**：功与完成这些功所用时间之比，描述做功的**快慢**：
$$P=\dfrac{W}{t}\qquad P=Fv\cos\alpha\ (\text{力与速度同向时}\ P=Fv)$$

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 做功的两个要素 | 力、物体在力的方向上发生的位移 |
| 正负功 | $\alpha<90°$ 正功；$\alpha=90°$ 不做功；$\alpha>90°$ 负功（等效于物体克服该力做功） |
| 总功 | 各力做功的代数和 $=$ 合力做的功 |
| 平均功率 | $\bar P=\dfrac{W}{t}=F\bar v$（力恒定时） |
| 瞬时功率 | $P=Fv\cos\alpha$（$v$ 为瞬时速度） |
| 机动车启动 | 额定功率 $P_额=Fv$：恒功率启动（$v$ 增 $F$ 减，$v_{max}=P_额/f$）；恒加速启动（先匀加速后恒功率） |

## 功的示意（斜向拉力做功）

<svg viewBox="0 0 380 200" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p41g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker><marker id="p41b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="20" y1="150" x2="360" y2="150" stroke="#64748b" stroke-width="2.5"/>
  <rect x="60" y="100" width="80" height="50" fill="#e0e7ff" stroke="#64748b" stroke-width="2"/>
  <text x="92" y="130" font-size="13" fill="#334155">m</text>
  <line x1="140" y1="112" x2="230" y2="62" stroke="#16a34a" stroke-width="2.5" marker-end="url(#p41g)"/>
  <text x="216" y="52" font-size="12" fill="#16a34a">F</text>
  <line x1="140" y1="112" x2="230" y2="112" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="196" y="126" font-size="11" fill="#16a34a">Fcosα</text>
  <path d="M170,112 A30,30 0 0 0 166,98" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <text x="176" y="102" font-size="11" fill="#64748b">α</text>
  <line x1="100" y1="172" x2="300" y2="172" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p41b)"/>
  <text x="188" y="190" font-size="12" fill="#2563eb">l（位移）</text>
  <text x="236" y="90" font-size="12" fill="#64748b">W=Flcosα</text>
</svg>

## 典型例题

**例 1**：用与水平方向成 $37°$ 的拉力 $F=50\ \text{N}$ 拉箱子沿水平面移动 $l=10\ \text{m}$（$\cos37°=0.8$）。求拉力做的功；若全程用时 5 s，求拉力的平均功率。

**解**：$W=Fl\cos37°=50\times10\times0.8=400\ \text{J}$。
$\bar P=\dfrac{W}{t}=\dfrac{400}{5}=80\ \text{W}$。

**例 2**：汽车额定功率 $P=60\ \text{kW}$，行驶中所受阻力恒为 $f=2000\ \text{N}$。求汽车以额定功率行驶时的最大速度；当速度为 $10\ \text{m/s}$ 时的加速度（车质量 $m=2000\ \text{kg}$）。

**解**：最大速度时 $a=0$，牵引力 $F=f$：$v_{max}=\dfrac{P}{f}=\dfrac{60000}{2000}=30\ \text{m/s}$。
$v=10\ \text{m/s}$ 时 $F=\dfrac{P}{v}=6000\ \text{N}$，$a=\dfrac{F-f}{m}=\dfrac{4000}{2000}=2\ \text{m/s}^2$。

## 易错点

- $W=Fl\cos\alpha$ 中 $l$ 是**物体位移**（对地），$\alpha$ 是 $F$ 与位移的夹角；力与位移垂直时不做功。
- 功是标量，正负表示"动力/阻力"效果，不表示方向；比较做功多少看**绝对值**还是代数值需看题意。
- $P=Fv$ 中若 $v$ 为瞬时速度则是瞬时功率，若为平均速度则是平均功率（仅恒力）。
- 摩擦力可以做正功（如传送带带动物体）；静摩擦力也能做功。

## 背记要点

1. $W=Fl\cos\alpha$；$1\ \text{J}=1\ \text{N}\cdot\text{m}$；正负功按 $\alpha$ 判断。
2. $P=\dfrac{W}{t}$（平均）；$P=Fv\cos\alpha$（瞬时）。
3. 机动车：$v_{max}=\dfrac{P_额}{f}$；恒加速启动的匀加速阶段结束于 $P$ 达到 $P_额$。
4. 高考视角：汽车启动的 $v\text{-}t$ 图像分析与功率计算是经典综合题，抓住 $P=Fv$ 与牛顿第二定律联用。

## 自测题

1. 力与位移夹角为 $120°$ 时，力做____功（填"正/负"）。
2. 起重机将 $2\times10^3$ kg 货物匀速吊高 10 m（$g=10\ \text{m/s}^2$），拉力做功____J。
3. 汽车额定功率 80 kW，阻力 4000 N，最大速度为____m/s。
4. 判断：作用力做正功时，反作用力一定做负功。（　）

## 相关知识点

重力做功与势能见 [[2 重力势能]]；做功改变动能见 [[3 动能和动能定理]]；能量守恒见 [[4 机械能守恒定律]]。
