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
    delete this.adjacencyList[val];
    for (let key in this.adjacencyList) {
      if this.adjacencyList[key].contains(val) {
        this.adjacencyList[key].splice(this.adjacencyList[key].indexOf(val), this.adjacencyList[key].indexOf(val) + 1);
      }
    }
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
    this.adjacencyList[vOne].splice(this.adjacencyList[vOne].indexOf(vTwo), this.adjacencyList[vOne].indexOf(vTwo) + 1);
    this.adjacencyList[vTwo].splice(this.adjacencyList[vTwo].indexOf(vOne), this.adjacencyList[vTwo].indexOf(vOne) + 1);

  }

}