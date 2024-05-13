//Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
//precio sea mayor $100.
// Analisis de requerimientos
// Entrada: precioproducto(leer), descuento(leer), preciofinal(calcular)
// Proceso: si precioproducto>100 entonces
//          preciofinal = precioproducto-descuento/100*precioproducto
//          escribir ("aplicando el descuento el precio del producto es: "+pf)
//          sino
//          escribir ("En este producto no hay descuento, entoces el precio final es: "+pp)
// Salida: preciofinal
const read = require('prompt-sync')();

function descuento(){
    let pp, d, pf
   pp = read("ingrese el precio del producto:")
   if (pp>100){
    d = read ("ingrese el de descuento descuento:")
    pf=pp-d/100*pp
    console.log ("aplicando el descuento el precio del producto es: "+pf)
   }else {
    console.log("En este producto no hay descuento, entoces el precio final es: "+pp)
    }
   }
   descuento()
