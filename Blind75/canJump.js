let canJump = (steps) => {
  let dp = new Array(steps.length).fill(false);
  dp[0] = true;
  for (let i = 1; i < dp.length; i ++) {
    for (let j = 0; j < i; j ++) {
      if (steps[j] + j >= i && dp[j]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[steps.length - 1];
}