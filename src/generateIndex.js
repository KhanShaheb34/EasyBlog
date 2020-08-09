'use strict';

const { generateHTML } = require('./utils');
const fs = require('fs');
const path = require('path');

/**
 * Generate index page
 *
 * @param {Array} posts Posts array
 * @param {Object} config Config Object
 * @param {string} docsDir Docs path
 */
module.exports = (posts, config, docsDir) => {
  const postListHtml = generatePostListHtml(posts);
  const socialHtml = generateSocialHtml(config.social);
  const html = generateHTML('index', {
    posts: postListHtml,
    social: socialHtml,
  });
  const indexPath = path.join(docsDir, 'index.html');
  fs.writeFileSync(indexPath, html);
};

/**
 * Generate html for social links
 *
 * @param {Array} social Social links
 *
 * @returns {String} HTML for social links
 */
const generateSocialHtml = (social) => {
  let html = '';
  social.map((site) => {
    html += generateHTML('social', site);
  });

  return html;
};

/**
 * Generate HTML for post list in index
 *
 * @param {Array} posts Posts Array
 *
 * @returns {String} Post list HTML
 */
const generatePostListHtml = (posts) => {
  let html = '';
  posts.map((post) => {
    if (!post.thumbnail.includes('/')) {
      post.thumbnail = 'posts/' + post.slug + '/' + post.thumbnail;
    }
    html += generateHTML('postThumb', post);
  });

  return html;
};
