class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
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

  dequeue() {
    if (this.size === 0) {
      return null;
    }
    let res = this.head;
    this.head = res.next;
    res.next = null;
    this.size --;
    return res;
  }
}