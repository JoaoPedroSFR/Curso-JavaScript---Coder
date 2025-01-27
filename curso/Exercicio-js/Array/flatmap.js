const escolas = [{
    nome: 'turma 1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    },
    {
        nome: 'ana',
        nota: 9.3
    }]
},
{
    nome: 'turma 2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    },
    {
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaturma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escolas.map(getNotaturma)
console.log(notas1)

console.log([].concat([  8.1, 9.3 ], [ 8.9, 7.3 ] ))
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escolas.flatMap(getNotaturma)
console.log(notas2)