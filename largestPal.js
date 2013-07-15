var largestPal = function (){
  var palin = 0;
  var x;
  var y;
  var x1;
  for(var i = 999; i > 99; i--){
    for(var j = i; j > 99; j--){
      x = i*j;
      if(x > palin){
        x1 = x.toString();
        y = x1.split('');
        y = y.reverse();
        y = y.join('');
        if(x1 === y){
          palin = x;
        }
      }
    }
  }
  return palin;
}