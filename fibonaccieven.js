var evenfibonacci = function (n){
  var px = 1;
  var temp;
  var x = 1;
  var count = 0;
  while(x < n){
    temp = x;
    x += px;
    px = temp;
    if(x%2 === 0){
      count += x;
    }
  }
  return count;
}