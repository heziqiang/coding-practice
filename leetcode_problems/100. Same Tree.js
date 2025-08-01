/*
100. Same Tree
Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Constraints:
The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
*/

/*
Approach:
Use recursive DFS, verify if their node values are same, and both the left and right subtrees are same.
*/

function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}

// Test
import { createTree } from "./utils.js";
console.log(isSameTree(createTree([1, 2, 3, 4]), createTree([1, 2, 3, 4]))); // true
console.log(isSameTree(createTree([1, 2]), createTree([1, null, 2]))); // false
console.log(isSameTree(null, null)); // true
