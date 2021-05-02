const form = document.querySelector('form')
const btnCalcularMedia = form.querySelector('button')

function calcularMediaAluno(){
    let nota1 = parseFloat(form.nota1.value)
    let nota2 = parseFloat(form.nota2.value)
    let calcularMedia = (nota1 + nota2) / 2

    form.calcularMedia.value = calcularMedia
}

btnCalcularMedia.addEventListener('click', calcularMediaAluno)