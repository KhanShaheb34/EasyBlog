'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Save html file to docs/posts
 *
 * @param {Array} pages Pages array
 * @param {string} docsDir Path of docs
 *
 * @returns {Object} Folder paths
 */
module.exports = (pages, docsDir) => {
  const postsDir = path.join(docsDir, 'posts');
  let folderPaths = {};

  pages.map((page) => {
    const folderPath = path.join(postsDir, page.slug);
    const htmlPath = path.join(folderPath, 'index.html');

    fs.mkdirSync(folderPath);
    fs.writeFileSync(htmlPath, page.html);

    folderPaths[page.slug] = folderPath;
  });

  return folderPaths;
};
