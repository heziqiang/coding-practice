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
  let cur = head;
  let res = [];
  while (cur) {
    res.push(cur.val);
    cur = cur.next;
  }
  console.log(res.join('-'));
}
