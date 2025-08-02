/*
DFS traversal (Recursive method)
Approach:
Visit the root node first, record its value, then recursively visit its left and right subtree.

Time complexity: O(n)
Space complexity: O(log n) - O(n), for recursion stack depth
*/
function dfsRecursive(root) {
  const res = [];
  function traverse(node) {
    if (!node) return;
    // process order decides if it’s pre-order, in-order, or post-order.
    if (node.left) traverse(node.left);
    res.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return res;
}

/*
DFS traversal (Iterative method)
Initialize a stack with the root node.
Pop a node from the stack, if it is visited, record its value;
otherwise mark it as visited and push its right child, itself, and its left child onto the stack.
Continue until the stack is empty.

Time complexity: O(n)
Space complexity: O(log n) - O(n), for recursion stack depth
*/
function dfsIterative(root) {
  if (!root) return [];
  const res = [];
  const stack = [[root, false]];
  while (stack.length) {
    let [node, visited] = stack.pop();
    if (!node) continue;
    if (visited) {
      res.push(node.val);
    } else {
      // process order decides if it’s pre-order, in-order, or post-order.
      stack.push([node.right, false]);
      stack.push([node, true]); // mark it as visited
      stack.push([node.left, false]);
    }
  }
  return res;
}

// pre-order traversal is a special simplify case of DFS
function preorderTraversal(root) {
  const res = [];
  const stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (!node) continue;
    res.push(node.val);
    stack.push(node.right);
    stack.push(node.left);
  }
  return res;
}

// Test
import { createTree } from "./utils.js";
let tree = createTree([1, 2, 3, null, null, 4, 5]);
console.log(dfsRecursive(tree)); // [2, 1, 4, 3, 5]
console.log(dfsIterative(tree)); // [2, 1, 4, 3, 5]
console.log(preorderTraversal(tree)); // [1, 2, 3, 4, 5]
