
function factorial(n){
    let dp =new Array(n+1).fill(1);
    for(i=2;i<=n;i++){
        dp[i]=dp[i-1]*i;
    }
    return dp[n];

}
console.log(factorial(5));//120
//bottom up
//start from small to max
//for loop