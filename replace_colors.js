const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app'),
];

const extensions = ['.tsx', '.ts', '.css'];

const replacements = [
  { regex: /#0C1B3A/gi, replacement: '#1B4DB7' },
  { regex: /#C9A84C/gi, replacement: '#F47920' },
  { regex: /navy/gi, replacement: 'blue' }, // just in case
  { regex: /gold/gi, replacement: 'orange' }, // just in case for class names
];

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (extensions.includes(path.extname(fullPath))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      replacements.forEach(({ regex, replacement }) => {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  });
}

dirs.forEach(processDirectory);
console.log('Color replacement complete.');
