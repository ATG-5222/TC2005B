let p1 = document.getElementById("psw_1").value;
let p2 = document.getElementById("psw_2").value;

alert("Procure no dejar ningun campo en blanco.");

function verificar_contraseña(){
    if (p1 == p2) {
        document.getElementById("verificar").innerHTML = "Las contraseñas coinciden, siga adelante.";
      } else {
        document.getElementById("verificar").innerHTML = "Las contraseñas no coinciden";
    }
}