var express = require('express');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost:27017/sweets', {useNewUrlParser: true, useUnifiedTopology: true});
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const hostname = 'localhost';
const port = 8080;

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});