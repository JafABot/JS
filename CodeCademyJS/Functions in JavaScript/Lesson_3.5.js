var lost = [4, 8, 15, 16, 23, 42];
var count = lost.length;

var isLost = function (n) {
  for ( i = 0; i < 6; i++ ) {
    if ( n === lost[i]) {
      return true;
    }
  }
  return ;
};

if ( isLost(12) ) {
  console.log('12 is a lost number');
}

if ( isLost(16) ) {
  console.log('16 is a lost number');
}