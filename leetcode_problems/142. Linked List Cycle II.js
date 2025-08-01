/*
142. Linked List Cycle II
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed).
It is -1 if there is no cycle. Note that pos is not passed as a parameter.
Do not modify the linked list.

Example:
Input: head = [1, 2, 3], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the second node.
*/

/*
Approach: Use Two Pointers, slow and fast, slow moves 1 step at a time, fast moves 2 steps at a time.
Move both until they meet, they must be on the cycle.
x denotes the length of the linked list before starting the circle,
y denotes the distance from the start of the cycle to where slow and fast met,
C denotes the length of the cycle,
2(x + y) - (x + y) = N * C
=> x + y = N * C
so if slow continue to move x steps, it will reach the start of the cycle.
let head moves together with slow, they will meet at the start of the cycle.

Time complexity: O(n)
Space complexity: O(1)
*/

import { ListNode } from './utils.js';

function detectCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  while (head !== slow) {
    head = head.next;
    slow = slow.next;
  }
  return head;
}

// Test
import { createList } from './utils.js';
const list = createList([1, 2, 3, 4, 5]);
const tail = list.next.next.next.next;
tail.next = list.next.next; // create a cycle, 5-3
console.log(detectCycle(list)); // 3
