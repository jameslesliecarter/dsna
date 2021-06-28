/*
Write a function called power which accepts a base and and exponent. The function
should return the power of the base of the exponent. This function should mimic teh functionality of Math.pow() - do not worry about negative bases and exponents.
*/

// power(2, 0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(b, e) {
  // edge case
  // e === 0 => return 1
  if (e === 0) {
      return 1;
  }

  // base case
  // if e === 1 => return b
  if (e === 1) {
      return b;
  }
  // recursive case
  // multiply base times power(b, e - 1);
  return b * power(b, e - 1);
}