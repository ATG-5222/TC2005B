const express = require('express');
const router = express.Router();

router.use('/', (request, response, next) => {
    console.log('Ruta /TombRaider');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Tomb Raider</title><meta charset="utf-8"></head><body><h1 id="principal">Tomb Raider</h1><h2>Tomb Raider es una aventura de acción aclamada por la crítica que explora los orígenes de Lara Croft y su transformación, de joven inexperta a dura superviviente.</h2><br><br><a href="/">Regresar a la pagina principal</a></body></html>';
    response.send(respuesta); 
});

module.exports = router;