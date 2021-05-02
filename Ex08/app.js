const form = document.querySelector('form')
const btnCalcularValor = form.querySelector('button')

function calcularValor(){
    let valor = parseFloat(form.valor.value)
    let peso = parseFloat(form.peso.value)
    let calcularValor = valor * peso / 1000

    form.calcularValor.value = calcularValor.toFixed(2)
}

btnCalcularValor.addEventListener('click', calcularValor)