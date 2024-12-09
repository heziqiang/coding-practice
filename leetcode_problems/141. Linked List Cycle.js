/*
141. Linked List Cycle
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to.
Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example:
Input: head = [1, 2, 3], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1th node.
*/

/*
Approach: Use Two Pointers, slow and fast, slow moves one step at a time, fast moves two steps at a time.
Move both until fast reach the end. If there is a cycle, they will meet at some point.

Time complexity: O(n)
Space complexity: O(1)
*/
import { ListNode } from './utils.js';

function hasCycle(head) {
  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

// Test
import { createList } from './utils.js';
const list = createList([1, 2, 3]);
let tail = list.next.next;
tail.next = list.next;
console.log(hasCycle(list)); // true

const list2 = createList([1, 2]);
console.log(hasCycle(list2)); // false
