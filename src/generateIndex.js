'use strict';

const { generateHTML } = require('./utils');
const fs = require('fs');
const path = require('path');

/**
 * Generate index page
 *
 * @param {Array} posts Posts array
 * @param {string} docsDir Docs path
 */
module.exports = (posts, docsDir) => {
  let postListHtml = '';
  posts.map((post) => {
    if (!post.thumbnail.includes('/')) {
      post.thumbnail = 'posts/' + post.slug + '/' + post.thumbnail;
    }
    postListHtml += generateHTML('postThumb', post);
  });
  const html = generateHTML('index', { posts: postListHtml });
  const indexPath = path.join(docsDir, 'index.html');
  fs.writeFileSync(indexPath, html);
};
