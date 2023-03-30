// Exercicio 1
function montarTabuada(n) {
  function tabuada(comeco, fim) {
    for (comeco; comeco <= fim; comeco++) {
      console.log(`${comeco} x ${n} = ${comeco * n}`);
    }
  }
  return tabuada;
}

const closureTabuada2 = montarTabuada(2);
closureTabuada2(1, 10);

//Exercicio 2

function criarContadorNumerico(n) {
  return function () {
    return n++;
  };
}
const contador = criarContadorNumerico(1);

console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());

const novoContador = criarContadorNumerico(10);
console.log(novoContador());
console.log(novoContador());
console.log(novoContador());
console.log(novoContador());
