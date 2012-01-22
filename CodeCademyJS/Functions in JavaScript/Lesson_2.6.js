/* Start global variable `greeting` scope */
var greeting = "Ahoy";

var greet = function () {
  /* Start local variable `greeting` scope */
  var greeting = "Hello";
  
  /* Start local variable `myName` scope */
  var myName = prompt("Input your name: ");
  
  console.log(greeting + " " + myName);
  
  /* End local variables `myName` and `greeting` scope */
};

greet();

// This will produce a `ReferenceError` since we are out
// of the `myName` variable scope.
console.log(myName);