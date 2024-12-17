/*
17. Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

/*
Approach: Use DFS to traverse the digits. For each digit, explore its children letters and record the paths.
When the path's length equals the digits' length, we have found one solution.

Time complexity: O(n)
Space complexity: O(n)
*/

function letterCombinations(digits) {
  if (!digits.length) return [];
  const res = [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  function dfs(nums, index, path) {
    if (index >= nums.length) {
      res.push(path);
      return;
    }
    const str = map[nums[index]];
    for (let char of str) {
      dfs(nums, index + 1, path + char);
    }
  }
  dfs(digits, 0, '');
  return res;
}

// Test
console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('3')); // ['d', 'e', 'f']
console.log(letterCombinations('')); // []
