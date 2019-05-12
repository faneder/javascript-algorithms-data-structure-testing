# Javascript Algorithms and Data Structure with Testing

> data structure + algorithm = executable program

## What is Big O?

> Big O notation is used in Computer Science to describe the performance or complexity of an algorithm.

- O(1) Constant
- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear - for loops, while loops through n items
- O(n log(n)) Log Linear - usually sorting operations
- O(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
- O(2^n) Exponential - recursive algorithms that solves a problem of size N
- O(n!) Factorial- you are adding a loop for every element

Iterating through half a collection is still O(n)
Two separate collections: O(a * b)

[big O sheet](http://bigocheatsheet.com/)

Rules:
- Worst Case
- Remove Constant
- Different terms for inputs
- Drop Non Dominants

**Space Complexity**
> Time is not the only thing that matters in an algorithm. We might also care about the amount of memory—
or space—required by an algorithm.
Space complexity is a parallel concept to time complexity. If we need to create an array of size n, this will
require 0 ( n ) space. If we need a two-dimensional array of size nxn, this will require 0 ( n * ) space.

### What is good code

- Readabl
- Scalable
  - Speed
  - Memory

**data structure**

- [Javascript Algorithms and Data Structure with Testing](#javascript-algorithms-and-data-structure-with-testing)
  - [What is Big O?](#what-is-big-o)
    - [What is good code](#what-is-good-code)
  - [Array](#array)
  - [Hash-Tables](#hash-tables)
  - [Tree](#tree)
  - [Binary-Search-Tree](#binary-search-tree)
  - [Binary-Heap](#binary-heap)
  - [AVL-Tree](#avl-tree)
  - [Tries](#tries)
      - [Testing configure](#testing-configure)

**algorithm**

## Array

> Array is a data structure consisting of a collection of elements.

| Props | Cons |
| ------------- | ------------- |
| fast Search  | slow insert  |
| fast push/pop  | slow delete  |
| ordered  | fixed size (static array)  |

## Hash-Tables

> In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. Ideally, the hash function will assign each key to a unique bucket,but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.

**Time complexity in big O notation**

| Algorithm | Average | Worst case |
| ------------- |
| Space | O(n) | O(n)
| Search | O(1) | O(n)
| Insert | O(1) | O(n)
| Delete | O(1) | O(n)

| Props | Cons |
| ------------- | ------------- |
| fast Search (good collision needed)  | slow key iteration  |
| fast insert | unordered |
| flexible key  |

Ref [Wiki](https://en.wikipedia.org/wiki/Hash_table)

## Tree

> A tree is an abstract data type(ADT) that stores elements hierarchically. It simulates a hierarchical tree structure, with a root value and sub-trees of children with a parent node, represented as a set of linked nodes.

For example: Taxonomy of Animal

        --------------------
        |     animal       |
        --------------------
        /                   \
    chordata             porifera
    /      \
vertebrata cephalochordata
    / \
aves  mammalia

**terminology**

Degree: animal -> 2
Level: animal -> 1, chordata -> 2, vertebrata -> 3
Height: is the length of the longest path to a leaf, ex: 4
Leaf/Terminal: is a node that does not have a child node in the tree, ex: aves, mammalia, cephalochordata, porifera
Parent: is a node that has a child node, ex: aves -> vertebrata
Children: is a node that has a parent node, ex: animal -> chordata, porifera
Ancestor: mammalia -> vertebrata, chordata, animal
Descendent: vertebrata -> aves, mammalia
Siblings: chordata <-> porifera

## Binary-Search-Tree

> A binary tree is a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

[LLINK][Data][RLINK]

    100
   /  \
  30   125
 / \    / \
5  50  100 150

| Algorithm | Average | Worst case
| ------------- |
| Space | O(n) | O(n)
| Search | O(log n) | O(n)
| Insert | O((log n) | O(n)
| Delete | O((log n) | O(n)

> Its worst-case performance for the various operations is linear time, because it is possible that a series of operations
results in a tree with linear height.

Resource:
[Visual bst](https://visualgo.net/en/bst)

## Binary-Heap

> It takes the form of a binary tree. Binary heaps are a common way of implementing priority queues that stores a collection of items at its positions

Properties:

- It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an array.

- A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to MinHeap.

           10                      10
         /      \               /       \
        20        100          15         30
      /                      /  \        /  \
    30                     40    50    100   40

| Algorithm | Average | Worst case
| ------------- |
| Space | O(n) | O(n)
| Search | O(n) | O(n)
| Insert | O(1) | O(log n)
| Delete | O(log n) | O(log n)
| Peek | O(1) | O(1)

[Visual Binary Heap](https://visualgo.net/en/heap)
[Binary Heap Detail](https://www.geeksforgeeks.org/binary-heap/)

**balanced VS unbalanced**

- A balanced binary search tree: the tree is balanced and there is no side which has nodes with child nodes.
- A unbalanced binary search tree: not every node has the exact same amount of child nodes.

## AVL-Tree

> AVL Tree is to add a rule to the binary search tree definition that will maintain a logarithmic height for the tree.
[Visual AVL Tree](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)

## Tries

> A trie (sometimes called a prefix tree) is a funny data structure. A trie is a variant of an n-arytree in which characters are stored at each node. Each path down the tree may
represent a word. Very commonly, a trie is used to store the entire (English) language for quick prefix lookups.

[Tries](https://www.geeksforgeeks.org/trie-insert-and-search/)

#### Testing configure
install environment

```yarn```

yarn Test

```yarn test --watch```
