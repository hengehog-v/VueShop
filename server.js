const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) =>{
    const pathFile = './public';
    const urlFile = req.url;
    console.log(urlFile)
    let inquiry;

    try {
        if (/\.js$/.test(urlFile)){
            inquiry = fs.readFileSync(`${pathFile}/js/${urlFile}`);
        }else if (/\.*/.test(urlFile)){
            inquiry = fs.readFileSync(`${pathFile}${urlFile}`);
        } 

    } catch (err) {
        inquiry = fs.readFileSync( `${pathFile}/index.html`, 'utf8')
    }
    
    res.end(inquiry)
}).listen(process.env.PORT || 3000);