/*
543. Diameter of Binary Tree
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.

Example:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
*/

/*
Approach: The length of the longest path which pass a node, is sum of max depth of its left and right subtree.
Traverse the tree for maxDepth of each node, store the max length.

Time complexity: O(n)
Space complexity: O(log n) for recursion stack
*/

function diameterOfBinaryTree(root) {
  let max = 0;
  function maxDepth(root) {
    if (!root) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    // update the max length
    max = Math.max(max, left + right);
    // get the max depth of node
    return Math.max(left, right) + 1;
  }
  maxDepth(root);
  return max;
}

// Test
import { createTree } from './utils.js';
const tree = createTree([1, 2, 3, 4, 5]);
const tree2 = createTree([
  1,
  2,
  3,
  4,
  5,
  null,
  null,
  6,
  null,
  null,
  7,
  8,
  null,
  null,
  9,
]);
console.log(diameterOfBinaryTree(tree)); // 3
console.log(diameterOfBinaryTree(tree2)); // 6, not pass the root
