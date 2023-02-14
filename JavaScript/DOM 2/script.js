let contagemElementosBody = document.body.childElementCount;
console.log(contagemElementosBody);

let verificaContagem = function (elementoCont) {
    elementoCont > 5 ? console.log(true)  : console.log(false) 
}
verificaContagem(contagemElementosBody)

let paragrafos = document.querySelectorAll('p');
console.log(paragrafos);