var yourName = "Scott";
var gender = "male";
var result;

//Line 10 starts an if statement
//Nested in this if statement is an if else statement on lines 11 - 15
//This nested if else statement allows us to check another condition
//We close the first if statement at the start of line 16

if ( yourName.length > 0 && gender.length > 0) {
  if ( gender === "male" || gender === "female" ) {
	result = "Thanks";
  } else {
	result = "Please enter male or female for gender.";
  }
} else {
  result = "Please tell us both your name and gender.";
}