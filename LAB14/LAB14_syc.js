const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const ruta_tb = require('./routes/LAB12_rutaTB.js');
const ruta_bs = require('./routes/LAB12_rutaBS.js');
const ruta_coc = require('./routes/LAB12_rutaCOC.js');

const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/TombRaider', ruta_tb);
app.use('/Blade&Soul', ruta_bs);
app.use('/CallofCthulhu', ruta_coc);

app.use((request, response, next) => {
    console.log("Prueba del lab 12");
    response.render('principal');
});

app.use((request, response,next) => {
    console.log("Error 404");
});

app.listen(3000);