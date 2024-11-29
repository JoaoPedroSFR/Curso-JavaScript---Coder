function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comparTv = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^trabalho2)//ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    return { comprarSorvete, comparTv, comprarTv32, manterSaudavel }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,false))