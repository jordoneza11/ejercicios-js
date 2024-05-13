// 7. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor
// del numero3 Y si el numero 2 es el doble del numero4.
// Bosquejo
// ENT: numero1(leer); numero2(leer); numero3(leer); numero4(leer)
// PRO: Si numero1%numero3===0 Entonces
// Escribir "El numero1 es divisor del numero3"
// Sino
// Escribir "El numero1 no es divisor del numero3"
// Si numero2*2===numero4 Entonces
// Escribir "El numero2 es el doble del numero4"
// Sino 
// Escribir "El numero2 no es el doble del numero4"
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
numero3=read("Ingrese otro numero")
numero4=read("Ingrese otro numero")
numero1=parseInt(numero1)
numero2=parseInt(numero2)
numero3=parseInt(numero3)
numero4=parseInt(numero4)
if (numero1%numero3===0){
    console.log("El numero1 es divisor del numero3")
}
else{
    console.log("El numero1 no es divisor del numero3")
}
if (numero2*2===numero4){
    console.log("El numero2 es el doble del numero4")
}
else{
    console.log("El numero2 no es el doble del numero4")
}