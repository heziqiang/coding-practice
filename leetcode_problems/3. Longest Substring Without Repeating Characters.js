/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.

Example:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
*/

/*
Approach: Use sliding window, use two points left and right to represent the window.
Move right if there is no duplicate character, move left if there is a dumplicate character.

Time complexity: O(n)
Space complexity: O(n)
*/

function lengthOfLongestSubstring(s) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  const map = new Map();
  while (right < s.length) {
    const char = s[right];
    while (map.has(char)) {
      map.delete(s[left]);
      left++;
    }
    map.set(char, 1);
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return maxLen;
}

// Test
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('')); // 0
