function evenNumber(array) { 
    sum=0;
    // console.log(array);
    for (let i = 0; i < array.length; i++) {
        const index=i;
        const element = array[i];
        sum=sum+element;
        console.log(index,element,sum);

        // console.log(sum);
        // if (element%2 ==0) {
        //     console.log("true number");
        // } else {
        //     console.log("False number");
        // }
    }

    // for (let i = 0; i < array.length; i++) {
    //     const index=i;
    //     const element = array[i];
    //     console.log(index,element);
    //     // if (element%2 ==0) {
    //     //     return true;
    //     // }else{
    //     //     return false;
    //     // }
        
        
    // }
    // const pushArray=newArray.push(arrayName);
    //     console.log(pushArray);
}
const arrayName=[11,13,12,15,18,16,17,25,28,36];

const numberArray=evenNumber(arrayName);
// console.log(numberArray);