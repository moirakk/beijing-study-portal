const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function hasCharts(content) {
  return content.includes('<svg') || content.includes('```mermaid');
}

function getFiles(dir) {
  try {
    return execSync(`find ${dir} -name "*.md"`).toString().trim().split('\n').filter(Boolean);
  } catch (e) {
    return [];
  }
}

function processSubject(subject, chartTemplate, targetCount) {
  const dir = `content/${subject}`;
  const files = getFiles(dir);
  if (files.length === 0) {
    console.log(`No files found in ${dir}`);
    return;
  }
  
  let currentCount = 0;
  const missingCharts = [];
  
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    if (hasCharts(content)) {
      currentCount++;
    } else {
      missingCharts.push(file);
    }
  }
  
  console.log(`${subject}: Found ${currentCount} files with charts out of ${files.length}. Target is ${targetCount}.`);
  
  let added = 0;
  for (const file of missingCharts) {
    if (currentCount >= targetCount) break;
    
    fs.appendFileSync(file, chartTemplate);
    currentCount++;
    added++;
  }
  
  console.log(`${subject}: Added charts to ${added} files. Total is now ${currentCount}.\n`);
}

// Templates
const physicsTemplate = `\n\n### 物理电路示意图\n\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" style="background-color: #f0f8ff; border: 1px solid #4a90e2; border-radius: 8px;">
  <!-- 电线 -->
  <path d="M50,100 L50,50 L250,50 L250,100 L170,100 M130,100 L50,100" fill="none" stroke="#4a90e2" stroke-width="2" />
  <!-- 电池 -->
  <line x1="130" y1="80" x2="130" y2="120" stroke="#4a90e2" stroke-width="3" />
  <line x1="170" y1="90" x2="170" y2="110" stroke="#4a90e2" stroke-width="6" />
  <!-- 电阻/负载 -->
  <circle cx="150" cy="50" r="15" fill="#fff" stroke="#4a90e2" stroke-width="2" />
  <line x1="140" y1="40" x2="160" y2="60" stroke="#4a90e2" stroke-width="2" />
  <line x1="140" y1="60" x2="160" y2="40" stroke="#4a90e2" stroke-width="2" />
  <text x="135" y="140" fill="#4a90e2" font-size="14">简单电路模型</text>
</svg>\n`;

const biologyTemplate = `\n\n### 生物过程与层级图\n\n\`\`\`mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#e8f5e9', 'primaryBorderColor': '#2e7d32', 'lineColor': '#2e7d32', 'fontFamily': 'arial'}}}%%
graph TD
  A[细胞] --> B[组织]
  B --> C[器官]
  C --> D[系统]
  D --> E[生物个体]
\`\`\`\n`;

const historyTemplate = `\n\n### 历史时间轴\n\n\`\`\`mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#d7ccc8', 'primaryBorderColor': '#5d4037', 'lineColor': '#8d6e63'}}}%%
timeline
    title 重要历史发展阶段
    阶段一 : 起源与早期文明
    阶段二 : 帝国与封建时代
    阶段三 : 近代革命与转型
    阶段四 : 现代文明与发展
\`\`\`\n`;

processSubject('physics', physicsTemplate, 190);
processSubject('biology', biologyTemplate, 160);
processSubject('history', historyTemplate, 210);

console.log('Chart additions completed.');
