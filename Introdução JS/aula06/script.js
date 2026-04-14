let btnSoma = document.querySelector("#btnSoma")
let primeiroInput = document.querySelector("#primeironumero")
let segundoInput = document.querySelector("#segundonumero")

function soma () {
    let resultado = Number (primeiroInput.value) + Number(segundoInput.value)
    alert(resultado)
}

btnSoma.addEventListener("click", soma)