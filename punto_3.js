const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('./data.txt');

const puerto = 4000;

http.createServer((request, response) => {
      response.writeHead(200, {"Content.Type": "text/plain"});
      response.write(data);
      response.end();
}).listen(puerto);
