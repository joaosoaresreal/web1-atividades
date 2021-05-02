let inputNumero = document.querySelector("input")
let btncalcular = document.querySelector("button")

function calcularTabuada(){
    numero = parseInt(inputNumero.value)
    document.write(`<br>${numero} X 1 = ${numero*1}</br>
    <br>${numero} X 2 = ${numero*2}</br>
    <br>${numero} X 3 = ${numero*3}</br>
    <br>${numero} X 4 = ${numero*4}</br>
    <br>${numero} X 5 = ${numero*5}</br>
    <br>${numero} X 6 = ${numero*6}</br>
    <br>${numero} X 7 = ${numero*7}</br>
    <br>${numero} X 8 = ${numero*8}</br>
    <br>${numero} X 9 = ${numero*9}</br>
    <br>${numero} X 10 = ${numero*10}</br>`)
}