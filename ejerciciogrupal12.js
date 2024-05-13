// 12. Solicitar al usuario su edad y mostrar si es mayor o menor de edad. 
// Bosquejo
// ENT: numero(leer)
// PRO: Si edad>18 Entonces
// Escribir "Usted es mayor de edad"
// Sino
// Escribir "Usted es menor de edad"
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
edad=read("Ingrese su edad")
if (edad>18){
    console.log("Usted es mayor de edad")
}
else{
    console.log("Usted es menor de edad")
}