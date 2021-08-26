class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = [];
    }
  }

  removeVertex(val) {
    while (this.adjacencyList[val].length) {
      const adjacentVertex = this.adjacencyList[val].pop();
      this.removeEdge(val, adjacentVertex);
    }
    delete this.adjacencyList[val];
  }

  addEdge(vOne, vTwo) {
    if (!Array.isArray(this.adjacencyList[vOne]) ||
        !Array.isArray(this.adjacencyList[vTwo])) {
      return;
    }
    this.adjacencyList[vOne].push(vTwo);
    this.adjacencyList[vTwo].push(vOne);
  }

  removeEdge(vOne, vTwo) {
    if (!Array.isArray(this.adjacencyList[vOne]) ||
        !Array.isArray(this.adjacencyList[vTwo])) {
      return;
    }
    let indexOne = this.adjacencyList[vOne].index(vTwo);
    let indexTwo = this.adjacencyList[vTwo].indexOf(vOne);
    this.adjacencyList[vOne].splice(indexOne, indexOne + 1);
    this.adjacencyList[vTwo].splice(indexTwo, indexTwo + 1);

  }
  // depth-first finds all vertices connected to vertex given as argument
  depthFirstRecursive(vertex) {
    let connectedVertices = [];
    let visitedVertices = {};
    const traverse = (vert) => {
      // base case
      if (!vert) {
        return;
      }
      // mark current node as visited so it can't be visited again
      visitedVertices[vert] = true;
      // recursive case
      let currentList = this.adjacencyList[vert];
      for (let i = 0; i < currentList.length; i ++) {
        if (!visitedVertices[currentList[i]]) {
          traverse(currentList[i]);
        }
      }
      // after exiting to this level of the call stack, add "current" vertex into connected vertices
      connectedVertices.push(vert);

    }
    traverse(vertex);
    return connectedVertices;
  }
}