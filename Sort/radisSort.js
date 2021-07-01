function radixSort(arr) {
  let most = mostDigits(arr);
  // debugger;
  // console.log('most digits: ', most);
  for (let i = 0; i < most; i ++) {
      let bucket = [[],[],[],[],[],[],[],[],[],[]];
      for (let j = 0; j < arr.length; j ++) {
          let slot = getDigit(arr[j], i);
          bucket[slot].push(arr[j]);
      }
      arr = [].concat(...bucket);
  }
  return arr;
}

function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i ++) {
      let count = digitCount(arr[i]);
      if (count > max) {
          max = count;
      }
  }
  return max;
}

function digitCount(num) {
  let count = 1,
      n = num
  while (n / 10 >= 1) {
      count ++;
      n /= 10;
  }
  return count;
}

function getDigit(num, target) {
  return (Math.floor(Math.abs(num) / (10 ** target))) % 10;
}



function test() {
let inputs = [[2,3,1,4], [9,7,34,2,5,6], [99,98,97]];
let outputs = [[1,2,3,4], [2,5,6,7,9,34], [97,98,99]];
for (let i = 0; i < inputs.length; i ++) {
    if (!looper(radixSort(inputs[i]), outputs[i])) {
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