import mamifero from "./mamiferos.js";

export default class felino extends mamifero{

    constructor(nome, cauda, mia){
        super(nome, cauda)
        this.mia = mia;
    }
}