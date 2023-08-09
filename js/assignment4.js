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

