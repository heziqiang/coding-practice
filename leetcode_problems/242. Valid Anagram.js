/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example:
Input: s = "anagram", t = "nagaram"
Output: true

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

/*
Approach:
Use a map to store the frequency of each character in s.
Iterate through t: if the current character is in the map, decrement its count; if not, return false.
Finally, return true if the map is empty.
*/

function isAnagram(s, t) {
  const map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char)) {
      return false;
    }
    map.set(char, map.get(char) - 1);
    if (map.get(char) === 0) {
      map.delete(char);
    }
  }

  return map.size === 0;
}

// Test
console.log(isAnagram("abc", "bac")); // true
console.log(isAnagram("abc", "baca")); // false
console.log(isAnagram("rat", "car")); // false
