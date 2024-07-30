// IIFE
/*
let a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 2000);
  });
};

// normal method
// let f = async()=>{
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// }
// f()

// advanced method
(async () => {
  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);
})();
*/

// =========================================================================
// Destructuring

// let arr = [3, 5, 6, 8, 76, 12];
// normal method
// let a = arr[0]
// let b = arr[1]

// advanced method
// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)

// example - 1
// let [a, , , ...rest] = arr
// console.log(a, rest)

// example - 2
// let { a, b } = { a: 1, b: 2 };
// console.log(a, b)

// spread operator
// let arr1 = [3, 5, 8];
// let obj1 = { ...arr1 };
// console.log(obj1)

// function sum(v1, v2, v3) {
//   return v1 + v2 + v3;
// }
// console.log(sum(...arr1))

// example - 3
// let obj2 = {
//   name: "joe",
//   company: "toyo",
//   address: "xyz",
// };

// console.log({...obj2, name: "devid", company: "abc"}) // values will change
// console.log({name: "devid", company: "abc", ...obj2}) // will not change

// =======================================================================================
// Hoisting
/*
console.log(z) // will print undefined with var
greet()
function greet(){
  console.log("good morning");
}
// const z = 9;
// let z = 9;
// var z = 9; // declaration hoisted to the top but initialization is not
console.log(z)
*/

// ===============================================================================================
// Closures

// message = "good global"
// function hellow(){
//   let message = "good morning"
//   {
//     let message = "good afternoon"
//     console.log(message)
//   }
//   let c = function hellow2(){
//     console.log("i am c " + message)
//   }
//   return c
// }
// c = hellow()
// c()

// example - 1

// function init(){
//   var name = "mozilla"
//   function disply(){
//     console.log(name)
//   }
//   name = "peter"
//   return disply;
// }
// let t = init();
// t()

// example - 2
// function retrnfun() {
//   const x = () => {
//     let a = 1;
//     console.log(a);
//     const y = () => {
//       // let a = 2;
//       console.log(a);
//       const z = () => {
//         // let a = 3;
//         console.log(a);
//       };
//       z();
//     };
//     a = 99;
//     y();
//   };
//   return x;
// }
// let f = retrnfun();
// f();

// ===================================================================================
// Arrow function ()=>{}


