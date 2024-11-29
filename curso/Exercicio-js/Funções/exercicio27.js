function comparar(cresc1, cresc2, alt1, alt2) {
    if (alt1 <= alt2 && cresc1 > cresc2) {
        var altura1 = alt1
        var altura2 = alt2
        var ano = 1
        while (altura1 <= altura2) {
            altura1 = altura1 + (altura1 * (cresc1 / 100))
            altura2 = altura2 + (altura2 * (cresc2 / 100))
            console.log('altura 1 = ' + altura1.toFixed(0))
            console.log('altura 2 = ' + altura2.toFixed(0))
            console.log(ano + ' anos')
            ano++
        }

    } else {
        if (alt1 >= alt2 && cresc1 < cresc2) {

            altura1 = alt1
            altura2 = alt2
            ano = 1
            while (altura1 >= altura2) {
                altura1 = altura1 + (altura1 * (cresc1 / 100))
                altura2 = altura2 + (altura2 * (cresc2 / 100))
                console.log('Altura 1 = ' + altura1.toFixed(0))
                console.log('Altura 2 = ' + altura2.toFixed(0))
                console.log(ano + ' anos')
                ano++
            }

        } else {
            if (alt1 == alt2 && cresc1 == cresc2) {
                console.log('AS TAXAS SAO TODAS IGUAIS')
            }else{
                console.log('A taxa de crecimento do menor e mais baixa, entao ele nunca vai ultrapassar o outro')
            }
        }
    }
}

comparar(2, 4, 150, 130)