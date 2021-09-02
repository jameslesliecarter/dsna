var mergeKLists = function(lists) {
  let bucket = [];
  for (let list of lists) {
    let node = list
    while (node) {
      bucket.push(node.val);
      node = node.next;
    }
  }
  bucket.sort((a, b) => a - b);
  let head = new ListNode();
  let node = head;
  for (let i = 0; i < bucket.length; i ++) {
    let newNode = new ListNode(bucket[i]);
    node.next = newNode;
    node = newNode;
  }
  return head.next;
};