const form = document.querySelector('form')
const btnCalcularHoras = form.querySelector('button')

function calcularHoras(){
    let horas = parseFloat(form.horas.value)
    let valor = parseFloat(form.valor.value)
    let calcularValor = horas * valor

    form.calcularValor.value = calcularValor
}

btnCalcularHoras.addEventListener('click', calcularHoras)