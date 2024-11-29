palavras = ["programador", "senior", "juvenil"]

function procuraPalavra(texto, palavras) {
    let palavrasIguais = []
    let pos = 0
    for (let i = 0; i < palavras.length; i++) {
        const contador = palavras[i].split(texto)
        if (contador.length > 1) {
            palavrasIguais[pos] = palavras[i]
            pos++
        }
    }
    return palavrasIguais
}

console.log(procuraPalavra('e', palavras))

function comMetodo(texto, palavras) {
    let palavrasIguais = []
    for (let palavra of palavras) {
        if (palavra.includes(texto)) {
            palavrasIguais.push(palavra)
        }
    }
    return palavrasIguais
}

function comMetodo2(texto, palavra) {
    return palavra.filter(palavra => palavra.includes(texto))
}

console.log(comMetodo('e', palavras))
console.log(comMetodo2('e', palavras))