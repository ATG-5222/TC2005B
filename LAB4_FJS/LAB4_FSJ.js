//Pregunta 1
const p1_num = prompt("Ingrese el número maximo de los cuadrados:");
function tabla_cuadrados() {
    let resultado = "<table>";
    resultado += "<tr>";
    resultado += "<th>Numero</th>";
    resultado += "<th>Cuadrado del numero</th>";
    resultado += "</tr>";
    for (let i = 1; i <= p1_num; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>";
        resultado += "</tr>";
    }
    resultado += "</table>";
    return resultado;
}
document.getElementById("p1num").innerHTML = tabla_cuadrados();
//Pregunta 2
let p2_1 = Math.random();
let p2_2 = Math.random();
let tiempo_inicio = Date.now();
const p2_user = prompt(p2_1 + " + " + p2_2 + " = ");
let tiempo_final = Date.now();
let p2_pc = p2_1+p2_2;
let tiempo_total = (tiempo_final-tiempo_inicio)/1000;
if (p2_user == p2_pc){
    document.getElementById("p2sum").innerHTML = "Respuesta correcta, tiempo ocupado: " + tiempo_total + " segundos.";
}
else {
    document.getElementById("p2sum").innerHTML = "Respuesta incorrecta, tiempo ocupado: " + tiempo_total + " segundos.";
}
//Pregunta 3
const array3 = [-21,0,12,-96,0,56,-98,0,45];
let menores = 0;
let iguales = 0;
let mayores = 0;
for (let num3 of array3){
    if(num3 < 0){
        menores += 1;
    }
    else if(num3 == 0){
        iguales += 1;
    }
    else if(num3 > 0){
        mayores += 1;
    }
}
document.getElementById("p3array").innerHTML = "Arreglo: [-21,0,12,-96,0,56,-98,0,45] -> "+"Números negativos: "+menores+" // 0'S: "+iguales+" // Mayores a 0: "+mayores;
//Pregunta 4
const array4 = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]    
];
let proms = [];
let sub_prom = 0;
for (let sub of array4){
    for (let i of sub){
        sub_prom += i;
    }
    sub_prom = sub_prom/sub.length;
    proms.push(sub_prom);
    sub_prom = 0;
}
function matriz_original() {
    let original = "<table>";
    original += "<tr>";
    original += "<th>Arreglo de arreglos original</th>";
    original += "</tr>";
    for (let sub of array4){
        original += "<tr>";
        original += "<td>" + sub + "</td>";
    }
    original += "</table>";
    return original;
}
function matriz_promedios() {
    let promedios = "<table>";
    promedios += "<tr>";
    promedios += "<th>Arreglo de promedios</th>";
    promedios += "</tr>";
    for (let i = 0; i <= proms.length-1; i++) {
        promedios += "<tr>";
        promedios += "<td>" + proms[i] + "</td>";
        promedios += "</tr>";
    }
    promedios += "</table>";
    return promedios;
}
document.getElementById("p4prom_1").innerHTML = matriz_original();
document.getElementById("p4prom_2").innerHTML = matriz_promedios();
 //Pregunta 5
 function invertir_numero() {
    let inverso = 0;
    let num5 = 123456789;
    let num5_2 = num5;
    while (num5_2 > 0){
        inverso = inverso * 10;
        inverso = inverso + (num5_2 % 10);
        num5_2 = parseInt(num5_2/10);
    }
    return "Numero original: " + num5 + " // Numero invertido: " + inverso;
}
 document.getElementById("in_num5").innerHTML = invertir_numero();
 //Pregunta 6
function Lap(marca, procesador, rom, ram, grafica) {
    this.marca = marca;
    this.procesador = procesador;
    this.rom = rom;
    this.ram = ram;
    this.grafica = grafica;
    this.encender_lap = encender_lap;
    this.encender_lap = apagar_lap;
}
function apagar_lap(){
    let lap_off = "Apagando su laptop";
    return lap_off;
}
function encender_lap(){
    let lap_on ="Encendiendo su laptop";
    return lap_on;
}
//---------Implementación de la pregunta 6------------
var user = new Lap('Dell','Intel',500,16,'Nvidia 3060');
document.getElementById("obj6_1").innerHTML = user.encender_lap();
document.getElementById("obj6_2").innerHTML = user.apagar_lap();