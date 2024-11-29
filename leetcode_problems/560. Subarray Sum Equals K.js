/*
560. Subarray Sum Equals K
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example:
Input: nums = [1,2,3], k = 3
Output: 2
*/

/*
Approach: Use a map to store the sum from the start to the current index, and its frequency.
go through the array, for each number x, check if sum == k or sum - k exists in the sum map.

Time complexity: O(n)
Space complexity: O(n)
*/

function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);
  let sum = 0;
  let count = 0;
  for (let x of nums) {
    sum += x;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}

// Test
console.log(subarraySum([1, 2, 3], 3)); // 2
console.log(subarraySum([1], 0)); // 0
console.log(subarraySum([100, 0, 0, 1, 2, 0, 3], 3)); // 8
