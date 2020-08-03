'use strict';

const path = require('path');
const readPosts = require('./src/readPosts');
const generatePages = require('./src/generatePages');
const { cleanUpDocs } = require('./src/cleanUp');
const savePostHtml = require('./src/savePostHtml');
const copyPostStaticFiles = require('./src/copyPostStaticFiles');

const postDir = path.join(__dirname, './posts');
const docsDir = path.join(__dirname, './docs');

const posts = readPosts(postDir);
const pages = generatePages(posts);
cleanUpDocs(docsDir);
const postFolderPaths = savePostHtml(pages, docsDir);
copyPostStaticFiles(posts, postFolderPaths);

// console.log(pages);
