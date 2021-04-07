// var http = require("http");
//
// http.createServer(function (request, response) {
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
// }).listen(8081);
//
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
//

const express = require('express');
const actuator = require('express-actuator');

const http = require('http');

const app = express();
const router = express.Router();

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});


app.use(actuator());


const server = http.createServer(app);
server.listen(3000);
