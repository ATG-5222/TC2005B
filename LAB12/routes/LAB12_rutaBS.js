const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');

var clasesbs = [];
var accounts = [];
fs.readFile('./INFO_BS/CLASES_BS.json', (err, data) => {
    if (err) throw err;
    clasesbs = JSON.parse(data);
    console.log(clasesbs);
});

fs.readFile('./INFO_BS/CUENTAS_BS.json', (err, data) => {
    if (err) throw err;
    accounts = JSON.parse(data);
    console.log(accounts);
});

router.get('/nuevo', (request, response, next) => {
    console.log('GET Blade&Soul/nuevo');
    response.render('bs_nuevo', {clasesbs: clasesbs, accounts:accounts});
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST Blade&Soul/nuevo');;
    console.log(request.body);
    accounts.push(request.body);
    let cuenta = JSON.stringify(accounts);
    fs.writeFileSync('./INFO_BS/CUENTAS_BS.json',cuenta,'utf8');
    response.redirect('/Blade&Soul');    
});

router.use('/', (request, response, next) => {
    console.log('Use /Blade&Soul');
    response.render('bs_principal', {clasesbs: clasesbs, accounts:accounts})
});
module.exports = router;