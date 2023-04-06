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
  constructor(nome) {
    this.nome = nome;
    this.#id = contador();
  }
}

const novoAluno = new aluno("Fer");
const novoAluno2 = new aluno("Jao");
console.log(novoAluno);
console.log(novoAluno2);
