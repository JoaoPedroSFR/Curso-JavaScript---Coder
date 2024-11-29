estudantes = {
    joao: [2, 4, 200, 8],
    maria: [3, 6, 9, 12],
    jose: [1, 40, 20, 4]
}



function media(estudantes) {
    mediaAlunos = []
    let contador = 0
    let soma = [0, 0, 0]
    let alunos = []

    Object.entries(estudantes).forEach(([chave, valor]) => {
        //console.log(`Propriedade: ${chave}, Valor: ${valor}`);
        alunos[contador] = chave
        console.log(alunos[contador])
        contador2 = 0
        valor.forEach(element => {
            //console.log(soma[2])
            soma[contador] = element + soma[contador]
            contador2 = contador2 + 1

        })
        soma[contador] = soma[contador] / contador2
        contador++

    });

    console.log(soma[0])
    console.log(soma[1])
    console.log(soma[2])

    if (soma[0] > soma[1]) {
        console.log(alunos[0] + soma[0] + "É o maior")
    } else if (soma[1] > soma[2]) {
        console.log(alunos[1] + soma[1] + "É o maior")
    } else if (soma[2] > soma[1]){
        console.log(alunos[2] + soma[2] + "É o maior")
    }
}

media(estudantes)