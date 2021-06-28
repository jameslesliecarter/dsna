/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
*/

function recursiveRange(n) {
  // base case
  // n === 0 => return 0
  if (n === 0) {
    return 0;
  }
  // recursive case
  // add current number to recursiveRange of number one below
  return n + recursiveRange(n - 1);
}