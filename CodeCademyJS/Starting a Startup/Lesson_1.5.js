//Start by defining the function. It now has three parameters!
var calculateTotalCosts = function(salary, numWorkers, city){
  var fixedCosts = 5000;
  var variableCosts = salary * numWorkers;
  if (city == "NYC"){
    return fixedCosts + variableCosts + 30000;
  }
  else {
    return fixedCosts + variableCosts;
  }
}
    calculateTotalCosts(30000, 7, "NYC");