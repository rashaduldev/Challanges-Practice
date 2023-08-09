// var firstName="Rashadul";
// var lastName="Islam";
// var fullName=firstName+ " "+lastName;
// console.log(fullName);

// // Acceptable variable name 

// var mobile-price=56;
// var 1bookName=45;
// var user9=33;
// var "temp"=34;

function findAddress(addressObj) {
    const { street = "__", house = "__", society = "__" } = addressObj;
    return `${street},${house},${society}`;
  }
  
  const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
  const output1 = findAddress(input1);
  console.log(output1);
  
  const input2 = { street: 10, society: "Earth Perfect" };
  const output2 = findAddress(input2);
  console.log(output2);
  