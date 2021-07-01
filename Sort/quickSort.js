function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, 0, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let index = start;
    for (let i = start + 1; i <= end; i ++ ) {
        if (arr[i] < arr[start]) {
            index ++;
            swap(arr, i, index);
        }
    }
    swap(arr, start, index);
    return index;
}

function swap(arr, idxOne, idxTwo) {
    [arr[idxOne], arr[idxTwo]] = [arr[idxTwo], arr[idxOne]];
}


function test() {
  let inputs = [[2,3,1,4], [9,7,34,2,5,6], [99,98,97]];
  let outputs = [[1,2,3,4], [2,5,6,7,9,34], [97,98,99]];
  for (let i = 0; i < inputs.length; i ++) {
      if (!looper(quickSort(inputs[i]), outputs[i])) {
          console.log('Failure at index ', i);
      } else {
          console.log('test passed for index ', i);
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