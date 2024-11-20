//                                         10
//                                 4                 20
//                             2     8        17            170
//                           1   3 5        11        100         200
//                                                70                    201
class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = node;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value) {
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if (currentNode === null) {
        return null;
      }
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(20);
tree.insert(4);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(100);
tree.insert(11);
tree.insert(200);
tree.insert(70);
tree.insert(201);

console.log(JSON.stringify(tree, 0, 2));
console.log(tree.search(400));
