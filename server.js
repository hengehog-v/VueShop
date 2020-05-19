const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) =>{
    const pathFile = './lesson_1';
    const urlFile = req.url;
    console.log(urlFile)
    let inquiry;

    try {
        inquiry = fs.readFileSync(`${pathFile}${urlFile}`);
    } catch (err) {
        inquiry = fs.readFileSync( `${pathFile}/index.html`, 'utf8')
    }
    
    res.end(inquiry)
}).listen(process.env.PORT || 3000);