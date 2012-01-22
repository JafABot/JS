var fullName = "";
var name;
var firstLetter;
/*
   fixName function definition should go here.
*/
var fullName = ""; var name; var firstLetter;

var fixName = function() { firstLetter = name.substring(0, 1); name = firstLetter.toUpperCase() + name.substring(1); fullName = fullName + " " + name; };

name = prompt("First Name"); fixName();

name = prompt("Second Name"); fixName();

console.log("And your full name is:" + fullName);
