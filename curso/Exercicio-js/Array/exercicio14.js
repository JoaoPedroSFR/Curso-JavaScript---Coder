const paraArray = {
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}
const resultado = []

function converter(obj) {
    for (let chave in obj) {
        resultado.push([chave, obj[chave]])
    } return resultado

}

console.log(converter(paraArray))