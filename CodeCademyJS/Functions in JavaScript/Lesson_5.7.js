var power = function (base, exponent) {
if (exponent == 0) {
    return 1; 

  } else {
    return base * power (base, exponent - 1);

}
};

console.log(power(2, 8) === 256);
console.log(power(2, 4) === 16);
console.log(power(2, 2) === 4);