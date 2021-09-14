/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 let twoSum = (nums, target) => {
  // map nums to array of objects correlating values with initial indices
  nums = nums.map((val, index) => {
    return {val: val,
            index: index};
  })
  // sort array
  sortedNums = radis(nums);
  // starting with first and last items in array
  let start = 0;
  let end = sortedNums.length - 1;
  // iterate inwards with these guidelines:
  while (start < end) {
  // if sum is greater than target, decrement higher index
      if (sortedNums[start].val + sortedNums[end].val === target) {
          return [sortedNums[start].index, sortedNums[end].index];
      }
      if (sortedNums[start].val + sortedNums[end].val < target) {
          start ++;
      } else if (sortedNums[start].val + sortedNums[end].val > target) {
          end --;
      }
  // if sum is less than target, increment lesser index
  // if left index >= right index: break
  }
  return null;
}

let radis = (arr) => {
  let largestLength = findLargest(arr);
  for (let i = 0; i < largestLength; i ++) {
      let buckets = [[],[],[],[],[],[],[],[],[],[]];
      for (let j = 0; j < arr.length; j ++) {
          buckets[digitAt(arr[j].val, i)].push(arr[j]);
      }
      arr = [].concat(...buckets);
  }
  return arr;
}

let findLargest = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i ++) {
      let digitNumber = numberOfDigits(arr[i].val)
      if (digitNumber > max) {
          max = digitNumber;
      }
  }
  return max;
}

let digitAt = (num, index) => {
  return (Math.floor(Math.abs(num) / (10 ** index))) % 10;
}

let numberOfDigits = (num) => {
  let count = 0;
  while (num >= 1) {
      num = num / 10;
      count ++;
  }
  return count;
}

