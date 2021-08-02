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

  // O(1)
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

  // O(n)
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

  // O(1)
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = temp.next;
    this.length --;
    return temp;
  }

  // O(n)
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

  // O(n)
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

  // O(n)
  set(index, val) {
    let target = this.get(index);
    if (target) {
      target.val = val;
      return true;
    }
    return false;
  }

  // O(n)
  insert(index, val) {
    if (index === 0) {
      return !! this.unshift(val);
    } else if (index === this.length) {
      return !! this.push(val);
    } else if (index < 0 || index > this.length + 1) {
      return false;
    } else {
      let target = this.get(index - 1);
      let oldNext = target.next;
      let newNext = new Node(val);
      target.next = newNext;
      newNext.next = oldNext;
      this.length ++;
      return true;
    }
  }

  // O(n)
  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let prev = this.get(index - 1);
    let target = this.get(index);
    let temp = target.next;
    prev.next = temp;
    this.length --;
    return target.val;
  }

  // O(n)
  reverse() {
    // set pointers reversing previous head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    // vars which will be needed for temporarily holding pointers
    let prev = null,
        next;
    for (let i = 0; i < this.length; i ++) {
      // placeholder for what was next and will become prev
      next = node.next;
      // change the node's "next" val to what will now be its previous
      node.next = prev;
      // bump up the "prev" to be in line with where we will be in the loop
      prev = node;
      // bump up the node "forward" in the old sll, and will become the "previous" in the next iteration
      node = next;
    }
    return this;
  }
}