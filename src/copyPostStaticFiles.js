'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Copy static files from posts
 *
 * @param {Array} posts Posts array
 * @param {Object} postFolderPaths Paths of post folder
 */
module.exports = (posts, postFolderPaths) => {
  posts.forEach((post) => {
    fs.readdirSync(post.path)
      .filter((val) => val.toLowerCase() != 'index.md')
      .forEach((file) => {
        const src = path.join(post.path, file);
        const dst = path.join(postFolderPaths[post.slug], file);

        fs.copyFileSync(src, dst);
      });
  });
};
