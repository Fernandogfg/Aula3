const API_URL = "http://localhost:3000/";
const btnCadastrar = document.getElementById("cadastrar");
const inputMatricula = document.getElementById("matricula");
const inputNome = document.getElementById("nome");

btnCadastrar.addEventListener("click", function () {

    if(inputMatricula.value.trim() == '' || inputNome.value.trim() == ''){
        alert('Preencha os campos corretamente')
    }
  fetch(`${API_URL}aluno`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      matricula: inputMatricula.value.trim(),
      nome: inputNome.value.trim(),
    }),
  }).then((response) => {
    if(!response.ok){
        throw new Error('Matrícula já cadastrada.')
    }
    alert('Aluno cadastrado com sucesso')
    inputNome.value = ''
    inputMatricula.value = ''
  })
});
