/* 
1 - Validar se todos os campos do formulário estão preenchidos
4 - Criar um objeto produto com as propriedades descritas no form
5 - Ao clicar no cadastrar, preencher uma posição no array com o objeto produto
 e exibir uma mensagem de produto cadastrado com sucesso
6 - Limpar o formulário após a inserção do dado no array
7 - Ao clicar no concluir cadastramento, escoder o form e exibir a lista
8 - Percorrer o array e injetar todos os registros no HTML
Atividade secundária
1 - Limitar quantidade de caracteres do nome e descrição
2 - Realmente quer concluir o cadastramento
3 - Validar se o código digitado já existe
*/

/* Identificar os elementos no html através do ID */
let codigoProduto = document.getElementById("codigo-produto");
let nomeProduto = document.querySelector("#nome-produto");
let descricaoProduto = document.getElementById("descricao-produto");
let precoProduto = document.querySelector("#preco-produto");
let botaoSalvar = document.getElementById("botao-salvar");
let botaoConcluir = document.getElementById("botao-concluir");
let sectionCadastramento = document.getElementById("cadastramento-produtos");
let sectionListaProdutos = document.getElementById("listagem-produtos");
let formulario = document.querySelector("form");
let produto = {
  codigo: 0,
  nome: "",
  descricao: "",
  preco: 0,
};
let listaProdutos = [];

function camposPreenchidos() {
  if (
    codigoProduto.value !== "" &&
    nomeProduto.value !== "" &&
    descricaoProduto.value !== "" &&
    precoProduto.value !== ""
  ) {
    return true;
  } else {
    // Senao
    return false;
  }
}

function liparFormulario() {
  codigoProduto.value = "";
  nomeProduto.value = "";
  descricaoProduto.value = "";
  precoProduto.value = "";
}

function salvarProduto() {
  let produtoCriado = { ...produto };
  produtoCriado.codigo = codigoProduto.value;
  produtoCriado.nome = nomeProduto.value;
  produtoCriado.descricao = descricaoProduto.value;
  produtoCriado.preco = precoProduto.value;

  if (listaProdutos.length == 0) {
    listaProdutos.push(produtoCriado);
    formulario.reset();
    console.log(listaProdutos);
  } else {
    let igualdade = 0;
    for (let produto of listaProdutos) {
      if (produto.codigo == produtoCriado.codigo) {
        igualdade++;
      }
    }
    if (igualdade == 0) {
      listaProdutos.push(produtoCriado);
      formulario.reset();
      console.log(listaProdutos);
      alert('Produto adicionado com sucesso')
    } else {
        alert('O codigo informado ja existe, por favor informe um codigo novo')
    }
  }
}

botaoSalvar.onclick = () => {
  if (camposPreenchidos()) {
    // Se for true
    salvarProduto();
  } else {
    // senao
    console.log("Campos não preenchidos");
  }
};
