// 8. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si
// es positivo par o impar múltiplo de 7.
// Bosquejo
// ENT: numero(leer)
// PRO: Si numero<-20 Entonces
// Escribir "Su numero es negativo y menor que -20"
// Sino Si (numero > 0 && numero % 2 === 0 && numero % 7 === 0) Entonces
// Escribir "Su numero es positivo, par y multiplo de 7"
// Sino Si numero>0 Entonces
// Escribir "Su numero es positivo pero no es par ni multiplo de 7"
// Sino
// Escribir "Su numero es negativo pero no es menor que -20"
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
if (numero < -20) {
    console.log(numero + " es negativo y menor que -20")
} else if (numero > 0 && numero % 2 === 0 && numero % 7 === 0) {
    console.log(numero + " es positivo, par y multiplo de 7")
} else if (numero > 0) {
    console.log(numero + " es positivo pero no es par ni multiplo de 7")
} else {
    console.log(numero + " es negativo pero no es menor que -20")
}