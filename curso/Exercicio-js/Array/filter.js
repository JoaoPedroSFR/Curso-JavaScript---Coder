const produto = [
    { nome: 'notebook', preco: 10, fragil: true },
    { nome: 'ipad', preco: 500, fragil: false },
    { nome: ' copo de vidro', preco: 15, fragil: true }]

//console.log(produto.filter(function (p) {
  //  return false
//}))

function caro(produto) {
    return produto.preco >= 12
}

const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))