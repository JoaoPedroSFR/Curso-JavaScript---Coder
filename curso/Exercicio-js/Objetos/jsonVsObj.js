const obj = {
    A: 1,
    B: 2,
    C: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj))
//console.log(JSON.parse("{a:1,b:2,c:3}"))
//console.log(JSON.parse("{'a': 1,'b': 2,'c': 3}"))
console.log(JSON.parse('{"a": 1,"b": 2,"c": 3}'))
console.log(JSON.parse('{"a":1.4,"b":"string","c":true,"d":{},"e":[]}'))