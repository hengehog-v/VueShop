const fs = require('fs');
const http = require('http');
const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(express.static('./public'))

app.listen(process.env.PORT || 3000)

app.get('/Item', (req, res) => {
    fs.readFile('./public/database/data.json', 'utf8', (err, data) => {
        res.send(data)
    })
})

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "public/upload");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});
app.use(multer({storage:storageConfig}).single("image"));
 
app.post("/Item", function (req, res) {
    fs.readFile('./public/database/data.json', 'utf8', (err, data) => {
        let list = JSON.parse(data || '{}')
        const newData = req.body
        newData.image = './upload/' + req.file.originalname;
        const countItems = Object.keys(list).length
        const newId = countItems 
            ? list[countItems].id + 1
            : 1
        newData.id = newId
        list[newId] = newData

        fs.writeFile('./public/database/data.json', JSON.stringify(list), () => {
            res.send(list)
        })
    })
});

app.post("/CartItemAdd", function (req, res) {
    fs.readFile('./public/database/data.json', 'utf8', (err, data) => {
        let list = JSON.parse(data || '{}')
        const newData = req.body.id
    
        if (list[newData].count === undefined) 
            list[newData].count = 1
        else
            list[newData].count++

        fs.writeFile('./public/database/data.json', JSON.stringify(list), () => {
            res.send(list)
        })
    })
});

// app.post("/CartItemIncCount", function (req, res) {
//     fs.readFile('./public/database/data.json', 'utf8', (err, data) => {
//         let list = JSON.parse(data || '{}')
//         const newData = req.body.id
//         console.log(newData)
//         list[newData].count++
    
//         fs.writeFile('./public/database/data.json', JSON.stringify(list), () => {
//             res.send(list)
//         })
//     })
// });

app.post("/CartItemDecCount", function (req, res) {
    fs.readFile('./public/database/data.json', 'utf8', (err, data) => {
        let list = JSON.parse(data || '{}')
        const newData = req.body.id
        list[newData].count--
    
        fs.writeFile('./public/database/data.json', JSON.stringify(list), () => {
            res.send(list)
        })
    })
});

app.post("/CartItemDell", function (req, res) {
    fs.readFile('./public/database/data.json', 'utf8', (err, data) => {
        let list = JSON.parse(data || '{}')
        const newData = req.body.id
        delete list[newData].count 
    
        fs.writeFile('./public/database/data.json', JSON.stringify(list), () => {
            res.send(list)
        })
    })
});



// app.use(multer({dest: '/img/'}).single('image'));

// app.post("/Item", function (req, res) {
//     console.log(req.file);
//     const blob = new Blob([fs.readFileSync(this.image.path)]);
//     console.log(blob)
    
// });

// app.post('/Item', (req, res) => {
//     console.log('zzzzzzz');
//     console.log(req.files.image);
//   });
    

// const server = http.createServer((req, res) =>{
//     const pathFile = './public';
//     const urlFile = req.url;
//     console.log(urlFile)
//     let inquiry;

//     try {
//         if (/\.js$/.test(urlFile)){
//             inquiry = fs.readFileSync(`${pathFile}/js/${urlFile}`);
//         }else if (/\.*/.test(urlFile)){
//             inquiry = fs.readFileSync(`${pathFile}${urlFile}`);
//         } 

//     } catch (err) {
//         inquiry = fs.readFileSync( `${pathFile}/index.html`, 'utf8')
//     }
    
//     res.end(inquiry)
// }).listen(;

