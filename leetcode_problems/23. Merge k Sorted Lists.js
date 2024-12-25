/*
23. Merge k Sorted Lists
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
*/

/*
Approach: Use k pointers to traverse through the k lists, compare the values and pick the smallest one,
go on until all the lists are empty.

Time complexity: O(nk)
Space comlexity: O(1)
*/
import { ListNode } from './utils.js';

function mergeKLists(lists) {
  const dummy = new ListNode(0);
  let cur = dummy;
  const pointers = [...lists];
  while (pointers.some((node) => !!node)) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = -1;
    for (let i = 0; i < pointers.length; i++) {
      if (pointers[i] && pointers[i].val < min) {
        min = pointers[i].val;
        minIndex = i;
      }
    }
    cur.next = pointers[minIndex];
    cur = cur.next;
    pointers[minIndex] = pointers[minIndex].next;
  }
  return dummy.next;
}

// Test
import { createList, printList } from './utils.js';
const lists = [createList([1, 5]), createList([1, 3, 4]), createList([6])];
printList(mergeKLists(lists)); // 1-1-3-4-5-6
