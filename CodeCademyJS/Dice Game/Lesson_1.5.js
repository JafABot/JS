// pick a random number between 1 and 6 for our roll of the die
var die1 = Math.floor(Math.random()*6 + 1);
var die2 = Math.floor(Math.random()*6 + 1);
var score;

// this time if either dice roll is 1 then score should be 0
// Otherwise, score should be the sum of the two dice
if (die1 === 1 || die2 === 1){
  score = 0
    }

else {
  if (die1 !== 1 || die2 !== 1){
   score = (die1+die2); 
 }
}

console.log("You rolled a "+die1+" and a "+die2+" for a score of "+score);