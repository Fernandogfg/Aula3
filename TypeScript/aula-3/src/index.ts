const inputData = require("prompt-sync")();

type Data = {// criando interface
  cpf: string;
  nome: string;
  idade: number;
  estadoCivil: string;
  endereco: string;
  cidade: string;
  estado: string;
};


let users = [];
function getData() {
  const cpf = inputData("Informe seu CPF (apenas números)");
  if(cpf.length === 11 && !isNaN(Number(cpf))){
    const nome = inputData('Informe seu nome: ')
    const idade = Number(inputData('Informe sua idade: '))
    const estadoCivil = inputData('Informe seu estado civil: ')
    const endereco = inputData('Informe seu endereço: ')
    const cidade = inputData('Informe sua cidade: ')
    const estado = inputData('Informe seu estado: ')

    const newUser: Data={//criando novo usuario com a interface
        cpf,
        nome,
        idade,
        estadoCivil,
        endereco,
        cidade,
        estado,
    }
    users.push(newUser)//adicionando novo usuario na lista

    console.log('Novo usuário adicionado com sucesso');
  }else{
    console.log('Erro ao adicionar usuário');
  }
}
getData()