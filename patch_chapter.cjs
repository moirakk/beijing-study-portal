const fs = require('fs');
let code = fs.readFileSync('src/components/ChapterCard.tsx', 'utf8');

code = code.replace(
  /inline-flex items-baseline gap-2 whitespace-nowrap align-baseline/g,
  'inline-flex flex-wrap items-baseline gap-1.5 align-baseline'
);

fs.writeFileSync('src/components/ChapterCard.tsx', code);
