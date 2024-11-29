Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    } return newArray
}

const produto = [
    { nome: 'notebook', preco: 10, fragil: true },
    { nome: 'ipad', preco: 500, fragil: false },
    { nome: ' copo de vidro', preco: 15, fragil: true }]


function caro(produto) {
    return produto.preco >= 12
}

const fragil = produto => produto.fragil

console.log(produto.filter2(caro).filter2(fragil))