function saude(idade) {
    if (idade <= 10) {
        return (80 + 100)
    } else if (idade > 10 && idade < 30) {
        return (50 + 100)
    }
}
console.log(saude(9))