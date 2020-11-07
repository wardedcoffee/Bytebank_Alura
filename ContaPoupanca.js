import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {  //Herança
  constructor(saldoInicial, cliente, agencia) {
      super(saldoInicial, cliente, agencia); //Herança
  }
}
