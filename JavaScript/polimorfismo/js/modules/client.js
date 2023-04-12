import { order } from "./product";

export class client {
  #id = new Number();
  name;
  address;
  zipCode;
  active;
  constructor(name = "", address = "", zipCode = "", active = Boolean) {
    this.name = name;
    this.address = address;
    this.zipCode = zipCode;
    this.active = active;
  }
}

export class orderDelivery extends order {
  constructor(name, address, zipCode, active) {
    super();
    this.cliente = new client(name, address, zipCode, active);
  }
  calcularShipping(zipCode) {
    if (zipCode[0] <= 4) {
      return 5;
    } else if (zipCode[0] <= 9) {
      return 10;
    } else {
      throw new Error("Cep invalido");
    }
  }
}
