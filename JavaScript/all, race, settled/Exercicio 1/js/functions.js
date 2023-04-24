class ArquivoProcessado{
    constructor(nome, tempoProcessamento){
        this.nome = nome;
        this.tempoProcessamento = tempoProcessamento
    }
}

export function ProcessarArquivos(arquivos){
    return arquivos.map(arquivo => {
        let sucesso = Math.round(Math.random()) == 0 ? false : true;
        let time = Math.random() * 10000

        return new Promise((resolve, reject) => {
            console.log(`Arquivo ${arquivo} é ${sucesso}`)
            setTimeout(() => {
                if(sucesso){
                    resolve(new ArquivoProcessado(arquivo, time))
                }
                else{
                    reject(new ArquivoProcessado(arquivo, time))
                }
            }, time);

        })
    })
}

export function EnviarMensagemServers(mensagem){
    let listServer = []

    for(let i = 0;i<=10;i++){
        let time = Math.random() * 10000
        let sucesso = Math.round(Math.random()) == 0 ? false : true;

        listServer.push(new Promise((resolve, reject) => {
            setTimeout(() => {
                    if(sucesso){
                        resolve(`Servidor ${i} respondeu com sucesso`)
                        return 
                    }else{
                        reject(`Servidor ${i} respondeu com Erro`)
                    }
                }, time);
            })
        )

    }
    return listServer;
}