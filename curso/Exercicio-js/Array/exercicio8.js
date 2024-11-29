function mult(a,b){
    if(a==0||b==0){
        console.log(0)
    }else{
    let soma = a
    for(let i = 1; i < b; i++){
        soma = soma + a
    }console.log(soma)
}}

mult(10000000000,2)
