/*
572. Subtree of Another Tree
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Constraints:
The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104
*/

/*
Approach:
Since a subtree of a tree can be the tree itself. Check if subRoot is the same as one of the follows:
root, root's left subtree, root's right subtree.

refer to problem: 100. Same Tree
*/

function isSubtree(root, subRoot) {
  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }

  return (
    isSameTree(root, subRoot) ||
    isSameTree(root.left, subRoot) ||
    isSameTree(root.right, subRoot)
  );
}

// Test
import { createTree } from "./utils.js";
console.log(isSubtree(createTree([3, 4, 5, 1, 2]), createTree([4, 1, 2]))); // true
console.log(
  isSubtree(
    createTree([3, 4, 5, 1, 2, null, null, null, null, 0]),
    createTree([4, 1, 2])
  )
); // fasle
console.log(isSubtree(createTree([1]), createTree([1]))); // true
