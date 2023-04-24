import { EnviarMensagemServers, ProcessarArquivos } from "./fakeAPI.js";
const files = []
const processar = document.getElementById('processar')
const selectArquivos = document.getElementById('arquivos')
const totalAquivos = document.getElementById('totalArquivos')
const totalSucesso = document.getElementById('totalArquivosSucesso')
const totalErros = document.getElementById('totalArquivosErros')

for(let i =1;i<=    100;i++){
    files.push({text : `Arquivo ${i}`, id: i, file: `arquivo_${i}.txt`});
}

files.forEach(x => {
    let op = document.createElement("option")
    op.value = x.file
    op.innerText = x.text
    document.querySelector("#arquivos").appendChild(op)
})

processar.addEventListener('click', () => {
    console.log(selectArquivos.selectedOptions);
    // try{
    //     if(selectArquivos.value.trim() == ''){
    //         throw new Error('Selecione um arquivo!')
    //     }else{
    //         Promise.allSettled(EnviarMensagemServers()).then((results) => {
    //             totalAquivos.innerHTML = results.length
    //         })
    //     }
    // }catch(err){
    //     alert(err)
    // }
    try{
console.log(ProcessarArquivos(selectArquivos.selected))
    }catch(err){}
})