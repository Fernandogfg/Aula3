import { animal } from "./animal.js";

export default class ave extends animal{
    velocidadeVoo = 0
    quantidadeAsas = 2
    constructor(nome, tamanhoBico){
        super(nome)
        this.tamanhoBico = tamanhoBico 
        this.velocidadeVoo = velocidadeVoo
        this.quantidadeAsas = quantidadeAsas
    }
}