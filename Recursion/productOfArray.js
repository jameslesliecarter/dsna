/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all
*/

function productOfArray(arr) {
  // base case
  // empty array return 1
  if (arr.length === 0) {
    return 1;
  }

  // recursive case
  // return first number times product of sliced array
  return arr[0] * productOfArray(arr.slice(1));
}