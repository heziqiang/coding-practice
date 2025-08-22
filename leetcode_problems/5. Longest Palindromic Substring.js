/*
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

Example:
Input: s = "babad"
Output: "bab"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
/*

/*
Approach:
The center of a palindrome can be one or two letters.
Iterate through s, and for each center, expand outward while the characters match.
Keep track of the longest substring found.

Time complexity: O(n ^ 2)
Space complexity: O(1)
*/

function longestPalindrome(s) {
  let longestStr = "";
  function expand(str, left, right) {
    while (left >= 0 && right < s.length && str[left] === str[right]) {
      if (right - left + 1 > longestStr.length) {
        longestStr = str.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(s, i, i);
    expand(s, i, i + 1);
  }
  return longestStr;
}

// Test
console.log(longestPalindrome("babad")); // 'bab'
console.log(longestPalindrome("abb")); // 'bb'
