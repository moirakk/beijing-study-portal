const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// A generic function to determine if a file is missing charts
function hasCharts(content) {
  return content.includes('<svg') || content.includes('```mermaid');
}

// Some templates to insert based on keywords in the content
const templates = [
  {
    keywords: ['地球', '经纬', '赤道', '自转', '公转'],
    content: `\n\n### 地理示意图：地球运动\n\n\`\`\`mermaid\ngraph LR\n  A[地球自转] -->|周期：一天| B(昼夜交替)\n  A -->|方向：自西向东| C(时差)\n  D[地球公转] -->|周期：一年| E(四季变化)\n  D -->|黄赤交角| F(五带划分)\n\`\`\`\n`
  },
  {
    keywords: ['气候', '降水', '气温', '季风', '热带', '温带'],
    content: `\n\n### 气候类型分布与特征\n\n\`\`\`mermaid\ngraph TD\n  A[气候特征] --> B[气温]\n  A --> C[降水]\n  B --> D[热带: 终年高温]\n  B --> E[温带: 四季分明]\n  B --> F[寒带: 终年严寒]\n  C --> G[全年多雨/少雨型]\n  C --> H[夏季/冬季多雨型]\n\`\`\`\n`
  },
  {
    keywords: ['地形', '山脉', '高原', '平原', '盆地', '丘陵'],
    content: `\n\n### 五种基本地形特征对比\n\n| 地形类型 | 海拔特点 | 地表起伏特征 |\n| :--- | :--- | :--- |\n| 平原 | 一般在200米以下 | 宽广平坦 |\n| 高原 | 一般在500米以上 | 面积较大，外围较陡，内部起伏和缓 |\n| 山地 | 500米以上 | 具有耸立的山峰，陡峭的山坡 |\n| 丘陵 | 500米以下 | 地势起伏较大 |\n| 盆地 | 无一定标准 | 四周高，中间低 |\n\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" style="background-color: #f8fbfa; border: 1px solid #d0e8e1; border-radius: 8px;">
  <path d="M0,180 L100,180 L200,80 L250,150 L350,50 L450,180 L600,180" fill="none" stroke="#2c9a82" stroke-width="3" />
  <text x="50" y="195" fill="#1b5e50" font-size="14" text-anchor="middle">平原</text>
  <text x="200" y="70" fill="#1b5e50" font-size="14" text-anchor="middle">山地</text>
  <text x="350" y="40" fill="#1b5e50" font-size="14" text-anchor="middle">高峰</text>
  <text x="525" y="195" fill="#1b5e50" font-size="14" text-anchor="middle">平原</text>
</svg>\n`
  },
  {
    keywords: ['人口', '民族', '分布', '密度', '城市'],
    content: `\n\n### 人口分布影响因素\n\n\`\`\`mermaid\ngraph TD\n  A[人口分布稠密区] --> B[中低纬度沿海平原]\n  B --> C[地形平坦]\n  B --> D[气候温和湿润]\n  B --> E[交通便利]\n  B --> F[经济发达]\n\`\`\`\n`
  },
  {
    keywords: ['自然资源', '土地', '水资源', '矿产', '能源'],
    content: `\n\n### 自然资源分类体系\n\n\`\`\`mermaid\ngraph LR\n  A[自然资源] --> B[可再生资源]\n  A --> C[非可再生资源]\n  B --> D[水资源]\n  B --> E[土地资源]\n  B --> F[生物资源]\n  C --> G[矿产资源]\n  C --> H[化石燃料]\n\`\`\`\n`
  },
  {
    keywords: ['海洋', '洋流', '大洋', '海峡', '海岸'],
    content: `\n\n### 陆地与海洋分布比例\n\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  <circle cx="150" cy="100" r="80" fill="#2c9a82" />
  <path d="M150,20 A80,80 0 0,1 226,124 L150,100 Z" fill="#8bc3b5" />
  <text x="110" y="110" fill="#ffffff" font-size="16">海洋 71%</text>
  <text x="180" y="70" fill="#1b5e50" font-size="14">陆地 29%</text>
</svg>\n`
  },
  {
    keywords: ['工业', '农业', '交通', '经济', '区域'],
    content: `\n\n### 区域经济发展要素\n\n\`\`\`mermaid\ngraph TD\n  A[区域经济发展] --> B(自然条件)\n  A --> C(社会经济条件)\n  B --> B1[地形气候]\n  B --> B2[自然资源]\n  C --> C1[交通运输]\n  C --> C2[科技与劳动力]\n  C --> C3[政策支持]\n\`\`\`\n`
  }
];

const fallbackTemplate = `\n\n### 地理要素相互作用示意图\n\n\`\`\`mermaid\ngraph TD\n  A[自然环境要素] <--> B[人类社会活动]\n  A --> C[地形、气候、水文]\n  B --> D[人口、聚落、生产]\n\`\`\`\n`;

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  if (hasCharts(content)) return false;
  
  let inserted = false;
  for (const template of templates) {
    if (template.keywords.some(kw => content.includes(kw))) {
      fs.appendFileSync(filePath, template.content);
      inserted = true;
      break;
    }
  }
  
  if (!inserted) {
    fs.appendFileSync(filePath, fallbackTemplate);
  }
  return true;
}

const files = execSync('find content/geography -name "*.md"').toString().trim().split("\n");
let count = 0;
for (const file of files) {
  if (processFile(file)) {
    count++;
  }
}
console.log(`Updated ${count} files.`);
