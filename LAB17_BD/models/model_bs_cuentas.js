const db = require('../util/database');

module.exports = class Cuenta {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(id_cuenta, nombre_cuenta, nombre_usuario, password_cuenta, creacion_usuario) {
        this.id_cuenta = id_cuenta;
        this.nombre_cuenta = nombre_cuenta;
        this.nombre_usuario = nombre_usuario;
        this.password_cuenta = password_cuenta;
        this.creacion_usuario = creacion_usuario; 
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO clases (id_cuenta, nombre_cuenta, nombre_usuario, password_cuenta,creacion_usuario) VALUES (?,?,?,?,?)',
        [NULL,this.nombre_cuenta, this.nombre_usuario,this.password_cuenta,current_timestamp()]
        );
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        console.log('Ejecutando consulta de clase');
        return db.execute('SELECT * FROM usuarios');
    }
}