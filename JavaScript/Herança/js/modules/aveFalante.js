import ave from "./ave.js";


export default class aveFalante extends ave{

    constructor(nome, tamanhoBico, vocabulario = []){
        super(nome, tamanhoBico)
        this.vocabulario = vocabulario;
    }
}