//18. Pedir al usuario un numero y mostrar si es multiplo de 3 y par
// Bosquejo
// ENT: numero(leer)
// PRO: Si numero%3===0 y numero%2===0 Entonces
// Escribir "Su numero es multiplo de 3 y par"
// Sino
// Escribir "Su numero no es multiplo de 3 y es impar"
// FinSi
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
if (numero%3===0 && numero%2===0){
    console.log("Su numero es multiplo de 3 y es par")
}
else {
    console.log("Su numero no es multiplo de 3 y es impar")
}