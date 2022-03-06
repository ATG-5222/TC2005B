const express = require('express');
const path = require('path');

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

const router = express.Router();

router.use('/', (request, response, next) => {
    console.log('GET /Blade&Soul');
    response.render('bs_principal');
});

module.exports = router;