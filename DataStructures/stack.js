class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size ++;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    let res = this.storage[this.size];
    delete this.storage[this.size];
    this.size --;
    return res;
  }
}