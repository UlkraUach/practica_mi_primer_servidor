
const http = require('http');
const fs = require('fs');

const puerto = 4000;
const file = './data.txt';

http.createServer((request, response) => {
    fs.readFile(file,(err,data) => {
        response.writeHead(200, {"Content.Type": "text/plain"});
        response.write(data);
        response.end();
    });
}).listen(puerto);
