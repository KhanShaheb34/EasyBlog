'use strict';

const path = require('path');
const fs = require('fs');

/**
 * Save html file to docs/posts
 *
 * @param {Array} pages Pages array
 * @param {string} docsDir Path of docs
 */
module.exports = (pages, docsDir) => {
  const postsDir = path.join(docsDir, 'posts');

  pages.map((page) => {
    const htmlPath = path.join(postsDir, page.slug + '.html');
    fs.writeFileSync(htmlPath, page.html);
  });
};
