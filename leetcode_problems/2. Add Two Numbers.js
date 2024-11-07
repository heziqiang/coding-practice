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
  let tail = dummy;
  while (p1 || p2 || carry > 0) {
    const sum = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    tail.next = new ListNode(digit, null);
    tail = tail.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  return dummy.next;
}
