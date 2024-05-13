//14. Solicitar al usuario un numero y mostrar si es positivo o negativo
// Bosquejo
// ENT: numero(leer);
// PRO: Si numero>0 Entonces
// Escribir "Su numero es positivo"
// Sino
// Escribir "Su numero es negativo"
// SAL: mostra el mensaje
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
if (numero>0){
    console.log("Su numero es positivo")
}
else {
    console.log("Su numero es negativo")
}