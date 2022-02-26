const p1 = document.getElementById("psw1");
const p2 = document.getElementById("psw2");

alert("Procure no dejar ningun campo en blanco.");

function verificar_contraseña(){
    if (p1.value != p2.value) {
        document.getElementById("verificar").innerHTML = "Las contraseñas no coinciden.";
    } else {
        document.getElementById("verificar").innerHTML = "Las contraseñas coinciden, siga adelante.";
    }
}