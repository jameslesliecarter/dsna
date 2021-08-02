class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
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
      this.tail = node;
    }
    this.length ++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let newTail = this.head;
    let oldTail = this.tail;
    while (newTail.next.next) {
      newTail = newTail.next;
    }
    this.tail = newTail;
    newTail.next = null;
    this.length --;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldTail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = temp.next;
    this.length --;
    return temp;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length ++;
    return this;
  }

  get(index) {
    if (index > this.length || index < 0) {
      return null;
    }
    let count = 0;
    let target = this.head;
    while (count !== index) {
      target = target.next;
      count ++;
    }
    return target;
  }

  set(index, val) {
    let target = this.get(index);
    if (target) {
      target.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length + 1) {
      this.push(val);
    } else if (index < 0 || index > this.length + 1) {
      return undefined;
    } else {
      let target = this.get(index - 1);
      let oldNext = target.next;
      let newNext = new Node(val);
      target.next = newNext;
      newNext.next = oldNext;
      this.length ++;
      return newNext;
    }

  }
}