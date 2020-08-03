'use strict';

const path = require('path');
const readPosts = require('./src/readPosts');
const generatePages = require('./src/generatePages');

const postDir = path.join(__dirname, './posts');
const docsDir = path.join(__dirname, './docs');

const posts = readPosts(postDir);
const pages = generatePages(posts);

console.log(pages);
