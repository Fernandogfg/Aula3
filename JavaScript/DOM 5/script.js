let nome = document.getElementById("nome");
let email = document.getElementById("email");
let tel = document.getElementById("tel");
let btnSalvar = document.getElementById("salvar");
let btnConcluir = document.getElementById("concluir");
let cadastradoClientes = document.getElementById("cadastro-clientes");
let mensagemError = document.getElementById("error");
let mensagemSucesso = document.getElementById("sucesso");
let listaSalva = document.getElementById("lista-salva");
let form = document.getElementById("form");

let listaClientes = [];

function validaCampos() {
  if (nome.value == "" || email.value == "" || tel.value == "") {
    return false;
  } else {
    return true;
  }
}

function preencheLista() {
  let cliente = {
    nomeCliente: "",
    emailCliente: "",
    telefoneCliente: "",
  };
  cliente.nomeCliente = nome.value;
  cliente.emailCliente = email.value;
  cliente.telefoneCliente = tel.value;
  listaClientes.push(cliente);
  console.log(listaClientes);
}

function msgError() {
  mensagemSucesso.setAttribute("class", "inativo");
  mensagemError.setAttribute("class", "");
}
function msgSucesso() {
  mensagemError.setAttribute("class", "inativo");
  mensagemSucesso.innerHTML = `O cliente ${listaClientes.length} foi cadastrado!`;
  mensagemSucesso.setAttribute("class", "");
}

function limpaCampos() {
  nome.value = "";
  email.value = "";
  tel.value = "";
}

function exibeLista() {
  form.setAttribute("class", "inativo");
  for (let i = 0; i < listaClientes.length; i++) {
    listaSalva.innerHTML += `<li>Cliente ${i + 1}<ul><li>${
      listaClientes[i].nomeCliente
    }</li><li>${listaClientes[i].emailCliente}</li><li>${
      listaClientes[i].telefoneCliente
    }</li></ul></li></br>`;
  }
  cadastradoClientes.setAttribute("class", "");
}

btnSalvar.addEventListener("click", function() {
  if (validaCampos()) {
    preencheLista();
    msgSucesso();
    limpaCampos();
  } else {
    msgError();
  }
});

btnConcluir.addEventListener("click", function() {
  if(listaClientes.length !== 0){
    exibeLista()
  }else{
    msgError()
  }
  
});
