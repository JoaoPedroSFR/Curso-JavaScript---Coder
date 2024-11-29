//notaçao literal

const obj1 = {}

console.log(obj1)
//-----------------------------------------------------------
//object

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
//---------------------------------------------------------------
// funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome//atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.00, 0.15)
const p2 = new Produto('notebook', 2000, 0.24)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
//------------------------------------------------------------
// funcao factory

function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario/ 30)
        }
    }
}

const f1 = criarFuncionario('joao', 100, 100)
console.log(f1.getSalario())
//--------------------------------
//object.create
const filha = Object.create(null)
filha.nome = 'ana'
//----------------------------------------------------
//uma funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)