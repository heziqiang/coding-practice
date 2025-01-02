/*
19. Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

/*
Approach: Use Two Pointers, fast and slow, fast goes n steps first, then move together until fast reaches the end.
slow is the previous node of the target.

Time complexity: O(n)
Space complexity: O(1)
*/
import { ListNode } from './utils.js';

function removeNthFromEnd(head, n) {
  if (!head || n < 0) return head;
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
printList(removeNthFromEnd(null, 2)); // null
