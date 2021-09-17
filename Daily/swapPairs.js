/**
 *
 * Given the head of a linked list, swap pairs of nodes in the linked list and return the head
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // base case
  // if no head or no next
  if (!head || !head.next) {
    // return head
    return head;
  }

  // recursive case
  // make false head
  let anchor = new ListNode();
  // store node to be passed in to next function call
  let nextHead = head.next.next;
  // move some things about a bit
  anchor.next = head.next;
  // yeah, keep movin em until they're in place
  anchor.next.next = head;
  // recur on rest of list
  head.next = swapPairs(nextHead);

  // return new head
  return anchor.next;
};





class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let inOrderEven = new ListNode(1);
inOrderEven.next = new ListNode(2);
inOrderEven.next.next = new ListNode(3);
inOrderEven.next.next.next = new ListNode(4);

let inOrderOdd = new ListNode(1);
inOrderOdd.next = new ListNode(2);
inOrderOdd.next.next = new ListNode(3);
inOrderOdd.next.next.next = new ListNode(4);
inOrderOdd.next.next.next.next = new ListNode(5);

let evenRes = new ListNode(2);
evenRes.next = new ListNode(1);
evenRes.next.next = new ListNode(4);
evenRes.next.next.next = new ListNode(3);

let oddRes = new ListNode(2);
oddRes.next = new ListNode(1);
oddRes.next.next = new ListNode(4);
oddRes.next.next.next = new ListNode(3);
oddRes.next.next.next.next = new ListNode(5);

let single = new ListNode(1);

let singleRes = new ListNode(1);

function listChecker(a, b) {
  let nodeA = a;
  let nodeB = b;

  while (nodeA && nodeB) {
    if (nodeA.val !== nodeB.val) {
      return false;
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }

  if (nodeA || nodeB) {
    return false;
  }

  return true;

}

let input, expected, result;

function test() {
  input = inOrderEven;
  expected = evenRes;
  result = swapPairs(input)
  if (listChecker(expected, result)) {
    console.log(`Works for ${input}`);
  } else {
    console.log(`FAILED TEST. FOR INPUT ${input} EXPECTED ${expected} BUT GOT ${result}`)
  }

  input = inOrderOdd;
  expected = oddRes;
  result = swapPairs(input)
  if (listChecker(expected, result)) {
    console.log(`Works for ${input}`);
  } else {
    console.log(`FAILED TEST. FOR INPUT ${input} EXPECTED ${expected} BUT GOT ${result}`)
  }

  input = single;
  expected = singleRes;
  result = swapPairs(input)
  if (listChecker(expected, result)) {
    console.log(`Works for ${input}`);
  } else {
    console.log(`FAILED TEST. FOR INPUT ${input} EXPECTED ${expected} BUT GOT ${result}`)
  }

  input = null;
  expected = null;
  result = swapPairs(input)
  if (listChecker(expected, result)) {
    console.log(`Works for ${input}`);
  } else {
    console.log(`FAILED TEST. FOR INPUT ${input} EXPECTED ${expected} BUT GOT ${result}`)
  }
}