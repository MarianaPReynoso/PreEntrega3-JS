function validarMonto () {
    let recordatorio = document.getElementById("recordatorio");
    var lista = document.getElementById("prestamos").value;
    document.getElementById("recordatorio").innerHTML = "Se ha excedido del valor máximo para el " + lista;
    recordatorio.className = "text-danger"
} 

function Prestamo (nombre, montoMaximo) {
    this.nombre = nombre;
    this.monto = montoMaximo;
}