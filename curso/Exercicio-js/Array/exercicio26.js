numeros = [1, 22, 33, 333, 444, 55555, 66666]
//const tamanhoNumero = String(numeros[6]).length

function contaNumero(numeros, tamanho) {
    resultado = []
    for (let i = 0; i < numeros.length; i++) {
        let tamanhoNumero = String(numeros[i]).length
        //console.log(tamanhoNumero)
        if (tamanhoNumero === tamanho) {
            resultado.push(numeros[i])
        }
    }
    console.log(resultado)
}
contaNumero(numeros, 2)