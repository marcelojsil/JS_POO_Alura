export class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if(this.valor >= valor){
            this.saldo -= valor;
            return valor;
        }
    };

    depositar(valor) {
        if(this.valor <= 0) {
            return;
        }
        this.saldo =+ valor;
    };
}