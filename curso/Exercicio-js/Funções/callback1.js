const fabricantes = ["Merdedes", "Audi", "Bmw"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)//encontra os dados do array
fabricantes.forEach(fabricante => console.log(fabricante))