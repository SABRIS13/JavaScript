//Importación de clases
import {Cliente} from "./cliente.js";
import {cuentaAhorro} from "./cuentaAhorro.js";
import {CuentaCorriente} from "./cuentaCorriente.js";


// Definir clientes

const cliente = new Cliente('Leonardo','13804050','123224');
const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');
console.log(cuentaDeLeonardo);


const cliente2 = new Cliente('Maria','16979808','8989');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');


const cuentaAhorroLeonardo=new cuentaAhorro(cliente,'987345','001',0);
console.log(cuentaAhorroLeonardo);

//Acciones
console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(cuentaAhorroLeonardo.verSaldo());