//estrategia gerar valor padrao

function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma(1, 2, 3))

//OUTRAS ESTRATEGIAS DE GERAR VALOR PADRAO

function soma2(a, b, c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(1, 3, 4), soma2(0, 0, 0))


//valor padrao do ES15

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c

}
console.log(soma3(), soma3(1, 3, 4), soma3(0, 0, 0))