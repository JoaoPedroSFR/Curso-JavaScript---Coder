//funcao sem retorno
//é um bloco de codigo nomeado que podemos acionar quantas vezes quisermos
//pode receber ou nao parametros e pode retornar ou nao

function imprimirSoma(a, b) {//FUNCAO SEM RETORNO
    console.log(a + b)
}

imprimirSoma(2, 3)

imprimirSoma(2)
imprimirSoma(2, 4, 4, 5, 6)
imprimirSoma()

function soma(a, b = 0){//FUNCAO COM RETORNO E TRATAMENTO DO SEGUNDO PARAMETRO
    return a + b
}

console.log(soma(2, 5))
console.log(soma(2))
console.log(soma(1))