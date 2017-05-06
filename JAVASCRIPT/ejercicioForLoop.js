//Print all numbers between -10 and 19
console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");

for (var i = -10; i <= 19; i++) {
  console.log(i);
}


//Print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");

for (var i = 10; i <=40 ; i++) {
  if (i%2 === 0) {
    console.log(i);
  }
}


//Print all odd numbers between 300 and 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

for (var i = 300; i <= 333; i++) {
  //printo i si es impar
  if (i %2 !== 0){
    console.log(i);
  }
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY 3 AND 5 BETWEEN 5 AND 50");

for (var i = 5; i <=50; i++) {
  //printat i si es divisible por 5 y 3
  if (i%3 === 0 && i%5 === 0) {
    console.log(i);
  }
}
