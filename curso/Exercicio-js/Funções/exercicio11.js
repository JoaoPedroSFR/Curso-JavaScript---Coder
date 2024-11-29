function bissexto(ano) {
    if(ano==0){
        console.log('nao')
    }else{
    if (ano % 400 == 0) {
        console.log('sim')
    } else {
        if (ano % 100 == 0) {
            console.log('Nao')
        } else {
            if (ano % 4 == 0) {
                console.log('Sim')
            }else{console.log('nao')}
        }
    }
}}

bissexto(0)
bissexto(4)
bissexto(100)
bissexto(400)
bissexto(800)
bissexto(2020)
bissexto(2021)
