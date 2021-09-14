/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *
 * Given the head of a singly-linked list, remove the Nth from the end node and return the head
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // get length of list
  let length = 0;
  let node = head;
  while (node) {
    length ++;
    node = node.next;
  }
  // if removing first element
  if (n === length) {
    head = head.next;
    return head;
  }

  // if removing last element
  if (n === 1) {
    node = head;
    let count = length - 1;
    while (count > 1) {
      node = node.next;
      count --;
    }
    node.next = null;
    return head;
  }


  // get to length - n element
  node = head;
  while (length > n + 1) {
    node = node.next;
    length --;
  }

  let removed = node.next;
  node.next = removed.next;
  removed.next = null;

  return head;

};


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let one = new Node(1);
one.next = new Node(2);
one.next.next = new Node(3);
one.next.next.next = new Node(4);
one.next.next.next.next = new Node(5);

function test() {
  let input = one;
  let n = 2;
  let result = removeNthFromEnd(input, n);
  console.log(result.next.next.next.val === 5);
}