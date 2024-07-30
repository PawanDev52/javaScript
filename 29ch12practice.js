// question - 1
// const a = (text) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, 2000);
//   });
// };
// (async () => {
//   let text = await a("hello");
//   console.log(text);
//   text = await a("world");
//   console.log(text);
// })();

// question - 2
// function sum(a, b, c) {
//   return a + b + c;
// }
// let x = [2, 3, 7];
// console.log(sum(...x) / x.length);

// question - 3
// const a = (text, n = 2) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, 1000 * n);
//   });
// };
// (async () => {
//   let text = await a("i am resolving after 1 second", 1);
//   console.log(text);
//   text = await a("i am resolving after 4 second", 4);
//   console.log(text);
// })();

// question - 4
function simple(p, r, t){
    return (p * r * t) / 100;
}
console.log(simple(10000, 5, 1))