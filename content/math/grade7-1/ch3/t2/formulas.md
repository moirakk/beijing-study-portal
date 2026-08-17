# 公式与定义卡片 · 代数式的值

## 1. 代入求值流程

$$
\text{写条件} \to \text{代入（加括号、还原乘号）} \to \text{按序计算}
$$

## 2. 代入负数必加括号

$$
a = -2: \quad a^2 = (-2)^2 = 4 \neq -2^2
$$

## 3. 整体代入模型

已知 $a + b = m$，$ab = n$：

$$
p(a+b) + q \cdot ab = pm + qn
$$

已知 $x^2 + x = t$：

$$
kx^2 + kx + c = k(x^2 + x) + c = kt + c
$$

## 4. 常用公式（代数式的实际来源）

$$
S_{\text{三角形}} = \frac{1}{2}ah, \qquad C_{\text{圆}} = 2\pi r, \qquad F = \frac{9}{5}C + 32
$$


### 数学几何与函数分析

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" style="background-color: #f3e5f5; border: 1px solid #7b1fa2; border-radius: 8px;">
  <line x1="20" y1="180" x2="280" y2="180" stroke="#7b1fa2" stroke-width="2" />
  <line x1="50" y1="20" x2="50" y2="180" stroke="#7b1fa2" stroke-width="2" />
  <path d="M50,180 Q150,20 280,180" fill="none" stroke="#9c27b0" stroke-width="3" />
  <text x="260" y="195" fill="#7b1fa2" font-size="12">X轴</text>
  <text x="10" y="30" fill="#7b1fa2" font-size="12">Y轴</text>
  <text x="140" y="100" fill="#7b1fa2" font-size="14">抛物线图示</text>
</svg>

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f3e5f5', 'primaryBorderColor': '#7b1fa2', 'lineColor': '#7b1fa2'}}}%%
graph TD
  A[已知条件分析] --> B[建立数学模型]
  B --> C[求解方程/不等式]
  C --> D[结果验证与讨论]
```
