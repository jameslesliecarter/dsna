class Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size ++;
    return this;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    let res = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    res.prev = null;
    this.size --;
    return res;
  }
}