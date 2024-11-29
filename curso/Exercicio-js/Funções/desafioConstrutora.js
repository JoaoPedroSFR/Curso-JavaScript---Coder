function Pessoa(nome){
    this.nome = nome

        this.falar =function(){
            console.log(nome)
        }
}

const p1 = new Pessoa("aaaaaaaaaa")
p1.falar()