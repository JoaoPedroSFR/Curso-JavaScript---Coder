function troca(a,b){
    for(let i = 0;i < a.length;i++){
        b[i]=a[i]+b[i]
   
        a[i]=b[i]-a[i]

        b[i]=b[i]-a[i]


    }
 console.log(a)
 console.log(b)
}

a=[1,2,3,4,10]
b=[6,7,8,9,10]
troca(a,b)