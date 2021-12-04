import {Salgada} from "./Salgada.js";
import { Doce } from "./Doce.js";

const salgada1 = new Salgada();
salgada1.marca = "mabel";
salgada1.descricao = "cream cracker"; 
salgada1.estoque = 10;

const doce1 = new Doce();
doce1.descricao = "cream cracker"; 
doce1.marca = "mabel";
doce1.estoque = 2;

salgada1.estoque += 2;
doce1.adicionar(10);
doce1.retirar(10);

console.log(salgada1, doce1);

