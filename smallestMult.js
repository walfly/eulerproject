//should rewrite to generate the prime factorization of n

var smallestMult = function (){
  var ans;
  var n = 20;
  while(!ans){
    if(n%16 === 0 && n%9 === 0 && n%5 === 0 && n%7 === 0 && n%11 === 0 && n%13 === 0 && n%17 === 0 && n%19 === 0){
      ans = n;
    }
    n++;
  }
  return n;
}

var multsToTest = function (n){
  var arr = primesInRange(n);
  var retArr = [];
  var mult;
  for(var i = 0; i < arr.length; i++){
    mult = highestPower(arr[i], n);
    retArr.push(mult);
  }
  return retArr;
}

var primesInRange = function (n){
  var arr = [], retArr = [];
  var i, j;
  for(i = 0; i <= n; i++){
    arr.push(true);
  }
  arr[0] = false;
  arr[1] = false;
  for(i = 2; i <= Math.sqrt(n); i++){
    if(arr[i]){
      for(j = i*i; j < n; j += i){
        arr[j] = false;
      }
    }
  }
  for (i = 0; i < arr.length; i++){
    if(arr[i]){
      retArr.push(i);
    }
  }
  return retArr;
}

var highestPower = function (n, max){
  var x = n;
  var p = 2;
  while(x < max){
    x = Math.pow(n, p);
    p ++;
  }

  if (x < max){
    return x;
  } else {
    return n;
  }
}

