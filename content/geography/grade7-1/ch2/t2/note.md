---
title: 第二节 地形图的判读
date: 2026-08-05
---

# 第二节 地形图的判读

标签：#学用地图 #等高线 #地形类型

## 一、本节定位

中图版·北京版地理七年级上册 **第二章 学用地图 · 第二节**。本节学习海拔与相对高度、等高线地形图的判读、五种基本地形和分层设色地形图，是初中地理读图技能的重中之重，也是考试高频考点。

## 二、核心概念

| 术语 | 定义 |
|---|---|
| 海拔（绝对高度） | 地面某点高出**海平面**的垂直距离 |
| 相对高度 | 某点高出**另一点**的垂直距离，即两地海拔之差 |
| 等高线 | 地图上海拔相同的各点连成的线 |
| 等高距 | 相邻两条等高线之间的高度差 |
| 等高线地形图 | 用等高线表示地表高低起伏的地图 |
| 分层设色地形图 | 在等高线间涂上不同颜色表示地势高低的地图 |

## 三、知识梳理

### 1. 等高线的基本特征

- 同一条等高线上海拔**相等**；同图中等高距**相同**。
- 等高线**密集→坡陡**，等高线**稀疏→坡缓**。

### 2. 等高线地形图上的山体部位

| 部位 | 等高线特征 |
|---|---|
| 山峰 | 等高线闭合，数值**内高外低**，常标▲ |
| 盆地/洼地 | 等高线闭合，数值**内低外高** |
| 山脊 | 等高线凸向**低处**（凸低为脊），可成为分水岭 |
| 山谷 | 等高线凸向**高处**（凸高为谷），常发育**河流** |
| 鞍部 | 两山峰之间的低平部位 |
| 陡崖 | 多条等高线**重叠**在一起，可开展攀岩 |

- 口诀：**凸低为脊、凸高为谷；重叠陡崖、闭合看数**。

