

function sumOfNumbers(number) {
    let sum=1;
    for(let i=1;i<=number;i++){
    
    sum=sum*i;
    // console.log(i,sum);
}
return sum;
}
const fac=sumOfNumbers(4);
console.log(fac);