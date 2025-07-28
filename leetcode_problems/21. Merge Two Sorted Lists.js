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
Approach:
Use two pointers, p1 and p2, to iterate through list1 and list2,
Compare their values, append the smaller one to the result, then move on that pointer.
When one list ends, append the remaining elements of the other list.

Time complexity: O(n)
Space complexity: O(1)
*/
import { ListNode } from "./utils.js";

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode();
  let cur = dummy;
  let p1 = list1;
  let p2 = list2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      cur.next = p1;
      p1 = p1.next;
    } else {
      cur.next = p2;
      p2 = p2.next;
    }
    cur = cur.next;
  }
  cur.next = p1 ? p1 : p2;
  return dummy.next;
}

// Test
import { createList, printList } from "./utils.js";

printList(mergeTwoLists(createList([1, 2, 4, 5]), createList([1, 3]))); // 1-1-2-3-4-5
printList(mergeTwoLists(createList([1, 2]), null)); // 1-2
