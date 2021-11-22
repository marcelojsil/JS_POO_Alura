
import { Cliente } from "./Cliente";
import { contaCorrente } from "./ContaCorrente";

const cliente1 = new Cliente();
cliente1.nome = "Marcelo";
cliente1.cpf = 21898848882;
const conta1 = new contaCorrente();
conta1.agencia = 1001;
conta1.saldo = 100; 

const cliente2 = new Cliente();
cliente2.nome = "Thenili";
cliente2.cpf = 36973379800;
const conta2 = new contaCorrente();
conta2.agencia = 1001;
conta2.saldo = 50; 

console.log(conta1);
conta1.depositar(200);
conta1.sacar(50);
console.log(conta1);