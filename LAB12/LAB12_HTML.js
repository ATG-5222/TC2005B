const express = require('express');
const app = express();
const path = requiere('path');
const bodyParser = require('body-parser');
const ruta_tb = require('./LAB11.routes/LAB11_TombRaider.js');
const ruta_bs = require('./LAB11.routes/LAB11_B&S.js');
const ruta_coc = require('./LAB11.routes/LAB11_CallofCthulhu.js');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views_lab12');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/TombRaider', ruta_tb);
app.use('/Blade&Soul', ruta_bs);
app.use('/CallofCthulhu', ruta_coc);

app.use((request, response, next) => {
    console.log("Prueba del lab 12");
});

app.use((request, response,next) => {
    console.log("Error 404")
});

app.listen(3000);