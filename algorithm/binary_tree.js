// Traversal of binary tree

// BFS - breadth first traversal

/*
Lever-order traversal
Approach: Use a queue to store tree nodes. For each node dequeued, enqueue its left and right children.

Time complexity: O(n)
Space complexity: O(n)
*/
function levelOrder(root) {
  const queue = [root];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

// DFS - depth first traversal

/*
Pre-order traversal
Approach: Visit the root node first, then recursively visit its left and right subtree.

Time complexity: O(n)
Space complexity: O(n), for recursive stack depth
*/
function preOrder(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    // root - left - right
    result.push(node.val); // The position of this line determines whether it is pre-order, in-order, or post-order.
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return result;
}

function inOrder(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    // left - root - right
    if (node.left) traverse(node.left);
    result.push(node.val); // The position of this line determines whether it is pre-order, in-order, or post-order.
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return result;
}

function postOrder(root) {
  const result = [];
  function traverse(node) {
    if (!node) return;
    // left - right - root
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.val); // The position of this line determines whether it is pre-order, in-order, or post-order.
  }
  traverse(root);
  return result;
}

// Test
import { createTree } from "./utils.js";
console.log(levelOrder(createTree([1, 2, 3, 4, 5, 6]))); // [1, 2, 3, 4, 5, 6]

console.log(preOrder(createTree([1, 2, 3, 4, 5, 6]))); // [1, 2, 4, 5, 3, 6]
console.log(inOrder(createTree([1, 2, 3, 4, 5, 6]))); // [4, 2, 5, 1, 6, 3]
console.log(postOrder(createTree([1, 2, 3, 4, 5, 6]))); // [4, 5, 2, 6, 3, 1]
