const User = require('../models/model_user');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username ? request.session.username : '',
    }); 
};

exports.login = (request, response, next) => {
    console.log(request.body);
    User.findOne(request.body.username)
        .then(([rows, fielData])=>{ 
            console.log('Entrando a findOne');
            //Si no existe el usuario, redirige a la pantalla de login
            if (rows.length < 1) {
                console.log('No se encontro usuario');
                return response.redirect('/users/login');
            }
            const user = new User(rows[0].user_fullname, rows[0].user_name, rows[0].user_password);
            console.log(request.body.password);
            console.log(user);
            console.log(user.password);
            bcrypt.compare(request.body.password, user.password)
                .then(doMatch => {
                    if (doMatch) {
                        console.log('Pass coinciden');
                        request.session.isLoggedIn = true;
                        request.session.user = user;
                        request.session.username = user.nombre;
                        return request.session.save(err => {
                            response.redirect('/');
                        });
                    }
                    console.log('Pass no coinciden');
                    response.redirect('/users/login');
                }).catch(err => {
                    console.log(err);
                    response.redirect('/users/login');
                });
        }).catch((error)=>{
            console.log(error)
        });
};

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        username: request.session.username ? request.session.username : '',
    }); 
};
    
exports.post_signup = (request, response, next) => {
    const user = new User(request.body.nombre, request.body.username, request.body.password);
    user.save()
        .then(()=>{
            response.redirect('/users/login'); 
        }).catch((error)=>{
            console.log(error);
        });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.root = (request, response, next) => {
    response.redirect('/users/login'); 
};