// // variable
// // vary+able=varyable
// // newmaric
// var price=11;
// var age=21;
// var tempareture =35;

// // string
// var person="b Rabby";
// var location="mirpur Dhaka";

// // Boolean
// var assignment=true;
// var marks=false;

// // 
// var bb-d="dew eg";
// var bb_d="dew eg";
// var 20club='fdf';
// var club34="root";
// // cammelcase
// var currentHomeAddress="Dhaka";

// variable diclearation
// var onionPrice=20;
// var eggPrice=10;
// var total=onionPrice*eggPrice;
// console.log(total);


// function processArray(ary) {
//     if (ary.length < 2) {
//       return "This array will always contain two elements.";
//     }
//     if (ary[0] === ary[1]) {
//         return "equal";
//       }

//     if (typeof ary[1] === 'number' && ary[1] > 0) {
//       return ary.sort((a, b) => b - a);
//     }



//     return "Valid Input";
//   }

//   const myArray = [3,3];
//   const result = processArray(myArray);
//   console.log(result);


// if (typeof ary[1] === 'number' && ary[1] > 0) {
//     // Sort the array manually in descending order
//     for (let i = 0; i < ary.length - 1; i++) {
//       for (let j = 0; j < ary.length - i - 1; j++) {
//         if (ary[j] < ary[j + 1]) {
//           // Swap the elements
//           const temp = ary[j];
//           ary[j] = ary[j + 1];
//           ary[j + 1] = temp;
//         }
//       }
//     }
//     return ary;
//   }

// function sortMaker(arr) {
//     if (!Array.isArray(arr)) {
//        return "Please Provide an array";
//    }
//    for (let i = 0; i < arr.length; i++) {
//        if (typeof arr[i] !== "number" || arr[i]<0) {
//            return "Invalid Input";
//        }
//    }
//      if (arr[0] === arr[1]) {
//          return "equal";
//        }
//        else if(arr[0]>arr[1]){
//             return arr;
//        }

//     else if (arr[0] < arr[1]) {
//         const temp = arr[0];
//         arr[0] = arr[1];
//         arr[1] = temp;

//         return arr;
//      }
//      else{
//        return "Something is wrong";
//      }

// }
// const result=sortMaker([2,2]);
// console.log(result);
// function findAddress(addressObject) {
//     if (typeof addressObject !== "object" || addressObject === null) {
//         return "Invalid input";
//     }

//     const street = addressObject.street || "__";
//     const house = addressObject.house || "__";
//     const society = addressObject.society || "__";

//     return `${street},${house},${society}`;
// }

// // ফাংশন টেস্ট
// const address1 = { street: 10, house: "15A", society: "Earth Perfect" };
// const output1 = findAddress(address1);
// console.log(output1);  // Output: 10,15A,Earth Perfect

// const address2 = { street: 10, society: "Earth Perfect" };
// const output2 = findAddress(address2);
// console.log(output2);  // Output: 10,__,Earth Perfect

// const address3 = { street: 10 };
// const output3 = findAddress(address3);
// console.log(output3);  // Output: 10,__,__ 

// const invalidInput = "not an object";
// const invalidOutput = findAddress(invalidInput);
// console.log(invalidOutput);  // Output: Invalid input


// function canPay(changeArray, totalDue) {
//     const sumOfPrices = changeArray.reduce((sum, price) => sum + price, 0);
//     return totalDue >= sumOfPrices;
// }

// // Example usage:
// console.log(canPay([1, 2, 8], 10)); // Output: false
// console.log(canPay([1, 5, 5], 10)); // Output: true

// const array = [1, 2, 1, 3, 9];
// let total = 0;

// for (const num of array) {
//     total += num;
// }

// console.log(total); // Output: 11

// 4 number answer
const objectName = {
    street: 10,
    house: "15A",
    society: "EarthPerfect"
}

function findAddress(addressObject) {
    if (typeof objectName !== 'object' || objectName == null) {
        return "Please provide an Object"
    }
    const street = addressObject.street || '__';
    const house = addressObject.house || '__';
    const society = addressObject.society || '__';

    return `${street},${house},${society}`;
}
const address = objectName;
console.log(findAddress(address));