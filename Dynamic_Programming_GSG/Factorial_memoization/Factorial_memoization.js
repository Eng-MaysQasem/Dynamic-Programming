function factorial(n,memo={}){
    //if exist in dectinary retrn it without recursive
    if(n in memo){
        return memo[n];
    }
    //if not make recursive
    if(n<=1){
        return 1;
    }
    memo[n]=n*factorial(n-1,memo);
    return memo[n];

}
console.log(factorial(5));//120
//start from max and divide it to sub overlabing problem
//top down
//recursive