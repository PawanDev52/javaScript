console.log("learning looops");

let a = 1;
for (let i = 0; i < 20; i++) {
    console.log(a + i);
}

let obj = {
    name: "developer",
    role: "programmer",
    company: "coders"
};
for (const key in obj) {
    const element = obj[key];
    console.log(key + " : " + element);
}

for (const c of "developer") {
    console.log(c);
}

let x = 5;
while (x < 10) {
    console.log(x);
    x++;
}