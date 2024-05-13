// 16. Solicitar al usuario un caracter y mostrar si es una voca o consonante
// Bosquejo
// ENT: caracter(leer)
// PRO: Si (caracter==='a' || caracter==='e' || caracter==='i'|| caracter==='o' || caracter==='u') Entonces
// Escribir "Su caracter es una vocal"
// Sino Si (caracter >='a' && caracter <='z') Entonces
// Escribir "Su caracter es una consonante"
// Sino Entonces
// Escribir "Su caracter no es valido"
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
let caracter= read("Ingrese un caracter")
if (caracter==='a' || caracter==='e' || caracter==='i'|| caracter==='o' || caracter==='u'){
    console.log("Su caracter es una vocal")
}
else if (caracter >='a' && caracter <='z'){
    console.log("Su caracter es una consonante")
}
else {
console.log("Su caracter no es valido")
}