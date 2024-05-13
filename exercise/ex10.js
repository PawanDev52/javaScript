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