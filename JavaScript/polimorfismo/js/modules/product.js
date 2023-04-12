export class product{
    #id = 0
    name = ''
    constructor(id, name){
        this.#id = id
        this.name = name
    }
}
export class order {
    #id = 0
    #products
    constructor(){
        this.#products = []
        this.created = new Date()
    }
    addProduct (produto){
        if(produto instanceof product){
            this.#products.push(produto)
        }else{
            throw new Error('produto invalido!')
        }
    }
    calcularShipping(){
        throw new Error('Metodo não implementado')
    }
}