const bem = require('bem-xjst');
const path = require('path');
const bemhtml = bem.bemhtml;
const fs = require('fs');

const templates = bemhtml.compile();
const bemjson = fs.readFileSync(path.join(__dirname, process.argv[2]));
const html = templates.apply(JSON.parse(bemjson));

const layout = fs.readFileSync(path.join(__dirname, 'layout.html'));
const newHtml = layout.toString().replace('{{content}}', html);

fs.writeFileSync(path.join(__dirname, 'output.html'), newHtml);

console.log('done')
