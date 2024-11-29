elementos = [1, 4, 3, 'brasil', 4, 5, 6]

function separar(a) {
    let elementos2 = []

    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] == "number") {
            elementos2[i] = a[i]
        }
    }
    function elementosPreenchidos(element) {
        return element !== null && element !== undefined && element !== '' && !isNaN(element)
    }
    //const elementosPreenchidos = elementos2.filter(element => element !== null && element !== undefined && element !== '' && !isNaN(element));
    console.log(elementos2.filter(elementosPreenchidos))
    //console.log(elementos2)
}

separar(elementos)