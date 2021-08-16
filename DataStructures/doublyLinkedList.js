class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length ++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    } else {
      let poppedNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        poppedNode.prev = null;
        this.tail.next = null;
      }
      this.length --;
      return poppedNode;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      removedHead.next = null;
      this.head.prev = null;
    }
    this.length --;
    return removedHead;
  }
}