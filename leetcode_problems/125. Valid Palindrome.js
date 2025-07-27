/*
125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/*
Approach:
Use two pointers, left and right, to iterate through s from both sides, skip non-alphanumeric character.
compare left and right characters, if they are equal, move on; if not, return false.
Continue until left crosses right, then return true.

Time complexity: O(n)
Space complexity: O(1)
*/

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++;
    } else if (!isAlphanumeric(s[right])) {
      right--;
    } else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }

    // Approach 2: keep moving one side
    // while (!isAlphanumeric(s[left]) && left < right) {
    //   left++;
    // }
    // while (!isAlphanumeric(s[right]) && left < right) {
    //   right--;
    // }
    // if (s[left].toLowerCase() !== s[right].toLowerCase()) {
    //   return false;
    // }
    // left++;
    // right--;
  }
  return true;
}

// Test
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
