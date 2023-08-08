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

function isJavascriptFile(s) {
    if(typeof s !=="string") {
        return "please provide string";
    }else{
        if (s.endsWith(".js")==true) {
            return true;
        } else {
            return false;
        }
    }
}
const outFile=isJavascriptFile("rabby.js");
console.log(outFile);