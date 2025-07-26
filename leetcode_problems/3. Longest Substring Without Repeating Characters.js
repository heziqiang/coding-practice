/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Example:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
Approach:
Use a sliding window, two pointers left and right to track the window boundaries.
Use a set to store characters in the window, maxLen to track max window width ever.
Move right to expand the window; if a duplicate character appears, move left to shrink the window until it is unique.
Finally, return maxLen.

Time complexity: O(n)
Space complexity: O(n) for the set size
*/

function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  const set = new Set();
  while (right < s.length) {
    const char = s[right];
    while (set.has(char)) {
      set.delete(s[left]);
      left++;
    }
    set.add(char);
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return maxLen;
}

// Test
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("")); // 0
