// pick a random number between 1 and 6 for our roll of the die
var die = Math.floor(Math.random()*6 + 1);
var score;

// this time make an if statement so that if the roll is 1 the score is 0
if (die === 1){
  score = 0;
}
else {
  if (die !==1){
    score = die;
  }
}
  
console.log("You rolled a "+die+" for a score of "+score);