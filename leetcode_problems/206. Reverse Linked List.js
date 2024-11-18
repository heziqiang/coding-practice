/*
206. Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

/*
Approach: Use Two Pointers, pre and cur, pre starts from null, cur starts from head.
store cur.next node, make cur.next point to pre.
move forward 1 step each time. when cur reaches null, return pre.

Time complexity: O(n)
Space complexity: O(1)
*/
function reverseList(head) {
  if (!head) return null;
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

// Test
import { createList, printList } from './utils.js';
const list = createList([1, 2, 3, 4, 5]);
printList(reverseList(list)); // 5-4-3-2-1
printList(reverseList(null)); // null
