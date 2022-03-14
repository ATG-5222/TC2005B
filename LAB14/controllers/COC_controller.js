exports.callofcthulhu = (request, response, next) => {
    console.log('Ruta /CallofCthulhu');
    response.render('coc',{
        username: request.session.username ? request.session.username : ''
    }); 
}