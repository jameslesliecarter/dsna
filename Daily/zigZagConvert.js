/**
 * Given a string and a number of rows, return the straight-line converstion after "zig-zagifying" the string into numRows number of rows
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I


 *
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // edge case of 1 row
  if (numRows === 1) {
    return s;
  }
  // create numRows length array filled with empty strings
  let store = new Array(numRows).fill('');
  // create direction variable (i.e. +1 or -1);
  let direction = 1;
  // create index holder variable
  let index = 0;
  // iterate through string
  for (let i = 0; i < s.length; i ++) {
    // add current char to running string at "holdervar" index
    store[index] += s[i];
    // if index is numRows - 1, switch direction to minus
    if (index === numRows - 1) {
      direction = -1;
    }
    // if index is 0, switch direction to plus
    if (index === 0) {
      direction = 1;
    }
    // switch index by adding direction
    index += direction;
  }

  // join strings from array
  return store.join('');
  // return string
};