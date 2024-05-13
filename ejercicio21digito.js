// Solicitar al usuario un número y mostrar si es un número de un solo dígito
// Analisis de requerimientos:
// Entrada: numero(leer), digitos(proceso)
// Proceso: si digitos = numero>0 && numero<9
//          entonces
//          escribir "El numero+numero+" es un numero de un solo digito"
//          sino
//          escribir "El numero+numero+" no es un numero de un solo digito"
//          finsi
//          escribir "Gracias por su visita"
// Salida: mostar el mansaje

const read = require('prompt-sync')();

function digitos(){
   let numero, digitos
   numero = +read("Ingrese un numero:")
   if(digitos = numero>=0 && numero<=9){
    console.log("El numero "+numero+" es un numero de un solo digito")
   }
   else {
    console.log("El numero "+numero+" no es un numero de un solo digito")
   }
   console.log("Gracias por su visita")

}
digitos()