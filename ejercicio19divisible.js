// Solicitar al usuario un número y mostrar si es divisible por 2 o impar
// Analisis de requerimientos:
// Entrada: numero(leer), residuo(proceso)
// Proceso: residuo=numero%2
//         si residuo==0 entonces
//         escribir numero+"es par"
//         sino
//         escribir numero+"es impar"
//         finsi
// Salida: mostrar el mensaje
// Seupdocodigo
// Algoritmo cociente
//   declarar numero, residuo
//   escribir "ingrese numero"
//   leer numero
//   residuo=numero%2
//        si residuo==0 entonces
//         escribir numero+"es par"
//         sino
//         escribir numero+"es impar"
// FinAlgoritmo
const read = require('prompt-sync')();

function residuo(){
   let numero, residuo
   numero = +read("ingrese numero:")
  residuo = numero%2
   if (residuo==0){
    console.log(numero+" es par")
   }
   else{
    console.log(numero+" es impar")
   }
}
residuo()
   