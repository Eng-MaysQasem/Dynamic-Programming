function Fibonacci(n,memo={}){
if(n in memo){
    return memo[n];
}
if(n<=1){
    return n;
}
//recursive
memo[n]=Fibonacci(n-1,memo)+Fibonacci(n-2,memo);
return memo[n];
}
console.log(Fibonacci(70));//190392490709135