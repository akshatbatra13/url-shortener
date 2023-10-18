// Load all the URLs from redirects.yml

// Enforce that yaml is imported
const YAML = require('yaml')
// fs is used by node to interact with the file system
const fs = require('fs')
const path = require('path')

// with readFileSync the code is blocking with readFile need to have callback function
const getRedirects = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
console.log(getRedirects)

// Generate HTML page from template