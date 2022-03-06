const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/CallofCthulhu', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views_LAB12', 'LAB12_coc.html'));
});

router.use('/', (request, response, next) => {
    console.log('Ruta /CallofCthulhu'); 
});

module.exports = router;