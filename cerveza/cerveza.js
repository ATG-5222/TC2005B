//Variables, constantes, consola
const numero_cervezas = 2; //Las constantes no pueden ser cambiadas desde la pagína, tienen un alcance local.
//Imprimir en consola
console.log(numero_cervezas);
console.info(numero_cervezas);
console.warn(numero_cervezas);
console.error(numero_cervezas);
//Una vez que se cierra el for se termina la variable i con let (una variable local), con var se hace una variable global
for(var i = 1; i <= 10; i++){
    console.log(i)
}
console.log(i);
console.log("Puedes tomar " + numero_cervezas + " cervezas.");

//Alerts, prompt, confirm
alert("Si toma no maneje");
const catador = prompt("Cual es tu nombre?");
console.log("Hola "+catador);
const respuesta = confirm("Te gustan las stouts?");
console.log(respuesta);
//Funciones dentro de JS

function beber(numero_cervezas){
    if (numero_cervezas>1){
        console.log("Beber " + numero_cervezas + " cervezas");
    }
    else if(numero_cervezas == 1){
        console.log("Beber una cerveza");
    }
    else if(numero_cervezas == 0){
        console.log("No gracias yo manejo");
    }
}
beber(numero_cervezas);

//Funciones modernas/anonimas/arrow
const disfrutar = () => console.log("Disfruta tu cerveza"); //Una variable apunta hacia la definición de una función
disfrutar(); //Variable que se ejecuta como una función, que ejecuta la función a la que apunta
const disfrutar_varias = (numero) => console.log("Disfruta tus " + numero_cervezas + "cervezas");
disfrutar_varias(numero_cervezas);

//document.getElementById("contenido").onclick = disfrutar;
document.getElementById("contenido").onclick = () => console.warn("Me duele la cabeza");

function tabla_cuadrados() {
    let resultado = "<table>";
    for (let i = 1; i <= 10; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>";
    return resultado;
}
document.getElementById("resultados").innerHTML = tabla_cuadrados();

//Arreglos en JS - Los arreglos tienen los elementos de una pila
const cervezas = ["Good Day"];
cervezas.push("Republica");
cervezas[2] = "Carta Blanca";
cervezas["Favorita"] = "Coronita";
cervezas["Mala"] = "Ultra";
console.log(cervezas);
for (let i in cervezas){
    console.log(i);
}