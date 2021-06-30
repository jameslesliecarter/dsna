function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);


}

function merge(a,b) {
  let i = 0,
      j = 0,
      result = [];
  while (i < a.length && j < b.length) {
      if (a[i] < b[j]) {
          result.push(a[i]);
          i ++;
      } else if (a[i] > b[j]) {
          result.push(b[j]);
          j ++;
      } else {
          result.push(a[i], b[j]);
          i ++;
          j ++;
      }
  }
  if (i < a.length) {
      result.push(...a.slice(i, a.length));
  }
  if (j < b.length) {
      result.push(...b.slice(j, b.length));
  }
  return result;
}



function test() {
  let inputs = [[2,3,1,4], [9,7,34,2,5,6], [99,98,97]];
  let outputs = [[1,2,3,4], [2,5,6,7,9,34], [97,98,99]];
  for (let i = 0; i < inputs.length; i ++) {
      if (!looper(bubbleSort(inputs[i]), outputs[i])) {
          console.log('Failure at index ', i);
      }
  }
}
function looper (a,b) {
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