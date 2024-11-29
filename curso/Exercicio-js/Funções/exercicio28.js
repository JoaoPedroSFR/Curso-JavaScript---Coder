const vetor = [9, 84, 3, 5, 3, 3, 3, 3, 11, 15]
var leitor = 0
var par = 0
var impar = 0
while (leitor < vetor.length) {
    if (vetor[leitor] % 2 == 0) {
        par = par + 1
    } else {
        impar = impar + 1
    }
    leitor++
}
console.log(par + ' par')
console.log(impar + ' impar')