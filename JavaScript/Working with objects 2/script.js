let inputNumero = document.getElementById('numero');
let btnAdicionar = document.getElementById('adicionar')
let btnLimpar = document.getElementById('limpar')
let resultado = document.getElementById('resultado');
let listaNumeros = []
let listaExibida = []


function validaCampo (){
  if(inputNumero.value == ''){
    return false
  } else {
    return true
  }
}


function preencheCalculaLista (){
  listaNumeros.push(inputNumero.value)
  let listaCalculada = []
 listaNumeros.map((val)=> listaCalculada.push(val * 3))
 listaExibida = [...listaCalculada]
 inputNumero.value = ''
}

function exibeResultado(){
  resultado.innerHTML = ''
  listaExibida.map((val) => resultado.innerHTML += `${val}, `) 
}
function limpaLista (){
  resultado.innerHTML = ''
  listaNumeros = []
  inputNumero.value = ''
}
btnAdicionar.addEventListener('click', function(){
  if(validaCampo()){
    preencheCalculaLista()
    exibeResultado()
    
  }
})
btnLimpar.addEventListener('click', function(){
  limpaLista()
})