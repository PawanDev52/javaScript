// exercise 10 - generate random word

let obj1 = ["one", "two", "three"];
let obj2 = ["four", "five", "six"];
let obj3 = ["seven", "eight", "nine"];

function printRandom (arr){
    let generate = Math.floor(Math.random() * arr.length);
    return arr[generate];
}

let word = `random word is : ${printRandom(obj1)} ${printRandom(obj2)} ${printRandom(obj3)}`;
console.log(word);
