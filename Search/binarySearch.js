function binarySearch(arr, target) {
  // debugger;
  // assign left pointer, right pointer, and midpoint (all indices)
  let left = 0,
      right = arr.length - 1,
      midpoint = Math.floor((right - left) / 2);
  // while left pointer is before right pointer
  while (arr[midpoint] !== target) {
    if (target < arr[midpoint]) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
    midpoint = Math.floor((right + left) / 2);
    if (left > right) {
      return -1;
    }
  }

  // return -1 since it wasn't found in for loop
  return midpoint;


}
