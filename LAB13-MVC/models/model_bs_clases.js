const path = require('path');
const fs = require('fs');

var clasesbs = [];

fs.readFile('./INFO_BS/CLASES_BS.json', (err, data) => {
    if (err) throw err;
    clasesbs = JSON.parse(data);
    console.log(clasesbs);
});

module.exports = class Clases {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_clase) {
        this.nombre = nueva_clase;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //No utilizado en esta clase
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return clasesbs;
    }
}