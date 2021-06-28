/*
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is
the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24 because 4*3*2*1 equals 24.
factorial zero is always 1!
*/

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(n){

  // edge case for negative number
  if (n < 0) {
      return null;
  }

  // base cases for 0 and 1
  if (n === 0 || n === 1) {
      return 1;
  }

  // recursive case
  // multiply current number times factorial of numer one lower
  return n * factorial(n - 1);
}

