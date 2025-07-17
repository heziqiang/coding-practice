/*
151. Reverse Words in a String
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words.
The returned string should only have a single space separating the words. Do not include any extra spaces.

Example:
Input: s = "a good   example "
Output: "example good a"

Constraints:
1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
*/

/*
Approach1:
Use JS API s.trim().split(' ').reverse().join(' ')

Time complexity: O(n)
Space complexity: O(n)
*/

/*
Approach2:
Traverse the s reversely, skip the spaces, and append the word to the result.

Time complexity: O(n)
Space complexity: O(1)
*/

function reverseWords(s) {
  let result = "";
  let word = "";
  let i = s.length - 1;
  while (i >= 0) {
    while (s[i] !== " ") {
      word = s[i] + word;
      i--;
    }

    if (word) {
      if (result.length) result += " ";
      result += word;
      word = "";
    }
    i--;
  }
  if (word) {
    result.push(word);
  }
  return result.join(" ");
}

// Test
// console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
// console.log(reverseWords("a good   example ")); // "example good a"
