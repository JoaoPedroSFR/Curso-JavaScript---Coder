let vogais = 'brasil teste'

function removerVogais(vogais) {
    let novaPalavra = ''
    for (let i = 0; i < vogais.length; i++) {
        if (vogais[i] != "a" && vogais[i] != "e" && vogais[i] != "i" && vogais[i] != "o" && vogais[i] != "u") {
            novaPalavra = novaPalavra + vogais[i]
        }
    }
    console.log(novaPalavra)
}
removerVogais(vogais)

vogais = 'aaeeiibb'

function removerVogais2(vogais) {
    let novaPalavra = []
    for ("a" of vogais) {
        if (palavra.includes('a' && 'e' && 'i')) {
            novaPalavra.push(palavra)
            console.log(novaPalavra)
        }
    }
    console.log(novaPalavra)
}

removerVogais2(vogais)