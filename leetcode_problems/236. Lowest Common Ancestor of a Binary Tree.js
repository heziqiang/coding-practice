/*
236. Lowest Common Ancestor of a Binary Tree
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
*/

/*
Approach: If a node is the lowest common ancestor of p and q, it must be one the following situations:
1. root is p or q, the other is in its subtree.
2. p or q is in its two separate subtree.

Time complexity: O(n)
Space complexity: O(log n) for recursion stack
*/

function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right;
  if (!right) return left;
  return root;
}

// Test
import { createTree } from './utils.js';
const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(lowestCommonAncestor(tree, tree.left, tree.right)); // 3
console.log(lowestCommonAncestor(tree, tree.left.left, tree.left.right.right)); // 5
