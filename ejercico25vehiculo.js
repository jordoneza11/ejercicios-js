//Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
//Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
//el precio de venta. mostrar el precio final incluyendo el 15% del IVA.
// Analisis de requerimientos:
// Entrada:precioVenta(leer), anioFabricacion(leer), descuento(calculado), precioFinal(proceso)
// Proceso: si anioFabricacion>=2020  &&  anioFabricacion<=2023
//                   entonces
//          preciodescuento=precioVenta-0.05*precioVenta     
//          sino
//          preciodescuento=precioVenta+0*precioVenta
//          finsi
//          iva = preciodescuento*0.15
//          precioFinal = preciodescuento+iva
// Salida: Precio Final
const read = require('prompt-sync')();

function ventaVehiculo(){
    let precioVenta, anioFabricacion, preciodescuento, precioFinal
    precioVenta = parseFloat(read("Ingrese el Precio de Venta:"))
    anioFabricacion = parseFloat(read("Ingrese Año de fabricacion:"))
    if (anioFabricacion>=2020  &&  anioFabricacion<=2023){
        preciodescuento = precioVenta-0.05*precioVenta
      
    }   
    else{
        preciodescuento = precioVenta-0*precioVenta
    }
    iva= preciodescuento*0.15
    precioFinal = preciodescuento+iva
    console.log(precioFinal)
}
    ventaVehiculo()
    