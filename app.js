'use strict';

const path = require('path');
const readPosts = require('./src/readPosts');
const generatePages = require('./src/generatePages');
const { cleanUpDocs } = require('./src/cleanUp');
const savePostHtml = require('./src/savePostHtml');

const postDir = path.join(__dirname, './posts');
const docsDir = path.join(__dirname, './docs');

const posts = readPosts(postDir);
const pages = generatePages(posts);
cleanUpDocs(docsDir);
savePostHtml(pages, docsDir);

// console.log(pages);
