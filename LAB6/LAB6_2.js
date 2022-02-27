let tb = document.getElementById("tomb_raider");
let bs = document.getElementById("b&s");
let coc = document.getElementById("call_of_cthulhu");

let total_tb = 0;
let total_bs = 0;
let total_coc = 0;


tb.onchange = () => {
    let producto = document.getElementById("p1");
    total_tb = tb.value*500;
    if(tb.value == 0){
        producto.innerHTML = "";
    }
    else if(tb.value == 1){
        producto.innerHTML = "Tomb Raider |1 copia|: $" +total_tb;
    }
    let total = total_tb + total_bs + total_coc;
    let total_cantidad = document.getElementById("Total");
    let iva= total*0.16;
    total_cantidad.innerHTML = "Total a pagar por compra: $" + (total+iva) + ", de los cuales $" + iva + " son de IVA.";
    document.getElementById("TombRaider").style.color="red";
}
bs.onchange= () => {
    let producto = document.getElementById("p2");
    total_bs = bs.value*240;
    if(bs.value == 0){
        producto.innerHTML = "";
    }
    else{
        producto.innerHTML = "Suscripción a Blade & Soul por " + bs.value*30 + " días $" + total_bs;
    }
    let total = total_tb + total_bs + total_coc;
    let total_cantidad = document.getElementById("Total");
    let iva= total*0.16;
    total_cantidad.innerHTML = "Total a pagar por compra: $" + (total+iva) + ", de los cuales $" + iva + " son de IVA.";
    document.getElementById("Blade&Soul").style.color="blue";

}
coc.onchange= () => {
    let producto = document.getElementById("p3");
    total_coc = coc.value*400;
    if(coc.value == 0){
        producto.innerHTML = "";
    }
    else if(coc.value == 1){
        producto.innerHTML = "Call of Cthulhu |1 copia|: $" +total_coc;
    }
    let total = total_tb + total_bs + total_coc;
    let total_cantidad = document.getElementById("Total");
    let iva= total*0.16;
    total_cantidad.innerHTML = "Total a pagar por compra: $" + (total+iva) + ", de los cuales $" + iva + " son de IVA.";
    document.getElementById("CallOfCthulhu").style.color="green";
}