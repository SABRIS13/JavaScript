//Importación de clases
import {CuentaCorriente} from "./cuentaCorriente.js";
import {Cliente} from "./cliente.js";


// Definir clientes

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '13804050';
cliente.rutCliente = '123224';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;



cuentaDeLeonardo.depositoEnCuenta(250);
var saldo = cuentaDeLeonardo.verSaldo(); 
console.log('El Saldo actual (CuentaLeonardo) '+ saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '16979808';
cliente2.rutCliente = '8989';

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

/* Movimientos de cuenta saldo
cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);
const saldoMaria = cuentaDeMaria.verSaldo();


saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual de María ' +saldoMaria);
console.log('El saldo actual de Leonardo ' +saldo);
*/
if (cuentaDeMaria.cliente)
    console.log(cuentaDeMaria.cliente);
else
    console.log(cuentaDeMaria);
