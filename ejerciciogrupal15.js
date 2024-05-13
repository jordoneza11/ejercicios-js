// 15. Pedir al usuario dos numero y mostrar si son iguales o diferentes
// Bosquejo
// ENT: numero1(leer); numero2(leer)
// PRO: Si numero1===numero2 Entonces
// Escribir "Sus numeros son iguales"
// Sino
// Escribir "Sus numeros no son iguales"
// FinSi
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
if (numero1===numero2){
    console.log("Sus numeros son iguales")
}
else {
    console.log("Sus numeros no son iguales")
}