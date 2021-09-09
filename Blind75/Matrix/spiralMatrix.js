/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // create result array
  let res = [];
  let i, j;

  // while input array has length
  while (matrix.length) {
    // push shifted element to result
    res.push(...matrix.shift());
    // push popped values from all remaining matrices to result
    if (matrix.length) {

      for (i = 0; i < matrix.length; i ++) {
        if (matrix[i].length) {
          res.push(matrix[i].pop())
        }
      }
    }
    // push reversed popped array to result
    if (matrix.length) {
      res.push(...matrix.pop().reverse());
    }
    // push reversed shifted values from input to result
    if (matrix.length) {
      for (j = matrix.length - 1; j >= 0; j --) {
        if (matrix[j].length) {
          res.push(matrix[j].shift())
        }
      }
    }
  }
  // return result
  return res;
};

function looper(a,b) {
  for (let i = 0; i < a.length; i ++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  for (let j = 0; j < b.length; j ++) {
    if (b[j] !== a[j]) {
      return false;
    }
  }
  return true;
}

function test() {
  let input = [[1,2,3],[4,5,6],[7,8,9]];
  let expected = [1,2,3,6,9,8,7,4,5];
  let result = spiralOrder(input);
  if (looper(expected, result)) {
    console.log(`Works for 3 X 3 matrix`);
  } else {
    console.log(`FAILURE FOR INPUT ${input} EXPECTED ${expected} BUT GOT ${result}`)
  }

  input = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
  expected = [1,2,3,4,8,12,11,10,9,5,6,7];
  result = spiralOrder(input);
  if (looper(expected, result)) {
    console.log(`Works for 3 X 4 matrix`);
  } else {
    console.log(`FAILURE FOR INPUT ${input} EXPECTED ${expected} BUT GOT ${result}`)
  }
}