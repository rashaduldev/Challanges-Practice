// function isInteger(x) {
//     if (typeof x!=="number") {
//         return "Please provide a number";
//     }else{
//         if (x%1==0) {
//             return 'true';
//         }else{
//             return 'false';
//         }
//     }
// }
// const intt=isInteger(5.3);
// console.log(intt);

// Question no 2

// function isJavascriptFile(s) {
//     if(typeof s !=="string") {
//         return "please provide string";
//     }else{
//         if (s.endsWith(".js")==true) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// const outFile=isJavascriptFile("rabby.js");
// console.log(outFile);

// Question no 3

function mindGame(num) {
    if (typeof num!=="number") {
        return "Pleaase provide a number";
    } else if(num<=0) {
        return "Please provide a possitive number"
    }
    else{
       const res=(((num*3)+10)/2)-5;
       return res;
    }
}

const result =mindGame(5);
console.log(result);