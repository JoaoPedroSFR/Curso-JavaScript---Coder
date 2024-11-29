function comparaString(string1, string2) {
    let verdadeiro = true
    for (let i = 0; i < string1.length; i++) {
        for (let teste = 0; teste < string2.length; teste++) {
            if (string1.charAt(i) == string2.charAt(teste)) {
                verdadeiro = true
                break
            } else {
                verdadeiro = false

            }
        } if (!verdadeiro) {
            return verdadeiro
        }

        for (let j = 0; j < string2.length; j++) {
            let verdadeiro2 = true
            for (let teste2 = 0; teste2 < string1.length; teste2++) {
                if (string2.charAt(j) == string1.charAt(teste2)) {
                    verdadeiro = true
                    break
                } else {
                    verdadeiro = false
                }
            }
        }
    } if (!verdadeiro) {
        return verdadeiro
    }
}
let teste = 'brasilt'
console.log(comparaString('brastil', 'lisbrttatt'))