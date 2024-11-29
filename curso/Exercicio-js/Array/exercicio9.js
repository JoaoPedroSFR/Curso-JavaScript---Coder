function repetidor(repetidor, quant) {
    let res = [repetidor]
    for (let i = 0; i < quant; i++) {
        res[i] = repetidor
    }return res
}

console.log(repetidor('brasil',1))