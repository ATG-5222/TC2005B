const path = require('path');
const fs = require('fs');

var accounts = [];

fs.readFile('./INFO_BS/CUENTAS_BS.json', (err, data) => {
    if (err) throw err;
    accounts = JSON.parse(data);
    console.log(accounts);
});

module.exports = class Cuenta {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_cuenta) {
        this.nombre = nueva_cuenta;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        accounts.push(this);
        let cuenta = JSON.stringify(accounts);
        fs.writeFileSync('./INFO_BS/CUENTAS_BS.json',cuenta,'utf8');
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return accounts;
    }
}