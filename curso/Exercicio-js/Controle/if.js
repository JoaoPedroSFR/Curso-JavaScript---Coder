function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("aprovado")
    } else {
        console.log("reprovado")
    }
}
soBoaNoticia(5)
soBoaNoticia(8)

function seVerdadeEuFalo(valor) {
    if (valor) {
        console.log("e verdade")

    }
}

seVerdadeEuFalo()
seVerdadeEuFalo(null)
seVerdadeEuFalo(undefined)
seVerdadeEuFalo(NaN)
seVerdadeEuFalo('')
seVerdadeEuFalo(0)
seVerdadeEuFalo(-1)
seVerdadeEuFalo('  ')
seVerdadeEuFalo('?')
seVerdadeEuFalo([])
seVerdadeEuFalo([0, 1])
seVerdadeEuFalo({})