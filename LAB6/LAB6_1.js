let p1 = document.getElementById("psw1");
let p2 = document.getElementById("psw2");

alert("Procure no dejar ningun campo en blanco.");

function verificar_campos(){
    if (p1.length == 0 || p2.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
    }else {
        alert("Campos llenos.");
    }
}

function verificar_contraseña(){
    if (p1.value == p2.value) {
        document.getElementById("verificar").innerHTML = "Las contraseñas coinciden, siga adelante.";
    } else {
        document.getElementById("verificar").innerHTML = "Las contraseñas no coinciden.";
    }
}