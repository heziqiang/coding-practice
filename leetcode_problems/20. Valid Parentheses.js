/*
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example:
Input: s = "([]){}"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/*
Approach:
Iterate through s, If it’s an open bracket, push it onto the stack;
if it’s a close bracket, pop from the stack and check if they matche.
Finally, return true if the stack is empty.

Time complexity: O(n)
Space complexity: O(n) for stack depth
*/

function isValid(s) {
  const stack = [];
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let char of s) {
    // is close bracket
    if (map[char]) {
      if (map[char] !== stack.pop()) return false;
    } else {
      // is open bracket
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// Test
console.log(isValid("([]){}")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]")); // fasle
console.log(isValid("{}")); // true
