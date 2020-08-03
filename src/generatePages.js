'use strict';

const fs = require('fs');
const showdown = require('showdown');
const converter = new showdown.Converter();
const { generateHTML } = require('./utils');

/**
 * Generate pages of posts
 *
 * @param {object} posts Posts array
 */
module.exports = (posts) => {
  const pages = [];

  posts.map((post) => {
    const processedPost = processPost(post);
    const html = generateHTML('post', processedPost);
    processedPost['html'] = html;
    pages.push(processedPost);
  });

  return pages;
};

/**
 * Process the post
 *
 * @param {object} post Single Post
 */
const processPost = (post) => {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const content = converter.makeHtml(post.content);

  return { ...post, date, content };
};
