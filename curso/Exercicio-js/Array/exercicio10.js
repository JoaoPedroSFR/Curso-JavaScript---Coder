function numero(a) {
    var res = []
    for (let i = 0; i < a; i++) {
        res[i] = '+'
    }

    return "".concat(res).toString().replace(/\,/g,'')
} 


console.log(numero(10))