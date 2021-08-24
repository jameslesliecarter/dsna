class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // push to end of vals
    this.values.push(val);
    // bubble up
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (this.values[currentIndex] > this.values[parentIndex]) {
      [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    return this;
  }

  extractHead() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let oldHead = this.values.pop();
    let index = 0;
    let lCI = index * 2 + 1;
    let rCI = index * 2 + 2;
    while (this.values[lCI] > this.values[index] || this.values[rCI] > this.values[index]) {
      let goldenChildIndex = this.values[lCI] > this.values[rCI] ? lCI : rCI;
      [this.values[index], this.values[goldenChildIndex]] = [this.values[goldenChildIndex], this.values[index]];
      index = goldenChildIndex;
      lCI = index * 2 + 1;
      rCI = index * 2 + 2;
    }
    return oldHead;
  }
}