'use strict';

const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

let slugs = [];

/**
 * Generate JSON from the posts and saves to JSON_DIR
 *
 * @param {string} postsDir Directory of the posts folder
 *
 * @returns {object} Array of the posts
 */
module.exports = (postsDir) => {
  let posts = [];

  const postPaths = fs
    .readdirSync(postsDir)
    .map((el) => path.join(postsDir, el))
    .forEach((el) => {
      const indexPath = getIndexPath(el);
      const markdown = fs.readFileSync(indexPath, 'utf-8');
      const json = jsonFromMd(markdown);
      json['path'] = el;
      posts.push(json);
    });

  return posts;
};

/**
 * Generate JSON from a single Markdown Post
 *
 * @param {string} markdown The markdown of the post
 *
 * @returns {object} The Post in JSON format
 */
const jsonFromMd = (markdown) => {
  const post = {};
  markdown
    .trim()
    .split('-->')[0]
    .split('\n')
    .filter((el) => el.includes(':'))
    .map((el) => {
      const key = el.split(':')[0];
      const value = el.split(':').slice(1).join(':').trim();
      post[key] = value;
    });

  post['content'] = markdown.trim().split('-->').slice(1).join('-->').trim();
  post['slug'] = getValidSlug(post['title']);

  return post;
};

/**
 * Get index path from the post folder path
 *
 * @param {string} folderPath Path of the folder
 */
const getIndexPath = (folderPath) => {
  return path.join(
    folderPath,
    fs
      .readdirSync(folderPath)
      .filter((val) => val.toLowerCase() == 'index.md')[0]
  );
};

/**
 * Generate a valid slug from title
 *
 * @param {string} title Title of a post
 *
 * @returns {string} Slug
 */
const getValidSlug = (title) => {
  let basicSlug = slugify(title, { lower: true }),
    i = 1;
  let slug = basicSlug;

  while (slugs.includes(slug)) {
    slug = `${basicSlug}-${i}`;
    i++;
  }

  slugs.push(slug);
  return slug;
};
