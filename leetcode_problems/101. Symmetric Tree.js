/*
101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example:
Input: root = [1,2,2,3,4,4,3]
Output: true
*/

/*
Approach: check if the two children are equal, and so are their opposite children.

Time complexity: O(n)
Space complexity: O(log(n)) for recursion stack
*/

function isSymmetric(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
}

function isMirror(left, right) {
  if (!left || !right) return left === right;
  return (
    left.val === right.val &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
}

// Test
import { createTree } from './utils.js';
const tree = createTree([1, 2, 2, 3, 4, 4, 3]);
console.log(isSymmetric(tree)); // true
const tree2 = createTree([1, 2, 2, null, 3, null, 3]);
console.log(isSymmetric(tree2)); // false
