function sayHello () {
  console.log("Hello, World!");
}

function sayHi () {
  alert("Hello, World!");
}

function sayHey () {
  var p=document.getElementById("sayHey");
  p.innerHTML = "Hello, World!";
}

function sayHola () {
  var username = prompt("Enter Your Username"); 
  var greeting = document.getElementById("sayHola");
  greeting.innerHTML = "Hello, " + username + "!";
}
  
