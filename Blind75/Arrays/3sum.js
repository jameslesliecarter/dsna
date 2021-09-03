let threeSum = (nums) => {
  // sort nums array from least to greatest
  nums = nums.sort((a,b) => a - b);
  // initialize result array
  let result = [];
  if (nums.length < 3) {
    return result;
  }
  if (nums[0] === 0 && nums[nums.length - 1] === 0) {
    return [[0,0,0]];
  }
  // choose first number from beginning of array, iterating to last copy of same number
  for (let i = 0; i < nums.length - 2; i ++) {
    let subTarget = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (sum === subTarget) {
        result.push([nums[i], nums[left], nums[right]]);
        // while (nums[left] === nums[left + 1]) {
        //   left ++;
        // }
        // while (nums[right] === nums[right - 1]) {
        //   right --;
        // }
        left ++;
        right --;
      } else if (sum < subTarget) {
        left ++;
      } else {
        right --;
      }
    }
  }
  // iterate through the rest of the array from each end
  // find pair that sums to subTarget of 0 - current number
  // if indices meet, you're done
  //
  let store = {};
  for (let i = 0; i < result.length; i ++) {
    if (!store[result[i]]) {
      store[result[i]] = result[i];
    }
  }
  let res = [];
  for (let key in store) {
    res.push(store[key]);
  }
  return res;
}