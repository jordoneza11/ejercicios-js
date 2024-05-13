// 10. El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de
// sus clientes, para esto considera que:
// Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
// Si tiene tipo 2 el aumento será del $200
// Si tiene tipo 3, el aumento será del $300
// Para cualquier otro tipo será del 500
// Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
// crédito que tendrá una persona en su tarjeta considerando que después del aumento
// se tendrá que subir 10% adicionales a todas las tarjetas
// Bosquejo
// ENT: credito(leer); tipoTarjeta(leer)
// PRO: Si tipo===1 Entonces
// credito=credito+100
// Sino Si tipo===2 Entonces
// credito=credito+200
// Sino Si tipo===3 Entonces
// credito=credito+300
// Sino
// credito=credito+500
// FinSi
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
credito=read("Ingrese su credito")
credito=parseInt(credito)
tipoTarjeta=read("Ingrese su tipo de tarjeta")
if (tipoTarjeta==1){
    credito=credito+100
    
}
else if (tipoTarjeta==2){
    credito=credito+200
    
}
else if (tipoTarjeta==3){
    credito=credito+300
    
}
else {
    credito=credito+500
    
}
console.log(credito)