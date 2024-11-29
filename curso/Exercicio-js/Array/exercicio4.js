function mes(mes) {
    switch (mes) {
        case 1: console.log('Janeiro')
            break
        case 2: console.log('Fevereiro')
            break
        case 3: console.log('marco')
            break
        default:
            console.log('nao existe esse mes')
    }
}
//----------------------------------------
mes(-1)

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[numero];
}
console.log(receberNomeDoMes(6))