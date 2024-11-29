function calc(a, b) {
    if(a>b){
        let temp
        temp = a
        a=b
        b=temp
    }
    if (a >= 0 && b <= 100) {
        if (a % 2==1) {
            for (let i = a; i <= b; i++) {
                console.log(i)
                i++
            }
        }else{
            a=a+1
            for (let i = a; i <= b; i++) {
                console.log(i)
                i++
        }}
    }
}

calc(63, 15)