const prompt = require('prompt-sync')();

// 30. Solicitar al usuario el total de su cuenta en un restaurante y el porcentaje de descuento por ser cliente frecuente. Calcular monto final con descuento e IVA.
function ejercicio30() {
    // Solicitar al usuario que ingrese el total de su cuenta y el porcentaje de descuento
    let totalCuenta = parseFloat(prompt("Ingrese el total de su cuenta en el restaurante:"));
    let descuentoClienteFrecuente = parseFloat(prompt("Ingrese el porcentaje de descuento por ser cliente frecuente (%):"));

    // Verificar si el total de la cuenta supera $70 y aplicar el descuento
    let montoFinal;
    if (totalCuenta > 70) {
        let descuento = totalCuenta * descuentoClienteFrecuente / 100;
        montoFinal = (totalCuenta - descuento) * 1.15; // Aplicar descuento y agregar IVA del 15%
    } else {
        montoFinal = totalCuenta * 1.15; // No aplicar descuento y agregar IVA del 15%
    }
    console.log("El monto final con descuento e IVA es: $" + montoFinal.toFixed(2));
}
ejercicio30()