const path = require('path');
const Cuenta = require('../models/model_BS');

exports.nuevo_get = (request, response, next) => {
    console.log('Ruta /Blade&Soul/nuevo');
    response.render('tb'); 
}

exports.nuevo_post = (request, response, next) => {
    console.log('Ruta /Blade&Soul/nuevo');
    response.render('tb'); 
}

exports.principal = (request, response, next) => {
    console.log('Ruta /TombRaider');
    response.render('tb'); 
}