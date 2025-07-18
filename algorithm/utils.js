export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

export function createTree(arr) {
  if (!arr.length) return null;
  let root = new TreeNode(arr[0]);
  let queue = [root];
  arr.shift();
  while (arr.length) {
    let node = queue.shift();
    let val = arr.shift();
    if (val != null) {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }
    val = arr.shift();
    if (val != null) {
      node.right = new TreeNode(val);
      queue.push(node.right);
    }
  }
  return root;
}
