/*
206. Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

/*
Approach: Use Two Pointers, prev and cur, prev starts from beyond head, cur starts from head.
Reverse them and move on, until cur is behind of tail, return prev.

Time complexity: O(n)
Space complexity: O(1)
*/

function reverseList(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

// Test
import { createList, printList } from "./utils.js";

printList(reverseList(createList([1, 2, 3, 4, 5]))); // 5-4-3-2-1
printList(reverseList(null)); // null
