# 例题 · 角的比较与运算

## 例题 1（基础 · 角的和差）

### 题目

已知 $\angle AOB = 75°$，射线 $OC$ 在 $\angle AOB$ 内部，且 $\angle AOC = 28°36'$。求 $\angle COB$ 的度数。

### 解析

$OC$ 在内部，用减法（借 1 当 60）：

$$
\angle COB = 75° - 28°36' = 74°60' - 28°36' = 46°24'
$$

**答案：$\angle COB = 46°24'$**

---

## 例题 2（基础 · 角平分线）

### 题目

$OC$ 是 $\angle AOB$ 的平分线，$OD$ 是 $\angle BOC$ 的平分线，且 $\angle BOD = 20°$。求 $\angle AOB$ 的度数。

### 解析

$OD$ 平分 $\angle BOC$：

$$
\angle BOC = 2\angle BOD = 40°
$$

$OC$ 平分 $\angle AOB$：

$$
\angle AOB = 2\angle BOC = 80°
$$

**答案：$\angle AOB = 80°$**

> 💡 平分线嵌套问题从"最里层"往外一步步翻倍。

---

## 例题 3（中档 · 方程思想）

### 题目

射线 $OC$ 在 $\angle AOB$ 内部，$\angle AOB = 84°$，且 $\angle AOC : \angle COB = 3 : 4$。求 $\angle AOC$ 的度数。

### 解析

设 $\angle AOC = 3x$，$\angle COB = 4x$：

$$
3x + 4x = 84° \implies 7x = 84° \implies x = 12°
$$

$$
\angle AOC = 3x = 36°
$$

**答案：$\angle AOC = 36°$**

> 💡 比例关系设"份数 × $x$"，是角度计算与方程结合的标准姿势。

---

## 例题 4（中档 · 分类讨论）

### 题目

已知 $\angle AOB = 60°$，$\angle BOC = 20°$，求 $\angle AOC$ 的度数。

### 解析

$OC$ 的位置没有限定，分两种情况：

**情况 1**：$OC$ 在 $\angle AOB$ **内部**：

$$
\angle AOC = 60° - 20° = 40°
$$

**情况 2**：$OC$ 在 $\angle AOB$ **外部**（$OB$ 的另一侧）：

$$
\angle AOC = 60° + 20° = 80°
$$

**答案：$\angle AOC = 40°$ 或 $80°$**

> ⚠️ 没有图的角度计算题，几乎都要分类讨论——先画两张草图再动笔。

---

## 例题 5（提高 · 平分线综合）

### 题目

$O$ 为直线 $AB$ 上一点，射线 $OC$ 使 $\angle AOC = 40°$。$OM$ 平分 $\angle AOC$，$ON$ 平分 $\angle BOC$。求 $\angle MON$ 的度数。

<svg viewBox="0 0 480 160" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="480" height="160" rx="10" fill="#f3e5f5"/>
  <text x="240" y="18" text-anchor="middle" fill="#7b1fa2" font-size="13" font-weight="bold">邻补角的两条平分线互相垂直</text>
  <!-- Line AB -->
  <line x1="30" y1="110" x2="450" y2="110" stroke="#424242" stroke-width="2.5"/>
  <circle cx="240" cy="110" r="4" fill="#7b1fa2"/>
  <text x="240" y="128" text-anchor="middle" fill="#4a148c" font-size="12" font-weight="bold">O</text>
  <text x="30" y="128" fill="#4a148c" font-size="12">A</text>
  <text x="440" y="128" fill="#4a148c" font-size="12">B</text>
  <!-- OC ray: 40° from OA (left side), so 180-40=140° from OB -->
  <!-- OC at 40° from left: x=240+80*cos(140°)=240-61=179, y=110-80*sin(140°)=110-51=59 -->
  <line x1="240" y1="110" x2="179" y2="59" stroke="#4a148c" stroke-width="2"/>
  <text x="170" y="52" fill="#4a148c" font-size="12">C</text>
  <!-- OM bisects AOC: 20° from OA -->
  <!-- x=240+70*cos(160°)=240-66=174, y=110-70*sin(160°)=110-24=86 -->
  <line x1="240" y1="110" x2="174" y2="86" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="162" y="82" fill="#9c27b0" font-size="11">M</text>
  <!-- ON bisects BOC: 70° from OB (right side) -->
  <!-- BOC=140°, half=70°, so ON is 70° from OB = 110° from OA -->
  <!-- x=240+70*cos(70°)=240+24=264, y=110-70*sin(70°)=110-66=44 -->
  <line x1="240" y1="110" x2="264" y2="44" stroke="#ce93d8" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="268" y="40" fill="#ce93d8" font-size="11">N</text>
  <!-- Angle labels -->
  <text x="200" y="105" fill="#9c27b0" font-size="10">20°</text>
  <text x="215" y="90" fill="#4a148c" font-size="10">20°</text>
  <text x="248" y="80" fill="#ce93d8" font-size="10">70°</text>
  <text x="265" y="100" fill="#ce93d8" font-size="10">70°</text>
  <!-- MON = 90° label -->
  <text x="240" y="150" text-anchor="middle" fill="#7b1fa2" font-size="12">∠MON = 20° + 70° = 90°（邻补角的平分线互相垂直）</text>
</svg>

### 解析

$A$、$O$、$B$ 共线，所以：

$$
\angle BOC = 180° - 40° = 140°
$$

两条平分线：

$$
\angle MOC = \frac{40°}{2} = 20°, \qquad \angle NOC = \frac{140°}{2} = 70°
$$

$OM$、$ON$ 分别在 $OC$ 两侧：

$$
\angle MON = \angle MOC + \angle NOC = 20° + 70° = 90°
$$

**答案：$\angle MON = 90°$**

> 💡 结论可推广：**邻补角的两条平分线互相垂直**（$\frac{\alpha}{2} + \frac{180° - \alpha}{2} = 90°$），记住能秒杀选择题。
