/*
21. Merge Two Sorted Lists
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list.
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/*
Approach: use Two Points traversal through the two lists,
compare the values of the two nodes, use the smaller one first, then move the pointer to the next node.
if one list is empty, append the rest of the other list.
*/
import { ListNode } from './utils.js';

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(0);
  let tail = dummy;
  let p1 = list1;
  let p2 = list2;
  while (p1 || p2) {
    if (!p1) {
      tail.next = p2;
      break;
    }
    if (!p2) {
      tail.next = p1;
      break;
    }
    if (p1.val < p2.val) {
      tail.next = p1;
      tail = tail.next;
      p1 = p1.next;
    } else {
      tail.next = p2;
      tail = tail.next;
      p2 = p2.next;
    }
  }
  return dummy.next;
}

// Test
import { createList } from './utils.js';
const list1 = createList([1, 2, 4]);
const list2 = createList([1, 3]);
console.log(mergeTwoLists(list1, list2)); // 1-1-2-3-4
