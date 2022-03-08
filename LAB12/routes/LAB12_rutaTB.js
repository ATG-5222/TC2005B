const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/', (request, response, next) => {
    console.log('Ruta /TombRaider');
    response.render('tb');
});

module.exports = router;