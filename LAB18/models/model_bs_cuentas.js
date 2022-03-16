const db = require('../util/database');

module.exports = class Cuenta {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre_cuenta, nombre_usuario, password_cuenta) {
        this.nombre_cuenta = nombre_cuenta;
        this.nombre_usuario = nombre_usuario;
        this.password_cuenta = password_cuenta;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO usuarios (nombre_cuenta, nombre_usuario, password_cuenta) VALUES (?,?,?)',
        [this.nombre_cuenta, this.nombre_usuario,this.password_cuenta]
        );
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        console.log('Ejecutando consulta de clase');
        return db.execute('SELECT * FROM usuarios');
    }
}