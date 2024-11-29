function fatorial(a) {
    let teste = a
    if (a == 0) {
        console.log('1')
    } else {
        for (let i = a; i >= 1; i--) {

            if (a >= teste) {
                var fator = a * i
                a = a - 1
            }
            else {
                fator = fator * i
                a = a - 1
            }
        } console.log(fator)
    }
}
fatorial(10)

// MANEIRA CORRETA

function Fatorial1(a) {
    if (a == o) {
        return 1
    } else {
        return a * fatorial(a - 1)
    }
} fatorial(10)