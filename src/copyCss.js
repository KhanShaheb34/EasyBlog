const path = require('path');
const fs = require('fs');

/**
 * Copy theme to docsDir
 *
 * @param {string} theme Theme name
 * @param {string} docsDir Docs directory
 */
module.exports = (theme, docsDir) => {
  const themePath = path.join(__dirname, './themes/' + theme);
  fs.readdirSync(themePath).map((filename) => {
    fs.copyFileSync(
      path.join(themePath, filename),
      path.join(docsDir, filename)
    );
  });
};
