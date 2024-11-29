const notas = [10, 20, 30, 40]
for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    idade: 29,
    peso: 54
}

for (let atriburo in pessoa) {
    console.log(`${atriburo} = ${pessoa[atriburo]}`)
}
atriburo = 'copo'
console.log(atriburo)
console.log(typeof atriburo)