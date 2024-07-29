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

let arr = [3, 5, 6, 8, 76, 12]
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
let {a, b} = {a:1, b:2}
console.log(a, b)

// spread operator
let arr1 = [3, 5, 8]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1, v2, v3){
    return v1 + v2 + v3
}
console.log(sum(...arr1))

// example - 3
let obj2 = {
    name: "joe",
    company: "toyo",
    address: "xyz"
}

// console.log({...obj2, name: "devid", company: "abc"}) // values will change
console.log({name: "devid", company: "abc", ...obj2}) // will not change
