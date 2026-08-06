# 第2节 热机的效率

## 核心概念表

| 概念 | 含义 | 单位 |
|---|---|---|
| 热值 | 某种燃料完全燃烧释放的热量与其质量之比 | J/kg（气体常用 J/m³） |
| 热机效率 | 用来做有用功的能量与燃料完全燃烧放出能量之比 | 无单位（百分数） |

## 知识梳理

燃料燃烧时，化学能转化为内能。热值是燃料本身的一种**特性**，只与燃料种类有关，与燃料的质量、体积、是否完全燃烧无关。

氢的热值最大，约 $1.4\times10^{8}\ \text{J/kg}$。天然气等气体燃料的热值常用 J/m³ 表示。

热机工作时，燃料释放的能量只有一部分转化为有用的机械功，其余通过废气、散热、摩擦等途径损失。热机效率是衡量热机性能的重要指标，永远**小于1**。

提高热机效率的途径：使燃料尽可能完全燃烧；减少各种热量损失；保持良好润滑、减小摩擦；利用废气的能量（如废气涡轮增压、暖气）。

## 公式汇总

燃料完全燃烧放热（固体、液体燃料）：

$$
Q_{\text{放}}=mq
$$

气体燃料：

$$
Q_{\text{放}}=Vq
$$

热机效率：

$$
\eta=\frac{W_{\text{有用}}}{Q_{\text{放}}}\times100\%=\frac{W_{\text{有用}}}{mq}\times100\%
$$

## 能量流向图

**热机的能量流向**（以汽油机为例）：

<svg viewBox="0 0 560 200" width="560" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="are" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <rect x="20" y="70" width="130" height="55" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text x="85" y="94" text-anchor="middle" font-size="13" fill="#78350f">燃料完全燃烧</text>
  <text x="85" y="112" text-anchor="middle" font-size="13" fill="#78350f">放出热量 Q=mq</text>
  <path d="M150 97 h60" stroke="#334155" stroke-width="2.5" marker-end="url(#are)"/>
  <rect x="212" y="70" width="110" height="55" rx="8" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
  <text x="267" y="102" text-anchor="middle" font-size="13" fill="#312e81">热机</text>
  <path d="M322 85 h70 l0 -35" stroke="#dc2626" stroke-width="2" fill="none" marker-end="url(#are)"/>
  <text x="452" y="42" font-size="12" fill="#dc2626">废气带走（最多）</text>
  <path d="M322 97 h70" stroke="#16a34a" stroke-width="2.5" marker-end="url(#are)"/>
  <rect x="396" y="80" width="145" height="36" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="468" y="103" text-anchor="middle" font-size="13" fill="#14532d">有用机械功 W</text>
  <path d="M322 110 h70 l0 35" stroke="#f97316" stroke-width="2" fill="none" marker-end="url(#are)"/>
  <text x="452" y="165" font-size="12" fill="#ea580c">散热、摩擦损失</text>
  <text x="280" y="188" text-anchor="middle" font-size="13" fill="#334155">η = W有用 / Q放 &lt; 1</text>
</svg>

## 对比分析

| 装置 | 效率范围（大致） | 主要损失 |
|---|---|---|
| 汽油机 | 20%~30% | 废气带走、散热、摩擦 |
| 柴油机 | 30%~45% | 同上，但较少 |

| 概念 | 热值 | 比热容 |
|---|---|---|
| 反映的性质 | 燃料燃烧放热本领 | 物质吸放热本领 |
| 单位 | J/kg | J/(kg·℃) |
| 公式 | $Q=mq$ | $Q=cm\Delta t$ |

## 背记要点

1. 热值是燃料的特性，$q$ 只与燃料种类有关。
2. 完全燃烧放热 $Q=mq$（固液）或 $Q=Vq$（气体）。
3. 热机效率 $\eta=W_{\text{有用}}/Q_{\text{放}}$，恒小于1。
4. 热机能量损失中，废气带走的能量最多。
5. 提高效率的关键：完全燃烧、减少热损失、减小摩擦。
6. 常考综合题：$\eta=\dfrac{cm\Delta t}{m_{\text{燃}}q}$（用燃料加热水）。

## 自测题

1. 完全燃烧 0.5 kg 热值为 $3\times10^{7}$ J/kg 的汽油，放出多少热量？
2. 若上述热量中只有 $6\times10^{6}$ J 用来做有用功，热机效率是多少？
3. 为什么说"提高热机效率对节能减排意义重大"？

## 相关知识点

[[第1节 热机]] [[第3节 比热容]] [[第3节 能量的转化和守恒]]
