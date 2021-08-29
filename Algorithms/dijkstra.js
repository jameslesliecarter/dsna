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
    while (this.queue[currentIndex]?.priority < this.queue[parentIndex]?.priority) {
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
    // debugger;
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

  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length = 1;
      return this;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length ++;
  }
}

let dijkstra = (graph, start, end) => {
  // object describing each node's previous node with the shortest route to start node
  let previous = {};
  previous[start] = null;
  // array of vertices which have been visited already
  let visited = {};
  // initialize object showing currently calculated distance from start
  let localDistance = {};
  localDistance[start] = 0;
  // initialize priority queue
  let queue = new PriorityQueue();
  // initialize doubly linked list for return value
  let path = new DoublyLinkedList();
  // enqueue start node
  queue.enqueue(start, 0);

  // while the queue has vertices in it
  while (queue.queue.length) {
    // debugger;
    // take highest priority vertex
    let currentVertex = queue.dequeue();
    // if this vertex is the endpoint, break
    if (currentVertex.val === end) {
      break;
    }
    let list = graph.adjacencyList[currentVertex.val];
    // iterate through it's neighbors
    for (let i = 0; i < list.length; i++) {

      // if the neighbor has not yet been visited
      if (!visited[list[i].node]) {
        // check distance
        // current vertex's number stored in object plus distance from current vertex to neighbor
        let currentSum = localDistance[currentVertex.val] + list[i].weight;
        queue.enqueue(list[i].node, currentSum);
        // if neighbor has entry in localD obj, check if new one is smaller
        if (localDistance[list[i].node]) {
          // if it is smaller, change it and change "previous" object to reflect this
          if (localDistance[list[i].node] > currentSum) {
            localDistance[list[i].node] = currentSum;
            previous[list[i].node] = currentVertex.val;
            // breaks -> queue.enqueue(list[i].node, currentSum);
          }
        } else {
          // if neighbor has no entry in localD obj, add it with this new sum as value
          localDistance[list[i].node] = currentSum;
          previous[list[i].node] = currentVertex.val;
        }
        // add vertex to visited list
      }
      visited[currentVertex.val] = true;
    }
  }
  let pathNode = end
  // while current node has a previous instance in previous object
  while (pathNode) {
    // create node from this value and unshift it to path
    path.unshift(pathNode);
    pathNode = previous[pathNode];
  }

  return path;
}