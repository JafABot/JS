var isOdd = function (n) {
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
};
var isEven = function (n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(5));
console.log(isEven(2));
console.log(isEven(3));