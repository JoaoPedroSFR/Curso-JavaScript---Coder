function inteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor("aaaaa"+valor)

}

let opcao

do {
    opcao = inteiroAleatorio(-1, 10)
    console.log(opcao)
} while (opcao != -1)
console.log("Ate a proxima")