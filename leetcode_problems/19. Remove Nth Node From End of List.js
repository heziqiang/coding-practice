/*
19. Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

/*
Approach: Use Two Points, fast and slow, fast goes n steps first, then move together until fast reaches the end.
slow is the previous node of the target.
*/
import { ListNode } from './utils.js';

function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy;
  let slow = dummy;
  while (fast && n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}

// Test
import { createList, printList } from './utils.js';
const list = createList([1, 2, 3, 4, 5]);
printList(removeNthFromEnd(list, 2)); // 1-2-3-5
