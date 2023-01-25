//Importación de clases
import {Cliente} from "./cliente.js";
import {cuentaAhorro} from "./cuentaAhorro.js";
import {CuentaCorriente} from "./cuentaCorriente.js";
import {cuenta} from "./cuenta.js";


// Definir clientes

const cliente = new Cliente('Leonardo','13804050','123224');
const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');
console.log(cuentaDeLeonardo);


const cliente2 = new Cliente('Maria','16979808','8989');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');


const cuentaAhorroLeonardo=new cuentaAhorro(cliente,'987345','001',0);
console.log(cuentaAhorroLeonardo);
