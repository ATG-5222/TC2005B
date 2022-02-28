console.log("Hola desde node");
//fs. filesystem
const filesystem = require('fs');
filesystem.writeFileSync("hola.txt","Hola desde node");

const arreglo = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];
for(let item of arreglo){
    setTimeout(()=>{
        console.log(item);
    },item);
}

//Ejecutando un servidor en node.js
const http = require("http");
const server = http.createServer((request,response) =>{
    if (request.url === '/'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Capibaras</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Esta es una pagina de capibaras</h1>');
        response.end();
    } else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<title>Capibaras no existentes</title>');
        response.write('</head><body>');
        response.write('<h1 id="principal">Esta no es una pagina de capibaras</h1>');
        response.end();
    }
});
server.listen(3000);