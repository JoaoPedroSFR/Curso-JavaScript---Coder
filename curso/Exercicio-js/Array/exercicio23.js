let texto = "teaAaastando quantas letras tem aquiA"

function contaLetras(letra,texto){
    const comparador = texto.split(letra)
    console.log(comparador.length -1)
}

contaLetras('quan',texto)

function contaLetras2(letra,texto){
    let contador = 0
    for(let i = 0; i<texto.length;i++){
        if(texto[i]===letra){
            contador++
        }}
    console.log(contador)
        

}
//o texto é um array tambem
contaLetras2('quan',texto)