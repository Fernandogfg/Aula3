function criarContadorNumerico(n) {
    return function () {
      return n++;
    };
  }
  
  const contador = criarContadorNumerico(1);
  
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
    #id = 0;
    #idade;
    constructor(nome, dataNascimento) {
        if(!dataNascimento){
            throw new Error('Insira uma data de nascimento')
        }
      this.nome = nome;
      this.#id = contador();
      this.data_nascimento = new Date(dataNascimento)
    }

    get idade(){
        let dataAtual = new Date()
        return Number(dataAtual.getFullYear()) - Number(this.data_nascimento.getFullYear())
    }
  }
  
  const novoAluno = new aluno("Fer", '1999-10-26');
  const novoAluno2 = new aluno("Jao", '1994-10-26');
  console.log(novoAluno.idade);
  console.log(novoAluno2.idade);
  