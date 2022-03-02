const express = require('express');
const router = express.Router();

router.use('/', (request, response, next) => {
    console.log('Ruta /CallofCthulhu');
    let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Call of Cthulhu</title><meta charset="utf-8"></head><body><h1 id="principal">Call of Cthulhu</h1><h2>1924. El investigador Pierce estudia la trágica muerte de la familia Hawkins. Sumérgete en un mundo en el que acechan la locura y los horrores cósmicos.</h2><br><br><a href="/">Regresar a la pagina principal</a></body>';
    response.send(respuesta); 
});

module.exports = router;