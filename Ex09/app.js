const form = document.querySelector('form')
const btnCalcularValor = form.querySelector('button')

function calcularValor(){
    let valor = parseFloat(form.valor.value)
    let tempo = parseFloat(form.tempo.value)
    let calcularValor = valor * tempo / 60

    form.calcularValor.value = calcularValor.toFixed(2)
}

btnCalcularValor.addEventListener('click', calcularValor)