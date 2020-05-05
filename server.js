const fs = require('fs');
const http = require('http');
const path = require('path');

const server = http.createServer((req, res) =>{
    const pathFile = './lesson_1';
    const urlFile = req.url;

    const reqWrite = (content, urlFile, chart) => {
        try {
            res.writeHead(200, {'Cotent-Type': `${content}`});
            res.end(fs.readFileSync(`${pathFile}${urlFile}`, chart));
        } catch (err) {
            reqWrite('text/html', '/index.html', 'utf8')
        }
    }
     switch (path.extname(urlFile)){
        case '.css':
            reqWrite('text/css', urlFile, 'utf8');
            break;
        case '.js':
            reqWrite('text/js', urlFile, 'utf8');
            break;
        case '.jpg':
            reqWrite('image/jpeg', urlFile);
            break;
        case '.html':
            reqWrite('text/html', urlFile, 'utf8');
            break;
        default:
            reqWrite('text/plain', urlFile, 'utf8');
            break;
     }
}).listen(process.env.PORT || 3000);