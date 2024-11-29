const teste = ['brasil', 2, 3, 4, 'ola']

function mostrar(a) {
    return a[0] + a[a.length - 1]
}


console.log(teste.filter(mostrar))