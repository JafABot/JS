// use taxiFare to set tripCost to the cost of your 
// ride covering 5 miles at 2 am in the morning
var tripCost = 2.50 + 10 + 0.50;

// calculates taxi fare based upon miles traveled 
// and the hour of the day in military time (0-23).
var taxiFare = function (milesTraveled, pickupTime) {
  var baseFare = 2.50;
  var costPerMile = 2.00;
  var nightSurcharge = 0.50; // 8pm to 6am, every night

  var cost = baseFare + (costPerMile * milesTraveled);
  
  // add the nightSurcharge to the cost if it is after 
  // 8pm or before 6am
  if (pickupTime >= 20 || pickupTime <= 6) {
      cost += nightSurcharge;
  }
  
  return cost;
};