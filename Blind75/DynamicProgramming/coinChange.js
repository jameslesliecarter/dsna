let coinChange = (coins, amount) => {
  // instantiate array representing dp[index] = number of ways to sum to index with given coins
  let dp = new Array(amount + 1).fill(Infinity);
  // zero ways to sum to zero
  dp[0] = 0;

  // iterate from sum of 1 up to sum of input amount
  for (let i = 1; i <= amount; i ++) {
    // iterate through which coins can be used to try to achieve this amount
    for (let coin of coins) {
      // if i is less than current coin, then current coin would take us _past_ current target amount, so i >= coin
      if (i >= coin) {
        // find min between currently known smallest number (i.e. dp[i])
        // and dp[i - coin] + 1
        // to break down this amount: dp[i - coin] is how many ways there are to sum to the
        // current amount minus the current coin. Since we are now "adding the current coin" this
        // counts as a single operation, thus add one.
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}