let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome');
let cpf = document.getElementById('cpf')
let btnValidar = document.getElementById('validar')
let camposPreenchidos = function () {
    if (nome.value.trim() !== "" && sobrenome.value.trim() !== "" && cpf.value !== ""){
        alert ('Todos os campos foram preenchidos!')
        return true
    } else {
        alert('Por favor preencha todos os campos!')
        return false
    }
        
}
let validaCpf = function(){
    if(cpf.value.length == 11 && !isNaN(cpf.value)){
        alert('CPF digitado é valido')
       return true;
    }else {
        alert ('CPF digitado não é valido')
       return false;
    }
 }
 let msgSucesso = function (){
    if(camposPreenchidos() && validaCpf()){
        alert('Dados enviados com sucesso')
    }else {
        alert('Porfavor preencha os campos corretamente para enviar os dados')
    }
 }
// btnValidar.onclick = camposPreenchidos
// btnValidar.onclick = validaCpf
btnValidar.onclick = msgSucesso