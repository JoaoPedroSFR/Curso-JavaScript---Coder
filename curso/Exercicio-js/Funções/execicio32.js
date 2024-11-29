
function media(vetor){
    let soma=0
    for(let i = 0;i<vetor.length;i++){
        soma = soma + vetor[i]
    }
    console.log(soma/vetor.length)
}

vetor =  [10, 5, 10, 10, 20]
media(vetor)