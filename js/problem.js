function isInteger(x) {
    if (typeof x!=="number") {
        return "Please provide a number";
    }else{
        if (x%1==0) {
            return 'true';
        }else{
            return 'false';
        }
    }
}
const intt=isInteger(5);
console.log(intt);
