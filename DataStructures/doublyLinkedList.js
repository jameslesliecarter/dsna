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

  unshift(val) {
    let node = new Node(val);
    // case length zero
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // all other cases
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length ++;
    return this;
  }

  get(index) {
    // if index is outside of range return undefined
    if (index < 0 || index >= this.length) {
      return null;
    }
    let node, count;
    // if index is inside range
    if (index <= this.length / 2) {
      count = 0;
      node = this.head;
      while (count < index) {
        node = node.next;
        count ++;
      }
    } else {
      count = this.length - 1;
      node = this.tail;
      while (count > index) {
        node = node.prev;
        count --;
      }
    }
    return node;
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
    // edge case: index out of bounds
    if (index < 0 || index > this.length - 1) {
      return false;
    }
    // edge case, index on either end of list
    if (index === 0) {
      return !! this.unshift(val);
    }
    if (index === this.length) {
      return !! this.push(val);
    }

    // create new node with arg val
    let insertedNode = new Node(val);
    // get nodes at index and one before index
    let target = this.get(index);
    let prev = target.prev;
    // set prev node's next to new node
    prev.next = insertedNode;
    // set index's node's prev to new node
    target.prev = insertedNode;
    // set prev/next of new node to these two nodes
    insertedNode.prev = prev;
    insertedNode.next = target;
    // iterate length
    this.length ++;
    // return true
    return true;
  }
}

/*
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
*/