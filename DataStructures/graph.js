class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = [];
    }
  }
}