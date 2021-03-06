function selectSort(arr) {
  for (let i = 0; i < arr.length; i ++) {
      let smallestIdx = i;
      let noSwap = true;
      for (let j = i + 1; j < arr.length; j ++) {
          if (arr[j] < arr[smallestIdx]) {
              smallestIdx = j;
              noSwap = false;
          }
      }
      if (noSwap) { break; }
      swap(arr, i, smallestIdx);
  }
  return arr;
}

function swap(arr, idx1, idx2) {
let temp = arr[idx1];
arr[idx1] = arr[idx2];
arr[idx2] = temp;
}

function test() {
let inputs = [[2,3,1,4], [9,7,34,2,5,6], [99,98,97]];
let outputs = [[1,2,3,4], [2,5,6,7,9,34], [97,98,99]];
for (let i = 0; i < inputs.length; i ++) {
    if (!looper(selectSort(inputs[i]), outputs[i])) {
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