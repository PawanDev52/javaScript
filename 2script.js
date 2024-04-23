// Variables in Javascript - var, let, const
console.log("hello and welcome back");

// var a = 5; // var sirf globally scope hota hai
let a = 33; // let bahar global or block me block scope hota hai
a = a + 3;
var b = 7;
var c = "javascript";
// var 55b = "github"; // invalid

// console.log(a);
// console.log(typeof a, typeof b, typeof c);
{
    // var a = 55;
    let a = 90;
    // console.log(a);
}

// console.log(a);
const a1 = 6;
// a1 += 1; // invalid

// Primitive Data types
let x = "day";
let y = 33;
let z = 3.22;
let p = true;
let v =  undefined;
let r = null;

console.log(x, y, z, p, v, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof v, typeof r);

let o = {
    name: "dev",
    "job role": "teacher",
    talented: true
}

console.log(o);
o.salary = "100rs"; // you can add key and values to the object like this!
console.log(o);
o.salary = "200rs";
console.log(o);
console.log(30 + 35);
console.log("30" + "35");
console.log(2 + true);
console.log(true + true);
console.log(4 - true);