function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a number";
    } else {
        let result = Math.pow(number, 3);
        return result;
    }
}
const res = cubeNumber(4);
// console.log(res);


function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Both inputs must be strings.";
    } else {
        if (string1.includes(string2)) {
            return true;
        } else {
            return false;
        }
    }
}
const firstString = "Hello world";
const secondString = "ello";
const result = matchFinder(firstString, secondString);
// console.log(result);



function sortMaker(arr) {
    if (!Array.isArray(arr)) {
       return "Please Provide an array";
   }
   for (let i = 0; i < arr.length; i++) {
       if (typeof arr[i] !== "number" || arr[i]<0) {
           return "Invalid Input";
       }
   }
     if (arr[0] === arr[1]) {
         return "equal";
       }
       else if(arr[0]>arr[1]){
            return arr;
       }
   
    else if (arr[0] < arr[1]) {
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
      
        return arr;
     }
     else{
       return "Something is wrong";
     }
  
}
// const result=sortMaker([2,2]);
// console.log(result);


// 4
function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Invalid input";
    }else if(typeof obj == "object"){
        return `${objectName.street},${objectName.house},${objectName.society}`;
    }
    else if(typeof obj == "object"){
    
    }
}
const objectName={
    street:10,
    house:"15A",
    society:"EarthPerfect"
}

const output1=findAddress(objectName);
console.log(output1);


// 5
function canPay(changeArray, totalDue) {
    if (Array.isArray(changeArray)==false) {
        return "Please provide an array";
    }
    else if(changeArray.length === 0){
        return "Your array is empty , please provide an array";
    }
    let total = 0;
    for (let i = 0; i <changeArray.length; i++) {
        const element = changeArray[i];
        total+=element;   
    }
    let result= total >= totalDue;
    return result;
}
const restt = canPay([5,6], 10);
console.log(restt);