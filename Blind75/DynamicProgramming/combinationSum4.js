let combinationSum4 = (nums, target) => {
  let dp = new Array(target + 1).fill(0);
  // one way to get sum zero
  dp[0] = 1;
  for (let i = 1; i < target; i ++) {
    for (let j = 0; j < nums.length; j ++) {
      // if current coin is less or equal to than current target
      //       nums[j]                                  i
      // add number of ways to get to previous option
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }
  return dp[target];
}