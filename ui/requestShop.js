// Request the shop page by sending a request to repl.it. Lets hope this flies.
var app = require('express')();
var multer = require('multer');
var upload = multer();

const https = require('https')
const options = {
  hostname: 'replit.com/@Simple21/Shop',
  port: 3000,
  path: '/index.html',
  method: 'GET'
}


document.getElementById("Connect")

app.post('/your_path', upload.array(), function (req, res, next) {
  // req.files is array of uploaded files
  // req.body will contain the text fields, if there were any
});
  