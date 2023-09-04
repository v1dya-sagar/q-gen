const express = require('express');
const route = express.Router();
const multer = require('multer');

const upload = multer({ dest:'./files/'})
const taskController = require('../controller/taskController.js');

route.post('/uploadqb', upload.single('file'),taskController.uploadFile);

module.exports = {
    route
}