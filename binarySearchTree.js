class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  treeRoot = null;

  constructor() {}

  insert(key) {
    const newNode = new Node(key);
    if (this.treeRoot) {
      // 从根节点还是插入
      this.insertNode(this.treeRoot, newNode);
    } else {
      this.treeRoot = newNode;
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left) {
        this.insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }

  // 中序遍历
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.treeRoot, callback);
  }
  // 先序遍历
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.treeRoot, callback);
  }

  // 后序遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.treeRoot, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  remove(key) {
    this.treeRoot = this.removeNode(this.treeRoot, key);
  }

  // 从树中移除某个节点
  removeNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 等于node.key是进行删除

      // 叶节点
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // 只有一个子节点时(子节点替换掉当前节点，也就是父节点直接指向它的子节点)
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // 有两个子节点时
      let aux = this.minNode(node.right);
      // 不需要删除当前节点，直接将子右节点的值赋给当前节点，然后删除子右节点
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }

  search(key) {
    return this.searchNode(this.treeRoot, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return node.left ? this.searchNode(node.left, key) : false;
    } else if (key > node.key) {
      return node.right ? this.searchNode(node.right, key) : false;
    } else {
      return true;
    }
  }

  min() {
    return this.minNode(this.treeRoot);
  }

  minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  }

  max() {
    return this.maxNode(this.treeRoot);
  }

  maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node;
    }
    return null;
  }
}

// const tree = new BinarySearchTree();
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.search(25));
// console.log(tree.search(180));
// console.log('--------------');
// tree.inOrderTraverse(console.log);
// console.log('--------------');
// tree.preOrderTraverse(console.log);
// console.log('--------------');
// tree.postOrderTraverse(console.log);
// console.log('--------------');
// tree.remove(5);
// tree.postOrderTraverse(console.log);
