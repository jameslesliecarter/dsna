/*
Write simple function that finds the index of a target in an array
*/

function linearSearch(arr, target) {
  let index = 0;
  for (let i = 0; i < arr.length; i ++) {
      if (arr[i] === target) {
          return index;
      }
      index ++;
  }
  return -1;
}