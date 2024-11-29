function aumento(a, b) {
    let salario = a
    switch (b) {
        case 'a': {
            salario = a + (0.10 * a)
            console.log(salario)
        }
    }
}
aumento(1000, 'a')