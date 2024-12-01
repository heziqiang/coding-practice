export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export function createList(arr) {
  let dummy = new ListNode();
  let cur = dummy;
  for (let val of arr) {
    cur.next = new ListNode(val);
    cur = cur.next;
  }
  return dummy.next;
}

export function printList(head) {
  if (!head) {
    console.log('null');
    return;
  }
  let cur = head;
  let res = [];
  while (cur) {
    res.push(cur.val);
    cur = cur.next;
  }
  console.log(res.join('-'));
}

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
