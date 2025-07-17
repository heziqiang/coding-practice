/*
1071. Greatest Common Divisor of Strings
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
(i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Constraints:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

/*
Approach:
Use the shorter of str1 and str2 as the base.
Check if both strings consist of repeats of base.
If not, trim the last character of base and try again.

Time complexity: O(n)
Space complexity: O(n)
*/

function gcdOfStrings(str1, str2) {
  function isValid(divisor) {
    if (
      str1.length % divisor.length !== 0 ||
      str2.length % divisor.length !== 0
    )
      return false;
    return (
      str1.replaceAll(divisor, "") === "" && str2.replaceAll(divisor, "") === ""
    );
  }

  let base = str1.length < str2.length ? str1 : str2;
  while (base.length > 0 && !isValid(base)) {
    base = base.slice(0, base.length - 1);
  }
  return base;
}

// Test
console.log(gcdOfStrings("ABCABC", "ABC")); // ABC
console.log(gcdOfStrings("ABABAB", "ABAB")); // AB
console.log(gcdOfStrings("LEET", "CODE")); // ""
