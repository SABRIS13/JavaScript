export class CuentaCorriente
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