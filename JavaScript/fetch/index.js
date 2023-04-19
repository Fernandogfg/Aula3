
const optBuscaNome = document.querySelector("#opt-busca-nome")
const optBuscaTodos = document.querySelector("#opt-busca-todos")
const filtersNome = document.querySelector("#pn-filter-nome")

optBuscaNome.addEventListener("change", (e)=> {
    if(e.target.checked){
        filtersNome.style.display = "block"
    }
})

optBuscaTodos.addEventListener("change", (e)=> {
    if(e.target.checked){
        filtersNome.style.display = "none"
    }
})