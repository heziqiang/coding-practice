/*
98. Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example: 
Input: root = [2,1,3]
Output: true
*/

/*
Approach: Use DFS recursive traversal. store the range of each node, which is a sub section of the parent node's range.

Time complexity: O(n)
Space complexity: O(log(n)) for recursion stack
*/

function isValidBST(root) {
  function dfs(node, min, max) {
    if (!node) return true;
    if (min !== null && node.val <= min) return false;
    if (max !== null && node.val >= max) return false;
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  }
  return dfs(root, -Infinity, Infinity);
}

// Test
import { createTree } from './utils.js';
const tree = createTree([2, 1, 3]);
console.log(isValidBST(tree)); // true
const tree2 = createTree([5, 2, 8, null, null, 3, 9]);
console.log(isValidBST(tree2)); // false
