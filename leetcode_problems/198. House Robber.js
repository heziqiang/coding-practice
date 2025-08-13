/*
198. House Robber
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected 
and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Total amount you can rob = 2 + 9 + 1 = 12.

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 400
*/

/*
Use dynamic programming to find the optimal solution.
Let dp[i] represent the maximum amount obtainable starting from index i.
dp[i] = max(dp[i+1], nums[i] + dp[i+2]).
This means you can either rob the current house and move to i+2, or skip it and move to i+1.

Time complexity: O(2^n), similar to Fibonacci recursion
Space complexity: O(n), for recursion stack depth
*/

function robRecursive(nums) {
  const n = nums.length;
  const dp = (i) => {
    if (i >= n) return 0;
    return Math.max(dp(i + 1), nums[i] + dp(i + 2));
  };
  return dp(0);
}

/*
Approach:
Dynamic Programming Iteratively, optimize space complexity, use only two variables to store previous results.

Time complexity: O(n)
Space complexity: O(1)
*/
function rob(nums) {
  let prev = 0;
  let cur = 0;
  for (let num of nums) {
    [prev, cur] = [cur, Math.max(cur, num + prev)];
  }
  return cur;
}

// Test
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([1, 0, 0, 1, 0, 1])); // 3
console.log(rob([8])); // 8
console.log(
  rob([
    226, 174, 214, 16, 218, 48, 153, 131, 128, 17, 157, 142, 88, 43, 37, 157,
    43, 221, 191, 68, 206, 23, 225, 82, 54, 118, 111, 46, 80, 49, 245, 63, 25,
    194, 72, 80, 143, 55, 209, 18, 55, 122, 65, 66, 177, 101, 63, 201, 172, 130,
    103, 225, 142, 46, 86, 185, 62, 138, 212, 192, 125, 77, 223, 188, 99, 228,
    90, 25, 193, 211, 84, 239, 119, 234, 85, 83, 123, 120, 131, 203, 219, 10,
    82, 35, 120, 180, 249, 106, 37, 169, 225, 54, 103, 55, 166, 124,
  ])
); // 7102
