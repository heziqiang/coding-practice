/*
148. Sort List
Given the head of a linked list, return the list after sorting it in ascending order.

Example:
Input: head = [4,2,1,3]
Output: [1,2,3,4]
*/

/*
Approach: split the list into two halves, sort each half recursively, then merge them.
finding the tail of the first half, then set the tail.next to null.

related problems:
21. Merge Two Sorted Lists

Time complexity: O(n log n)
Space complexity: O(log n) for recursion stack
*/

function sortList(head) {
  if (!head || !head.next) return head;
  let prev = head;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  let left = sortList(head);
  let right = sortList(slow);

  return mergeTwoLists(left, right);
}

// 21. Merge Two Sorted Lists
function mergeTwoLists(list1, list2) {
  const dummy = new ListNode();
  let cur = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 ? list1 : list2;
  return dummy.next;
}

// Test
import { ListNode, createList, printList } from './utils.js';
const list = createList([4, 2, 1, 3]);
printList(sortList(list)); // 1-2-3-4
const list2 = createList([4, 2, 1, 3, 5]);
printList(sortList(list2)); // 1-2-3-4-5
