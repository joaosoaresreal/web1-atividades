let inputNumero = document.querySelector("input")
let btncalcular = document.querySelector("button")

function calcularValor(){
    numero = parseInt(inputNumero.value)
    document.write(`Valor a vista: R$= ${(10/100)*numero-numero*(-1)} ou em 3x de: R$= ${numero/3}`)
}