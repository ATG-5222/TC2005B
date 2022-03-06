const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/TombRaider', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views_LAB12', 'LAB12_tb.html'));
});

router.use('/', (request, response, next) => {
    console.log('Ruta /TombRaider');
    response.send(respuesta); 
});

module.exports = router;