---
title: 性质
date: 2026-08-05
---

# 性质

标签：#中考必考 #重点

## 一、平行线的三个性质

两条**平行**直线被第三条直线所截：

**性质 1**：两直线平行，同位角相等。

$$a \parallel b \Rightarrow \angle 1 = \angle 2 \quad (\text{同位角})$$

**性质 2**：两直线平行，内错角相等。

$$a \parallel b \Rightarrow \angle 2 = \angle 3 \quad (\text{内错角})$$

**性质 3**：两直线平行，同旁内角互补。

$$a \parallel b \Rightarrow \angle 2 + \angle 4 = 180^{\circ} \quad (\text{同旁内角})$$

<svg viewBox="0 0 340 240" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <!-- 平行线a -->
  <line x1="30" y1="80" x2="310" y2="80" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 平行线b -->
  <line x1="30" y1="180" x2="310" y2="180" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 截线c -->
  <line x1="90" y1="30" x2="230" y2="230" stroke="#9c27b0" stroke-width="2"/>
  <!-- 平行箭头 -->
  <polygon points="155,72 165,80 155,88" fill="#7b1fa2"/>
  <polygon points="155,172 165,180 155,188" fill="#7b1fa2"/>
  <!-- 交点E和F -->
  <circle cx="140" cy="80" r="3" fill="#7b1fa2"/>
  <circle cx="190" cy="180" r="3" fill="#7b1fa2"/>
  <text x="128" y="75" font-size="13" fill="#333" font-family="serif">E</text>
  <text x="178" y="195" font-size="13" fill="#333" font-family="serif">F</text>
  <!-- 直线名称 -->
  <text x="315" y="84" font-size="13" fill="#7b1fa2" font-family="serif">a</text>
  <text x="315" y="184" font-size="13" fill="#7b1fa2" font-family="serif">b</text>
  <!-- 同位角标注（相等，用相同颜色） -->
  <path d="M 155 68 A 18 18 0 0 0 148 62" fill="none" stroke="#e91e63" stroke-width="2"/>
  <path d="M 205 168 A 18 18 0 0 0 198 162" fill="none" stroke="#e91e63" stroke-width="2"/>
  <text x="158" y="66" font-size="11" fill="#e91e63">∠1</text>
  <text x="208" y="166" font-size="11" fill="#e91e63">∠5</text>
  <!-- 内错角标注（相等，用蓝色） -->
  <path d="M 128 90 A 16 16 0 0 1 122 96" fill="none" stroke="#2196f3" stroke-width="2"/>
  <path d="M 205 168 A 16 16 0 0 0 199 162" fill="none" stroke="#2196f3" stroke-width="1"/>
  <text x="100" y="102" font-size="11" fill="#2196f3">∠3</text>
  <!-- 同旁内角标注（互补，用绿色） -->
  <path d="M 128 90 A 16 16 0 0 1 122 96" fill="none" stroke="#4caf50" stroke-width="1"/>
  <path d="M 178 190 A 16 16 0 0 0 172 196" fill="none" stroke="#4caf50" stroke-width="2"/>
  <text x="160" y="200" font-size="11" fill="#4caf50">∠6</text>
  <!-- 性质说明 -->
  <text x="30" y="220" font-size="11" fill="#e91e63">同位角：∠1=∠5</text>
  <text x="130" y="220" font-size="11" fill="#2196f3">内错角：∠3=∠5</text>
  <text x="230" y="220" font-size="11" fill="#4caf50">同旁内角：∠3+∠6=180°</text>
</svg>

> 💡 性质的逻辑方向：**由两直线平行（位置关系）→ 得出角的数量关系**，与 [[判定]] 恰好相反。

## 二、性质与判定的对比

| | 已知条件 | 结论 |
|---|---|---|
| 判定 | 角相等 / 互补 | 两直线平行 |
| 性质 | 两直线平行 | 角相等 / 互补 |

平行线间还有一个重要事实：**两条平行线之间的距离处处相等**（一条直线上任一点到另一条直线的垂线段长度都相同）。

## 三、例题解析

**例 1**：$AB \parallel CD$，直线 $EF$ 分别交 $AB$、$CD$ 于 $E$、$F$，$\angle AEF = 68^{\circ}$，求 $\angle EFC$ 与 $\angle EFD$。

**解**：$\angle EFD$ 与 $\angle AEF$ 是内错角，由性质 2 得 $\angle EFD = 68^{\circ}$；
$\angle EFC = 180^{\circ} - 68^{\circ} = 112^{\circ}$（邻补角），也可由同旁内角互补直接得到。

**例 2**（拐点问题）：$AB \parallel CD$，点 $P$ 在两平行线之间，$\angle ABP = 30^{\circ}$，$\angle CDP = 40^{\circ}$，求 $\angle BPD$。

**解**：过 $P$ 作 $PQ \parallel AB$，则 $PQ \parallel CD$。
$\angle BPQ = \angle ABP = 30^{\circ}$（内错角），$\angle DPQ = \angle CDP = 40^{\circ}$（内错角），
所以 $\angle BPD = 30^{\circ} + 40^{\circ} = 70^{\circ}$。

> 💡 "拐点作平行线"是本章最常用的辅助线方法。

## 四、易错点

1. **性质与判定混用**：写推理依据时，"因为平行"用性质，"要证平行"用判定，方向不能颠倒。
2. 使用性质的前提是**两直线平行**，没有平行条件时同位角不一定相等。
3. 拐点问题中辅助平行线必须**过拐点**且与已知直线平行，并说明理由。
4. 求角时注意区分要求的是哪一个角，别把邻补角当成所求角。

## 五、自测题

1. $a \parallel b$，一对同旁内角中一个角为 $65^{\circ}$，另一个角是多少度？
2. $AB \parallel CD$，$\angle 1 = 3\angle 2$（$\angle 1$、$\angle 2$ 是同旁内角），求 $\angle 1$。
3. 判断：两直线平行，则任意一对同位角相等、内错角相等。（对/错）

<details>
<summary>参考答案</summary>

1. $180^{\circ} - 65^{\circ} = 115^{\circ}$。
2. $\angle 1 + \angle 2 = 180^{\circ}$，$4\angle 2 = 180^{\circ}$，$\angle 2 = 45^{\circ}$，$\angle 1 = 135^{\circ}$。
3. 对。这是平行线的性质 1、2。

</details>

## 六、知识联系

- 与 [[判定]] 互为逆命题，互逆关系详见 [[7.3 定义、命题、定理]]；
- 三类角的位置定义见 [[被第三条直线所截]]；
- 平行线间距离处处相等将用于 [[7.4 平移]] 的理解。
