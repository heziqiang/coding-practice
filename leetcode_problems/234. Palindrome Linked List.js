/*
234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example:
Input: head = [1,2,2,1]
Output: true
*/

/*
Approach 1: The navie approach is to convert the linked list to an array,
then use two pointers to compare the array from both ends.

Time complexity: O(n)
Space complexity: O(n)
*/

/*
Approach 2: Reverse the second half of the linked list, then compare with the first half.
related problems:
876. Middle of the Linked List
206. Reverse Linked List

Time complexity: O(n)
Space complexity: O(1)
*/
function isPalindrome(head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let tail = reverseList(slow);
  while (tail) {
    if (head.val !== tail.val) {
      return false;
    }
    head = head.next;
    tail = tail.next;
  }
  return true;
}

// 206. Reverse Linked List
function reverseList(head) {
  if (!head) return null;
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

// Test
import { createList } from './utils.js';
const list = createList([1, 2, 3, 2, 1]);
console.log(isPalindrome(list)); // true
console.log(isPalindrome(null)); // true
