let longestConsecutive = (arr) => {
  let store = {};
  let max = 0;
  // fill hash map with all values in array for quick access
  for (let i = 0; i < arr.length; i ++) {
    store[arr[i]] = true;
  }
  // iterate through values in store
  for (let num in store) {
    // skip any number that's not at the beginning of its run (saves double counting)
    if (store[`${num - 1}`] === undefined) {
      let currentRun = 0;
      // turn string key into int so you can iterate it
      let n = parseInt(num);
      // iterate through hash map for consecutive keys, counting how many steps are taken
      while (store[n]) {
        currentRun ++;
        n ++;
      }
      max = Math.max(max, currentRun);
    }
  }
  return max;

}