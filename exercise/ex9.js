let random_num = Math.random();
console.log(random_num);
let a = prompt("Enter first number");
let c = prompt("Enter Operator");
let b = prompt("Enter second number");

let obj = {
  "+": "-",
  "*": "/",
  "-": "+",
  "/": "*",
};

if (random_num > 0.8) {
  console.log(`the result is ${a} ${c} ${b}`);
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  console.log(`the result is ${a} ${c} ${b}`);
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
