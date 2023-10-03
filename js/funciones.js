function validarMonto () {
    let recordatorio = document.getElementById("recordatorio");
    var lista = document.getElementById("prestamos").value;
    document.getElementById("recordatorio").innerHTML = "Recuerde el monto máximo para el " + lista;
    recordatorio.className = "text-danger parrafo"
} 

function Prestamo (nombre, montoMaximo) {
    this.nombre = nombre;
    this.monto = montoMaximo;
}