let resultado = document.getElementById("resultado");
let inputPesquisa = document.getElementById("pesquisa");
let pesquisaBtn = document.getElementById("pesquisa-btn");
let limparBtn = document.getElementById("limpar-btn");

const listaUsuarios = [
  {
    id: 1,
    nome: "Thiago Pereira",
    sexo: "Masculino",
    idade: 20,
    email: "fulanodetal@termail.com",
  },
  {
    id: 2,
    nome: "Thaís Lins",
    sexo: "Feminino",
    idade: 19,
    email: "thaisdetal@gtemail.com",
  },
  {
    id: 3,
    nome: "Mariana Ferreira",
    sexo: "Feminino",
    idade: 25,
    email: "marianaferreira@tailme.com",
  },
  {
    id: 4,
    nome: "Pedro Ivo Silva",
    sexo: "Feminino",
    idade: 28,
    email: "Manuelatrait@gteprmail.com",
  },
];

let listarUsuario = function (lista) {
  let trTds = "";
  lista.forEach((usuario) => {
    trTds += `<tr><td>${usuario.id}</td><td>${usuario.nome}</td><td>${usuario.sexo}</td><td>${usuario.idade}</td><td>${usuario.email}</td></tr>`;
  });
  resultado.innerHTML = trTds;
};
addEventListener("load", () => listarUsuario(listaUsuarios));

function mostraPesquisa() {
  let trTds = "";
  let listaFiltrada = listaUsuarios.filter(
    (usuario) =>
      usuario.nome
        .toLocaleLowerCase()
        .trim()
        .slice(0, inputPesquisa.value.length) == inputPesquisa.value
  );

  listaFiltrada.forEach((usuario) => {
    trTds += `<tr><td>${usuario.id}</td><td>${usuario.nome}</td><td>${usuario.sexo}</td><td>${usuario.idade}</td><td>${usuario.email}</td></tr>`;
  });
  resultado.innerHTML = trTds;
}

pesquisaBtn.addEventListener("click", function () {
  mostraPesquisa();
});
limparBtn.addEventListener('click', function() {
  listarUsuario(listaUsuarios)
  inputPesquisa.value = ""
})