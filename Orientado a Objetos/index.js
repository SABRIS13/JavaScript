
//Definir Clases
class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    saldo;
    agencia;

    constructor(){
        this.saldo=0;
        this.numero="";
        this.agencia="";
    }
    
    depositoCuenta(valor){
        if(valor>0)
        this.saldo += valor;
        console.log("El saldo total es de: " +this.saldo);
    }

    retiroCuenta(valor){
        if (valor<=this.saldo && valor>0)
            this.saldo -= valor;
            console.log("El saldo actual es de: " +this.saldo);
    }

    verSaldo(){
        console.log("El saldo actual es de: " +this.saldo);
    }
}

// Definir clientes
const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.rutCliente="V167588";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 5000;
cuentaCorriente1.agencia=1001;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";
cliente2.rutCliente="V156746";


const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia=1004;

//Movimientos

cuentaCorriente2.verSaldo()
