// 6. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad
// del número 2; Y si el numero 3 es divisor del numero4.
// Bosquejo
// ENT: numero1(leer); numero2(leer); numero3(leer); numero4(leer)
// PRO: Si numero1*2===numero2 Entonces
// Escribir "El numero1 es mitad del numero2"
// Sino
// Escribir "El numero1 no es mitad del numero2"
// Si numero4%numero3===0 Entonces
// Escribir "Sus numeros son divisibles"
// Sino 
// Escribir "Sus numeros no son divisibles"
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
if (numero1*2===numero2){
    console.log("El numero1 es mitad del numero2")
}
else{
    console.log("El numero1 no es mitad del numero2")
}
if (numero4%numero3===0){
    console.log("Sus numeros son divisibles")
}
else{
    console.log("Sus numeros no son dividbles")
}