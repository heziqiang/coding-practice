/*
392. Is Subsequence
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string
by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example:
Input: s = "abc", t = "ahbgdc"
Output: true

Constraints:
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/

/*
Approach:
Use two pointers: p1 for s and p2 for t.
Traverse t, if p2's character matches p1's, move p1 forward.
If p1 reaches the end of s, then s is a subsequence of t.
*/

function isSubsequence(s, t) {
  let p1 = 0;
  let p2 = 0;
  while (p2 < t.length) {
    if (t[p2] === s[p1]) {
      p1++;
    }
    p2++;
  }
  return p1 === s.length;
}

// Test
console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
console.log(isSubsequence('', 'abc')); // true
