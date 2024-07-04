// promise

let prom = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('yes its done')
    resolve("code")
  }, 3000);
});

prom.then((a)=>{
  console.log(a);
})