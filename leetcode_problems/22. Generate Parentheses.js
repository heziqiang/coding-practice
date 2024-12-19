/*
22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*/

/*
Approach: Use two integers, left and right, to record the current string '(' and ')'.
If they are both n, it is a solution.
If left < n, add left first. If right < left, add right.

Time complexity: O(2^n)
Space complexity: O(n) for recursion stack depth
*/

function generateParenthesis(n) {
  if (n <= 0) return [];
  const res = [];
  function dfs(left, right, path) {
    if (left === n && right === n) {
      res.push(path);
      return;
    }
    if (left < n) {
      dfs(left + 1, right, path + '(');
    }
    if (right < left) {
      dfs(left, right + 1, path + ')');
    }
  }
  dfs(0, 0, '');
  return res;
}

// Test
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(2)); // ["(())","()()"]
console.log(generateParenthesis(0)); // []
