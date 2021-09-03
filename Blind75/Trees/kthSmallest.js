var kthSmallest = function(root, k) {
  // get all node values into array
  let store = [];
  let queue = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
    store.push(current.val);
  }
  // sort array
  store = store.sort((a,b) => a - b);
  // get k + 1 th index
  return store[k - 1];
};