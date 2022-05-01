const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const csrfProtection = csrf();
const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
    //'uploads': Es el directorio del servidor donde se subirán los archivos 
    callback(null, 'uploads');
},
filename: (request, file, callback) => {
//aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
//para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
callback(null, new Date().getTime() + '-' + file.originalname);
},
});

const app = express();
app.use(cookieParser());
app.use(session({
    secret: 'qweasdzxc', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({extended: false}));

app.use(csrfProtection); 
app.use(multer({ storage: fileStorage }).single('imagen')); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

const ruta_tb = require('./routes/LAB22_rutaTB.js');
const ruta_bs = require('./routes/LAB22_rutaBS.js');
const ruta_coc = require('./routes/LAB22_rutaCOC.js');
const ruta_user = require('./routes/LAB22_rutaUSER.js');

app.use('/TombRaider', ruta_tb);
app.use('/Blade&Soul', ruta_bs);
app.use('/CallofCthulhu', ruta_coc);
app.use('/users', ruta_user);

app.use((request, response, next) => {
    console.log("Prueba del lab 22");
    response.render('principal',{
        username: request.session.username ? request.session.username : ''
    });
});

app.use((request, response,next) => {
    console.log("Error 404");
});

app.listen(3000);