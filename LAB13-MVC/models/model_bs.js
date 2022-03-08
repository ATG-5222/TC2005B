const path = require('path');

const fs = require('fs');
// Almacenamiento de la información en arreglos
var clasesbs = [];
var accounts = [];

fs.readFile('./INFO_BS/CLASES_BS.json', (err, data) => {
    if (err) throw err;
    clasesbs = JSON.parse(data);
    console.log(clasesbs);
});

fs.readFile('./INFO_BS/CUENTAS_BS.json', (err, data) => {
    if (err) throw err;
    accounts = JSON.parse(data);
    console.log(accounts);
});