const btnSalvar = document.getElementById("salvar");
const mensagem = document.getElementById("message");

const arrIds = ["nome", "idade", "endereco", "telefone"];

const validaCampos = async function (ids) {
  try {
    await new Promise((resolve, reject) => {
      let erroIds = [];
      ids.filter((id) => {
        let campo = document.getElementById(`${id}`);
        if (campo.value.trim().length == 0) {
          erroIds.push(id);
        }
      });
      if (erroIds.length == 0) {
        resolve();
      } else {
        reject(erroIds);
      }
    });
    alert("Salvo com sucesso");
  } catch (campoInvalido) {
    const camposParaMsg = campoInvalido.join(", ");
    mensagem.innerHTML = `O${campoInvalido.length < 2 ? "" : "s"} campo${
      campoInvalido.length < 2 ? "" : "s"
    } ${camposParaMsg}`;
  }
};
btnSalvar.addEventListener("click", () => validaCampos(arrIds));

// let erroIds = []

//     const myPromisse = new Promise((resolve, reject, )=>{
//         const campo = document.getElementById(`${id}`)
//         if(campo.value == ''){
//             erroIds.push(id)

//         }
//     }).then()
//     for(let i = 0; i< ids.length; i++){
//         myPromisse(ids[i])
//     }
