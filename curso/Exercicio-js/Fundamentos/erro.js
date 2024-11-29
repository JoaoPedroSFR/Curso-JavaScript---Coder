function tratarErro(erro) {
   console.log('erro')

}
function imprimirNome(obj) {
   try {
      console.log(obj.nome.toUpperCase() + "!!!")
   }
   catch (e) {
      tratarErro(e)
   }
}

const obj = {
   nome: 'joao'
}
imprimirNome(obj)
let = 'teste'
console.log(let.toUpperCase())