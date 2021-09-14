let longestPalindrome = (s) => {
  // store longest current palindrome
  let longest = '';

  let searchOutward = (l, r) => {
    // while left and right are in bounds and are the same
    while (l >= 0 && r < s.length && s[l] === s[r]) {
            // if difference between two is greater than length of longest
    if (r - l >= longest.length) {
      // replace longest
      longest = s.substring(l, r + 1);
    }
      // left goes left
      l --;
      // right goes right
      r ++;
    }

  }

  // iterate through string
  for (let i = 0; i < s.length; i ++) {
    // iterate outward from current char (accounts for odd length palindrome)
    searchOutward(i,i);
    // iterate out from current char *and* next char (accounts for even length palindrome)
    searchOutward(i, i + 1);
  }
  return longest;

}

let input, expected, result;


let test = () => {
  input = 'a';
  output = 'a';
  result = longestPalindrome(input);
  if (output !== result) {
    console.log(`EXPECTED ${expected} BUT GOT ${result}`)
  } else {
    console.log(`WORKS FOR INPUT OF ${input} WITH OUTPUT OF ${result}`)
  }

  input = 'abcdefabcbaeeedaasdf';
  output = 'abcba'
  result = longestPalindrome(input);
  if (output !== result) {
    console.log(`EXPECTED ${expected} BUT GOT ${result}`)
  } else {
    console.log(`WORKS FOR INPUT OF ${input} WITH OUTPUT OF ${result}`)
  }
}