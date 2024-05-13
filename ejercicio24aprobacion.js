// Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
//considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
//40 y menor a 60 se queda para recuperación caso contario pierde la materia.
//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Analisis de requerimientos:
// Entrada: nota(leer), determinar(proceso)
// Proceso: si nota>=60
//          entoces
//          escribir "Usted ha aprobado"
//          sino si
//          nota>40 && nota<60
//          escribir "Usted tiene la oportunidad de hacer recuperacion"
//          sino
//          escribir "Usted ha reprobado"
//          finsi
// Salida: mostrar el mensaje

const read = require('prompt-sync')();

function aprobadoreprobado(){
   let nota, determinar
   nota = +read("Ingrese su nota de examen:")
   if (nota>=60){
    console.log("Usted ha aprobado")
   }
   else if (nota>=40 && nota<60) {
    console.log("Usted  tiene la oportunidad de hacer recuperacion")
   }
   else{
    console.log ("Usted ha reprobado")
   }
}
aprobadoreprobado()