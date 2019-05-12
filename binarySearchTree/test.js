const index = require('./index');
BST = index.BST
Node = index.Node

describe('Binary Search Tree', () => {
  test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  test('BST is a constructor', () => {
    expect(typeof BST.prototype.constructor).toEqual('function');
  });

  test('BST can insert Node correctly', () => {
    const tree = new BST();
    tree.insert(8);
    tree.insert(5);
    tree.insert(7);
    tree.insert(20);

    expect(tree.root.value).toEqual(8);
    expect(tree.root.left.value).toEqual(5);
    expect(tree.root.left.right.value).toEqual(7);
    expect(tree.root.right.value).toEqual(20);
  });

  test('BST can find a node from a tree correctly', () => {
    const tree = new BST();
    tree.insert(8);
    tree.insert(5);
    tree.insert(7);
    tree.insert(20);

    expect(tree.contains(8)).toBe(true);
    expect(tree.contains(5)).toBe(true);
    expect(tree.contains(7)).toBe(true);
    expect(tree.contains(20)).toBe(true);
  });

  test('BST cannot find a node from a tree should return null', () => {
    const tree = new BST();
    tree.insert(8);
    tree.insert(5);
    tree.insert(7);
    tree.insert(20);

    expect(tree.contains(1000)).toBe(false);
  });

  test('The right subtree of a node be removed correctly', () => {
    const tree = new BST();
    tree.insert(8);
    tree.insert(5);
    tree.insert(7);
    tree.insert(20);
    tree.insert(26);
    tree.insert(80);
    tree.insert(59);
    tree.remove(20)

    expect(tree.root.right.value).toBe(26);
    expect(tree.root.right.right.value).toBe(80);
    expect(tree.root.right.right.left.value).toBe(59);
  });

  test('BST remove a node from a tree', () => {
    const tree = new BST();
    tree.insert(8);
    tree.insert(5);
    tree.insert(7);
    tree.insert(20);
    tree.insert(26);
    tree.insert(80);
    tree.insert(59);
    tree.insert(23);
    tree.insert(55);
    tree.insert(56);
    tree.insert(53);
    tree.remove(26)

    expect(tree.root.right.right.value).toBe(53);
    expect(tree.root.right.right.right.value).toBe(80);
    expect(tree.root.right.right.right.right).toBeNull();
    expect(tree.root.right.right.right.left.value).toBe(59);
    expect(tree.root.right.right.right.left.left.value).toBe(55);
    expect(tree.root.right.right.right.left.left.right.value).toBe(56);
  });

  test('remove a node from a tree without right node', () => {
    const tree = new BST();
    tree.insert(8);
    tree.insert(5);
    tree.insert(7);
    tree.remove(5)

    expect(tree.root.left.value).toBe(7);
  });

  test('remove a node from a tree without left subtree', () => {
    const tree = new BST();
    tree.insert(10);
    tree.insert(12);
    tree.insert(15);
    tree.insert(13);
    tree.insert(11);
    tree.insert(89);
    tree.remove(12)

    expect(tree.root.right.value).toBe(13);
    expect(tree.root.right.left.value).toBe(11);
    expect(tree.root.right.right.value).toBe(15);
    expect(tree.root.right.right.right.value).toBe(89);
  });

  test('remove a node no children from a tree without left subtree', () => {
    const tree = new BST();
    tree.insert(10);
    tree.insert(12);
    tree.insert(15);
    tree.insert(13);
    tree.insert(11);
    tree.insert(89);
    tree.remove(11)

    expect(tree.root.right.value).toBe(12);
    expect(tree.root.right.right.value).toBe(15);
    expect(tree.root.right.right.left.value).toBe(13);
    expect(tree.root.right.right.right.value).toBe(89);
  });

  test('remove a node no children from a tree without left subtree', () => {
    const tree = new BST();
    tree.insert(10);
    tree.insert(12);
    tree.remove(10)

    expect(tree.root.value).toBe(12);
  });

  test('remove a node without tree', () => {
    const tree = new BST();
    tree.remove(10)

    expect(tree.root).toBe(null);
  });

  test('remove a terminal node', () => {
    const tree = new BST();
    tree.insert(6);
    tree.insert(4);
    tree.remove(7)

    expect(tree.root.left.value).toBe(4);
    expect(tree.root.left.right).toBe(null);
    expect(tree.root.left.left).toBe(null);
  });

  test('remove a terminal node', () => {
    const tree = new BST();
    tree.insert(20);
    tree.insert(6);
    tree.insert(4);
    tree.remove(6)

    expect(tree.root.left.value).toBe(4);
  });
});

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}