
//Nota: este es una copia del primero pues no comprendo la diferencia
const http = require('http'); 

const puerto = 4444;

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hello, World!\n');
    response.end();

}).listen(puerto);
