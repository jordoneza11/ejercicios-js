// Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100
// Analisis de requerimientos:
// Entrada: numero(leer), calculo(proceso)
// Proceso: si calculo=numero>0 entonces
//          escribir numero+" es mayor que 0 y menor a 100"
//          sino si calculo=numero==100
//          escribir numero+" es igual a 100"
//          sino
//          escribir numero+" el numero es mayor que 0 y 100"
//          finsi
//          escribir "Gracias por su visita"
// FinAlgoritmo
const read = require('prompt-sync')();

function comparar(){
   let numero
   numero = +read("Ingrese numero:") 
   if (numero>0 && numero<100) {
    console.log(numero+" es mayor que 0 y menor a 100")
   }
   else if (numero==100) {
    console.log(numero+" es igual 100")
   }
   else {
    console.log(numero+" es mayor que 0 y 100")
}       
console.log("Gracias por su visita")

}
comparar()
