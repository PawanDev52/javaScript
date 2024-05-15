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
console.log(printRandom);
let var1 = first[printRandom];

printRandom = Math.floor(Math.random() * 3 + 1);
console.log(printRandom);
let var2 = second[printRandom];

printRandom = Math.floor(Math.random() * 3 + 1);
console.log(printRandom);
let var3 = third[printRandom];

console.log(`random word is : ${var1} ${var2} ${var3}`);
