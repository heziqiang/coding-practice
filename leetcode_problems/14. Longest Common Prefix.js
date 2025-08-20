/*
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
*/

/*
Approach: 
Double-layer loop, pick a string from strs, iterate through the sting and for each character, 
check if it's same as other strings.

Time complexity: O(n * m), n is the array length, m is the string length
Space complexity: O(1)
*/

function longestCommonPrefix(strs) {
  let prefix = "";
  const target = strs[0];
  for (let i = 0; i < target.length; i++) {
    const char = target[i];
    for (let str of strs) {
      if (str[i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
}

// Test
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 'fl'
console.log(longestCommonPrefix([""])); // ''
