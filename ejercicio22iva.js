// Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
// y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
// al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.
// Analisis de requerimientos
// Entrada: totalfactura(leer), año(leer), pagototal(calcular), iva(calculado)
// Proceso: si año<2024 entonces
//           pagototal=totalfactura+0.12*totalfactura
//          sino 
//            pagototal=totalfactura+0.15*totalfactura
//Salida: pagototal 
const read = require('prompt-sync')();

function IVA(){
  let totalfactura, año, pagototal
  totalfactura = +read("ingrese el total de su factura:")
  año = +read("ingrese el año de compra:")
if (año<2024){
   console.log (pagototal=totalfactura+0.12*totalfactura)
}
else{ 
    console.log (pagototal=totalfactura+0.15*totalfactura)
}
}
IVA()