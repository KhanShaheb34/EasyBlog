'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Clean up docs folder
 *
 * @param {string} docsDir Path of the docs folder
 */
const cleanUpDocs = (docsDir) => {
  if (fs.existsSync(docsDir)) {
    fs.rmdirSync(docsDir, { recursive: true });
  }
  fs.mkdirSync(docsDir);
  fs.mkdirSync(path.join(docsDir, 'posts'));
};

module.exports = { cleanUpDocs };
