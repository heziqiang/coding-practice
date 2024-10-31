/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

/*
Approach 1: Brute force approach, use nested loops to check every pair of elements
if their sum equals the target.
Time complexity: O(n^2)
*/
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

/*
Approach 2: Use a hash table to cache elements, only iterate through the array once,
check if the target minus the current element exist in the hash table.
Time complexity: O(n)
Space complexity: O(n)
*/
function twoSum(nums, target) {
  const visited = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (visited.has(target - current)) {
      return [visited.get(target - current), i];
    }
    visited.set(current, i);
  }
  return [];
}

// Test
console.log(twoSum([1, 2, 0, 7], 9)); // [1, 3]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([4, 5], 100)); // []
