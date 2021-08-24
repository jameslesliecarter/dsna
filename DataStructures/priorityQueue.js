class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (this.values[currentIndex]?.priority < this.values[parentIndex]?.priority) {
      [this.values[currentIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
  }

  dequeue() {
    [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
    let oldHead = this.values.pop();
    this.sinkDown();
    return oldHead;
  }

  sinkDown() {
    let length = this.values.length;
    let idx = 0;
    while (true) {
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    let swap = null;
      if (leftIdx < length) {
        if (this.values[leftIdx].priority < this.values[idx].priority) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        if (swap === null && this.values[rightIdx].priority < this.values[leftIdx].priority
            || swap !== null && this.values[rightIdx].priority < this.values[idx].priority) {
          swap = rightIdx;
        }
      }
      if (swap === null) {
        break;
      }
      [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
      idx = swap;
    }

  }
}