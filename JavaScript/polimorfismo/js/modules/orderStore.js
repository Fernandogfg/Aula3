import { order } from "./product";

export class OrderStore extends order{
    tableNumber = 0

    constructor(tableNumber){
        super()
        this.tableNumber = tableNumber
    }
    calcularShipping(){
        return 0
    }
}