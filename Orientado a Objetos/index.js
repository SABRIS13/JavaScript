//Importación de clases
import {Cliente} from "./cliente.js";
import {cuentaAhorro} from "./Cuentas/cuentaAhorro.js";
import {CuentaCorriente} from "./Cuentas/cuentaCorriente.js";
import {CuentaNomina } from './Cuentas/cuentaNomina.js';
import {empleado} from './Empleados/empleado.js';
import {gerente} from './Empleados/gerente.js';
import {director} from './Empleados/director.js';

const empleadoSara =new empleado('Sara','4567',10000);
const gerenteJuan = new gerente("Juan Rivera",'4567',12000);
const directorFer =new director("Fernando Orlando",'2345',15000);

console.log(empleadoSara.verBonificacion());
console.log(gerenteJuan.verBonificacion());
console.log(directorFer.verBonificacion());
/*
const empleado1 = new empleado('Juan Perez','1234343',10000);
empleado1.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado1,'12345'));

const gerente1 = new gerente('Pedro Rivas','232344',12000);
gerente1.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente1,'655'));

//const director = new Director('Elena Moreno','232323',15000);

//const cliente1 = new Cliente('Leonardo','13804050','123224');
//cliente1.asignarClave('01111');
//console.log(SistemaAutenticacion.login(cliente1,'01111'));
*/