// 11. Pedir al usuario un número y mostrar si es mayor o menor que 10
// Bosquejo
// ENT: numero(leer)
// PRO: Si numero>10 Entonces
// Escribir "Su numero es mayo a 10"
// Sino
// Escribir "Su numero es menor a 10"
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
if (numero>10){
    console.log("Su numero es mayor a 10")
}
else {
    console.log("Su numero es menor a 10")
}