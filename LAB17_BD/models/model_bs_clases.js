const db = require('../util/database');

module.exports = class Clases {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(id_clase, nombre_clase, descripcion_clase, imagen_clase) {
        this.id_clase = id_clase;
        this.nombre_clase = nombre_clase;
        this.descripcion_clase = descripcion_clase;
        this.imagen_clase = imagen_clase;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO clases (id_clase, nombre_clase, descripcion_clase, imagen_clase) VALUES (?,?,?,?)',
        [NULL,this.nombre_clase, this.descripcion_clase,this.imagen_clase]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        console.log('Ejecutando consulta de clase');
        return db.execute('SELECT * FROM clases');
    }
}