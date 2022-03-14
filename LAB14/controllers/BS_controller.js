const path = require('path');
const Clases = require('../models/model_bs_clases');
const Cuenta = require('../models/model_bs_cuentas');

exports.nuevo_get = (request, response, next) => {
    console.log('Ruta /Blade&Soul/nuevo');
    response.render('bs_nuevo', {
        clasesbs:Clases.fetchAll(), 
        accounts:Cuenta.fetchAll(),
        username: request.session.username ? request.session.username : ''
    });
}

exports.nuevo_post = (request, response, next) => {
    console.log('Ruta /Blade&Soul/nuevo');
    const cuenta = new Cuenta(request.body.nombre);
    cuenta.save();
    response.setHeader('Set-Cookie', 'ultima_cuenta='+cuenta.nombre+'; HttpOnly');
    response.redirect('/Blade&Soul');
}

exports.principal = (request, response, next) => {
    console.log('Ruta /Blade&Soul');
    console.log(request.cookies);
    response.render('bs_principal', {
        clasesbs:Clases.fetchAll(), 
        accounts:Cuenta.fetchAll(),
        ultima_cuenta: request.cookies.ultima_cuenta ? request.cookies.ultima_cuenta : '',
    });
}