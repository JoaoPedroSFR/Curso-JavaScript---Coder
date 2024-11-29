const carrinho = [
    '{"nome":"borracha","preco":3.45}',
    '{"nome":"caderno","preco":13.90}',
    '{"nome":"kit de lapis","preco":41.22}',
    '{"nome":"caneta","preco":7.50}'
]
//retornar somente os precos

const paraObjeto = json =>JSON.parse(json)//.parse serve para transformar um json em um objeto
const apenasPreco = produto => produto.preco

var resultado =  carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
