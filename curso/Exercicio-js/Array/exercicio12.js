let removerprioridade = {
    a: 1,
    b: 2,
    c: 3
}

function prioridade(obj,nomeDaPrioridade){
    let recebedor = obj
    //let jsonString = JSON.stringify(nomeDaPrioridade);
    delete obj[nomeDaPrioridade]
    console.log(obj)
}

prioridade(removerprioridade, "a")