function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a number";
    } else {
        let result = Math.pow(number, 3);
        return result;
    }
}
cubeNumber(4);


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
matchFinder(firstString, secondString);


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
sortMaker([2,5]);


function findAddress(addressObject) {
    if (typeof objectName !== 'object' || objectName == null) {
        return "Please provide an Object"
    }
    const street = addressObject.street || '__';
    const house = addressObject.house || '__';
    const society = addressObject.society || '__';

    return `${street},${house},${society}`;
}
const objectName = {
    street: 10,
    house: "15A",
    society: "EarthPerfect"
}
findAddress(objectName);


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
canPay([6,5], 10);