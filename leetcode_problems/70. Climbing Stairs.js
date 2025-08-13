/*
70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example:
Input: n = 3
Output: 3 (1-2-3, 1-3, 2-3)

Constraints:
1 <= n <= 45
*/

/*
Approach:
Dynamic Programming Recursively, dp[i] = dp[i - 1] + dp[i - 2]

Time complexity: O(2^n), similar to Fibonacci recursion
Space complexity: O(n), for recursion stack depth
*/

function climbStairsRecursive(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

/*
Approach:
Dynamic Programming Iteratively, optimize space complexity, use only two variables to store previous results.

Time complexity: O(n)
Space complexity: O(1)
*/
function climbStairs(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let a = 1;
  let b = 2;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

// Test
console.log(climbStairs2(96)); // 3
// console.log(climbStairs(3)); // 3
// console.log(climbStairs(4)); // 5
// console.log(climbStairs(5)); // 8

// console.log(climbStairs2(3)); // 3
// console.log(climbStairs2(4)); // 5
// console.log(climbStairs2(5)); // 8
