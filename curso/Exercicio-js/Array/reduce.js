//transformar o array em outros elementos

const aluno = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: true },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'Maria', nota: 8.7, bolsista: true }

]

const resultado = aluno.map(aluno => aluno.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)