<div class="svg-chart">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" font-family="sans-serif">
  <!-- Background -->
  <rect width="900" height="600" fill="#f0fdfa" rx="12"/>
  <text x="450" y="35" text-anchor="middle" font-size="20" font-weight="bold" fill="#134e4a">等高线地形图——山体部位判读</text>

  <!-- Main mountain contour lines (center) -->
  <!-- Outermost contour 100m -->
  <ellipse cx="450" cy="330" rx="380" ry="220" fill="none" stroke="#0d9488" stroke-width="1.5" opacity="0.5"/>
  <!-- 200m contour -->
  <path d="M150,330 C150,220 280,150 450,150 C620,150 750,220 750,330 C750,440 620,500 450,500 C280,500 150,440 150,330 Z" fill="none" stroke="#0d9488" stroke-width="1.5"/>
  <text x="155" y="325" font-size="11" fill="#0f766e">200m</text>

  <!-- 300m contour - with features -->
  <path d="M220,320 C220,240 320,180 430,175 C470,173 510,178 540,185 C620,200 700,260 700,340 C700,420 620,460 500,465 C380,470 220,400 220,320 Z" fill="none" stroke="#0d9488" stroke-width="1.8"/>
  <text x="225" y="315" font-size="11" fill="#0f766e">300m</text>

  <!-- 400m contour - left peak area -->
  <path d="M280,300 C280,250 340,210 400,205 C430,203 445,210 445,230 C445,260 430,290 420,310 C400,350 350,370 310,360 C280,350 280,330 280,300 Z" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text x="285" y="295" font-size="11" fill="#0f766e">400m</text>

  <!-- 400m contour - right peak area -->
  <path d="M530,260 C540,230 580,210 630,220 C670,228 690,260 690,300 C690,350 660,380 620,380 C580,380 540,350 530,310 C525,290 525,275 530,260 Z" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text x="640" y="295" font-size="11" fill="#0f766e">400m</text>

  <!-- 500m contour - left peak -->
  <ellipse cx="370" cy="270" rx="50" ry="40" fill="#5eead4" stroke="#0d9488" stroke-width="2" opacity="0.6"/>
  <text x="340" y="265" font-size="11" fill="#0f766e">500m</text>

  <!-- 500m contour - right peak -->
  <ellipse cx="620" cy="290" rx="40" ry="35" fill="#5eead4" stroke="#0d9488" stroke-width="2" opacity="0.6"/>
  <text x="590" y="285" font-size="11" fill="#0f766e">500m</text>

  <!-- Peak markers -->
  <text x="370" y="275" text-anchor="middle" font-size="14" fill="#134e4a">▲</text>
  <text x="370" y="255" text-anchor="middle" font-size="10" fill="#134e4a">568m</text>
  <text x="620" y="295" text-anchor="middle" font-size="14" fill="#134e4a">▲</text>
  <text x="620" y="275" text-anchor="middle" font-size="10" fill="#134e4a">532m</text>

  <!-- 山脊 ridge - contours bulge toward low values (left side) -->
  <path d="M280,420 L240,450 L200,470" fill="none" stroke="#14b8a6" stroke-width="2.5" stroke-dasharray="6,3"/>

  <!-- 山谷 valley - contours bulge toward high values (between peaks going down) -->
  <path d="M460,400 C470,430 475,460 480,490" fill="none" stroke="#14b8a6" stroke-width="2.5" stroke-dasharray="6,3"/>

  <!-- 陡崖 cliff markers (right side) -->
  <line x1="700" y1="310" x2="700" y2="350" stroke="#134e4a" stroke-width="4"/>
  <line x1="695" y1="310" x2="705" y2="310" stroke="#134e4a" stroke-width="2"/>
  <line x1="695" y1="320" x2="705" y2="320" stroke="#134e4a" stroke-width="2"/>
  <line x1="695" y1="330" x2="705" y2="330" stroke="#134e4a" stroke-width="2"/>
  <line x1="695" y1="340" x2="705" y2="340" stroke="#134e4a" stroke-width="2"/>
  <line x1="695" y1="350" x2="705" y2="350" stroke="#134e4a" stroke-width="2"/>

  <!-- Annotation lines and labels -->
  <!-- 山顶 label -->
  <line x1="370" y1="240" x2="370" y2="90" stroke="#134e4a" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="310" y="60" width="120" height="30" rx="5" fill="#0d9488"/>
  <text x="370" y="80" text-anchor="middle" font-size="13" fill="white" font-weight="bold">山顶（山峰）</text>
  <text x="370" y="105" text-anchor="middle" font-size="11" fill="#0f766e">闭合，内高外低</text>

  <!-- 鞍部 label -->
  <line x1="495" y1="250" x2="495" y2="80" stroke="#134e4a" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="455" y="60" width="80" height="30" rx="5" fill="#0d9488"/>
  <text x="495" y="80" text-anchor="middle" font-size="13" fill="white" font-weight="bold">鞍部</text>
  <text x="495" y="105" text-anchor="middle" font-size="11" fill="#0f766e">两峰之间低处</text>
  <!-- Saddle point marker -->
  <circle cx="495" cy="255" r="6" fill="none" stroke="#134e4a" stroke-width="2"/>

  <!-- 山脊 label -->
  <line x1="220" y1="460" x2="100" y2="460" stroke="#134e4a" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="40" y="445" width="65" height="30" rx="5" fill="#0d9488"/>
  <text x="72" y="465" text-anchor="middle" font-size="13" fill="white" font-weight="bold">山脊</text>
  <text x="120" y="495" text-anchor="middle" font-size="11" fill="#0f766e">凸低为脊（分水岭）</text>

  <!-- 山谷 label -->
  <line x1="480" y1="490" x2="480" y2="540" stroke="#134e4a" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="447" y="540" width="65" height="30" rx="5" fill="#0d9488"/>
  <text x="480" y="560" text-anchor="middle" font-size="13" fill="white" font-weight="bold">山谷</text>
  <text x="480" y="585" text-anchor="middle" font-size="11" fill="#0f766e">凸高为谷（有河流）</text>
  <!-- River in valley -->
  <path d="M465,410 C468,430 472,450 475,470 C477,480 479,485 480,490" fill="none" stroke="#14b8a6" stroke-width="2"/>

  <!-- 陡崖 label -->
  <line x1="705" y1="330" x2="810" y2="330" stroke="#134e4a" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="810" y="315" width="65" height="30" rx="5" fill="#0d9488"/>
  <text x="842" y="335" text-anchor="middle" font-size="13" fill="white" font-weight="bold">陡崖</text>
  <text x="810" y="360" text-anchor="start" font-size="11" fill="#0f766e">等高线重叠</text>

  <!-- Legend box -->
  <rect x="30" y="520" width="300" height="65" rx="6" fill="white" stroke="#0d9488" stroke-width="1.5"/>
  <text x="45" y="542" font-size="12" font-weight="bold" fill="#134e4a">口诀记忆：</text>
  <text x="45" y="562" font-size="13" fill="#0d9488" font-weight="bold">凸低为脊、凸高为谷</text>
  <text x="45" y="580" font-size="13" fill="#0d9488" font-weight="bold">重叠陡崖、闭合看数</text>
