//Promedio de un arreglo de números
function promedio_array(array){
    let sum = 0;
    for(let item of array){
        sum += item;
    }
    prom = sum/array.length;
    return prom;
}
console.log(promedio_array([60, 90, 100, 10, 20, 0, 120, 2000, 340]));
//Esribir un mensaje en un archivo txt
function escribirtxt(texto){
    console.log("Escribiendo en el archivo de texto");
    const filesystem = require('fs');
    filesystem.writeFileSync("LAB8.txt",texto);
}
let mensaje = 'Esta es la segunda pregunta del laboratorio 8, escribir desde node.js a archivos de texto.';
escribirtxt(mensaje);
//Problema solucionado en otro lenguaje
function factorial(num){
    let fact = 1;
    for (i=1; i<=num; i++) {
        fact = fact * i; 
    }
    return(fact);
}
console.log("Factorial de 5: "+factorial(5));
//Servidor en node.js
var http = require("http");
const server = http.createServer((request,response) =>{
    const fs = require('fs');
    console.log(request.url);
    fs.readFile("LAB1_ATG_5222.html", function(err, data) {
        response.setHeader('Content-Type','text/html');
        response.write(data);
        response.end();
    });
});
server.listen(3000);