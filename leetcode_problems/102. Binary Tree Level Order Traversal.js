/*
102. Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/

/*
Approach: BFS traversal, use a two queues to store nodes of each level, swap them after each level.

Time complexity: O(n)
Space complexity: O()
*/

function levelOrder(root) {
  if (!root) return [];
  let queue = [root];
  let queueNext = [];
  const res = [];
  while (queue.length) {
    const curLevel = [];
    for (let node of queue) {
      curLevel.push(node.val);
      if (node.left) queueNext.push(node.left);
      if (node.right) queueNext.push(node.right);
    }
    res.push(curLevel);
    queue = queueNext;
    queueNext = [];
  }
  return res;
}

// Test
import { createTree } from './utils.js';
const tree = createTree([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(tree)); // [[3],[9,20],[15,7]]
