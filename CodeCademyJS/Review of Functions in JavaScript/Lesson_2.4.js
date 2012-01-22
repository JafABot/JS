function cube(x) {
   if (typeof(x) != 'number') return 0;
  return x * x * x;
}

// Once you uncomment the type check in line 2, the
// cube function should return 0.
cube("test");