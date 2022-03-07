const express = require('express');
const path = require('path');
const fs = require('fs');

var clasesbs = [];
var accounts = [];

fs.readFile('./INFO_BS/CLASES_BS.json', (err, data) => {
    if (err) throw err;
    clasesbs = JSON.parse(data);
    console.log(clasesbs)
});

fs.readFile('./INFO_BS/CUENTAS_BS.json', (err, data) => {
    if (err) throw err;
    accounts = JSON.parse(data);
    console.log(accounts)
});

const router = express.Router();

router.use('/', (request, response, next) => {
    console.log('Use /Blade&Soul');
    response.render('bs_principal', {clasesbs: clasesbs, accounts:accounts})
});

module.exports = router;