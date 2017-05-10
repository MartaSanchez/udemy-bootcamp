var list = [];

function printReverse(list) {
  var newList = list.reverse()
  newList.forEach(function(item) {
    console.log(item);
  });
}

//** another way to do the same function
function reversePrint(list) {
  for(var i = list.length - 1; i >= 0; i--){
    console.log(list[i]);
  };
}


function isUniform(list) {
  var first = list[0];
  for(var i = 1; i < list.length; i++){
    if(list[i] !== first) {
      return false;
    };
  };
  return true;
}


function sumArray(list) {
  var result = 0;
  list.forEach(function(item) {
    result += item;
  });
  return result;
}


function max(list) {
  var m = 0;
  list.forEach(function(item) {
      if(item >= m) {
        m = item
      };
  });
  return m;
}
