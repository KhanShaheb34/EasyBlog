const path = require('path');
const generateJSON = require('./src/generateJSON');

const postDir = path.join(__dirname, './posts');
const docsDir = path.join(__dirname, './docs');
const postJSONPath = path.join(__dirname, './src/posts.json');

generateJSON(postDir, postJSONPath);
