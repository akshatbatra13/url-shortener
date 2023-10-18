// Load all the URLs from redirects.yml

// Enforce that yaml is imported
const YAML = require('yaml')
// fs is used by node to interact with the file system
const fs = require('fs')
const path = require('path')

// with readFileSync the code is blocking with readFile we need to have callback function
const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)
console.log(redirects)

// Generate HTML page from template
const templateFile = fs.readFileSync(path.join(__dirname, "template.html"), 'utf-8')

// Loop through enteries in the array
console.log(Object.entries)
for (let [slug, url] of Object.entries(redirects)) {
    console.log('Generating HTML page for ', slug)

    const html = templateFile.replaceAll('https://www.example.com', url)
    console.log(html)

    // Create folder for each slug
    const folderPath = path.join(__dirname, 'dist', slug)
    fs.mkdirSync(folderPath, { recursive: true })
    // Create html file in folder
    fs.writeFileSync(path.join(folderPath, 'index.html'), html)

}