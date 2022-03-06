const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/', (request, response, next) => {
    console.log('Use /Blade&Soul');
    response.render('bs_principal');
});

module.exports = router;