</svg>
</div>

### 3. 五种基本地形

| 地形 | 海拔 | 地表特征 |
|---|---|---|
| 山地 | 500 米以上 | 坡陡谷深，起伏大 |
| 丘陵 | 500 米以下 | 起伏较小，坡度和缓 |
| 高原 | 500 米以上 | 顶面平坦开阔，边缘陡峻 |
| 平原 | 200 米以下 | 宽广平坦 |
| 盆地 | 不定 | 四周高，中间低 |

### 4. 分层设色地形图

- 一般着色规则：**绿色→平原**，黄色→丘陵、高原，褐色→山地（颜色越深海拔越高），白色→雪线以上，**蓝色→海洋/水域**（越深水越深）。

## 四、读图与技能：等高线地形图判读五步法

1. **读数值**：看等高距，确定各线海拔，求山峰高度范围或两地相对高度。
2. **辨部位**：用"凸低脊、凸高谷、重叠崖、闭合峰（内高）/洼（内低）"判断山体部位。
3. **判坡度**：密陡疏缓——爬山选等高线稀疏的缓坡路线。
4. **析河流**：河流发育在**山谷**，流向由高处流向低处（与等高线凸向相反）。
5. **算陡崖**：陡崖处相对高度范围：(n−1)×d ≤ H ＜ (n+1)×d（n 为重叠条数，d 为等高距）。

## 五、易混辨析

| 对比项 | 海拔 | 相对高度 |
|---|---|---|
| 参照基准 | 海平面 | 另一地点 |
| 举例 | 珠峰海拔 8848.86 米 | 甲 1500 米、乙 500 米，相对高度 1000 米 |

| 对比项 | 山脊 | 山谷 |
|---|---|---|
| 等高线凸向 | 低处 | 高处 |
| 水流状况 | 分水岭，不集水 | 集水，易发育河流 |

## 六、背记要点

1. 海拔以海平面为基准；相对高度＝两地海拔之差。
2. 等高线密集坡陡、稀疏坡缓。
3. 凸低为脊，凸高为谷；山谷有河，山脊分水。
4. 等高线重叠是陡崖；闭合内高是山峰、内低是盆地。
5. 五种地形：山地、丘陵、高原、平原、盆地。
6. 平原<200 米，山地、高原>500 米；高原面平边陡，山地坡陡谷深。
7. 分层设色图：绿平原、黄高丘、褐山地、蓝水域。

## 七、自测小题

1. 甲地海拔 1200 米，乙地海拔 400 米，两地相对高度为______米。
2. 等高线密集处坡度______（陡/缓）。
3. 等高线凸向高处的部位是（A. 山脊 B. 山谷 C. 鞍部），该处易发育______。
4. 多条等高线重叠的部位是______，适合开展的运动是______。
5. 海拔多在 200 米以下、宽广平坦的地形是（A. 高原 B. 平原 C. 盆地）。
6. 分层设色地形图上，绿色一般表示（A. 山地 B. 平原 C. 海洋）。
7. 某图等高距 100 米，陡崖处 3 条等高线重叠，陡崖相对高度可能是（A. 150 米 B. 250 米 C. 450 米）。

**答案**：1. 800 2. 陡 3. B；河流 4. 陡崖；攀岩 5. B 6. B 7. B（范围 200≤H<400 米）

相关：[[第一节 认识地图]] ｜ [[主题探究：定向越野]]
