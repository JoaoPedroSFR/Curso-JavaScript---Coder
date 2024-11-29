class Pessoa {
    constructor(nome) {
        this.nome = nome

    }
    falar() {
        console.log(this.nome)
    }
}

const p1 = new Pessoa('joao')
p1.falar()

const criarpessoa = nome => {
    return {
        falar: () => console.log(nome)
    }
}

const p2 = criarpessoa('brasil')
p2.falar()