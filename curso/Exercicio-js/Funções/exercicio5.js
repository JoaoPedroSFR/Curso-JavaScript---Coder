function dinheiro(a,b){
    let resultado = a+b
    console.log('R$'+ resultado.toFixed(2).toString().replace(".",","))
}

dinheiro(0.3,0.25555555)
