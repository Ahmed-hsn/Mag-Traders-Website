const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (!dirFile.includes('node_modules') && !dirFile.includes('.next') && !dirFile.includes('.git')) {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'app')).concat(walkSync(path.join(__dirname, 'components')));

let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Avoid double replacing if it was already replaced manually
  let newContent = content.replace(/MAG Traders \(\P\v\t\.\) Ltd\./g, 'MAG Traders');
  newContent = newContent.replace(/MAG Traders/g, 'MAG Traders (Pvt.) Ltd.');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
    count++;
  }
});

console.log(`Done. Updated ${count} files.`);
