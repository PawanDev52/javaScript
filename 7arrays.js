// Arrays method in JS

// let arr = [3,21,9,4,55,7];
// let arr2 = [4,7,8,9];
// let arr3 = [0,9,4,5];
// arr[0] = 5666;

// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);

// Array methods
// console.log(arr.toString());
// console.log(arr.join(" - ")); // it will add - after every array elements
// console.log(arr.pop()); // removes last element from the array
// console.log(arr.push('kid')); // it will add new element in the end but return the new length
// console.log(arr.shift()); // removes first element and return it
// console.log(arr.unshift(true)); // add element in starting and return length
// delete arr[2]; // delete an element / memory is allocated in array but there is no value
// console.log(arr.concat(arr2,arr3)); // doesn't modify original array
// console.log(arr.join(" and "));
// console.log(arr.sort());
// console.log(arr.reverse());
// console.log(arr.toSorted());
// console.log(arr.splice(1,2));
// console.log(arr.splice(1,2, 44,55,66,77)); // used to add elements on a particular index - go with notes ch-5
// console.log(arr.slice(2));
// console.log(arr.slice(1,4));
// console.log(arr);

// =====================================================================
// Looping Arrays

// let a = [1, 97, 5, 7, 88];

// using for loop -
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// using for each loop - 
// a.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// });

// using for of loop - 
// for (const value of a) {
//     console.log(value);
// }

// using for in loop
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element);
//     }
// }
// for (const key in a) {
//     console.log(a[key]);
// }
