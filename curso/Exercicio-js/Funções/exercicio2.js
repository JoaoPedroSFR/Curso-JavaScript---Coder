function triangulo(a, b, c) {
    if (a == b && b == c) {
        console.log('equilatero')
    } else {
        if (a == b && b != c) {
            console.log('Isoceles')
        } else {
            if (a == c && c != b) {
                console.log('isoceles')
            } else {
                if (b == c && c != a) {
                    console.log('isoceles')
                }else{
                    console.log('Escaleno')
                }
            }
        }
    }
}
triangulo(1, 4, 1)