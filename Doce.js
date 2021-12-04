export class Doce {
    marca;
    descricao;
    estoque;

    
    
    adicionar(valor){
        if(this.estoque >= 0){
            this.estoque += valor;
        }
    }

    retirar(valor){
        if(valor <= this.estoque){
            this.estoque -= valor;
        }
        else { this.estoque = `Apenas ${this.estoque} no estoque!` }
    }
}