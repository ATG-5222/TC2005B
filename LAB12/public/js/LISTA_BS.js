const fs = require("fs");
const readline = require('readline');

const clasesbs = [];
const accounts = [];

function leer_linea (txt,array){
    const lectura = readline.createInterface({
        input: fs.createReadStream(txt),
        output: process.stdout,
        console: false
    });
    lectura.on('line', function(linea) {
        array.push(linea)
    });
}

leer_linea('INFO_BS/CLASES_B&S.txt',clasesbs);
leer_linea('INFO_BS/CUENTAS_B&S.txt',accounts);

function lista_clases(){
    let respuesta = '<ul>';
    for (let clase in clasesbs) {
        respuesta +='<li>' + clasesbs[clase] + '</li>';
    }
    respuesta += '</ul>';
    return respuesta;
}
document.getElementById("lista_clases").innerHTML = lista_clases();

for (let cuenta in accounts) {
    accounts[cuenta]
}