// 13. Pedir al usuario un numero y mostrar si es par o impar
// Bosquejo
// ENT: numero(leer)
// PRO: Si numero%2===0 Entonces
// Escribir "Su numero es par"
// Sino
// Escribir "Su numero es impar"
// FinSi
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
if (numero%2===0){
    console.log("Su numero es par")
}
else {
    console.log("Su numero es impar")
}