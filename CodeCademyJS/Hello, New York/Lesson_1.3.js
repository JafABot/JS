// add a parameter called milesTraveled to the function
// taxiFare
var taxiFare = function (milesTraveled) {
  var baseFare = 2.50;
  var costPerMile = 2.00;

  // calculate cost using baseFare, milesTraveled, and 
  // costPerMile
  var cost;
  cost = baseFare + milesTraveled * costPerMile
 
  return cost;
};