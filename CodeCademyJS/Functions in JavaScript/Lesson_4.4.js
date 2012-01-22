var isMultipleOfThree = function (x) {
  return x % 3 === 0;
};

var isNotMultipleOfThree = function (x) {
  return !isMultipleOfThree(x);
};
