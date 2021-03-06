import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  //Herança
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia); //Herança
  }

  sacar(valor){
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}
