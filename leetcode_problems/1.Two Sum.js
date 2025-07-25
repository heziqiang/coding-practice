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
Brute force approach:
Use nested loops, for each item of nums, iterate through the right subarray,
check if their sum equal the target.

Time complexity: O(n^2)
Space complexity: O(1)
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
Approach:
Turn nums into a map, where the key is the number and the value is its index.
Iterate through nums, for each number, check if the map has target-number,
if found, return the pair of indices.
Finally, return [] if not found.

Optimized Approach (one-pass)
Iterate through nums while building the cache map at the same time.

Time complexity: O(n)
Space complexity: O(n)
*/
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target - num), i];
    }
    map.set(num, i);
  }
  return [];
}

// Test
console.log(twoSum([1, 2, 0, 7], 9)); // [1, 3]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([4, 5], 100)); // []
