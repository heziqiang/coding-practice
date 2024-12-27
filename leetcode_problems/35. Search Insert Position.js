/*
35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example:
Input: nums = [1,3,5,6], target = 2
Output: 1
*/

/*
Approach: Use binary search to find the index of min bigger item.

Time complexity: O(log(n))
Space complexity: O(1)
*/

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

// Test
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 4, 5, 6], 4)); // 2
console.log(searchInsert([], 1)); // 0
