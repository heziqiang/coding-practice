/*
112. Path Sum
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path 
such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.

Example:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
*/

/*
Approach:
If a node's pathSum equals targetSum, that means its left or right child's pathSum equals targetSum - node.val.
Use DFS traversal, if the node is a leaf, check itself; 
if the node is null, return false; 
otherwise check its children.

Time complexity: O(n)
Space complexity: O(log n) for recursion depth
*/

function hasPathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

// Test
import { createTree } from "./utils.js";

let tree = createTree([1, 2, 3, null, null, 4, 5]);
console.log(hasPathSum(tree, 3)); // true   1-2
console.log(hasPathSum(tree, 8)); // true   1-3-4
console.log(hasPathSum(tree, 4)); // false
console.log(hasPathSum(null, 0)); // false
