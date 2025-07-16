/*
1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

Example:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"

Constraints:
1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

/*
Approach: Use an empty string to store the merged result. Traverse both word at the same time, append the current character to the merged result.
Continue until the longer word reach the end.
Time complexity: O(n)
Space complexity: O(n)
*/
function mergeAlternately(word1, word2) {
  let merged = "";
  const maxLen = Math.max(word1.length, word2.length);
  for (let i = 0; i < maxLen; i++) {
    if (i < word1.length) merged += word1[i];
    if (i < word2.length) merged += word2[i];
  }
  return merged;
}

// Test
console.log(mergeAlternately("abc", "pqr")); // apbqcr
console.log(mergeAlternately("ab", "pqrs")); // apbqrs
