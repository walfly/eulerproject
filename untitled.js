var longestPath = function(arr){
  var ns = [[-1,1],[1,0],[1,1],[0,1],[1,-1],[0,-1],[-1,-1],[-1,0]];
  var results = [];
  var length = arr.length * arr[0].length;
  var recurse = function (cp, path){
    var st = ''+cp[0]+','+cp[1];
    path[st] = true;
    for(var j = 0; j < ns.length; j++){
      if(cp[0] + ns[j][0] >= 0 && cp[0] + ns[j][0] < arr.length){
        if(cp[1] + ns[j][1] >= 0 && cp[1] + ns[j][1] < arr[0].length){
          var y = cp[0]+ns[j][0];
          var x = cp[1]+ns[j][1]
          st = ''+y+','+x;
          if(!path[st]){
            if(arr[cp[0]][cp[1]] <= arr[cp[0] + ns[j][0]][cp[1] + ns[j][1]]){
              var newPath = _.extend({}, path);
              recurse([cp[0] + ns[j][0], cp[1] + ns[j][1]], newPath);
            }
          }
        }
      }
    }
    results.push(Object.keys(path));
  }
  for(var i = 0; i < length; i++){
    var xcoord = i % arr[0].length;
    var ycoord = Math.floor(i/arr[0].length);
    recurse([ycoord, xcoord], {});
  }
  return results;
}

var matrix = [[8,2,4],
              [0,7,1],
              [3,7,9]];

longestPath(matrix);

