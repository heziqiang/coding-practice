/*
394. Decode String
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.
Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 105.

Example:
Input: s = "3[a2[c]]"
Output: "accaccacc"
*/

/*
Approach: Use a stack to store the current block string and number.
When it comes to '[', stack push; when it comes to ']', stack pop and calculate the upper-level context.

Time complexity: O(n)
Space complexity: O(n)
*/

function decodeString(s) {
  const stack = [];
  let curNum = 0;
  let curStr = '';
  for (let char of s) {
    if (char === '[') {
      stack.push(curStr);
      stack.push(curNum);
      curNum = 0;
      curStr = '';
    } else if (char === ']') {
      const num = stack.pop();
      const prevStr = stack.pop();
      curStr = prevStr + curStr.repeat(num);
    } else if (/^\d+$/.test(char)) {
      curNum = curNum * 10 + Number(char);
    } else {
      curStr += char;
    }
  }
  return curStr;
}

// Test
console.log(decodeString('3[a2[c]]')); // 'accaccacc'
console.log(decodeString('3[a]2[bc]')); // 'aaabcbc'
