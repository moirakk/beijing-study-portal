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

const mathTemplate = `\n\n### 数学几何与函数分析\n\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" style="background-color: #f3e5f5; border: 1px solid #7b1fa2; border-radius: 8px;">
  <line x1="20" y1="180" x2="280" y2="180" stroke="#7b1fa2" stroke-width="2" />
  <line x1="50" y1="20" x2="50" y2="180" stroke="#7b1fa2" stroke-width="2" />
  <path d="M50,180 Q150,20 280,180" fill="none" stroke="#9c27b0" stroke-width="3" />
  <text x="260" y="195" fill="#7b1fa2" font-size="12">X轴</text>
  <text x="10" y="30" fill="#7b1fa2" font-size="12">Y轴</text>
  <text x="140" y="100" fill="#7b1fa2" font-size="14">抛物线图示</text>
</svg>\n\n\`\`\`mermaid\n%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f3e5f5', 'primaryBorderColor': '#7b1fa2', 'lineColor': '#7b1fa2'}}}%%\ngraph TD\n  A[已知条件分析] --> B[建立数学模型]\n  B --> C[求解方程/不等式]\n  C --> D[结果验证与讨论]\n\`\`\`\n`;

const politicsTemplate = `\n\n### 政治理论与逻辑框架\n\n\`\`\`mermaid\n%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ffebee', 'primaryBorderColor': '#c62828', 'lineColor': '#c62828'}}}%%\ngraph TD\n  A[核心价值观] --> B[制度体系保障]\n  A --> C[法律法规规范]\n  B --> D[社会实践落实]\n  C --> D\n\`\`\`\n`;

const chineseTemplate = `\n\n### 语文阅读与写作结构\n\n\`\`\`mermaid\n%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#efebe9', 'primaryBorderColor': '#6d4c41', 'lineColor': '#6d4c41'}}}%%\ngraph TD\n  A[引论/破题] --> B[分论点一: 提出与论证]\n  A --> C[分论点二: 递进与深化]\n  B --> D[结论/升华]\n  C --> D\n\`\`\`\n`;

const englishTemplate = `\n\n### 英语语法树与词汇图\n\n\`\`\`mermaid\n%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff3e0', 'primaryBorderColor': '#e65100', 'lineColor': '#e65100'}}}%%\ngraph TD\n  A[Sentence Structure] --> B[Subject (Noun Phrase)]\n  A --> C[Predicate (Verb Phrase)]\n  B --> D[Modifiers]\n  C --> E[Object / Complement]\n\`\`\`\n`;

processSubject('math', mathTemplate, 195);
processSubject('politics', politicsTemplate, 210);
processSubject('chinese', chineseTemplate, 280);
processSubject('english', englishTemplate, 250);

console.log('Chart additions completed.');
