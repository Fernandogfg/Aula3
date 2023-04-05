class avaliacao {
  tipo = "";
  nota = 0;
  observacao = "";
  constructor(tipo) {
    this.tipo = tipo;
   
  }
}
class aluno {
  nome = "";
  endereço = "";
  data_nascimento = new Date();
  email = "";
  telefone = "";
  avaliacao = [];
  #id = 0
  constructor(nome) {
    this.nome = nome;
  }

  geraid(){
    
        return function () {
          return this.#id = ++this.#id;
        };
      
  }
}

const aluno1 = new aluno()
console.log(aluno1);