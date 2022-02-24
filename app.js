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
    response.setHeader('Content-Type','text/html');
    response.write('Hola');
    response.end();
});
server.listen(3000);