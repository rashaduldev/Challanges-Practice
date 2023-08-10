// // function isInteger(x) {
// //     if (typeof x!=="number") {
// //         return "Please provide a number";
// //     }else{
// //         if (x%1==0) {
// //             return 'true';
// //         }else{
// //             return 'false';
// //         }
// //     }
// // }
// // const intt=isInteger(5.3);
// // console.log(intt);

// // Question no 2

// // function isJavascriptFile(s) {
// //     if(typeof s !=="string") {
// //         return "please provide string";
// //     }else{
// //         if (s.endsWith(".js")==true) {
// //             return true;
// //         } else {
// //             return false;
// //         }
// //     }
// // }
// // const outFile=isJavascriptFile("rabby.js");
// // console.log(outFile);

// // Question no 3

// // function mindGame(num) {
// //     if (typeof num!=="number") {
// //         return "Pleaase provide a number";
// //     } else if(num<=0) {
// //         return "Please provide a possitive number"
// //     }
// //     else{
// //        const res=(((num*3)+10)/2)-5;
// //        return res;
// //     }
// // }

// // const result =mindGame(5);
// // console.log(result);

// // function cubeNumber(input) {
// //     if (typeof input === 'number') {
// //         return Math.pow(input,2);
// //     } else {
// //         return "Sorry, I only accept numeric inputs.";
// //     }
// // }

// // // Testing the function
// // let inputNumber = 4;
// // let result = cubeNumber(inputNumber);
// // console.log("Cube of input number:", result);

// // let invalidInput = "five";
// // let bonusResult = cubeNumber(invalidInput);
// // console.log("Bonus result:", bonusResult);


// // function cubeNumber(input) {
// //     // var result;
// //     if (typeof input =="number") {
// //          let result=Math.pow(input,3);
// //     } else {
// //         return "please provide a number";
// //     }
// //     return result;
// // }
// // const res=cubeNumber(3);
// // console.log(res);

// // 1number ans
// function cubeNumber(number) {
//     let result;
//     if (typeof number !=="number") {
//         return "Please provide a number";
//     } else {
//         let result=Math.pow(number,3);
//        return result;

//     }
//     // return result;
// }
// const res=cubeNumber(4);
// console.log(res);

// 2 number ans

// function matchFinder(string1, string2) {
//     if (typeof string1 !== "string" || typeof string2 !== "string") {
//         return "Both inputs must be strings.";
//     } else {
//         if (string1.includes(string2)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// const firstString = "Hello world";
// const secondString = "ello";
// const result = matchFinder(firstString, secondString);
// console.log(result); // Output: true

// const invalidInput1 = 42;
// const invalidInput2 = "hello";
// const invalidResult = matchFinder(invalidInput1, invalidInput2);
// console.log(invalidResult);  // Output: Both inputs should be strings.

// function sortMaker(arr) {
//      if (!Array.isArray(arr)) {
//         return "Please Provide an array";
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== "number" || arr[i]<0) {
//             return "Invalid Input";
//         }
//     }
//       if (arr[0] === arr[1]) {
//           return "equal";
//         }

//      else if (arr[1] > 0) {
//         // Sort the array manually in descending order
//         for (let i = 0; i < arr.length - 1; i++) {
//           for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] < arr[j + 1]) {
//               // Swap the elements
//               const temp = arr[j];
//               arr[j] = arr[j + 1];
//               arr[j + 1] = temp;
//             }
//           }
//         }
//         return arr;
//       }
//       else{
//         return "Something is wrong";
//       }

// }
// const result=sortMaker([2,5]);
// console.log(result);


// function findAddress(obj) {
//     if (typeof obj !== "object") {
//         return "Invalid input";
//     }else if(typeof obj == "object"){
//         return `${objectName.street},${objectName.house},${objectName.society}`;
//     }
//     else if(typeof obj == "object"){

//     }
// }
// const objectName={
//     street:10,
//     house:"15A",
//     society:"EarthPerfect"
// }

// const output1=findAddress(objectName);
// console.log(output1);
// 5number
// function canPay(changeArray, totalDue) {
//     if (Array.isArray(changeArray)==false) {
//         return "Please provide an array";
//     }
//     else if(changeArray.length === 0){
//         return "Your array is empty , please provide an array";
//     }
//     let total = 0;
//     for (let i = 0; i <changeArray.length; i++) {
//         const element = changeArray[i];
//         total+=element;   
//     }
//     let result= total >= totalDue;
//     return result;
// }
// const res = canPay([5,5], 10);
// console.log(res);
// console.log(canPay([1, 5, 5], 10)); // Output: true


//4 number 

// const objectName={
//     street:10,
//     house:"15A",
//     society:"EarthPerfect"
// }
// function findAddress(obj) {
//     if (typeof obj !== "object") {
//         return "Invalid input";
//     }else if(typeof obj == "object"){
//         return `${objectName.street},${objectName.house},${objectName.society}`;
//     }
//     else if(typeof obj == "object"){
//     objectName.
//     }
// }


// const output1=findAddress(objectName);
// console.log(output1);

// function compare(a, b) {
//     if (a == b) {
//     return true;
//     } else {
//     return false;
//     }
//    }
//    const result = compare(15, "15");
//    console.log(result);
//    console.log(15=='15');
// function compare(a, b) {
//     if (a.toString() === b) {
//     return true;
//     } else {
//     return false;
//     }
//    }
//    const result = compare(25, 25);
//    console.log(result);


//    const a=25;
//    const b=25;
//    console.log(a.toString()===b);
// console.log("123" + 123);
// let a="hi"
// let b="there"
// console.log(a+b)