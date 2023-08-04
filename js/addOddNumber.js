function evenNumber(array) {
    
    for (let i = 0; i < array.length; i++) {
        const index=i;
        const element = array[i];
        console.log(index,element);
        if (element%2 ==1) {
            return true;
        }else{
            return false;
        }
        
    }
}
const arrayName=[11,13,12,15,18,16,17,25,28,36];
const numberArray=evenNumber(arrayName);