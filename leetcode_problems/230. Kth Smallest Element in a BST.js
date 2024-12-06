/*
230. Kth Smallest Element in a BST
Given the root of a binary search tree, and an integer k,
return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example:
Input: root = [3,1,4,null,2], k = 1
Output: 1
*/

/*
Approach: DFS in-order traverse a BST tree will get the ascending order result.
Just pick the Kth node's value.

Time complexity: O(n)
Space complexity: O(log(n)) for recursion stack
*/

function kthSmallest(root, k) {
  let res = 0;
  let count = k;
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    count--;
    if (count == 0) {
      res = node.val;
    }
    dfs(node.right);
  }

  dfs(root);
  return res;
}

// Test
import { createTree } from './utils.js';
const tree = createTree([3, 1, 4, null, 2]);
console.log(kthSmallest(tree, 1)); // 1
console.log(kthSmallest(tree, 3)); // 3
