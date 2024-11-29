function calc(a,b,c) {
    switch (c){
    case 'soma' : console.log(a+b)
    break
    case 'subtracao' : console.log(a-b)
    break
    default:
         console.log('erro no console')
}}

calc(5,5,'subtracao')