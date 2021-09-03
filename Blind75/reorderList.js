var reorderList = function(head) {
  // push nodes to array
  let storage = [];
  let node = head;
  while (node) {
    storage.push(node);
    node = node.next;
  }
  let current = head;
  current.next = storage[storage.length - 1];
  current = current.next;
  // iterate through array
  if ( storage.length % 2 === 1) {
    for (let i = 1; i <= Math.floor(storage.length / 2); i ++) {
      current.next = storage[i];
      current = current.next;
      current.next = storage[storage.length - 1 - i];
      current = current.next;
    }
  } else {
    for (let i = 1; i < Math.floor(storage.length / 2); i ++) {
      current.next = storage[i];
      current = current.next;
      current.next = storage[storage.length - 1 - i];
      current = current.next;
    }
  }
  current.next = null;
  return head;
};