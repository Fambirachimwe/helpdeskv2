const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());



const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});
  

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024* 1024}
});

app.use(__dirname + '/uploads', express.static('uploads'));




// app routes here 

app.post('/', upload.single('attachment'), (req, res, next) => {
    console.log(req.file);
    res.status(200).json({
        data: req.body,
        file: req.file
    })
});

module.exports = app;
