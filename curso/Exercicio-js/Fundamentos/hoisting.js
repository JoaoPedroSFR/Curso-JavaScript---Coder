// Quando usamos var o hoisting joga essa variavel no inicio,
// Porem sem um valor para ela
// Com o let o hoisting nao acontece
console.log(a)
var a = 3
console.log(a)

function teste() {
    console.log('--------------------------------')
    console.log(a)
    var a = 6
    console.log(a)
    console.log('-------------------------------')

}
teste()
console.log(a)

//console.log(b)
let b=1
console.log(b)