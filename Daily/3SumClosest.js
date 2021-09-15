/**
 * Given an array of numbers nums and an integer target, find the sum of three
 * elements of the array that are closest to the target number
 *
 * You can assume that there is one unique answer
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  // set "closest diff" var
  let diff = Infinity;
  // set current closest sum var
  let closest;

  // sort array
  nums = nums.sort((a,b) => {return a - b});

  // iterate through array from beginning to 3rd from end (must have two numbers after it)
  for (let i = 0; i < nums.length - 2; i ++) {
    // go to last copy of array that is same number as current (disregard duplicates)
    // while (nums[i] === nums[i + 1] && i < nums.length - 3) {
    //   i ++;
    // }
    // set "current target" as target minus current element
  //let currentTarget = target - nums[i];
    // now we are looking for two other numbers that sum as close as possible to current target
    // set pointer at next distinct element and at last element in array
    let left = i + 1;
    let right = nums.length - 1;
    // while these pointers haven't gotten to each other yet
    while (left < right) {
      let currentTarget = target - nums[i];
      let currentSum = nums[i] + nums[left] + nums[right];
      // if sum of three elements minus target is less than current diff
      if (Math.abs(currentSum - target) < diff) {
        // set current closest to this sum
        closest = currentSum;
        // set current diff to this diff
        diff = Math.abs(closest - target);
      }
      // if current target is greater than goal target, decrement right pointer to next distinct integer and check
      // while (nums[left] === nums[left + 1]) {
      //   left ++;
      // }
      // // if current target is less than goal target, increment left pointer to next distinct integer and check
      // while (nums[right] === nums[right - 1]) {
      //   right --;
      // }
      if (currentSum < target) {
        left ++;
      } else {
        right --;
      }
    }
  }


  // return closest sum
  return closest;
};

let arr, tar, expected, result;

function test() {
  arr = [-1,2,1,-4];
  tar = 1;
  expected = 2;
  result = threeSumClosest(arr, tar);
  if (expected === result) {
    console.log(`WORKS FOR INPUT ARRAY OF ${arr} AND TARGET OF ${tar}`);
  } else {
    console.log(`FAILURE. EXPECTED ${expected} BUT GOT ${result}`)
  }


  arr = [0,0,0];
  tar = 1;
  expected = 0;
  result = threeSumClosest(arr, tar);
  if (expected === result) {
    console.log(`WORKS FOR INPUT ARRAY OF ${arr} AND TARGET OF ${tar}`);
  } else {
    console.log(`FAILURE. EXPECTED ${expected} BUT GOT ${result}`)
  }

  arr = [0,2,1,-3]
  tar = 1;
  expected = 0;
  result = threeSumClosest(arr, tar);
  if (expected === result) {
    console.log(`WORKS FOR INPUT ARRAY OF ${arr} AND TARGET OF ${tar}`);
  } else {
    console.log(`FAILURE. EXPECTED ${expected} BUT GOT ${result}`)
  }
}