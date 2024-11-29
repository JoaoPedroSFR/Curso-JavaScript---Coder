function notas(nota) {
    if (nota < 38) {
        console.log('Voce esta reprovado')
    } else {
        var teste = nota
        if (nota % 5 > 2) {

            //console.log(nota % 5)
            teste = (nota-(nota%5))+5
            console.log('Aprovado com:'+teste+' pontos')
        }else{
            console.log('Aprovado com:'+nota)
        }
    }

}
notas(100)
notas(30)
notas(38)
notas(88)
notas(61)