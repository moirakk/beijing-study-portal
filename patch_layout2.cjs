const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

code = code.replace(
  /<span className="text-gold">北京<\/span>初高中学习门户/,
  '<span className="text-gold">北京</span><span className="hidden sm:inline">初高中学习门户</span>'
);

code = code.replace(
  /<nav className="flex items-center gap-1.5">/,
  '<nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mask-edge">'
);

fs.writeFileSync('src/components/Layout.tsx', code);
