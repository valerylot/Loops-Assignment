//Loop 1 Printing odds 1-20
for(var i=1; i<21; i++){
    if(i%2!==0){
        console.log(i);
    }
}
//Loop 2 Decreasing by multiples of 3
for(var i=100; i>=0; i--){
    if(i%3===0){
        console.log(i);
    }
}
//Loop 3 Print the sequence
arr=[4, 2.5, 1, -0.5, -2, -3.5];
for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//Loop 4 Sigma
var sum=0;
for(var i=1; i<101; i++){
    sum+=i
    console.log(sum);
}
//Loop 5 Factorial
var product=1
for(var i=1; i<=12; i++){
    product *=i;
    console.log(product);
    // return product;
}
