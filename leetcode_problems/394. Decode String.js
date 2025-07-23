/*
394. Decode String
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.
Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
The test cases are generated so that the length of the output will never exceed 10^5.

Example:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].
*/

/*
Approach:
Use k for repeat count and curStr for current string, use a stack to save previous curStr and k.
Traverse the string:
- If digit: update k, it mey be more then one digit;
- If '[': start a new context, push curStr and k to stack, and reset curStr and k;
- If letter: append to curStr;
- If ']': pop k and prevStr, set curStr = prevStr + curStr repeated k times;
Return curStr

Time complexity: O(n)
Space complexity: O(n)
*/

function decodeString(s) {
  let stack = [];
  let curStr = "";
  let k = 0;
  for (let char of s) {
    if (/\d/.test(char)) {
      k = k * 10 + Number(char);
    } else if (char === "[") {
      // start a new context
      stack.push(curStr);
      stack.push(k);
      curStr = "";
      k = 0;
    } else if (char === "]") {
      let preK = stack.pop();
      let preStr = stack.pop();
      curStr = preStr + curStr.repeat(preK);
    } else {
      curStr += char;
    }
  }
  return curStr;
}

// Test
console.log(decodeString("3[a2[c]]")); // 'accaccacc'
console.log(decodeString("3[a]2[bc]")); // 'aaabcbc'
console.log(decodeString("5[]")); // ''
