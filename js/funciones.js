function validarMonto () {
    let recordatorio = document.getElementById("recordatorio");
    var lista = document.getElementById("prestamos").value;
    document.getElementById("recordatorio").innerHTML = "Recuerde que el valor máximo del " + lista;
    recordatorio.className = "text-danger"
} 

function Prestamo (nombre, montoMaximo) {
    this.nombre = nombre;
    this.monto = montoMaximo;
}

function cuotas(){
    let cantidadCuotas /* = parseInt(prompt("Indique la cantidad de cuotas (12/24/36):")); */

    /* while(cantidadCuotas != 12 && cantidadCuotas != 24 && cantidadCuotas != 36){
        alert("Por favor, ingrese la cantidad de cuotas permitidas");
        cantidadCuotas = parseInt(prompt("Indique la cantidad de cuotas (12/24/36):"));

        if (cantidadCuotas == 12 && cantidadCuotas == 24 && cantidadCuotas == 36){
            break;
        }
    } */

    return cantidadCuotas;
}