export class cuentaAhorro{
    #cliente;
    #saldo;

    constructor(cliente,saldo,numero,agencia){
       this.numero=numero;
       this.agencia=agencia; 
       this.#cliente=cliente;
       this.#saldo=saldo;
    
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

}