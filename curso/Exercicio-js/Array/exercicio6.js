function reverso(a) {
    let tipo = typeof a
    if (tipo == "string") {
        console.log('boolean ou numero esperado')
    } else if (a == true) {
        console.log('false')
    } else if (a < 0) {
        console.log(a - (a * 2))
    } else if (a > 0) {
        console.log(a - (a * 2))
    } else if (a == false) {
        console.log('true')
    }
}

reverso('10')

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }

console.log(inverso('10'))