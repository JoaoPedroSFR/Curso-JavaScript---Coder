const partida = []
function resultados(jogo, pontuacao) {
    partida[jogo] = pontuacao
    //console.log('Partida:'+jogo+' '+partida[jogo])
}
resultados(1, 16)
resultados(2, 17)
resultados(3, 15)
resultados(4, 0)
resultados(5, 30)


//console.log(partida)
var recorde = 0
for (let i in partida) {
    console.log(i, partida[i])
    melhor = partida[1]
    if (partida[i] > melhor) {
        melhor = partida[i]
        recorde++
    } else {
        if (partida[i] < partida[i - 1]) {
            var pior = i
        }
    }
}
console.log('Voce bateu seu recorde ' + recorde + ' vezes')
console.log('seu pior resultado foi na ' + pior + ' partida')