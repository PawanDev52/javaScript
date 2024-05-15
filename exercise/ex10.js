// exercise 10 - generate random word
/* let obj1 = ["one", "two", "three"];
let obj2 = ["four", "five", "six"];
let obj3 = ["seven", "eight", "nine"];
function printRandom (arr){
    let generate = Math.floor(Math.random() * arr.length);
    return arr[generate];
}
let word = `random word is : ${printRandom(obj1)} ${printRandom(obj2)} ${printRandom(obj3)}`;
console.log(word); */

// method 1
/*
let first, second, third;

let random = Math.random();
if (random < 0.33) {
  first = "one";
} else if (random < 0.66 && random > 0.33) {
  first = "two";
} else {
  first = "three";
}

random = Math.random();
if (random < 0.33) {
  second = "four";
} else if (random < 0.66 && random > 0.33) {
  second = "five";
} else {
  second = "six";
}

random = Math.random();
if (random < 0.33) {
  third = "seven";
} else if (random < 0.66 && random > 0.33) {
  third = "eight";
} else {
  third = "nine";
}
console.log(`${first} ${second} ${third}`);
*/

// method 2
/*
let first = {
    1 : "one",
    2 : "two",
    3 : "three"
}
let second = {
    1 : "four",
    2 : "five",
    3 : "six"
}
let third = {
    1 : "seven",
    2 : "eight",
    3 : "nine"
}

let printRandom = Math.floor(Math.random() * 3 + 1);
let var1 = first[printRandom];

printRandom = Math.floor(Math.random() * 3 + 1);
let var2 = second[printRandom];

printRandom = Math.floor(Math.random() * 3 + 1);
let var3 = third[printRandom];

console.log(`random word is : ${var1} ${var2} ${var3}`);
*/

// method 3
let first = {
  a : "one",
  b : "two",
  c : "three"
}
let second = {
  a : "four",
  b : "five",
  c : "six"
}
let third = {
  a : "seven",
  b : "eight",
  c : "nine"
}

function generate1(){
  let randm = Math.floor(Math.random() * 3 + 1);
  if(randm == 1){
    return first['a'];
  }
  else if(randm == 2){
    return first['b'];
  }
  else if(randm == 3){
    return first['c'];
  }
}
function generate2(){
  let randm = Math.floor(Math.random() * 3 + 1);
  if(randm == 1){
    return second['a'];
  }
  else if(randm == 2){
    return second['b'];
  }
  else if(randm == 3){
    return second['c'];
  }
}
function generate3(){
  let randm = Math.floor(Math.random() * 3 + 1);
  if(randm == 1){
    return third['a'];
  }
  else if(randm == 2){
    return third['b'];
  }
  else if(randm == 3){
    return third['c'];
  }
}
console.log(`random word is : ${generate1()} ${generate2()} ${generate3()}`);