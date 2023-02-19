let nome1 = document.getElementById("nome1");
let nome2 = document.getElementById("nome2");
let nome3 = document.getElementById("nome3");
let arrNomes = [nome1, nome2, nome3];
let btnSalvar = document.getElementById("salvar");
let listaSalvos = document.getElementById("lista-salvos");
let msgErro = document.getElementById("msg-erro");
let msgSucesso = document.getElementById("msg-sucesso");
function camposPreenchidos() {
  if (
    nome1.value.trim() !== "" &&
    nome2.value.trim() !== "" &&
    nome3.value.trim() !== ""
  ) {
    return true;
  } else {
    return false;
  }
}

function enviaErro() {
  apagaSucesso();
  msgErro.style.display = "block";
}
function apagaErro() {
  msgErro.style.display = "none";
}
function enviaSucesso() {
  msgSucesso.style.display = "block";
}
function apagaSucesso() {
  msgSucesso.style.display = "none";
}
function preencheLista() {
  for (let i = 0; i < arrNomes.length; i++) {
    listaSalvos.innerHTML += `<p>Nome${i + 1}: <strong>${
      arrNomes[i].value
    }</strong></p>`;
  }
}
function limpaLista() {
  listaSalvos.innerHTML = "";
}

function limpaCampos() {
  nome1.value = "";
  nome2.value = "";
  nome3.value = "";
}
function salvar() {
  if (camposPreenchidos()) {
    apagaErro();
    limpaLista();
    preencheLista();
    enviaSucesso();
    limpaCampos();
  } else {
    enviaErro();
  }
}
btnSalvar.onclick = salvar;
