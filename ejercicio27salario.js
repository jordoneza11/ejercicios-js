// Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento 
// analisis de requerimientos
// entrada: sueldo(leer), incremento(calculado), sueldoincrementado(calcular)
// preceso: si sueldo<500 entonces
//          incremento = sueldo*0.05
//          sino
//           incremento=0
//          finsi
//  sueldoincrementado= sueldo*12+incremento
// salida: escribir ("su sueldo ha incrementado ahora ha "+sueldoincrementado)

const read = require('prompt-sync')();

function sueldo(){
    let s, i, sui, sa, smi
    s = +read("ingrese su sueldo actual:")
   if (s<500){
    sa = s*12
    i = sa*0.05
    sui = sa+i
    //i=s*12*0.05
    //sui=s*12+i
//console.log("su sueldo ha incrementado ahora ha "+sui)
   }else{
    i=0
    console.log("su sueldo ya no se puede incrementar")
   }
   smi=sui/12
console.log("su sueldo mensual ahora ha incrementado ha "+smi+", con un sueldo anual de "+sui)
}
sueldo()
