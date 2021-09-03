class Trie {
  constructor() {
    this.word = null;
    this.children = {};
  }

  addWord(word) {
    let node = this;
    for (let letter of word) {
      if (!node.children[letter]) {
        node.children[letter] = new Trie();
      }
      node = node.children[letter];
    }
    node.word = word;
  }


}

let findWords = (board, words) => {
  let res = [];
  let trie = new Trie();
  for (let word of words) {
    trie.addWord(word);
  }

  let search = (trie, r, c) => {
    if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) {
      return;
    }
    let temp = board[r][c];
    trie = trie.children[temp];
    if (temp === '' || !trie) {
      return;
    }
    if (trie.word) {
      res.push(trie.word);
      trie.word = null;
    }
    board[r][c] = ''
    search(trie, r + 1, c);
    search(trie, r - 1, c);
    search(trie, r, c + 1);
    search(trie, r, c - 1);
    board[r][c] = temp;
  }

  for (let i = 0; i < board.length; i ++) {
    for (let j = 0; j < board[i].length; j ++) {
      search(trie, i, j);
    }
  }
  return res;
}
