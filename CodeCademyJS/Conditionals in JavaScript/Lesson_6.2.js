var cost = 75;
var employed = "yes";
var result;

if (cost > 100) {
  if (employed === "yes") {
  result = "buy";
  } else { 
  result = "can't afford";
  }
} 
else {
  result = "reject cheap product";
}