exports.tombraider = (request, response, next) => {
    console.log('Ruta /TombRaider');
    response.render('tb', {
        username: request.session.username ? request.session.username : ''
    }); 
}