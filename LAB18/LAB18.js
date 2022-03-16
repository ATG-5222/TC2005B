const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const ruta_tb = require('./routes/LAB18_rutaTB.js');
const ruta_bs = require('./routes/LAB18_rutaBS.js');
const ruta_coc = require('./routes/LAB18_rutaCOC.js');

const ruta_user = require('./routes/LAB18_rutaUSER.js');

const app = express();
app.use(cookieParser());
app.use(session({
    secret: 'qweasdzxc', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));

app.use('/TombRaider', ruta_tb);
app.use('/Blade&Soul', ruta_bs);
app.use('/CallofCthulhu', ruta_coc);
app.use('/users', ruta_user);

app.use((request, response, next) => {
    console.log("Prueba del lab 18");
    response.render('principal',{
        username: request.session.username ? request.session.username : ''
    });
});

app.use((request, response,next) => {
    console.log("Error 404");
});

app.listen(3000);