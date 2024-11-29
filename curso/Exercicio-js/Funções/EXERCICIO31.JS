vetor = [-40, 5, -7, 3, -1, -3, -11, -20, 6, 9]
function negativos() {
    let contador = 0
    for (let i = 0; i < vetor.length; i++) {    
        if (vetor[i] < 0) {    
            contador = contador + 1
        }
        
    }
    console.log(contador)
}
negativos()