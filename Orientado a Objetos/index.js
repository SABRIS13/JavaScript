//Importación de clases
import {CuentaCorriente} from "./cuentaCorriente.js";
import {Cliente} from "./cliente.js";


// Definir clientes

const cliente = new Cliente('Leonardo','13804050','123224');
const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');
console.log(cuentaDeLeonardo.cliente);


const cliente2 = new Cliente('Maria','16979808','8989');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');
console.log(cuentaDeMaria.cliente);


cuentaDeLeonardo.depositoEnCuenta(250);
var saldo = cuentaDeLeonardo.verSaldo(); 
console.log('El Saldo actual (CuentaLeonardo) '+ saldo);

/* Movimientos de cuenta saldo
cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);
const saldoMaria = cuentaDeMaria.verSaldo();


saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual de María ' +saldoMaria);
console.log('El saldo actual de Leonardo ' +saldo);

if (cuentaDeMaria.cliente)
    console.log(cuentaDeMaria.cliente);
else
    console.log(cuentaDeMaria);
*/

//Cantidad de cuentas por cliente
console.log(CuentaCorriente.cantidadCuentas)
