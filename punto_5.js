
const http = require('http');
const fs = require('fs');

const puerto = 4000;

http.createServer((request, response) => {
    console.log(request.url);
    const file = request.url=='/'? './WWW/index.html': `./WWW${request.url}`;
    fs.readFile(file, (err,data) => {
        if (err) {
            response.writeHead(404, {"Content.Type": "text/plain"});
            response.write("not found");
            response.end();
        } else {
            let extension = file.split('.').pop();
            switch (extension){
                case 'txt':
                    response.writeHead(200, {"Content.Type": "text/plain"});
                    break;
                //insertar todas las extensiones rqueridas...
                default:
                    
            }
            response.writeHead(200, {"Content.Type": "text/plain"});
            response.write(data);
            response.end();
        }
    });
}).listen(puerto);
