/*
take two linked lists with the following parameters
each ll represents a number, where each node in the list stores a single digit of the number, in reverse order
return an ll that represents the sum of these numbers in the same reverse format
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let addTwoNumbers = (l1, l2) => {
  // debugger;
  let head, carry;
  if (l1.val + l2.val > 9) {
    head = new ListNode((l1.val + l2.val) % 10);
    carry = 1;
  } else {
    head = new ListNode(l1.val + l2.val);
    carry = 0;
  }
  let currentNode = head;
  let nodeOne = l1.next;
  let nodeTwo = l2.next;
  // iterate through both lls, adding current digits together
  while (nodeOne && nodeTwo) {
    // if sum is greater than 9, store the carried 1
    let sum = nodeOne.val + nodeTwo.val + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
    nodeOne = nodeOne.next;
    nodeTwo = nodeTwo.next;
    // push this val to an ll node
  }
  while (nodeOne) {
    let sum = nodeOne.val + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
    nodeOne = nodeOne.next;
  }
  while (nodeTwo) {
    let sum = nodeTwo.val + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;
    nodeTwo = nodeTwo.next;
  }
  if (carry) {
    currentNode.next = new ListNode(1);
  }

  // if one ll still has nodes, continue with these nodes, pushing to ll
  return head;
}

function test() {
let headOne = new ListNode(2);
headOne.next = new ListNode(4);
headOne.next.next = new ListNode(3);

let headTwo = new ListNode(5);
headTwo.next = new ListNode(6);
headTwo.next.next = new ListNode(4);

let result = addTwoNumbers(headOne, headTwo);
console.log(result);
if (result.val !== 7 || result.next.val !== 0 || result.next.next.val !== 8) {
  console.log('NO');
}

let headThree = new ListNode(9);
headThree.next = new ListNode(9);
headThree.next.next = new ListNode(9);
headThree.next.next.next = new ListNode(9);
headThree.next.next.next.next = new ListNode(9);
headThree.next.next.next.next.next = new ListNode(9);
headThree.next.next.next.next.next.next = new ListNode(9);

let headFour = new ListNode(9);
headFour.next = new ListNode(9);
headFour.next.next = new ListNode(9);
headFour.next.next.next = new ListNode(9);

console.log('buncha nines: ', addTwoNumbers(headThree, headFour));
}

class ListNode {
constructor(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
}

let headFive = new ListNode(9);
headFive.next = new ListNode(9);
headFive.next.next = new ListNode(9);
headFive.next.next.next = new ListNode(9);
headFive.next.next.next.next = new ListNode(9);
headFive.next.next.next.next.next = new ListNode(9);
headFive.next.next.next.next.next.next = new ListNode(9);

let headSix = new ListNode(9);
headSix.next = new ListNode(9);
headSix.next.next = new ListNode(9);
headSix.next.next.next = new ListNode(9);

let headSeven = new ListNode(9);
headSeven.next = new ListNode(9);
headSeven.next.next = new ListNode(9);
let headEight = new ListNode(9);
headEight.next = new ListNode(9);

/*
l1 = [2,4,3], l2 = [5,6,4]
[7,0,8]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Input: l1 = [0], l2 = [0]
Output: [0]
*/