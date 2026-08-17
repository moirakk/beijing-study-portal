# 例题 · 正数和负数

## 例题 1（基础 · 概念辨析）

### 题目

下列各数中，是负数的是（　　）

A. $0$　　B. $-(-2)$　　C. $-\frac{1}{3}$　　D. $+5$

### 解析

- A：$0$ 既不是正数也不是负数；
- B：$-(-2) = 2$，是正数（负号套负号要化简后再判断）；
- C：$-\frac{1}{3}$ 小于 $0$，是负数 ✔；
- D：$+5 = 5$，是正数。

**答案：C**

> ⚠️ 判断正负前，一定先把 $-(-2)$ 这类数**化简**。

## 数轴示意

<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t1e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="50" x2="470" y2="50" stroke="#424242" stroke-width="2" marker-end="url(#arr-t1e)"/>
  <!-- 刻度 -->
  <line x1="90" y1="43" x2="90" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="72" text-anchor="middle" font-size="13" fill="#7b1fa2">-2</text>
  <line x1="170" y1="43" x2="170" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="72" text-anchor="middle" font-size="13" fill="#7b1fa2">-1</text>
  <line x1="250" y1="43" x2="250" y2="57" stroke="#424242" stroke-width="2"/>
  <text x="250" y="72" text-anchor="middle" font-size="14" fill="#424242">0</text>
  <line x1="330" y1="43" x2="330" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="330" y="72" text-anchor="middle" font-size="13" fill="#7b1fa2">1</text>
  <line x1="410" y1="43" x2="410" y2="57" stroke="#424242" stroke-width="1.5"/>
  <text x="410" y="72" text-anchor="middle" font-size="13" fill="#7b1fa2">2</text>
  <!-- 标注 C 选项 -1/3 的位置 -->
  <circle cx="223" cy="50" r="5" fill="#7b1fa2"/>
  <text x="223" y="35" text-anchor="middle" font-size="12" fill="#7b1fa2">-⅓（负数✔）</text>
  <!-- 标注 B 选项 -(-2)=2 的位置 -->
  <circle cx="410" cy="50" r="5" fill="#9c27b0"/>
  <text x="410" y="35" text-anchor="middle" font-size="12" fill="#9c27b0">-(-2)=2（正数）</text>
</svg>

---

## 例题 2（基础 · 相反意义的量）

### 题目

如果收入 200 元记作 $+200$ 元，那么 $-150$ 元表示什么？收入 0 元又表示什么？

### 解析

规定收入为正，则负数表示相反意义——支出。

- $-150$ 元表示**支出 150 元**；
- $0$ 元表示**既没有收入也没有支出**（收支平衡）。

> 💡 翻译负数时，把"负号"换成"相反的动作"，数字保持正的说法。

---

## 例题 3（中档 · 基准量问题）

### 题目

某工厂计划每天生产零件 100 个，实际生产记录如下：星期一 $+8$，星期二 $-5$，星期三 $+2$（单位：个，超过计划记为正）。

(1) 星期二实际生产多少个零件？
(2) 这三天平均每天实际生产多少个？

### 解析

(1) $-5$ 表示比计划**少 5 个**：

$$
100 + (-5) = 95 \text{（个）}
$$

(2) 三天的记录之和为 $(+8) + (-5) + (+2) = +5$，即三天共比计划多 5 个：

$$
\frac{100 \times 3 + 5}{3} = \frac{305}{3} \approx 101.7 \text{（个）}
$$

若题目要求整数表述，可答"平均每天比计划多 $\frac{5}{3}$ 个，即约 101.7 个"。

**答案：(1) 95 个；(2) 约 101.7 个**

> 💡 "以计划量为基准记正负"是正负数最常考的应用，先算记录之和，再加回基准。
