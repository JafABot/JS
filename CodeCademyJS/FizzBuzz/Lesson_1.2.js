// Write a statement that decides if the variable `i` is divisible by 3.  

// for the numbers 1 through 20,
for ( i=1; i<=20; i++) { 
  
  // if the number is divisible by 3, write "Fizz"
  if ( i % 3 === 0 ) { 
    console.log("Fizz");
  }
  
  // otherwise, write just the number
  else {
    console.log(i);
    
  }
}