//Start by defining the function. 
var calculateTotalCosts = function(salary, numWorkers, city){
  var fixedCosts = 5000;
  var variableCosts = salary * numWorkers;
  if (city == "NYC"){
    return fixedCosts + variableCosts + 30000;
  }
  else {
    if (city == "BEJ"){
    return fixedCosts + variableCosts + 25000;
  }
  else {
    return fixedCosts + variableCosts + 10000;
}
}
}

    calculateTotalCosts(40000, 3, "UK");