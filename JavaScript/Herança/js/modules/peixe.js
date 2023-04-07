import animal from "./animal.js";

export default class peixe extends animal{
    possuiEscamas
    possuiBarbatana
    constructor(nome, aguaHabitat){
        super(nome)
        this.aguaHabitat = aguaHabitat
        this.possuiEscamas = possuiEscamas
        this.possuiBarbatana = possuiBarbatana
    }
}