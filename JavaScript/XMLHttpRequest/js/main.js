const API_URL = "https://cdn.apicep.com/file/apicep/";
const inputCep = document.getElementById("cep");
const request = new XMLHttpRequest();
const msgLoading = document.getElementById("loading");
const msgErro = document.getElementById("message");
const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const uf = document.getElementById("uf");
console.log(msgErro);
inputCep.addEventListener("blur", function () {
  request.open("GET", `${API_URL}${inputCep.value}.json`, true);
  request.onreadystatechange = () => {
    if (request.readyState === 1) {
      msgLoading.style.display = "block";
    }
    if (request.readyState === 4) {
      msgLoading.style.display = "none";
      if (request.status === 200) {
        msgErro.style.display = "none;";
        let retorno = JSON.parse(request.responseText);
        logradouro.innerHTML = ` ${retorno.address}`;
        bairro.innerHTML = ` ${retorno.district}`;
        uf.innerHTML = ` ${retorno.state}`;
      } else {
        msgErro.style.display = "block;";
        console.log("erro");
      }
    }
  };
  request.send();
});
