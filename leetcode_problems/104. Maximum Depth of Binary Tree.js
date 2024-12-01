/*
104. Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example:
Input: root = [3,9,20,null,null,15,7]
Output: 3
*/

/*
Approach: User DFS recursive traversal, from top to bottom, empty node is at level 0 (base case).

Time complexity: O(n)
Space complexity: O(log(n)) for recursion stack
*/

function maxDepth(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// Test
import { createTree } from './utils.js';
const tree = createTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(tree)); // 3
const tree2 = createTree([1, null, 2]);
console.log(maxDepth(tree2)); // 2
