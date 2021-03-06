// given an array of numbers representing values of valuables stored in a row of houses,
// what is the maximum amount you can steal, given that you cannot break into adjacent homes
var rob = function(nums) {
  let dp = new Array(nums.length + 2).fill(0);
  dp[0] = dp[1] = 0;
  for (let i = 2; i < nums.length + 2; i ++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1])
  }
  return dp[nums.length + 1];
};

/*
on line 7, the following items semantically map to:
dp[i - 2] => maximum value as of two houses ago
nums[i - 2] => value of "current" house
dp[i - 1] => maximum value as of one house ago
*/