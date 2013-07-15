var largestPF = function (n){
  var factor;
  var d = 2;
  while(n > 1){
    if(n%d === 0){
      factor = d;
      n = n/d;
    }
    d++;
  }
  return factor
};