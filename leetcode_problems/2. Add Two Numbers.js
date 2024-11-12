/*
2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

/*
Approach: loop through the two linked lists by their max length.
Don't forget to handle the last carry, it may make the result longer by 1 digit.
*/
import { ListNode } from './utils.js';

function addTwoNumbers(l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  const dummy = new ListNode(0);
  let cur = dummy;
  while (p1 || p2 || carry > 0) {
    const sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(digit, null);
    cur = cur.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  return dummy.next;
}

// Test
import { createList } from './utils.js';
const l1 = createList([3, 4]);
const l2 = createList([5, 5]);
const l3 = createList([9, 5]);
console.log(addTwoNumbers(l1, l2)); // 8-9, 43 + 55 = 98
console.log(addTwoNumbers(l1, l3)); // 2-0-1, 43 + 59 = 102
