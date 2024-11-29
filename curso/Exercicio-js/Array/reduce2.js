const aluno = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'maria', nota: 9.2, bolsista: false },
    { nome: 'pedro', nota: 9.8, bolsista: false },
    { nome: 'Maria', nota: 8.7, bolsista: true }

]

// desafio com reduce para saber se todos alunos sao bolsistas?

const teste = function (resultado, bolsista) {
    return resultado && bolsista
}


console.log(aluno.map(a=>a.bolsista).reduce(teste))

const bolsista1 = (resultado, bolsista) => resultado && bolsista

console.log(aluno.map(a => a.bolsista).reduce(bolsista1))

//algum aluno e bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce(algumBolsista))