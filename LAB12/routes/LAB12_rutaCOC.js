const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/', (request, response, next) => {
    console.log('Ruta /CallofCthulhu'); 
    response.render('coc');
});

module.exports = router;