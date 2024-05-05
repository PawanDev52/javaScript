console.log("learning strings in js");

let a = "developer";
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[8]);
// console.log(a[9]);

// console.log(a.length); // for finding string length
let name = "Shrihari";
let friend = "Om";
// console.log("his name is " + name + " and his friend is " + friend);
// console.log(`Shri. ${name} is friend of ${friend}.`); // template literals. and this is string interpolation.
// name = "hari'om";
// name = "Hari\"om";
// name = "Hari\nom";
// name = "Hari\tom";
// name = "HaRIom";
// console.log(name);
// name = "HaR\rIom";
// name = "HaRI\rom";
// name = "Shrih\rari";
console.log(name);
// console.log("Hello\rWorld!");

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
console.log(name.slice(2,6));
console.log(name.slice(4));
console.log(name.replace("ri", "gi")); // if ri is present two times so it will only change the first accurance!
// console.log(name.concat(friend));
console.log(name.concat(friend, "Namo", "Namah")); // you can also do it like this  (instead of comma you can use +)
