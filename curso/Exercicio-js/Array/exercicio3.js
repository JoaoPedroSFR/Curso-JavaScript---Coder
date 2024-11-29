function salario(horas, valorHora) {
    let bruto = horas * valorHora
    let liquido = bruto - (bruto * 0.3)
    return "Salário líquido é igual a R$" + liquido
}

console.log(salario(180, 60))