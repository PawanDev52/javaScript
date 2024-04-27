console.log("learning functions!");

function great(name){
    console.log("Hello " + name + " you are great");
    console.log("Hello " + name + " you are a good developer!");
}
great("hari");
great("ravi");

function sum(a, b, c = 4){ // kisi parameter ko default value bhi de sakte hai
    // console.log(a + b);
    console.log(a, b, c);
    return a + b + c; // jab return karte hai tab dusre variable me output jata hai
}

// sum(4, 7);
result1 = sum(5);
result2 = sum(15, 9);
result3 = sum(2, 18, 3);

console.log("the sum of numbers is : ", result1);
console.log("the sum of numbers is : ", result2);
console.log("the sum of numbers is : ", result3);

// aero function
const ero = ()=>{
    
}