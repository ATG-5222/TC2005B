const express = require('express');
const router = express.Router();

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

leer_linea('CLASES_B&S.txt',clasesbs);
leer_linea('CUENTAS_B&S.txt',accounts);

router.get('/nuevo', (request, response, next) => {
    console.log('GET /Blade&Soul/nuevo');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Blade & Soul</title><meta charset="utf-8"</head><body><h1 id="principal">Blade & Soul</h1><h2>Comienza un viaje heroico para enfrentarte a las fuerzas oscuras y buscar venganza como un maestro de las artes marciales en Blade & Soul, el MMORPG gratuito.</h2><p>Clases presentes dentro del juego:</p><ul>';
    for (let clase in clasesbs) {
        respuesta +='<li>' + clasesbs[clase] + '</li>';
    }
    respuesta += '</ul>Cuentas registradas:</p><ul>';
    for (let cuenta in accounts) {
        respuesta +='<li>' + accounts[cuenta] + '</li>';
    }
    respuesta += '</ul><h2>Aquí nacen las nuevas leyendas:</h2><form action="Blade&Soul" method="POST"><label for="nombre">Ingrese el nuevo usuario: </label><input type="text" id="nombre" name="nombre" placeholder="Nombre de usuario"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/">Regresar a la pagina principal</a></body></html>';
    response.send(respuesta); 
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /Blade&Soul/nuevo');
    console.log(request.body);
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato);
    fs.appendFile('CUENTAS_B&S.txt',"\n"+nuevo_dato, (err) => {
        if (err) throw err;
    });    
    response.redirect('/Blade&Soul');
});

router.use('/', (request, response, next) => {
    console.log('Ruta /Blade&Soul');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Blade & Soul</title><meta charset="utf-8"</head><body><h1 id="principal">Blade & Soul</h1><h2>Comienza un viaje heroico para enfrentarte a las fuerzas oscuras y buscar venganza como un maestro de las artes marciales en Blade & Soul, el MMORPG gratuito.</h2><p>Clases presentes dentro del juego:</p><ul>';
    for (let clase in clasesbs) {
        respuesta +='<li>' + clasesbs[clase] + '</li>';
    }
    respuesta += '</ul>Cuentas registradas:</p><ul>';
    for (let cuenta in accounts) {
        respuesta +='<li>' + accounts[cuenta] + '</li>';
    }
    respuesta += '</ul><br></br><a href="Blade&Soul/nuevo">Pantalla de creación de cuenta</a><br></br><a href="/">Pantalla principal</a></body></html>';
    response.send(respuesta); 
});

module.exports = router;