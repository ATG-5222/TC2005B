const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views_LAB12', 'LAB12_principal.html'));
});

router.use('/', (request, response, next) => {
    console.log('Pagina principal');
});

module.exports = router;