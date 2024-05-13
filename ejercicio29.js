const prompt = require('prompt-sync')();

// 29. Solicitar al usuario su salario actual y la cantidad de años de antigüedad. Calcular valor del bono de antigüedad.
function ejercicio29() {
    // Solicitar al usuario que ingrese su salario actual y la cantidad de años de antigüedad
    let salarioActual = parseFloat(prompt("Ingrese su salario actual:"));
    let añosAntigüedad = parseInt(prompt("Ingrese la cantidad de años de antigüedad:"));

    // Calcular el valor del bono de antigüedad
    let bonoAntigüedad = añosAntigüedad > 3 ? salarioActual * (0.03 * añosAntigüedad) : 0;
    console.log("El salario es: $" + salarioActual.toFixed(2));
    console.log("El bono de antigüedad es: $" + bonoAntigüedad.toFixed(2));
}
ejercicio29()