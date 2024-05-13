// 9. Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el
// porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del
// aumento.
// Bosquejo
// ENT: sueldo(leer); aumento(leer); incremento(calcular); sueldoFinal()
// PRO: incremento=sueldo*aumento
// sueldoFinal= sueldo+aumento
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
sueldo=read("Ingrese su sueldo")
sueldo=parseFloat(sueldo)
aumento=read("Ingrese su aumento")
aumento=parseFloat(aumento)
incremento=sueldo*aumento
sueldoFinal=sueldo+incremento
console.log(sueldoFinal)