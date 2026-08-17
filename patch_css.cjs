const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');
code = code.replace(/@keyframes page-enter {[\s\S]*?}\n\.page-enter {[\s\S]*?}/, '');
fs.writeFileSync('src/index.css', code);
