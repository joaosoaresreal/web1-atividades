let valorDaConta = parseFloat(prompt('Digite o Valor a Conta:'))
let quantidadeDeClientes = parseInt(prompt('Quantidade De Clientes'))

let valorPorCliente = valorDaConta/quantidadeDeClientes
document.write(`<br>O valor por cliente é: R$=${valorPorCliente}<br/>`)