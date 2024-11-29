let retorno = function(a){
   return 'Ola '.concat(a,'!')
}

console.log(retorno('Maria'))

//----------------------------------------------------
function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
    }

console.log(cumprimentar('joao'))