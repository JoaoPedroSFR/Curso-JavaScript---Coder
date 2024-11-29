console.log(Math.ceil(1.6))

const obj1 = {}

obj1.nome='Joao'
console.log(obj1.nome)


function Obj(nome){
    this.nome = nome
}

const Obj2 = new Obj('cadeira')

const Obj3 = new Obj('mesa')

console.log(Obj2.nome)
console.log(Obj3.nome)

//serve para acessar, criar varias coisas dentro da linguagem

