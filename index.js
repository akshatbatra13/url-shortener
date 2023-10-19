const express = require('express');
const path = require('path');
const fs = require('fs');

// intialise the app 
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

app.post('/', (req, res) => {
    const { shortid, link } = req.body;
    console.log(shortid, link)
    const templateFile = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8');
    const html = templateFile.replaceAll('https://www.example.com', link)
    const folderPath = path.join(__dirname, 'dist', shortid)
    fs.mkdirSync(folderPath, { recursive: true })
    fs.writeFileSync(path.join(folderPath, 'index.html'), html)
    res.send(`Your url is hosted at www.url-shortener.select/${shortid}`)
})

app.get('/:shortid', (req, res) => {
    const { shortid } = req.params;
    const filePath = `${__dirname}/dist/${shortid}/index.html`;
    res.sendFile(filePath);
})
