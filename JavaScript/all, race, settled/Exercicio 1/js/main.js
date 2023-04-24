import { EnviarMensagemServers, ProcessarArquivos } from "./functions.js";
const btnEnviar = document.getElementById("enviar");
const mensagem = document.getElementById("mensagem");
const PrimeiraResposta = document.getElementById("primeiraResposta");
btnEnviar.addEventListener("click", function () {
  try {
    if (mensagem.value.trim() == "") {
      throw new Error("Campo mensagem é obrigatorio");
    } else {
      Promise.race(EnviarMensagemServers(mensagem.value))
        .then((response) => {
          mensagem.value = "";
          PrimeiraResposta.style.color = "green";
          PrimeiraResposta.innerHTML = response;
          setTimeout(()=> PrimeiraResposta.innerHTML = '' , 3000)
        })
        .catch((err) => {
          mensagem.value = "";
          
          PrimeiraResposta.style.color = "red";
          PrimeiraResposta.innerHTML = err;
          setTimeout(()=> PrimeiraResposta.innerHTML = '' , 3000)
        });
    }
  } catch (err) {
    alert(err);
  }
});
