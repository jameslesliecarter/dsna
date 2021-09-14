/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // create "longest" and "current" empty strings
  let longest = '';
  let current = '';

  // iterate through string
  for (let i = 0; i < s.length; i ++) {
    // if current character is already present
    if (current.indexOf(s[i]) >= 0) {
      // if the current string is longer than "longest" string, reassign longest string
      if (current.length > longest.length) {
        longest = current;
        // reassign current string to begin after previous instance of current character
      }
      current = current.substring(current.indexOf(s[i]) + 1) + s[i];
      // if current char is not in current string, add it to it
    } else {
      current = current + s[i];
    }
  }
  // check current vs longest again, after loop is done
  return Math.max(current.length, longest.length);
  // return length of longest string
};

let input, out, result;

function test() {
  input = 'abcabcbb';
  out = 3;
  result = lengthOfLongestSubstring(input);
  if (result !== out) {
    console.log(`FAILS FOR TEST CASE WITH INPUT ${input} EXPECTED ${out} BUT GOT ${result}`);
  } else {
    console.log(`TEST PASSED FOR INPUT ${input}`);
  }

  input = 'bbbbbbbb';
  out = 1;
  result = lengthOfLongestSubstring(input);
  if (result !== out) {
    console.log(`FAILS FOR TEST CASE WITH INPUT ${input} EXPECTED ${out} BUT GOT ${result}`);
  } else {
    console.log(`TEST PASSED FOR INPUT ${input}`);
  }

  input = 'pwwkew';
  out = 3;
  result = lengthOfLongestSubstring(input);
  if (result !== out) {
    console.log(`FAILS FOR TEST CASE WITH INPUT ${input} EXPECTED ${out} BUT GOT ${result}`);
  } else {
    console.log(`TEST PASSED FOR INPUT ${input}`);
  }
}