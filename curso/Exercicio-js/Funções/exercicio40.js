
function conceito(notas) {
    let conceitoNota
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > 9) {
            console.log('a')
        } else {
            if (notas[i] > 7 && notas[i] < 8.99) {
                console.log('b')
            } else { if (notas[i] > 5 && notas[i] < 6.99){
                return 'reprovado'
            }else{
                return 'aaaaaaa'
            }
                
            
            }
        }
    }
}



notas = [10, 8, 5.5, 1]
console.log(conceito(notas))