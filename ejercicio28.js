
const prompt = require('prompt-sync')();
// 28. Solicitar al usuario el precio total de una compra en una tienda en línea y el cupón de descuento a aplicar. Calcular monto final con descuento y IVA si supera $10.
function ejercicio28() {
    // Solicitar al usuario que ingrese el precio total de la compra y el cupón de descuento
    let precioCompra = parseFloat(prompt("Ingrese el precio total de la compra:"));
    let cuponDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento a aplicar (%):"));

    // Verificar si el precio total de la compra supera $10 y aplicar el descuento
    let montoFinal;
    if (precioCompra > 10) {
        let descuento = precioCompra * cuponDescuento / 100;
        montoFinal = (precioCompra - descuento) * 1.15; // Aplicar descuento y agregar IVA del 15%
    } else {
        montoFinal = precioCompra * 1.15; // No aplicar descuento y agregar IVA del 15%
    }
    console.log("El monto final con descuento y IVA es: $" + montoFinal.toFixed(2));
}
ejercicio28()