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
Approach:
Use JS built-in methods.

Time complexity: O(n)
Space complexity: O(n)
*/

function reverseWordsJS(s) {
  return s.trim().split(" ").reverse().join(" ");
}

/*
Approach:
Use two pointers, left and right, to mark word boundaries, iterate through s in reverse,
When left find a word, move right = left, move left until it's outside the word, add the current word to the result.
Finally, return the result.

Time complexity: O(n)
Space complexity: O(1)
*/

function reverseWords(s) {
  let result = "";
  let left = s.length - 1;
  let right = s.length - 1;
  while (left >= 0) {
    // skip spaces
    if (s[left] === " ") {
      left--;
      continue;
    }

    // meet a word
    right = left;
    while (left >= 0 && s[left] !== " ") {
      left--;
    }
    const word = s.slice(left + 1, right + 1);
    if (result) result += " ";
    result += word;
  }
  return result;
}

// Test
console.log(reverseWords("blue is sky the")); // "the sky is blue"
console.log(reverseWords("EPY2giL")); // "EPY2giL"
console.log(reverseWords("  world  hello ")); // "hello world"
console.log(reverseWords("example good a ")); // "a goog example"
