//escopo criado quando uma funcao e declarada
// permitindo acesso a variaveis criadas fora dessa funcao
const x = 'global'
function fora(){
    const x = 'local'
    function dentro(){
        return x
    }return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())