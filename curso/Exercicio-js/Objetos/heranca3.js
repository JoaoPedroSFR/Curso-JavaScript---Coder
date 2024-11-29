const pai = { nome: 'pedro', corCabelo: 'azul' }

const filho1 = Object.create(pai)//cria atravaes de outro obj

filho1.nome = 'ana'

console.log(filho1.corCabelo)


const filho2 = Object.create(pai, {
    nome: {
        value: 'bia', writable: false, enumerable: true
    }
})

console.log(filho2.nome)
filho2.nome = 'carla'
console.log(filho2.nome + ' tem cabel0 ' + filho2.corCabelo)
console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

for (let key in filho2) {
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log('por herança')
}