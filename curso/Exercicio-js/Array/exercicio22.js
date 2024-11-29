let texto = "Quantas palavras tem o texto aa aa aa"

function contadorPalavras(texto){
    let contador = texto.split(" ")
    console.log(contador.length)

}

contadorPalavras(texto)