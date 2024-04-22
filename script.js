alert("Hello world");
  console.log("Code is running!");
  var a = prompt("enter your number"); // prompt is used for taking inputs from user.
  console.log("value of a is " + a);

  var isTrue = confirm("are you ready for learning javascript");
  
  if(isTrue){
    console.log("Great, we are going to start");
  }
  else{
    console.log("okay learn later!");
  }
  document.body.style.backgroundColor = "green";