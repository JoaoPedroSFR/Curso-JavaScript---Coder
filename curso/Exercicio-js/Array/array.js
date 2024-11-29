//É um objeto em javascript
console.log(typeof Array)
let aprovado = new Array('bia', 'carlos', 'ana')

console.log(aprovado)

aprovado = ['bia','carlos','ana']
console.log(aprovado[0])
console.log(aprovado[1])
console.log(aprovado[2])
console.log(aprovado[3])
aprovado[3]='paulo'
console.log(aprovado[3])
aprovado.push('abia')
console.log(aprovado.length)
console.log(aprovado)

console.log(aprovado.sort())
console.log(aprovado)

delete aprovado[1]
console.log(aprovado)

aprovado = ['bia','carlos','ana']

aprovado.splice(1,2, 'elemento1', 'elemento 3')// apaga, inclui elementos no array
console.log(aprovado)