/*
226. Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.

Example:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/

/*
Approach: Traverse the tree, swap each node's left and right child.

Time complexity: O(n)
Space complexity: O(log(n)) for recursion stack
*/

function invertTree(root) {
  if (!root) return root;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

// Test
import { createTree } from './utils.js';
const tree = createTree([4, 2, 7, 1, 3, 6, 9]);
console.log(invertTree(tree)); // [4,7,2,9,6,3,1]
const tree2 = createTree([]);
console.log(invertTree(tree2)); // null
