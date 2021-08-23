class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(true) {
      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else {
        return undefined;
      }
    }
  }

  find(val) {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    while (true) {
      if (current.val === val) {
        return current;
      } else if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          return null;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          return null;
        }
      }
    }
  }

  breadthFirstSearch(val) {
    if (!this.root) {
      return null;
    }
    let queue = [];
    let current;
    queue.push(this.root);
    while (queue.length) {
      current = queue.shift();
      if (current.val === val) {
        return current;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return null;
  }

  preOrderDFS() {
    let vals = [];
    let scan = function(node) {
      vals.push(node.val);
      if (node.left) {
        scan(node.left);
      }
      if (node.right) {
        scan(node.right);
      }
    }
    scan(this.root);
    return vals;
  }

  preOrderDFS2(val) {
    let scan = function(node) {
      if (node.val === val) {
        return node;
      }
      if (node.left) {
        scan(node.left);
      }
      if (node.right) {
        scan(node.right);
      }
    }
    let result = scan(this.root);
    return result ? result : null;
  }

  postOrderDFS() {
    let vals = [];
    let traverse = function(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      vals.push(node.val);
    }
    return vals;
  }

  postOrderDFS2(val) {
    let traverse = function(node) {
      if (node.left) {
        let trav = traverse(node.left);
        if (trav) {
          return trav;
        }
      }
      if (node.right) {
        let trav = traverse(node.right);
        if (trav) {
          return trav;
        }
      }
      if (node.val === val) {
        return node;
      }
    }
    let result = traverse(this.root);
    return result ? result : null;
  }

  inOrderDFS() {
    let vals = [];
    let traverse = function(node) {
      if (node.left) {
        traverse(node.left);
      }
      vals.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return vals;
  }

  inOrderDFS2(val) {
    let traverse = function(node) {
      if (node.left) {
        let trav = traverse(node.left)
        if (trav) {
          return trav;
        }
      }
      if (node.val === val) {
        return node;
      }
      if (node.right) {
        let trav = traverse(node.right);
        if (trav) {
          return trav;
        }
      }
    }
    let result = traverse(this.root);
    return result ? result : null;
  }

}