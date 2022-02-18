//Pregunta 1
const p1_num = prompt("Ingrese el número maximo de los cuadrados:");
function tabla_cuadrados() {
    let resultado = "<table>";
    for (let i = 1; i <= p1_num; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>";
        resultado += "</tr>"
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
let tiempo_total = (tiempo_final - tiempo_inicio)/1000;
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
for (let num3 in array3){
    if(num3<0){
        menores += 1;
    }
    else if(num3===0){
        iguales += 1;
    }
    else if(num3>0){
        mayores += 1;
    }
}
document.getElementById("p3array").innerHTML = "Números negativos: "+menores+" - O'S: "+iguales+" - Mayores a 0: "+mayores;