let search = (nums, target) => {
  // left and right pointers to start DIVIDE AND CONQUER
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // set midpoint
    let mid = Math.floor((right + left) / 2);
    // if this is it, nice, return it
    if (nums[mid] === target) {
      return mid;
    }
    // if your current midpoint lands on a spot that is "in order" from the beginning of array
    if (nums[left] <= nums[mid]) {
      // if your target lands between those two
      if (nums[left] <= target && nums[mid] > target) {
        // move right to one below midpoint
        right = mid - 1;
      } else {
        // otherwise move right up to above mid
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return - 1;
}