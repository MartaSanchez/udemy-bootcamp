//Print all numbers between -10 and 19
console.log('PRINT ALL NUMBERS BETWEEN -10 AND 19')
var num = -10
while (num <=19) {
  console.log(num);
  num += 1;
}

//Print all even numbers between 10 and 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")
var even = 10
while (even <=40) {
  console.log(even);
  even +=2;
}

//Print all odd numbers between 300 and 333

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")
var odd = 300

while (odd <= 333) {
  if (odd %2 !== 0) {
    console.log(odd);
  }
  odd +=1;
}


//Print all numbers divisible by 5 AND 3 between 5 and 50

  console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50")
 var nomb = 5

 while (nomb <= 50) {
   if (nomb % 5 === 0 && nomb % 3 === 0) {
     console.log(nomb);
   }

   nomb += 1;
 }
