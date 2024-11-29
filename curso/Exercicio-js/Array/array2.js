const piloto = [ 'vetel', 'alonso', 'massa','raikonen']
piloto.pop()//remove o ultimo elemento do array
console.log(piloto)
piloto.push('verstapen')//adiciona um elementop
piloto.shift()//remove o primeiro elemento

console.log(piloto)

piloto.unshift('hamilton')//adiciona um elemento na primeira posiçao
piloto.splice(2,0,'botta','raikkonen')
console.log(piloto)

const algunsPilotos = piloto.slice(2)//gera um novo array a partir do elemento indicado
console.log(algunsPilotos)

const algunsPilotos2 = piloto.slice(1,4)
console.log(algunsPilotos2)
