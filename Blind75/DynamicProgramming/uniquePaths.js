/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // create m x n array to represent how many paths for each square in grid
  // "top left" square is 1, because there is one way to get there
  let dp = new Array(m).fill().map(() => Array(n).fill(0));
  dp[0][0] = 1;

  // iterate through m
  for (let i = 0; i < m; i ++) {
    // iterate through n
    for (let j = 0; j < n; j ++) {
      // cell at m,n is sum of m - 1, n and m, n - 1 (top and left)
      if (i > 0) {
        dp[i][j] += dp[i - 1][j]
      }
      if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }

  // return dp array at m - 1, n - 1 index
  return dp[m - 1][n - 1];
};