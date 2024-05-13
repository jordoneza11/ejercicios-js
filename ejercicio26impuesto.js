//Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
//en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
//de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
//aplicar el impuesto.
// analisis de requerimientos
// Entrada: precio(leer), impuesto(leer), preciofianl(calcular)
// Proceso: si precio>200 entonces
//          impuesto= precio*impuesto/100
//         sino 
//          impuesto=0
//         finsi
//       preciofinal= precio+impuesto
// escrbir preciofinal
const read = require('prompt-sync')();

function impuesto(){
    let p, i, pf
    p = +read("ingrese el precio del articulo:")
    if(p>200){
        i = +read("ingrese el porcentaje de impuesto:")
      i=p*i/100
    }else{
       i=0
    }
    pf=p+i
    console.log(pf)
}
impuesto()