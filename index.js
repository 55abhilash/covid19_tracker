const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(port);

console.log("Running on port 3000");