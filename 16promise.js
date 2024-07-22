// promise

// let prom = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log('yes its done')
//     resolve("code")
//   }, 3000);
// });

// prom.then((a)=>{
//   console.log(a);
// })

// ==================================
// try with catch()

let prom = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("no random number supporting");
  } else {
    setTimeout(() => {
      console.log("yes its done");
      resolve("code");
    }, 3000);
  }
});
prom.then((a) => {
  console.log(a);
}).catch((err)=>{
    console.log(err)
})