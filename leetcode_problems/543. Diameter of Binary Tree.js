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

Constraints:
The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
*/

/*
Approach:
The length of the longest path which pass a node, is the sum of its left and right subtrees' max depth.
Traverse the tree recursively, for each node, get the maxDepths of its children and update the max length.

refer to problem: 104. Maximum Depth of Binary Tree

Time complexity: O(n)
Space complexity: O(log n) - O(n) for recursion stack depth
*/

function diameterOfBinaryTree(root) {
  let maxLen = 0;
  function maxDepth(node) {
    if (!node) return 0;
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    // longest path which pass the node
    maxLen = Math.max(maxLen, left + right);
    // max depth of the node
    return Math.max(left, right) + 1;
  }
  maxDepth(root);
  return maxLen;
}

// Test
import { createTree } from "./utils.js";

console.log(diameterOfBinaryTree(createTree([1, 2, 3, 4, 5]))); // 3
console.log(
  diameterOfBinaryTree(
    createTree([1, 2, 3, 4, 5, null, null, 6, null, null, 7, 8, null, null, 9])
  )
); // 6, will not pass the root
