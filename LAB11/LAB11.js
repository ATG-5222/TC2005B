const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

const ruta_bs = require('\LAB11.routes\LAB11_B&S.js');
app.use('/Blade&Soul', ruta_bs);

app.use((request, response, next) => {
    respuesta = 'Content-Type', 'text/html<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>LAB10-ATG</title></head><body><h1 id="principal">Prueba del laboratorio 10: Rutas y formas.</h1><p>Aldo Tena García - A01275222</p><br><br><p>Bienvenido a la pagina principal.</p><p><strong>/TombRaider</strong> para la pagína de Tomb Raider.</p><p><strong>/Blade&Soul</strong> para la pagína de Blade & Soul.</p><p><strong>/CallofCthulhu</strong> para la pagína de Call of Cthulhu.</p><br><br><footer>Construcción de software y toma de decisiones.</footer></body>';
    response.send(respuesta); 
});

app.listen(3000);