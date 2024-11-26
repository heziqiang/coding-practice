/*
438. Find All Anagrams in a String
Given two strings s and p, return an array of all the start indices of p's anagrams in s.
You may return the answer in any order.

Example:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
*/

/*
Approach: Use sliding window, use two pointers left and right to represent the window.
Use a map to store the count of each character in the substring.
Use a counter to store the map size of values greater than 0.

Time complexity: O(n * m)
Space complexity: O(1)

Related Problems:
  minimum-window-substring
  longest-substring-without-repeating-characters
  substring-with-concatenation-of-all-words
  longest-substring-with-at-most-two-distinct-characters
  find-all-anagrams-in-a-string
Reference: https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/92007/sliding-window-algorithm-template-to-solve-all-the-leetcode-substring-search-problem/?envType=study-plan-v2&envId=top-100-liked
*/

function findAnagrams(s, p) {
  if (s.length < p.length) return [];
  const map = new Map();
  // store the count of each character in the substring
  for (let char of p) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  let counter = map.size;
  const res = [];
  let left = 0;
  let right = 0;
  while (right < s.length) {
    const char = s[right];
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) counter--;
    }
    while (counter === 0) {
      const charL = s[left];
      if (map.has(charL)) {
        map.set(charL, map.get(charL) + 1);
        if (map.get(charL) > 0) counter++;
      }
      if (right - left + 1 === p.length) {
        res.push(left);
      }
      left++;
    }
    right++;
  }
  return res;
}

// Test
console.log(findAnagrams('cbaebabacd', 'abc')); // [0, 6]
console.log(findAnagrams('aaaaaaa', 'aaa')); // [0, 1, 2, 3, 4]
