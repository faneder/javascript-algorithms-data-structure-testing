// Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;

      while(true) {
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
  }

  contains(value) {
    let currentNode = this.root;

    if (!currentNode) return false;

    while(currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  remove(value) {
    let currentNode = this.root;
    let parentNode = null;

    if (!currentNode) return false;

    while(currentNode) {
      if (value === currentNode.value) {
        if (!parentNode) {
          return this.root = !currentNode.right ? currentNode.left : currentNode.right
        }

        if (currentNode.left && currentNode.right) {
          let leftNode = currentNode.right.left;
          let leftNodeParent = currentNode.right;

          // traversing down the sub tree until hit a leaf
          while(!!leftNode.left) {
            leftNodeParent = leftNode;
            leftNode = leftNode.left;
          }

          leftNodeParent.left = leftNode.right;
          leftNode.left = currentNode.left;
          leftNode.right = currentNode.right;

          if (currentNode.value < parentNode.value) {
            parentNode.left = leftNode;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = leftNode;
          }
        } else if (!currentNode.left) {
          if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.right;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right;
          }
        } else {
          if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.left;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.left;
          }
        }

        return true;
      // loop until match the value
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
    }
  }
}

module.exports = { BST, Node }


