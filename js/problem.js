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

function sortMaker(arr) {
     if (!Array.isArray(arr)) {
        return "Please Provide an array";
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || arr[i]<0) {
            return "Invalid Input";
        }else{
            return 'Vallied';
        }
    }
   
}
const result=sortMaker([4,5]);
console.log(result);