function isEven(num) {
  if (num % 2 ==0) {
    return "True";
  }
  else {
    return "False";
  }
}

function factorial(n) {
  if ( n == 0 || n == 1) {
    return 1;
  }
    return n * factorial(n-1);
}

function kebabToSnake(str) {
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
