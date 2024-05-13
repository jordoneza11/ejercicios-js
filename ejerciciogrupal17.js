// 17. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
// Bosquejo
// ENT: nombre1(leer); nombre2(leer)
// PRO: Si nombre1>nombre2 Entonces
// Escribir "El primer nombre es mayor"
// Sino Si nombre1<nombre2 Entonces
// Escribir "El primer nombre es menor que el segundo"
// Sino
// Escribir "Sus nombres son iguales"
// FinSi
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
nombre1=read("Ingrese un nombre")
nombre2=read("Ingrese otro nombre")
if (nombre1>nombre2){
    console.log("El primer nombre es mayor")
}
else if (nombre1<nombre2){
    console.log("El primer nombre es menor que el segundo")
}
else {
    console.log("Sus nombres son iguales")
}