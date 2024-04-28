console.log("learning functions!");

// function great(name){
//     console.log("Hello " + name + " you are great");
//     console.log("Hello " + name + " you are a good developer!");
// }
// great("hari");
// great("ravi");

// function sum(a, b, c = 4){ // kisi parameter ko default value bhi de sakte hai
//     // console.log(a + b);
//     console.log(a, b, c);
//     return a + b + c; // jab return karte hai tab dusre variable me output jata hai
// }

// sum(4, 7);
// result1 = sum(5);
// result2 = sum(15, 9);
// result3 = sum(2, 18, 3);

// console.log("the sum of numbers is : ", result1);
// console.log("the sum of numbers is : ", result2);
// console.log("the sum of numbers is : ", result3);

// arrow function
// const ero = (a, b)=>{ // its a function but also a variable
//     console.log("the ero function returns ", a * b);
// }
// fun = ero(4, 2);
// fun = ero(2, 6);

// Practice set
// Question - 1
// let obj = {
//     hari: 78,
//     rohan: 70,
//     aakash: 8
// }
// const take = Object.values(obj);
// for (let i = 0; i < take.length; i++) {
//     console.log(take[i]);
// }

// Question - 2
// for (const key in obj) {
//     console.log("the marks of " + key + " is : " + obj[key]);
// }

// Question - 3 
// it will run only in the browser not here
// let num = Math.floor(Math.random() * 5) + 1;
//   let attempts = 0;
//   const maxAttempt = 5;
//   while (true) {
//     let guess = parseInt(prompt("guess a number"));
//     attempts++;
//     if (guess === num) {
//       console.log("your guess is correct", guess);
//       break;
//     }
//     else{
//       console.log("try again");
//     }
//     if(attempts>= maxAttempt){
//       console.log("your attempts are over, the correct number was: ", num);
//       break;
//     }
//   }

// Question - 4
let find = [2, 4, 5, 3, 8, 10, 7, 1];
function sum(check){
    let work = check.reduce((total, num)=> total + num, 0)
    return work / check.length;
}

let mean = sum(find);
console.log(mean);