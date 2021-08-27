class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(start, end, weight) {
    if (!this.adjacencyList[start] ||
        !this.adjacencyList[end]) {
      return;
    }
    this.adjacencyList[start].push({'node': end, weight});
    this.adjacencyList[end].push({'node': start, weight});
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(val, priority) {
    this.queue.push({val, priority});
    let currentIndex = this.queue.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (this.queue[currentIndex]?.priority > this.queue[parentIndex]?.priority) {
      [this.queue[currentIndex], this.queue[parentIndex]] = [this.queue[parentIndex], this.queue[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
  dequeue() {
    [this.queue[0], this.queue[this.queue.length - 1]] = [this.queue[this.queue.length - 1], this.queue[0]];
    let result = this.queue.pop();
    this.sinkDown();
    return result;
  }
  sinkDown() {
    let len = this.queue.length;
    let idx = 0;
    let queue = this.queue;
    while (true) {
      let swap = null;
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      if (leftIdx < len) {
        if (queue[idx].priority > queue[leftIdx].priority) {
          swap = leftIdx;
        }
      }
      if (rightIdx < len) {
        if (queue[idx].priority > queue[rightIdx].priority &&
            queue[rightIdx].priority < queue[leftIdx].priority) {
              swap = rightIdx;
            }
      }
      if (swap === null) {
        break;
      }
      [queue[idx], queue[swap]] = [queue[swap], queue[idx]];
      idx = swap;
    }
  }
}

class Node {
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.val = val;
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
  }

  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      let result = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return result;
    }
    let poppedTail = this.tail;
    let newTail = poppedTail.prev;
    poppedTail.prev = null;
    newTail.next = null;
    this.tail = newTail;
    this.length --;
    return poppedTail;
  }
}

let dijkstra = (graph, start, end) => {
  let previous = {};
  let visited = [];
  let queue = new PriorityQueue();
  queue.enqueue(start, 0);
  let keys = Object.keys(graph.adjacencyList);
  for (let i = 0; i < keys.length; i ++) {
    previous[keys[i]] = null;
    if (keys[i] !== start) {
      queue.enqueue(keys[i], Infinity);
    }
  }

}