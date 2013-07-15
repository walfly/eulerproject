var sumSquare = function (n){
  var sumSquare = 0;
  var sum = 0;
  for(var i = 1; i <= n; i++){
    sum += i;
    sumSquare += (i*i);
  }
  var squareSum = sum * sum;
  return squareSum - sumSquare;
}