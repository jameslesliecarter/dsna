/*
Write a recursive function called fib which accepts a number and returns the nth number inf the Fibonacci sequence...
*/

function fib(n) {
  // base case
  // if n === 0 or 1
  // return 1
  if (n === 1 || n === 2) {
    return 1;
  }
  // recursive case
  // return previous two fibs added together
  return fib(n - 1) + fib(n - 2);
}