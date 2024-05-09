// exercise 10

let obj1 = ["one", "two", "three"];
let obj2 = ["four", "five", "six"];
let obj3 = ["seven", "eight", "nine"];

function printRandom (arr){
    let generate = Math.floor(Math.random() * arr.length);
    return arr[generate];
}

let word = printRandom(obj1);
console.log(word);