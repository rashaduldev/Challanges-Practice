// var number=0;
// while(number<5){
//     console.log(number);
//     number++;
// }

// even number
// var number=0;
// while(number<5){
//     console.log(number);
//     // number++;
//     number=number+2;
// }

// Odd number
// var number=1;
// while(number<20){
//     console.log(number);
//     // number++;
//     number=number+2;
// }

// For loop
// for(var num=0; num<10; num++){
//     console.log('num');
// }


// for (var num = 10; num <= 10; num++) {
//     console.log('num');
//   }
// for (var num = 10; num < 10; num++) {
//     console.log('num');
//   }
  
// for(var i=1;i<=10;i+=2){
//     console.log(i);
// }
//   array and loop

// var numbers=[11,23,25,85,76,54,65,76,54,96,89];

// for(var i=0;i<=numbers.length;i++){
//     number=numbers[i];
//     console.log(number);
// }

// var i = 0;
// for (i=1; i<=5; i++){};
// console.log(i);
// var i = 0;
// for (i=0; i<5; i++){
//     console.log(i);
// };

// var marks = [ 13, 15, 14, 20, 18];
// for(var i=0; i<marks.length; i++){
//  if(marks[i] >=15){
//     continue;
//  }
//  console.log(marks[i]);
// };

// var nme="false";
// console.log(typeof nme);
// var i = 5;
// for (i=0; i < 5; i++) {
//  console.log(i);
// }
// var i = 5;
// for (i < 5; i++) {
//  console.log(i);
// }

// var num=10;
// while(num>=1){
//     console.log(num);
//     num--;
// }

// for(i=10;i>=1;i--){
//     console.log(i);
// }

// Practice part
// var fruits=['Apple','Banana','Orange'];
// fruit=fruits[1];
// fruits[1]='mango';
// console.log(fruits);

// var fruits=['Apple','Banana','Orange'];
// fruit=fruits[1];
// fruits[1]='mango';
// fruits.pop();
// fruits.push("Watermelon");
// console.log(fruits);

// practice loop
// var marks=[90,78,44,56,68,99];
// if(){

// }

// Largest number
// var num1=14;
// var num2=55;
// var num3=33;

// if(num1>num2){
//     if(num1>num3){
//         console.log(num1);
//     }
//     console.log()
// }

// var me={age:21,name:'c'}
// var smartphone = { brand: "iPhone", model: "13" };
// console.log(smartphone.brand);

// function movie(){
//     return "Din-The day";
//     return "Poran";
//     return "Hawa";
//    }
//    console.log(movie());
// function fruit(num1,num2){
//     console.log(fruit);
//     const sum=num1+num2;
//     return sum;
// }
// console.log(fruit(11,12));
// var student={
//     id:2,
//     name:'rabby',
//     class:10,
//     marks:98
// }

// var mobile={
//     brand:'Iphone',
//     color:'black',
//     price:29000,
//     Storage:'64gb',
//     camera:'14mp'
// }
// console.log(mobile.price);

// var shoppingCard={
//     book:3,
//     sunglas:7,
//     pen:9,
//     mouse:1,
//     Keyboard:5,
// }
// var penCount=shoppingCard.pen;
// // console.log('pen:',penCount);
// // console.log(shoppingCard);
// var properties=Object.keys(shoppingCard);
// var propertyValues=Object.values(shoppingCard);
// console.log(propertyValues,properties);
// console.log();

// Function quiz
// function inchToFeet(inch){ 
//     var feet = inch/12;
//     return feet; 
// }
// const int= inchToFeet(144);
// console.log(int);

// var num=5;
// var res=num%2==0;
// console.log(res);

// for( let i = 10; i>=1; i--){
//     console.log(i);
//  }
// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//    }
//    console.log(print(1,2,3));

// let a=50;
// if(item=>50){};
// if(false){};
// for(let i=5;i<10;i=i+2){};

// Even and ODD

// console.log(7/2!==0);
// console.log(14%4);
// function isEven(number) {
//     const remainder=number%2;
//     console.log(remainder);
//     if (remainder==0) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const myNumber= isEven(13);
// console.log(myNumber);

function isLeepYear(year) {
    const remainder=year%4;
    console.log(remainder);
    if (remainder==0) {
        console.log("Your year is leep",year);
    } else {
        console.log("Your year is not leep",year);
    }
}
isLeepYear(2023);
isLeepYear(2027);
isLeepYear(2024);
isLeepYear(2032);
isLeepYear(2080);