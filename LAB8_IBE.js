//Promedio de un arreglo de números
const array1 = [5000, 60, 90, 100, 10, 20, 0, 120, 2000, 340, 1000, 50];
let sum = 0;
for(let item of array1){
   sum += item;
}
prom = sum/array1.length;
console.log(prom);

//Esribir un mensaje en un archivo txt
function escribirtxt(texto){
    console.log("Escribiendo en el archivo de texto");
    const filesystem = require('fs');
    filesystem.writeFileSync("LAB8.txt",texto);
}
let mensaje = 'Esta es la segunda pregunta del laboratorio 8, escribir desde node.js a archivos de texto.';
escribirtxt(mensaje);