console.log("hello learn if else, else if, ternory operator");

let a = "3";
let b = 6;

console.log(a == b);
console.log(a === b);

let age = 10;
let grace = 5;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);

if((age + grace) > 18){
    console.log("you can drive");
}
else if(age == 10){
    console.log("your age is 20");
}
else{
    console.log("you cannot drive");
}

let c = a < b ? 'yes': 'not';
console.log(c);