const elementos = ["nome", "idade", "endereco", "telefone"];
const btnSalvar = document.getElementById("salvar");
const mensagem = document.getElementById("message");

function validaCampos(lista) {
  let camposInvalidos = [];
  for (let id of lista) {
    let elemento = document.getElementById(`${id}`);
    if (elemento.value.trim() == "") {
      camposInvalidos.push(elemento);
    }
  }
  const promessa = new Promise((resolve, reject) => {
    if (camposInvalidos.length == 0) {
      resolve("Dados salvos com sucesso");
    }
    reject(camposInvalidos);
  });
  return promessa;
}

btnSalvar.addEventListener("click", function () {
  validaCampos(elementos)
    .then((response) => {
      alert(response);
    })
    .catch((error) => {
      mensagem.innerHTML = "";
      for (let campo of error) {
        mensagem.innerHTML += `O campo ${campo.name} é obrigatório <br>`;
      }
    });
});
