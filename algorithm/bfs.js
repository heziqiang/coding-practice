/*
"BFS traversal" -> "Level-order traversal" -> "Shortest path"
They are related in a progressive way.

By identifying each layer during BFS, we get the level-order traversal.
By counting the number of layers, we find the shortest path.
*/

/*
BFS traversal
Approach:
Initialize a queue with the root node.
Dequeue a node, record its value, and enqueue its children.
Until the queue is empty.

Time complexity: O(n)
Space complexity: O(n)
*/
function bfs(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    let node = queue.shift();
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return res;
}

/*
Level-order traversal
Approach:
Use two queues, queue1 for current level nodes, initialized with the root node; queue2 for next level.
Dequeue each node from queue1, record its value, and enqueue its children to queue2.
Swap queue1 and queue2 and repeat, until both queues are empty.

Time complexity: O(n)
Space complexity: O(n)
*/
function levelOrder(root) {
  if (!root) return [];
  const res = [];
  let queue1 = [root];
  let queue2 = [];
  let level = [];
  while (queue1.length) {
    let node = queue1.shift();
    level.push(node.val);
    if (node.left) queue2.push(node.left);
    if (node.right) queue2.push(node.right);
    // a level is done, process the next level
    if (!queue1.length) {
      res.push(level);
      level = [];
      queue1 = queue2;
      queue2 = [];
    }
  }
  return res;
}

// Test
import { createTree } from "./utils.js";
const root = createTree([1, 2, 3, null, null, 4, 5]);
console.log(bfs(null)); // []
console.log(bfs(root)); // [1, 2, 3, 4, 5]
console.log(levelOrder(null)); // []
console.log(levelOrder(root)); // [[1], [2, 3], [4, 5]]
