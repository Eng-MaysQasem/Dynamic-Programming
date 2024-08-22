function fibo(n){
    if(n<=1){
        return n;
    }
    let fib=[0,1];
    for(let i=2;i<=n;i++){
        fib[i]=fib[i-1]+fib[i-2];
    }
    return fib[n];

}
console.log(fibo(70));//190392490709135
