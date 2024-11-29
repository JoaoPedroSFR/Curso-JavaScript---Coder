function conta (inicial, juros, tempo){
    let jurosSimples = 0
    jurosSimples = (inicial + (((juros/100)*inicial)*tempo)) 
    console.log(jurosSimples)

    let jurosCompostos=inicial
    for(let i = 1;i<=tempo;i++){
        jurosCompostos = (jurosCompostos + ((juros/100)*jurosCompostos))
        
    }
    console.log(jurosCompostos.toFixed(2)) 
}

conta(100,10,2)
