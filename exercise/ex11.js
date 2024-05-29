// exercise - 11

// using reduce method
// let a = [1,2,3,4,5,6,7,8,9];
// let b = a.reduce((total, num) => total*num);
// console.log(b);

// using for loop method
let a = [1,2,3,4,5,6,7,8,9];
let b = 1;
for (let i = 1; i <= a.length; i++) {
    b = b * i;
}
console.log(b);