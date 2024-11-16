/*
283. Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

/*
Approach: Use Two Points, left and right, left is the tail of non-zero elements, right is the head of unhandled elements.
Move right to the next non-zero elements, swap it with left, then move left.

Time complexity: O(n)
Space complexity: O(1)
*/

function moveZeroes(nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
}

// Test
console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([2, 1])); // [2, 1]