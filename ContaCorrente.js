import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta { //Herança
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
    super(0, cliente, agencia) //Herança
    ContaCorrente.numeroDeContas += 1;
  }
}
