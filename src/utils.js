'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Generate html from template and data
 *
 * @param {string} page Name of the page
 * @param {object} data Data object
 *
 * @returns {string} HTML page
 */
const generateHTML = (page, data) => {
  const pagePath = path.join(__dirname, `./pages/${page}.html`);
  let html = fs.readFileSync(pagePath, 'utf-8');

  Object.keys(data).map((key) => {
    const re = new RegExp(`{{{${key}}}}`, 'g');
    html = html.replace(re, data[key]);
  });

  return html;
};

const loadJSON = (path) => {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
};

module.exports = { generateHTML, loadJSON };
