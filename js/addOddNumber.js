function evenNumber(array) { 
    sum=0;
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
        const index=i;
        const element = array[i];
        sum=sum+element;
        // console.log(index,element,sum);
    }
    return sum;
}

function allArrayName(arrayEven) {
    const newArray=[];
    for(let i=0;i<arrayEven.length;i++){
        const indexT=i;
        const elementT=arrayEven[i];
       
        if (elementT%2==1) {
            // console.log(indexT,elementT);
            newArray.push(elementT);
        }
        sum=sum+newArray;
    }
    return newArray;
}



const arrayName=[11,13,12,15,18,16,17,25,28,36];


const numberArray=evenNumber(arrayName);
const newArray=allArrayName(arrayName);
console.log(newArray);
const oddNumberSum=evenNumber(newArray);
console.log(oddNumberSum);
// console.log(numberArray);