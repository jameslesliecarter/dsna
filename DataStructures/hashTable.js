class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i ++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total;
  }

  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [[key, val]];
    } else {
      this.keyMap[index].push([key, val]);
    }
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      return undefined;
    }
    for (let i = 0; i < this.keyMap[index].length; i ++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i ++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j ++) {
          results.push(this.keyMap[i][j][0]);
        }
      }
    }
    return results;
  }

  values() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i ++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j ++) {
          results.push(this.keyMap[i][j][1]);
        }
      }
    }
    return results;
  }
}