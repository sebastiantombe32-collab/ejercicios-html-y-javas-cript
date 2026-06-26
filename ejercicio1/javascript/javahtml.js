// Función auxiliar para limpiar y escribir en la zona de resultados de la página
function mostrarResultado(htmlContenido) {
    document.getElementById("resultado").innerHTML = htmlContenido;
}

// === EJERCICIO 6 ===
function ejercicio6() {
    const total = parseFloat(prompt("Ingrese el valor total de la compra:"));
    const entregado = parseFloat(prompt("Ingrese el valor entregado por el cliente:"));

    if (isNaN(total) || isNaN(entregado)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    if (entregado < total) {
        const faltante = total - entregado;
        alert("Dinero insuficiente, faltan $" + faltante.toLocaleString("es-CO"));
        mostrarResultado("<p style='color:red;'><strong>Error:</strong> Dinero insuficiente.</p>");
    } else if (entregado === total) {
        alert("No hay cambio");
        mostrarResultado("<p><strong>Transacción exitosa:</strong> No hay cambio para devolver.</p>");
    } else {
        const cambio = entregado - total;
        let html = "<h3>Resumen de la Transacción (Ej 6)</h3>" +
            "<p><strong>Valor total de la compra:</strong> $" + total.toLocaleString("es-CO") + "</p>" +
            "<p><strong>Valor entregado:</strong> $" + entregado.toLocaleString("es-CO") + "</p>" +
            "<p style='color: green; font-size: 1.1em;'><strong>Cambio a devolver:</strong> $" + cambio.toLocaleString("es-CO") + "</p>";
        mostrarResultado(html);
    }
}

// === EJERCICIO 7 ===
function ejercicio7() {
    let nombre = prompt("Ingrese su nombre:");
    const planSeleccionado = prompt("Elija el número del plan que desea contratar (1, 2 o 3):");

    if (!nombre) return;

    // Formatear nombre si está completamente en mayúsculas
    if (nombre === nombre.toUpperCase()) {
        nombre = nombre.toLowerCase();
        nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    }

    let planNombre = "";
    let gigas = "";
    let valorMensual = 0;
    let esPlanValido = true;

    switch (planSeleccionado) {
        case "1":
            planNombre = "Plan 1";
            gigas = "2 GB";
            valorMensual = 25000;
            break;
        case "2":
            planNombre = "Plan 2";
            gigas = "5 GB";
            valorMensual = 45000;
            break;
        case "3":
            planNombre = "Plan 3";
            gigas = "10 GB";
            valorMensual = 75000;
            break;
        default:
            esPlanValido = false;
            alert("Plan no disponible");
            mostrarResultado("<p style='color:red;'><strong>Error:</strong> Plan no disponible.</p>");
    }

    if (esPlanValido) {
        let html = "<h3>Confirmación de Contratación (Ej 7)</h3>" +
            "<p><strong>Cliente:</strong> " + nombre + "</p>" +
            "<p><strong>Plan Elegido:</strong> " + planNombre + "</p>" +
            "<p><strong>Gigas Incluidos:</strong> " + gigas + "</p>" +
            "<p><strong>Valor Mensual:</strong> $" + valorMensual.toLocaleString("es-CO") + "</p>";
        mostrarResultado(html);
    }
}

// === EJERCICIO 8 ===
function ejercicio8() {
    const producto = prompt("Ingrese el nombre del producto:");
    const precioOriginal = parseFloat(prompt("Ingrese el precio original del producto:"));
    const descuento = parseFloat(prompt("Ingrese el porcentaje de descuento (1 a 70):"));

    if (!producto || isNaN(precioOriginal) || isNaN(descuento)) {
        alert("Por favor, rellene todos los campos con datos válidos.");
        return;
    }

    if (descuento < 1 || descuento > 70) {
        alert("Porcentaje no válido, debe estar entre 1% y 70%");
        mostrarResultado("<p style='color:red;'><strong>Error:</strong> Porcentaje de descuento fuera de rango (1-70).</p>");
    } else {
        const descuentoPesos = precioOriginal * (descuento / 100);
        const precioFinal = precioOriginal - descuentoPesos;

        // Operador ternario para el mensaje adicional
        const mensajeAdicional = descuento > 50 ? "¡Oferta especial!" : "Precio de temporada";

        let html = "<h3>Detalle del Descuento (Ej 8)</h3>" +
            "<p><strong>Producto:</strong> " + producto + "</p>" +
            "<p><strong>Precio Original:</strong> $" + precioOriginal.toLocaleString("es-CO") + "</p>" +
            "<p><strong>Descuento Aplicado:</strong> $" + descuentoPesos.toLocaleString("es-CO") + " (" + descuento + "%)</p>" +
            "<p style='font-size:1.1em; color:green;'><strong>Precio Final:</strong> $" + precioFinal.toLocaleString("es-CO") + "</p>" +
            "<p><strong>Nota:</strong> <em>" + mensajeAdicional + "</em></p>";
        mostrarResultado(html);
    }
}

// === EJERCICIO 9 ===
function ejercicio9() {
    const nombreMascota = prompt("Ingrese el nombre de la mascota:");
    const inputTipo = prompt("Ingrese el tipo de mascota (perro o gato):");

    if (!nombreMascota || !inputTipo) return;
    const tipoMascota = inputTipo.toLowerCase();

    const edadMascota = parseFloat(prompt("Ingrese la edad de la mascota en años:"));

    if (isNaN(edadMascota)) {
        alert("Por favor, ingrese una edad válida.");
        return;
    }

    let edadHumana = 0;
    let tipoValido = true;

    if (tipoMascota === "perro") {
        // Operador ternario para verificar si es mayor a 2 años antes de calcular
        edadHumana = edadMascota > 2 ? (2 * 10.5) + ((edadMascota - 2) * 4) : edadMascota * 10.5;
    } else if (tipoMascota === "gato") {
        // Operador ternario para verificar si es mayor a 2 años antes de calcular
        edadHumana = edadMascota > 2 ? (2 * 12) + ((edadMascota - 2) * 4) : edadMascota * 12;
    } else {
        tipoValido = false;
        alert("Tipo de mascota no reconocido");
        mostrarResultado("<p style='color:red;'><strong>Error:</strong> Tipo de mascota no reconocido.</p>");
    }

    if (tipoValido) {
        let html = "<h3>Registro de Mascota (Ej 9)</h3>" +
            "<p><strong>Nombre:</strong> " + nombreMascota + "</p>" +
            "<p><strong>Tipo:</strong> " + tipoMascota + "</p>" +
            "<p><strong>Edad de la mascota:</strong> " + edadMascota + " años</p>" +
            "<p style='color:#2c3e50; font-size:1.1em;'><strong>Edad equivalente en años humanos:</strong> " + edadHumana + " años</p>";
        mostrarResultado(html);
    }
}

// === EJERCICIO 10 ===
function ejercicio10() {
    const nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
    if (!nombreEstudiante) return;

    const modulos = ["Speaking", "Listening", "Reading", "Writing"];
    let notas = [];

    // Pedir y guardar las notas
    for (let i = 0; i < modulos.length; i++) {
        let nota = parseFloat(prompt("Ingrese la nota de " + modulos[i] + " (0 a 100):"));
        if (isNaN(nota) || nota < 0 || nota > 100) {
            alert("Nota inválida. Se asignará 0 por defecto.");
            nota = 0;
        }
        notas.push(nota);
    }

    let pi = 0; // Suma acumulada
    let notaMasBaja = notas[0];

    // For clásico para recorrer el arreglo, sumar y encontrar la nota más baja
    for (let i = 0; i < notas.length; i++) {
        pi += notas[i];
        if (notas[i] < notaMasBaja) {
            notaMasBaja = notas[i];
        }
    }

    const promedio = pi / notas.length;
    let nivel = "";

    // Condicionales if/else if según el promedio obtenido
    if (promedio >= 90) {
        nivel = "C2 – Maestría";
    } else if (promedio >= 75) {
        nivel = "C1 – Avanzado";
    } else if (promedio >= 60) {
        nivel = "B2 – Intermedio alto";
    } else if (promedio >= 45) {
        nivel = "B1 – Intermedio";
    } else {
        nivel = "A2 – Básico";
    }

    // Mostrar resultados estructurados en la interfaz html
    let html = "<h3>Reporte de Calificaciones de Inglés (Ej 10)</h3>" +
        "<p><strong>Estudiante:</strong> " + nombreEstudiante + "</p>" +
        "<h4>Notas por módulo:</h4><ul>";

    for (let i = 0; i < modulos.length; i++) {
        html += "<li>" + modulos[i] + ": " + notas[i] + "</li>";
    }

    html += "</ul>" +
        "<p><strong>Nota más baja:</strong> " + notaMasBaja + "</p>" +
        "<p><strong>Promedio final:</strong> " + promedio.toFixed(2) + "</p>" +
        "<p style='color: #2980b9; font-size:1.2em;'><strong>Nivel asignado:</strong> " + nivel + "</p>";

    mostrarResultado(html);
}