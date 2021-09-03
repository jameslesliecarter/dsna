/*
Given an array of non-negative numbers, each number represents the height of a barrier
Each barrier is 1 unit away from its neighbors (index)
Find the maximum amount of area between any two posts
*/

let maxArea = (nums) => {
  // inital max of zero
  let max = 0;
  // set two pointers at either end of array
  let left = 0;
  let right = nums.length - 1;
  // while they have not touched
  while (left < right) {
    // check the area they could make
    let area = Math.min(nums[left], nums[right]) * (right - left);
    // if it's bigger than current max
    // update max
    max = Math.max(max, area);
    // change the smaller pointer to the next (in either direction) number in array
    if (nums[left] > nums[right]) {
      right --;
    } else {
      left ++;
    }
  }
  // return max
  return max;
}