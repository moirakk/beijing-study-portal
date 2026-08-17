const fs = require('fs');
let code = fs.readFileSync('src/components/Markdown.tsx', 'utf8');

code = code.replace(
  /a: \(\{ href, children \}\) => \(/,
  `img: ({ src, alt }) => <img src={src} alt={alt} loading="lazy" />,\n          a: ({ href, children }) => (`
);

fs.writeFileSync('src/components/Markdown.tsx', code);
