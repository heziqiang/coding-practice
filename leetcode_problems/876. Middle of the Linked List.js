/*
876. Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
*/

/*
Approach: Use Two Pointers, slow and fast, slow moves 1 step at a time, fast moves 2 steps at a time.
When fast reaches the end, slow is at the middle (start of the second half).

Time complexity: O(n)
Space complexity: O(1)
*/

function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Test
import { createList, printList } from './utils.js';
const list = createList([1, 2, 3, 4, 5]);
printList(middleNode(list)); // 3-4-5
const list2 = createList([1, 2, 3, 4, 5, 6]);
printList(middleNode(list2)); // 4-5-6
