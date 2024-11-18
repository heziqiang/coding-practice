/*
160. Intersection of Two Linked Lists
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
If the two linked lists have no intersection at all, return null.

Example:
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
*/

/*
Approach: Use Two Pointers, p1 and p2, p1 moves from headA to the end, then moves to headB, p2 moves from headB to the end, then moves to headA.
They will go through the same distance, so they will meet at the intersection node or null.

Time complexity: O(m+n)
Space complexity: O(1)
*/

function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }
  return p1;
}

// Test
import { createList } from './utils.js';
let list1 = createList([4, 1, 8, 4, 5]);
let list2 = createList([5, 6, 1]);
list2.next.next.next = list1.next.next;
console.log(getIntersectionNode(list1, list2)); // 8
