const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const soma11 = function(e){
    return e+11
}
const triplo = e => e * 3
const paraDinheiro = e => 'R$'+ parseFloat(e).toFixed(2).replace('.',',')

resultado = nums.map(soma11).map(triplo).map(paraDinheiro)
console.log(resultado)

//funções passadas ao map devem retornar alguma coisa
