/*
94. Binary Tree Inorder Traversal
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

/*
Approach: Use DFS recursive traversal

Time complexity: O(n)
Space complexity: O(log(n)) for recursion stack
*/

function inorderTraversal(root) {
  const res = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  return res;
}

// Test
import { createTree } from "./utils.js";
const tree = createTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log(inorderTraversal(tree)); // [4,2,6,5,7,1,3,9,8]
