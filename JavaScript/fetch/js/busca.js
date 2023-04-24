const API_URL = "http://localhost:3000/";
const inputMatricula = document.getElementById("matricula");
const campoNome = document.getElementById("nome-aluno");
const campoMatricula = document.getElementById("matricula-aluno");
const btnBuscarMat = document.getElementById("btnBuscarMatricula");
const btnBuscar = document.getElementById("btnBuscar");
const tipoBusca = document.getElementsByName("tipo-busca");
const tipoBuscaNome = document.getElementById("nome");
const optBuscaTodos = document.getElementById("opt-busca-todos");
const optBuscaNome = document.getElementById("opt-busca-nome");
const filterNome = document.getElementById("pn-filter-nome");
const dados = document.getElementById("dados");
const corpoDados = document.getElementById("corpoDados");
btnBuscarMat.addEventListener("click", function () {
  if (inputMatricula.value.trim() == "") {
    throw new Error(alert("Porfavor preencha o campo matricula"));
  } else {
    campoNome.innerHTML = "";
    campoMatricula.innerHTML = "";
    fetch(`${API_URL}aluno/${inputMatricula.value.trim()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Matricula Não Encontrada");
      })
      .then((response) => {
        campoNome.innerHTML = response.nome;
        campoMatricula.innerHTML = response.matricula;
      })
      .catch((error) => {
        alert(error);
      });
  }
});

function buscaTodos() {
  fetch(`${API_URL}aluno/todos`)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      throw new Error("Nenhuma Informação encontrada");
    })
    .then((response) => {
      for (let aluno of response) {
        corpoDados.innerHTML += `<tr><td>${aluno.nome}</td><td>${aluno.matricula}</td></tr>`;
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function buscaNome() {
  fetch(`${API_URL}aluno/search?nome=${tipoBuscaNome.value}`)
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
      throw new Error("Nenhuma Informação encontrada");
    })
    .then((response) => {
      for (let aluno of response) {
        corpoDados.innerHTML += `<tr><td>${aluno.nome}</td><td>${aluno.matricula}</td></tr>`;
      }
    })
    .catch((error) => {
      alert(error);
    });
}

optBuscaTodos.addEventListener("click", function () {
  filterNome.style.display = "none";
});
optBuscaNome.addEventListener("click", function () {
  filterNome.style.display = "block";
});

btnBuscar.addEventListener("click", function () {
  let busca = "";
  for (let tipo of tipoBusca) {
    if (tipo.checked) {
      tipo.value == "T" ? buscaTodos() : buscaNome();
    }
  }
});
