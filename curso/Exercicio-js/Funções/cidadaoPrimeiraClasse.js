

function fun1(valor) {
    valor = valor + " brasil"
    return valor
}

console.log(fun1('teste'))

//armazenar em variavel
const fun2 = function () { }

//armazenar em array
const array = [function (a, b) { return a + b}, fun1, fun2 ]

console.log(array[0](2, 3))

//armazenar em atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

// Passar função com parametro para outra funcao
function run(fun){
    fun()
}
run(function(){console.log('executando')})

//retornar funcao
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
 
cincoMais = soma(1,1)
cincoMais(4)

console.log(typeof cincoMais)