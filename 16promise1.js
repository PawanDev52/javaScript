const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // db calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// example - 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

// example - 3
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "root", email: "abc@ben.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// example - 4
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "admin", password: "1234" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the promise is either resolved or rejected"));

// example - 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

async function consumePromiseFive() {
  // using with try and catch
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// example - 6
/*
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getAllUsers();
*/ // commenting this example because we are doing the same task in the below example also

// example - 7
// fetch("https://jsonplaceholder.typicode.com/users")
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
