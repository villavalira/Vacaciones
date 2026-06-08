function solicitarVacaciones() {
    const inicio = document.getElementById("inicio").value;
    const fin = document.getElementById("fin").value;

    if (!inicio || !fin) {
        alert("Selecciona ambas fechas");
        return;
    }

    const lista = document.getElementById("lista");

    const item = document.createElement("li");
    item.textContent = `${inicio} - ${fin} (Pendiente)`;

    lista.appendChild(item);

    alert("Solicitud enviada");
}
