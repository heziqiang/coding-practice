/*
24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head.
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example:
Input: head = [1,2,3,4]
Output: [2,1,4,3]
*/

/*
Approach:
*/

import { ListNode, printList } from './utils.js';

function swapPairs(head) {
  const dummy = new ListNode(0, head);
  let pre = dummy;
  let cur = head;
  while (cur && cur.next) {
    // swap
    const next = cur.next;
    pre.next = next;
    cur.next = next.next;
    next.next = cur;
    // move forward 2 steps
    pre = cur;
    cur = cur.next;
  }
  return dummy.next;
}

// Test
import { createList } from './utils.js';
let list = createList([1, 2, 3, 4]);
printList(swapPairs(list)); // 2-1-4-3
